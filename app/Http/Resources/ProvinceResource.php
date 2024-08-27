<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProvinceResource extends JsonResource
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
            'code'          => $this->code,
            'slug'          => $this->slug,
            'country'       => $this->country_id,
            'country_name'  => $this->country->name ?? null,
            'position'      => $this->position,
            'status'        => $this->status == 1 ? 'enabled' : 'Draft',
            'image'         => $this->image  ?
                                asset('images/'.$this->image) : '/assets/admin/images/noimage.webp',
            'ads'           => $this->ads,
            'leads'         => $this->leads,
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
          
        ];
    }
}

