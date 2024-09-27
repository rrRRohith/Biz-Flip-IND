<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use App\Models\Banner;

class ContentPageResource extends JsonResource
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
            'id'             => $this->id,
            'title'          => $this->title,	
            'slug'           => $this->slug,
            'content'        => $this->content,	
            'data'           => json_decode($this->data),	
            'seo_title'      => $this->seo_title,	
            'seo_keywords'   => $this->seo_keywords,	
            'seo_description'=> $this->seo_description,	
            'status'         => $this->status,
            'image'          => Banner::where('id',$this->banner_id)->pluck('title','id')->first(), 
            'banner_id'      => $this->banner_id,
            'created_at'     => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'     => (new Carbon($this->updated_at))->format('h:i a, d M'),
        ];
    }
}