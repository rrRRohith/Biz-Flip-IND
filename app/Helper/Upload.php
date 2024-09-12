<?php

namespace App\Helper;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use Intervention\Image\ImageManager;
use Illuminate\Support\Facades\Storage;

trait Upload{
    protected $quality = 80;
	protected $encode = 'webp';
    protected $maxWidth = 1920;
    protected $maxHeight = 1920;
    /**
     * Upload multiple files
     * 
     * @param array $param
     * @param string $path
     */
    public function uploadFiles(array $param, string $path, string $ratio = null){
        $uploaded = [];
        foreach($param ?? [] as $file){
            try { 
                $uploaded[] = $this->pushFIle($file, $path, ratio : $ratio);
            } catch (\Exception $e) {}
        }
        return $uploaded;
    }

    public function uploadFile($file, string $path, int $maxWidth = null, int $maxHeight = null, string $ratio = null){
        try {
            return $this->pushFIle($file, $path, $maxWidth, $maxHeight, $ratio);
        } catch (\Exception $e) {}
        return null;
    }

    private function pushFile($file, string $path, int $maxWidth = null, int $maxHeight = null, string $ratio = null){
        $fileName = Str::random(20) . '.' . $this->encode;
        $filePath = $path.'/'.$fileName;
        $image = Image::make($file)->fit($maxWidth ? : $this->maxWidth, $maxHeight ? : $this->maxHeight, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        if($ratio){
            $this->cropToAspectRatio($image, $ratio);
        }

        $image->encode($this->encode, $this->quality);
        Storage::disk(env('UPLOAD_CHANNEL'))->put($filePath, (string) $image);
        return $filePath;
    }

    private function cropToAspectRatio(&$image, string $ratio){
        // Parse the aspect ratio (e.g., "16:9" becomes [16, 9])
        list($aspectWidth, $aspectHeight) = explode(':', $ratio);
        $aspectWidth = (int)$aspectWidth;
        $aspectHeight = (int)$aspectHeight;

        // Get the current dimensions of the image
        $currentWidth = $image->width();
        $currentHeight = $image->height();

        // Calculate the target width and height based on the aspect ratio
        $targetAspectRatio = $aspectWidth / $aspectHeight;

        if (($currentWidth / $currentHeight) > $targetAspectRatio) {
            // Image is wider than target aspect ratio, crop width
            $newWidth = (int)($currentHeight * $targetAspectRatio);
            $newHeight = $currentHeight;
        } else {
            // Image is taller than target aspect ratio, crop height
            $newWidth = $currentWidth;
            $newHeight = (int)($currentWidth / $targetAspectRatio);
        }

        // Center-crop the image to the target aspect ratio
        $image->crop($newWidth, $newHeight);
    }
}