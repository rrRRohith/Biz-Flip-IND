<?php
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

function _uploadImage($request, $existing = '', $path = '') {

    if ($request->has($existing)) {
      
        $fileVal = $request->$existing;
      
        if ($fileVal !== null) {
            $fileName = Str::random(30) . '-' . $fileVal->getClientOriginalName();

            $filePath =  $path . '/' . $fileName;

            Storage::put($filePath, file_get_contents($fileVal));
       
            return $filePath;
         
        }

    }
    else{
        return null;
    }
   
}



function _deleteImage($path = '',$existing = '') {
  
     if($existing != ''){
        @unlink($path.'/'.$existing);
     }
 }