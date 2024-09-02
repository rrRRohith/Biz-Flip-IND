<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Backup\Tasks\Backup\BackupJobFactory;
use Illuminate\Support\Facades\Storage;
use ZipArchive;
use Illuminate\Support\Facades\Log;

class BackupToGoogleDrive extends Command
{
    protected $signature = 'backup:google';
    protected $description = 'Backup database and folder to Google Drive';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        try {
            // Path to the images folder inside the storage directory
            $folderPath = storage_path('app/images');

            // Add the current date and time to the backup file name
            $timestamp = now()->format('Y-m-d-H-i-s');
            $zipName = env('APP_NAME') . "_images_backup_{$timestamp}.zip";

            // Destination path for the zip file
            $zipFile = storage_path('app/backups/' . $zipName);

            // Ensure the directory exists
            $backupDir = dirname($zipFile);
            if (!is_dir($backupDir)) {
                mkdir($backupDir, 0777, true); // Create directory if it does not exist
            }

            // Create a new ZipArchive instance
            $zip = new \ZipArchive();

            // Open the zip file to add files to it
            if ($zip->open($zipFile, \ZipArchive::CREATE | \ZipArchive::OVERWRITE) === TRUE) {

                // Add files from the images folder to the zip file
                $files = new \RecursiveIteratorIterator(
                    new \RecursiveDirectoryIterator($folderPath),
                    \RecursiveIteratorIterator::LEAVES_ONLY
                );

                foreach ($files as $name => $file) {
                    // Skip directories (they will be added automatically)
                    if (!$file->isDir()) {
                        $filePath = $file->getRealPath(); // Full path of the file

                        // Get relative path for the zip file
                        $relativePath = substr($filePath, strlen($folderPath) + 1);

                        // Add file to the zip
                        $zip->addFile($filePath, $relativePath);
                    }
                }

                // Close the zip file
                $zip->close();

                // Upload to Google Drive
                if (Storage::disk('google')->put(env('APP_NAME') . '/images/' . $zipName, fopen($zipFile, 'r'))) {
                    Log::info('Backup uploaded to Google Drive successfully.');

                    // Delete the local backup zip file after successful upload
                    if (file_exists($zipFile)) {
                        unlink($zipFile);
                        Log::info('Local backup file deleted successfully.');
                    } else {
                        Log::warning('Local backup file not found for deletion.');
                    }

                    // Manage the number of backups in Google Drive
                    $this->manageGoogleDriveBackups();
                } else {
                    Log::error('Failed to upload backup to Google Drive.');
                }
            } else {
                Log::error('Failed to create zip file.');
            }
        } catch (\Exception $e) {
            Log::error('Failed to load Google Storage Driver: ' . $e->getMessage());
        }
    }

    /**
     * Keep only the latest 3 backup files in Google Drive
     */
    protected function manageGoogleDriveBackups()
    {
        try {
            // List files in the Google Drive directory
            $files = Storage::disk('google')->files(env('APP_NAME'));

            // Separate files into images and other backups
            $imageFiles = [];
            $otherFiles = [];

            foreach ($files as $file) {
                if (str_contains($file, 'images/')) {
                    $imageFiles[] = $file;
                } else {
                    $otherFiles[] = $file;
                }
            }

            // Function to sort files by last modified time
            $sortByLastModified = function ($files) {
                usort($files, function ($a, $b) {
                    return Storage::disk('google')->lastModified($b) - Storage::disk('google')->lastModified($a);
                });
                return $files;
            };

            // Sort and manage image files
            $imageFiles = $sortByLastModified($imageFiles);
            if (count($imageFiles) > 3) {
                $filesToDelete = array_slice($imageFiles, 3);
                foreach ($filesToDelete as $file) {
                    Storage::disk('google')->delete($file);
                    Log::info("Deleted old image backup file: $file from Google Drive.");
                }
            }

            // Sort and manage other files
            $otherFiles = $sortByLastModified($otherFiles);
            if (count($otherFiles) > 3) {
                $filesToDelete = array_slice($otherFiles, 3);
                foreach ($filesToDelete as $file) {
                    Storage::disk('google')->delete($file);
                    Log::info("Deleted old backup file: $file from Google Drive.");
                }
            }
        } catch (\Exception $e) {
            Log::error('Failed to manage Google Drive backups: ' . $e->getMessage());
        }
    }
}
