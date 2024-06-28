<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class NewsSubscriberResource extends JsonResource
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
            'email_id'      => $this->email_id,
            'type_of_needed'=> $this->type_of_needed,
            'status_text'        => $this->status == 1 ? 'Subscribed' : 'Unsubscribed',
            'status'        => $this->status == 1,
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
        ];
    }
}