<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SellerSettingsResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request):array
    {
        return [
            'logo'=> $this->seller->logo_url ?? null,
            'company_name'=> $this->seller->company_name ?? null,
            'email'=> $this->seller->email ?? null,
            'phone'=> $this->seller->phone ?? null,
            'position'=> $this->seller->position ?? null,
            'employee'=> $this->seller->employee ?? null,
            'address'=> $this->seller->address ?? null,
            'firstname'=> $this->firstname ?? null,
            'lastname'=> $this->lastname ?? null,
            'short_description'=> $this->seller->short_description ?? null,
            'description'=> $this->seller->description ?? null,
            'website' => $this->seller->website ?? null,
            'days' => [
                'mon' => (bool) ($this->availability->mon ?? false),
                'tue' => (bool) ($this->availability->tue ?? false),
                'wed' => (bool) ($this->availability->wed ?? false),
                'thu' => (bool) ($this->availability->thu ?? false),
                'fri' => (bool) ($this->availability->fri ?? false),
                'sat' => (bool) ($this->availability->sat ?? false),
                'sun'  => (bool) ($this->availability->sun ?? false),
            ],'social_settings' => $this->socials->pluck('status', 'site')->toArray(),
            'social_links' => $this->socials->pluck('link', 'site')->toArray(),
        ];
    }
}
