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
            'splash_screen'         => $this->splash_screen ?? '' && !(str_starts_with($this->splash_screen ?? '', 'http')) ?
                                        asset('images/'.$this->splash_screen ?? '') : $this->splash_screen ?? '/assets/admin/images/noimage.webp',
            'app_background'        =>  $this->app_background ?? '' && !(str_starts_with($this->app_background ?? '', 'http')) ?
                                        asset('images/'.$this->app_background ?? '') : $this->app_background ?? '/assets/admin/images/noimage.webp',
            'apiKey'	            => $this->apiKey ?? '',
            'authDomain'	        => $this->authDomain ?? '',
            'databaseURL'	        => $this->databaseURL ?? '',
            'projectId'	            => $this->projectId ?? '',
            'storageBucket'	        => $this->storageBucket ?? '',
            'messagingSenderId'	    => $this->messagingSenderId ?? '',
            'appId'	                => $this->appId ?? '',
            'measurementId'	        => $this->measurementId ?? '',
            'id'                    => $this->id ?? '',
            'created_at'            => (new Carbon($this->created_at ?? ''))->format('h:i a, d M'),
            'updated_at'            => (new Carbon($this->updated_at ?? ''))->format('h:i a, d M'),
        ];
    }
}