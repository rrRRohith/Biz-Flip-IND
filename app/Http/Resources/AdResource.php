<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AdResource extends JsonResource
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
            'address' => $this->address,
            'city' => $this->city,
            'price' => $this->price,
            'status' => $this->status,
            'date_text' => \Carbon\Carbon::parse($this->created_at)->format('h:i a, d M'),
            'description' => $this->description,
            'property_type' => $this->property_type,
            'ad_purpose' => $this->ad_purpose,
            // category: '',
            // facilities: [],
            // features: [],
            'address' => $this->address,
            'city' => $this->city,
            'postalcode' => $this->postalcode,
            'province' => $this->province,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'map_link' => $this->map_link,
            'has_negotiable' => $this->has_negotiable,
            'has_commission' => $this->has_commission,
            'commission' => $this->commission,
            'additional_info' => $this->additional_informations()->selectRaw("id, info, value")->get()->toArray(),
            'category' => [
                'id' => $this->category->id ?? null,
                'label' => $this->category->name ?? null,
            ],
            'facilities' => $this->facilities()->selectRaw("facilities.id as value, name as label")->get()->toArray(),
            'features' => $this->features()->selectRaw("features.id as value, name as label")->get()->toArray(),
            'facilities_ids' => $this->facilities->pluck('id'),
            'features_ids' => $this->features->pluck('id'),
            'images' => $this->images->pluck('image')->toArray(),
            'main_picture' => $this->images->pluck('image')->first() && !(str_starts_with($this->images->pluck('image')->first(), 'http')) ?
                                 asset('images/'.$this->images->pluck('image')->first()) : '/assets/admin/images/noimage.webp',
            'seo_title' => $this->seo_title,
            'seo_keywords' => $this->seo_keywords,
            'seo_description' => $this->seo_description,
            'seller' => $this->seller,
            'space' => $this->space,
            'total_leads' => $this->leads()->count(),
            'total_views' => $this->views()->count(),
        ];
    }
}