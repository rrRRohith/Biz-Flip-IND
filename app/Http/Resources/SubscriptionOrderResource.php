<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class SubscriptionOrderResource extends JsonResource
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
            'invoice_no'    => $this->invoice_no,
            'seller_id'     => $this->seller_id,
            'seller'        => $this->seller,
            'subscription_plan_id' => $this->subscription_plan_id,
            'name'          => $this->name,
            'description'   => $this->description,
            'features'      => $this->features,
            'price'         => $this->price,
            'ads'           => $this->ads,
            'duration'      => $this->duration,
            'expires_at'    => (new Carbon($this->expires_at))->format('h:i a, d M'),
            'payment_ref'   => $this->payment_ref,
            'payment_id'    => $this->payment_id,
            'payment_method' => $this->payment_method,
            'created_at'    => (new Carbon($this->created_at))->format('h:i a, d M'),
            'updated_at'    => (new Carbon($this->updated_at))->format('h:i a, d M'),
        ];
    }
}
