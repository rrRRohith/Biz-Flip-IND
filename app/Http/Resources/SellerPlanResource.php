<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SellerPlanResource extends JsonResource{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = false;
    public function toArray(Request $request): array{
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'features' => $this->features,
            'price' => $this->price,
            'ads' => $this->ads,
            'duration' => $this->duration,
            'default' => $this->default,
            'visibility' => $this->visibility,
            'status' => $this->status,
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'current_plan' => $this->id == ((auth()->user()->empoyer ? : auth()->user())->current_subscription->id ?? null)
        ];
    }
}
