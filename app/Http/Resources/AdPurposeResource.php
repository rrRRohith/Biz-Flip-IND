<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AdPurposeResource extends JsonResource
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
            'title'          => $this->title,
            'slug'          => $this->slug,
            'position'      => $this->position,
            'status'        => $this->status,
            'icon'          => $this->icon,
            'created_at'    => (new Carbon($this->created_at)),
            'updated_at'    => (new Carbon($this->updated_at)),
          
        ];
    }
}