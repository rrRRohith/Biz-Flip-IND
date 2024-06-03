<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StaffResource extends JsonResource
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
            'role_names' => $this->roles->pluck('name')->implode(', '),
            'role_name' => $this->role_name,
            'role_id' => $this->role_id,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'picture' => $this->picture_url,
            'date_text' => \Carbon\Carbon::parse($this->created_at)->format('h:i a, d M'),
        ];
    }
}
