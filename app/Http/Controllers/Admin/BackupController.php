<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;
use Exception;
use App\Http\Resources\BannerResource;
use ZipArchive;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\Banner\StoreBannerRequest;
use App\Http\Requests\Banner\UpdateBannerRequest;
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
    
            if ($value == $name.'/'.$name.'_images_backup.zip') {
                $newName = str_replace($name.'/'.$name.'_', '', $value);
                $images[$key]['originalName'] = $originalName;
                $images[$key]['name'] = $newName;
    
            } else {
                $newName = str_replace($name.'/', '', $value);
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
    

    public function updateDatabse(Request $request){
        dd($request->all());
    }
    
    public function updateImages(Request $request){
        dd($request->all());
    }


}