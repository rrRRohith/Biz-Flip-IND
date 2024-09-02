<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Schema;

use Illuminate\Http\Request;
use Exception;
use ZipArchive;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $name = str_replace('_', '-', env('APP_NAME'));
        $new_arr = Storage::disk('google')->allFiles($name);

        $dbs = [];
        $images = [];

        foreach (array_reverse($new_arr) as $key => $value) {
            $originalName = $value;

            if ($value == $name . '/' . $name . '_images_backup.zip') {
                $newName = str_replace($name . '/' . $name . '_', '', $value);
                $images[$key]['originalName'] = $originalName;
                $images[$key]['name'] = $newName;
            } else {
                $newName = str_replace($name . '/', '', $value);
                $dbs[$key]['originalName'] = $originalName;
                $dbs[$key]['name'] = $newName;
            }
        }

        // Ensure both are arrays
        return Inertia::render('Admin/Backup/Index', [
            'files' => array_values($dbs),
            'images' => array_values($images)
        ]);
    }


    public function updateDatabase(Request $request)
    {
        $name = str_replace('_', '-', env('APP_NAME'));
        try {
            $db_name = $request->db_name;
            $zipFile = storage_path('app/backups/backup.zip');

            if (!is_dir(dirname($zipFile))) {
                mkdir(dirname($zipFile), 0755, true);
            }

            $fileContent = Storage::disk('google')->get($db_name);
            file_put_contents($zipFile, $fileContent);

            $extractPath = storage_path('app/backups/extracted');
            $zip = new ZipArchive;

            if ($zip->open($zipFile) === TRUE) {
                $zip->extractTo($extractPath);
                $zip->close();

                $files = File::allFiles($extractPath);
                if (empty($files) || pathinfo($files[0]->getFilename(), PATHINFO_EXTENSION) !== 'sql') {
                    return response()->json(['success' => false, 'message' => 'No SQL file found in the backup'], 400);
                }

                // Manually wipe all tables except the sessions table
                $this->wipeDatabaseExcept(['sessions']);

                // Read and filter the SQL file to exclude the sessions table
                $sqlContent = file_get_contents($files[0]);
                $filteredSqlContent = $this->filterSqlContent($sqlContent, ['sessions']);

                DB::unprepared($filteredSqlContent);
                File::deleteDirectory($extractPath);

                return response()->json(['success' => true, 'message' => 'Database restored successfully']);
            } else {
                return response()->json(['success' => false, 'message' => 'Failed to open the backup zip file'], 500);
            }
        } catch (Exception $e) {
            Log::error('Error restoring database: ' . $e->getMessage());

            return response()->json(['success' => false, 'message' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }


    protected function wipeDatabaseExcept(array $excludeTables = [])
    {
        // Disable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');

        $tables = DB::select('SHOW TABLES');
        $dbName = 'Tables_in_' . env('DB_DATABASE');

        foreach ($tables as $table) {
            $tableName = $table->$dbName;

            if (!in_array($tableName, $excludeTables)) {
                DB::statement('DROP TABLE IF EXISTS ' . $tableName);
            }
        }

        // Re-enable foreign key checks
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }

    /**
     * Filters the SQL content to exclude specific tables.
     */
    protected function filterSqlContent($sqlContent, array $excludeTables)
    {
        $lines = explode("\n", $sqlContent);
        $filteredLines = [];

        foreach ($lines as $line) {
            $skip = false;

            foreach ($excludeTables as $table) {
                if (
                    stripos($line, "DROP TABLE IF EXISTS `$table`") !== false ||
                    stripos($line, "CREATE TABLE `$table`") !== false ||
                    stripos($line, "INSERT INTO `$table`") !== false
                ) {
                    $skip = true;
                    break;
                }
            }

            if (!$skip) {
                $filteredLines[] = $line;
            }
        }

        return implode("\n", $filteredLines);
    }



    public function updateImages(Request $request)
    {
        $name = str_replace('_', '-', env('APP_NAME'));
        try {
            $image_name = $request->image_name;
            $zipFile = storage_path('app/backups/backupImages.zip');

            // Ensure the backup directory exists
            if (!is_dir(dirname($zipFile))) {
                mkdir(dirname($zipFile), 0777, true);
            }

            // Download the image zip file from Google disk
            $fileContent = Storage::disk('google')->get($image_name);
            file_put_contents($zipFile, $fileContent);

            $extractPath = storage_path('app/images');

            $zip = new ZipArchive;

            if ($zip->open($zipFile) === TRUE) {
                // Extract the zip file to the temporary directory
                $zip->extractTo($extractPath);
                $zip->close();


                // // Clean up: delete the temporary extraction directory
                if (file_exists($zipFile)) {
                    unlink($zipFile);
                }

                return response()->json(['success' => true, 'message' => 'Images updated successfully']);
            } else {
                return response()->json(['success' => false, 'message' => 'Failed to open the backup zip file'], 500);
            }
        } catch (Exception $e) {
            Log::error('Error updating images: ' . $e->getMessage());
            return response()->json(['success' => false, 'message' => 'An error occurred: ' . $e->getMessage()], 500);
        }
    }


    public function download(Request $request)
    {
        $image_name = $request->image_name;

        // Define the temporary location for the downloaded file
        $zipFile = storage_path('app/backups/backupDownload.zip');

        // Download the file from Google Drive to local storage
        $fileContent = Storage::disk('google')->get($image_name);
        file_put_contents($zipFile, $fileContent);

        // Check if the file exists in the local storage
        if (Storage::disk('local')->exists('backups/backupDownload.zip')) {
            // Return the file as a downloadable stream response
            return response()->stream(function () use ($zipFile) {
                $stream = fopen($zipFile, 'r');
                fpassthru($stream);
                fclose($stream);

                // Delete the file after streaming
                if (file_exists($zipFile)) {
                    unlink($zipFile);
                }
            }, 200, [
                "Content-Type" => mime_content_type($zipFile),
                "Content-Length" => filesize($zipFile),
                "Content-Disposition" => "attachment; filename=\"" . basename($zipFile) . "\"",
            ]);
        } else {
            abort(404, "The backup file doesn't exist.");
        }
    }
}
