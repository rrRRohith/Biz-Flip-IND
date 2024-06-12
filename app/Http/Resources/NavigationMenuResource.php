<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class NavigationMenuResource extends JsonResource
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
            'id'                => $this->id,
            'title'             => $this->title,
            'slug'              => $this->slug,
            'parent_id'         => $this->parent_id,
            'link'              => $this->position,
            'position'          => $this->position,
            'custom_link'       => $this->custom_link,
            'status'            => $this->status == 1 ? 'Active' : 'Inactive',
            'created_at'        => $this->created_at,
            'updated_at'        => $this->updated_at,
        ];
    }
}