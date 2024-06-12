<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CategoryResource extends JsonResource
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
            'position'      => $this->position,
            'status'        => $this->status == 1 ? 'Published' : 'Draft',
            'icon'          => $this->icon && !(str_starts_with($this->icon, 'http')) ?
                                asset('images/'.$this->icon) : '/assets/admin/images/noimage.webp',
            'created_at'    => $this->created_at,
            'updated_at'    => $this->updated_at,
          
        ];
    }
}