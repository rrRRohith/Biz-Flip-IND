<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class LeadEnquiryResource extends JsonResource
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
            'id'	        => $this->id,
            'firstname'	    => $this->firstname,
            'lastname'	    => $this->lastname	,
            'phone'	        => $this->phone,
            'email'	        => $this->email,
            'message'	    => $this->message,
            'ipaddess'	    => $this->ipaddess,
            'ad_id'	        => $this->ad_id,
            'available_any_day'	 => $this->available_any_day,
            'available_day'	=> $this->available_day,
            'available_any_time'	 => $this->available_any_time,
            'available_time'=> $this->available_time,
            'lead_attended'	=> $this->lead_attended,
            'ad'            => $this->ad ?? null,
            'seller'        => $this->seller ?? null,
            'status'        => $this->status == 1 ? 'Attended' : 'Unattended',
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
            'response' => $this->response,
            'chat_id' => $this->chat_id,
        ];
    }
}



