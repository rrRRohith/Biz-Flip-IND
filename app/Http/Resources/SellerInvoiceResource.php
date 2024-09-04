<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SellerInvoiceResource extends JsonResource
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
            'logo'=> $this->seller->logo_url ?? null,
            'company_name'=> $this->seller->company_name ?? null,
            'email'=> $this->seller->email ?? null,
            'phone'=> $this->seller->phone ?? null,
            'address' => $this->seller->address ?? null,
            'city' => $this->seller->city ?? null,
            'postalcode' => $this->seller->postalcode ?? null,
            'province' => $this->seller->province ?? null,
            'firstname'=> $this->firstname ?? null,
            'lastname'=> $this->lastname ?? null,
        ];
    }
}
