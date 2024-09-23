<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserProfileResource extends JsonResource
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
            'address' => $this->address ?? null,
            'city' => $this->city ?? null,
            'postalcode' => $this->postalcode ?? null,
            'province' => $this->province ?? null,
            'firstname' => $this->firstname,
            'lastname'  => $this->lastname,
            'email'     => $this->email,
            'phone'     => $this->phone,
            'picture_url' => $this->picture_url,
            'picture'   => $this->picture ? image_url($this->picture) : asset('/assets/admin/images/noimage.webp'),
        ];
    }
}
