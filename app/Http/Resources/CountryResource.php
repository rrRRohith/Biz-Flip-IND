<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CountryResource extends JsonResource
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
            'code'          => $this->code,
            'name'          => $this->name,
            'slug'          => $this->slug,
            'position'      => $this->position,
            'status'        => $this->status == 1 ? 'Published' : 'Draft',
            'image'          => null,
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
          
        ];
    }
}