<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class InvoiceResource extends JsonResource
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
            'invoice_no' => $this->invoice_no,
            'name' => $this->name,
            'description' => $this->description,
            'features' => $this->features,
            'price' => $this->price,
            'tax_amount' => $this->tax_amount,
            'total_amount' => $this->total_amount,
            'ads' => $this->ads,
            'duration' => $this->duration,
            'expires_at' => $this->expires_at,
            'payment_ref' => $this->payment_ref,
            'payment_id' => $this->payment_id,
            'payment_method' => $this->payment_method,
            'created_at' => \Carbon\Carbon::parse($this->created_at)->format('d M y'),
            'updated_at' => $this->updated_at,
            'invoice_date' => \Carbon\Carbon::parse($this->created_at)->format('d M y'),
            'expire_date' => \Carbon\Carbon::parse($this->expires_at)->format('d M y'),
            'remaining_ads' => $this->remaining_ads,
            'seller' => [],
            'address' => [
                'firstname' => $this->billing_address->firstname ?? null,
                'lastname' => $this->billing_address->lastname ?? null,
                'email' => $this->billing_address->email ?? null,
                'phone' => $this->billing_address->phone ?? null,
                'address' => $this->billing_address->address ?? null,
                'postalcode' => $this->billing_address->postalcode ?? null,
                'city' => $this->billing_address->city ?? null,
                'province' => $this->billing_address->province ?? null,
                'country' => $this->billing_address->country ?? 'Canada', // Default value if null
            ],
            'seller' => new SellerInvoiceResource($this->seller),
        ];
    }
}



