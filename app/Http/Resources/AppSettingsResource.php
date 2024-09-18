<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AppSettingsResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        									
        return [
            'splash_screen'=>  $this->splash_screen ? image_url($this->splash_screen) : asset('/assets/admin/images/noimage.webp'),
            'app_background'=>  $this->app_background ? image_url($this->app_background) : asset('/assets/admin/images/noimage.webp'),
            'apiKey'	            => $this->apiKey ?? '',
            'authDomain'	        => $this->authDomain ?? '',
            'databaseURL'	        => $this->databaseURL ?? '',
            'projectId'	            => $this->projectId ?? '',
            'storageBucket'	        => $this->storageBucket ?? '',
            'messagingSenderId'	    => $this->messagingSenderId ?? '',
            'appId'	                => $this->appId ?? '',
            'measurementId'	        => $this->measurementId ?? '',
            'id'                    => $this->id ?? '1',
            'created_at'            => (new Carbon($this->created_at ?? ''))->format('h:i a, d M'),
            'updated_at'            => (new Carbon($this->updated_at ?? ''))->format('h:i a, d M'),
        ];
    }
}