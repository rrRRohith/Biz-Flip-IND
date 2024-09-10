<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatMessageResource extends JsonResource
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
            'message' => $this->message,
            'is_sender' => $this->user_id == auth()->user()->id,
            'sender_name' => $this->user->name,
            'created_at' => $this->created_at,
            'date_text' => \Carbon\Carbon::parse($this->created_at)->format('h:i a, d M'),
        ];
    }
}
