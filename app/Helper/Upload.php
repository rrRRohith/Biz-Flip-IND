<?php

namespace App\Helper;
use Illuminate\Support\Str;

trait Upload{
    /**
     * Upload multiple files
     * 
     * @param array $param
     * @param string $path
     */
    public function uploadFiles(array $param, string $path){
        $uploaded = [];
        foreach($param ?? [] as $file){
            try {
                $fileName = Str::random(20) . '.' . $file->getClientOriginalExtension();
                $filePath = $file->storeAs($path, $fileName, env('UPLOAD_CHANNEL'));
                $uploaded[] = $filePath;
            } catch (\Exception $e) {}
        }
        return $uploaded;
    }

    public function uploadFile($file, string $path){
        try {
            $fileName = Str::random(20) . '.' . $file->getClientOriginalExtension();
            $filePath = $file->storeAs($path, $fileName, env('UPLOAD_CHANNEL'));
            return $filePath;
        } catch (\Exception $e) {}
        return null;
    }
}