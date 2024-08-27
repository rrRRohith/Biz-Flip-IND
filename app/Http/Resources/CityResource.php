<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CityResource extends JsonResource
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
            'province_id'   => $this->province_id,
            'province'      => $this->province->name  ?? null,
            'country'       => $this->province->country->name ?? null,
            'country_id'       => $this->province->country->id ?? null,
            'position'      => $this->position,
            'status'        => $this->status == 1 ? 'Enabled' : 'Draft',
            'image'         => $this->image  ?
                asset('images/' . $this->image) : '/assets/admin/images/noimage.webp',
            'ads'           => $this->ads,
            'leads'         => $this->leads,
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),

        ];
    }
}
