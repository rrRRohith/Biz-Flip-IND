<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    use HasFactory;

    public $appends = ['tax_amount', 'total_amount'];

    public function getTaxAmountAttribute(){
        return number_format(0, 2);
    }

    public function getTotalAmountAttribute(){
        return $this->price + $this->tax_amount;
    }

    public function getOrderArrayAttribute(){
        return [
            'subscription_plan_id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'features' => $this->features,
            'price' => $this->price,
            'tax_amount' => $this->tax_amount,
            'total_amount' => $this->total_amount,
            'ads' => $this->ads,
            'duration' => $this->duration,
            'expires_at' => \Carbon\Carbon::now()->addMonths($this->duration)->format('Y-m-d'),
        ];
    }
}
