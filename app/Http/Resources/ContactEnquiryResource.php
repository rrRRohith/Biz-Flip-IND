<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ContactEnquiryResource extends JsonResource
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
            'firstname'     => $this->firstname,	
            'lastname'      => $this->lastname,	
            'email'         => $this->email,	
            'phone'         => $this->phone,	
            'company'       => $this->company,	
            'ip_address'    => $this->ip_address,	
            'time_to_available'    => $this->time_to_available,	
            'message'       => $this->message,	
            'subject'       => $this->subject,	
            'status'        => $this->status == 1 ? 'Attended' : 'Unattended',
            'created_at'    => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'    => (new Carbon($this->updated_at))->format('Y-m-d'),
          
        ];
    }
}