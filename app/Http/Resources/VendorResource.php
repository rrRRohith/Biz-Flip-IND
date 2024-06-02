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
            'short_bio'     => $this->short_bio,	
            'description'   => $this->description,	
            'logo'          => $this->logo,	
            'company_name'  => $this->company_name,	
            'full_address'       => $this->address,	
            'map_code'      => $this->map_code,	
            'lat'           => $this->lat,	
            'long'          => $this->long,	
            'employee'   => $this->employee,	
            'website'       => $this->website,	
            'type_person'   => $this->type_person,	
            'feature_label' => $this->feature_label,	
            'business_type' => $this->business_type,	
            'public_profile_on' => $this->public_profile_on,	
            'facebook_link' => $this->facebook_link,	
            'instagram_link'=> $this->instagram_link,	
            'linkedin_link' => $this->linkedin_link,	
            'youtube_link'  => $this->youtube_link,	
            'twitter_link'  => $this->twitter_link,	
            'company_email' => $this->company_email,	
            'company_phone' => $this->company_phone,	
            'alt_email'     => $this->alt_email,
        	'alt_phone'     => $this->alt_phone,
            'mon'           => $this->mon,
            'tue'           => $this->tue,
            'wed'           => $this->wed,
            'thu'           => $this->thu,
            'fri'           => $this->fri,
            'sat'           => $this->sat,
            'sun'           => $this->sun,
            'firstname'     => $this->user->firstname,
            'lastname'      => $this->user->lastname,
            'email'         => $this->user->email,
            'phone'         => $this->user->phone,
            'address'       => $this->user->address,
            'postal_code'   => $this->user->postal_code,
            'city'          => $this->user->city,
            'province'      => $this->user->province,
            'country'       => $this->user->country,
            'picture'        => $this->picture && !(str_starts_with($this->picture, 'http')) ?
                                asset('images/'.$this->picture) : 'dummy.png',
            'created_at'    => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'    => (new Carbon($this->updated_at))->format('Y-m-d'),
          
        ];
    }
}