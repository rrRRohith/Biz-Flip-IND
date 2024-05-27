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
            'splash_screen'	        => $this->splash_screen ?? '',
            'app_background'	    => $this->app_background  ?? '',
            'apiKey'	            => $this->apiKey ?? '',
            'authDomain'	        => $this->authDomain ?? '',
            'databaseURL'	        => $this->databaseURL ?? '',
            'projectId'	            => $this->projectId ?? '',
            'storageBucket'	        => $this->storageBucket ?? '',
            'messagingSenderId'	    => $this->messagingSenderId ?? '',
            'appId'	                => $this->appId ?? '',
            'measurementId'	        => $this->measurementId ?? '',
            'id'                    => $this->id ?? '',
            'created_at'            => (new Carbon($this->created_at ?? ''))->format('Y-m-d'),
            'updated_at'            => (new Carbon($this->updated_at ?? ''))->format('Y-m-d'),
        ];
    }
}