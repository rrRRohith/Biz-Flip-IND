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
            'seo_title'	            => $this->seo_title ?? null,
            'seo_description'	    => $this->seo_description ?? null,
            'seo_keywords'	        => $this->seo_keywords ?? null,
            'email_config_api_url'	=> $this->email_config_api_url ?? null,
            'email_config_api_key'	=> $this->email_config_api_key ?? null,
            'email_config_api_method'=> $this->email_config_api_method ?? null,
            'id'                    => $this->id ?? 1,
            'created_at'            => $this->created_at ?? null,
            'updated_at'            => $this->updated_at ?? null,
            'social_settings'       => $this->social_settings ?? null,
        ];
    }
}