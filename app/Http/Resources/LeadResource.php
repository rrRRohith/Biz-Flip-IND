<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class LeadResource extends JsonResource
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
            'id'	 => $this->id,
            'firstname'	 => $this->firstname,
            'lastname'	 => $this->lastname	,
            'phone'	 => $this->phone,
            'email'	 => $this->email,
            'ad' => [
                'title' => $this->ad->title ?? 'Uknown ad',
                'city' => $this->ad->city ?? null,
            ],
            'message'	 => $this->message,
            'available_any_day'	 => $this->available_any_day,
            'available_day'	 => $this->available_day,
            'available_any_time'	 => $this->available_any_time,
            'available_time'	 => $this->available_time,
            'property'       => $this->property,
            'status'        => $this->status,
            'date_text' => \Carbon\Carbon::parse($this->created_at)->format('D d M, h:i a'),
            'attender' => $this->attender->name ?? null, 
            'response' => $this->response,
            'chat_id' => $this->chat_id,
        ];
    }
}



