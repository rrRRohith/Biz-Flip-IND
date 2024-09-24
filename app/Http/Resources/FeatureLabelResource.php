<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class FeatureLabelResource extends JsonResource
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
            'id'            => $this->id,
            'name'          => $this->name,
            'slug'          => $this->slug,
            'color'          => $this->color,
            'priority'      => $this->priority,
            'status'        => $this->status,
            'icon'          => $this->icon  ? image_url($this->icon) :asset('/assets/admin/images/noimage.webp'),
            'created_at'    => (new Carbon($this->created_at)),
            'updated_at'    => (new Carbon($this->updated_at)),
        ];
    }
}