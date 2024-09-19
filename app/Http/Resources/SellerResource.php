<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class SellerResource extends JsonResource
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
        	'user_id'       => $this->id,	
            'short_description' => $this->seller->short_description,	
            'description'   => $this->seller->description,	
            'logo'          => $this->seller->logo,	
            'company_name'  => $this->seller->company_name,	
            'full_address'  => $this->seller->address,	
            'map_code'      => $this->seller->map_code,	
            'lat'           => $this->seller->lat,	
            'long'          => $this->seller->long,	
            'employee'      => $this->seller->employee,	
            'website'       => $this->seller->website,	
            'type_person'   => $this->seller->type_person,	
            'feature_label' => $this->seller->feature_label,	
            'business_type' => $this->seller->business_type,	
            'public_profile_on' => $this->seller->has_public_view,
            'company_email' => $this->seller->email,	
            'company_phone' => $this->seller->phone,	
            'alt_email'     => $this->seller->alt_email,
        	'alt_phone'     => $this->seller->alt_phone,
            'firstname'     => $this->firstname,
            'lastname'      => $this->lastname,
            'email'         => $this->email,
            'status'        => $this->status == 1 ? 'active' : ($this->status == -1 ? 'suspended' : 'pending'),
            'phone'         => $this->phone,
            'address'       => $this->address,
            'postalcode'    => $this->postalcode,
            'city'          => $this->city,
            'province'      => $this->province,
            'country'       => $this->country,
            'position'      => $this->seller->position,
            'designation'   => $this->designation ?? null,
            'picture'       => $this->picture ? image_url($this->picture) : asset('/assets/admin/images/noimage.webp'),
            'logo'          => $this->seller ? image_url($this->seller->logo) : asset('/assets/admin/images/noimage.webp'),
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
            'availableDays' => $this->seller->availableDays,
            'is_agent' => $this->seller()->exists(),
          
        ];
    }
}