<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
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
            'id' => $this->id,
            'subject' => $this->subject,
            'status' => $this->status,
            'priority' => $this->priority,
            'created_at' => $this->created_at,
            'date_text' => \Carbon\Carbon::parse($this->created_at)->format('h:i a, d M'),
            'user'      => $this->user,
            'messages'  => $this->messages,
        ];
    }
}
