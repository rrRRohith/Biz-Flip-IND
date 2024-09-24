<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use App\Models\FeatureLabel;

class VendorResource extends JsonResource
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
            'id'           => $this->id,
        	'user_id'       => $this->id ?? null,	
            'short_description' => $this->seller->short_description  ?? null,	
            'description'   => $this->seller->description  ?? null,	
            'logo'          => $this->seller->logo ?? null,	
            'company_name'  => $this->seller->company_name ?? null,		
            'full_address'  => $this->seller->address ?? null,	
            'map_code'      => $this->seller->map_code ?? null,	
            'lat'           => $this->seller->lat ?? null,	
            'long'          => $this->seller->long ?? null,	
            'employee'      => $this->seller->employee ?? null,	
            'website'       => $this->seller->website ?? null,		
            'type_person'   => $this->seller->type_person ?? null,	
            'feature_label' => $this->seller->feature_label ?? null,	
            'business_type' => $this->seller->business_type ?? null,	
            'public_profile_on' => $this->seller->has_public_view ?? null,	
            'company_email' => $this->seller->email ?? null,		
            'company_phone' => $this->seller->phone ?? null,	
            'feature_label_id' => $this->seller->feature_label_id ?? null,
            'featureLabelName' => isset($this->seller) && $this->seller->feature_label_id ? FeatureLabel::where('id',$this->seller->feature_label_id)->pluck('name')->first() : null,
            'alt_email'     => $this->seller->alt_email ?? null,	
        	'alt_phone'     => $this->seller->alt_phone ?? null,	
            'firstname'     => $this->firstname ?? null,	
            'lastname'      => $this->lastname ?? null,	
            'full_name'     => $this->firstname ?? null.' '.$this->lastname ?? null,
            'email'         => $this->email ?? null,	
            'status'        => $this->status ?? null,	
            'phone'         => $this->phone ?? null,	
            'address'       => $this->address ?? null,	
            'postalcode'    => $this->postalcode ?? null,	
            'city'          => $this->city ?? null,	
            'province'      => $this->province ?? null,	
            'country'       => $this->country ?? null,	
            'position'      => $this->seller->position ?? null,	
            'designation'   => $this->designation ?? null,
            //'picture'       => $this->picture ? image_url($this->picture) : asset('/assets/admin/images/noimage.webp'),
            'picture' => $this->picture_url,
            'logo'          => $this->seller ? image_url($this->seller->logo) : asset('/assets/admin/images/noimage.webp'),
            'created_at'    => $this->created_at ?? null,	
            'updated_at'    => $this->updated_at ?? null,	
            'availableDays' => $this->seller->availableDays ?? null,
            'is_agent'      => $this->seller()->exists(),
            'current_subscription' => $this->current_subscription,
            'last_login'    => $this->last_login ?? null,	
            'ads'           => $this->ads,
        ];
    }
}