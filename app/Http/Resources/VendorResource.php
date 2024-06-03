<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
        	'user_id'       => $this->user_id,	
            'short_description'     => $this->short_description,	
            'description'   => $this->description,	
            'logo'          => $this->logo,	
            'company_name'  => $this->company_name,	
            'full_address'  => $this->address,	
            'map_code'      => $this->map_code,	
            'lat'           => $this->lat,	
            'long'          => $this->long,	
            'employee'      => $this->employee,	
            'website'       => $this->website,	
            'type_person'   => $this->type_person,	
            'feature_label' => $this->feature_label,	
            'business_type' => $this->business_type,	
            'public_profile_on' => $this->has_public_view,
            'company_email' => $this->email,	
            'company_phone' => $this->phone,	
            'alt_email'     => $this->alt_email,
        	'alt_phone'     => $this->alt_phone,
            'firstname'     => $this->user->firstname,
            'lastname'      => $this->user->lastname,
            'email'         => $this->user->email,
            'status'        => $this->user->status == 1 ? 'active' : ($this->user->status == -1 ? 'suspended' : 'pending'),
            'phone'         => $this->user->phone,
            'address'       => $this->user->address,
            'postalcode'    => $this->user->postalcode,
            'city'          => $this->user->city,
            'province'      => $this->user->province,
            'country'       => $this->user->country,
            'designation'   => $this->user->designation ?? null,
            'picture'       => $this->user->picture && !(str_starts_with($this->user->picture, 'http')) ?
                                asset('images/'.$this->user->picture) : '/assets/admin/images/noimage.webp',
            'logo'          => $this->logo && !(str_starts_with($this->logo, 'http')) ?
                                asset('images/'.$this->logo) : '/assets/admin/images/noimage.webp',
            'created_at'    => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'    => (new Carbon($this->updated_at))->format('Y-m-d'),
          
        ];
    }
}