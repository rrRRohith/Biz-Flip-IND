<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
            'data'           => $this->data,	
            'seo_title'      => $this->seo_title,	
            'seo_keywords'   => $this->seo_keywords,	
            'seo_desscription'=> $this->seo_desscription,	
            'status'         => $this->status == 1 ? 'Published' : 'Draft',
            'breadcumb_image'=> $this->breadcumb_image && !(str_starts_with($this->breadcumb_image, 'http')) ?
                                asset('images/'.$this->breadcumb_image) : 'dummy.png',
            'created_at'     => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'     => (new Carbon($this->updated_at))->format('Y-m-d'),
        ];
    }
}