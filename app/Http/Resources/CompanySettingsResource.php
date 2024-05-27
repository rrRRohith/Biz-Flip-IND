<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CompanySettingsResource extends JsonResource
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
            'facebook_link'	        => $this->facebook_link,
            'instagram_link'	    => $this->instagram_link,
            'linkedin_link'	        => $this->linkedin_link,
            'youtube_link'	        => $this->youtube_link,
            'twitter_link'	        => $this->twitter_link,
            'seo_title'	            => $this->seo_title,
            'seo_description'	    => $this->seo_description,
            'seo_keywords'	        => $this->seo_keywords,
            'email_config_api_url'	=> $this->email_config_api_url,
            'email_config_api_key'	=> $this->email_config_api_key,
            'email_config_api_method'=> $this->email_config_api_method,
            'id'                    => $this->id,
            'created_at'            => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'            => (new Carbon($this->updated_at))->format('Y-m-d'),
          
        ];
    }
}