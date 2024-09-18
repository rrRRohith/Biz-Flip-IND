<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class MapAdResource extends JsonResource
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
            'id' => $this->id,
            'title' => $this->title,
            'address' => "{$this->address} {$this->city} {$this->postalcode} {$this->province}",
            'lat' => $this->lat,
            'lng' => $this->lng,
            'image' => $this->image_url,
            'link' => route('ads.show', $this),
        ];
    }
}