<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class SubscriptionPlanResource extends JsonResource
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
            'name'          => $this->name,
            'description'   => $this->description,
            'features'      => $this->features,
            'price'         => $this->price,
            'ads'           => $this->ads,
            'duration'      => $this->duration,
            'default'       => $this->default,
            'visibility'    => $this->visibility,
            'status_text'   => $this->status == 1 ? 'Activated' : 'Deactivated',
            'status'        => $this->status == 1,
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
        ];
    }
}