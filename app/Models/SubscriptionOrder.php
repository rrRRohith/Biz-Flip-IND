<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionOrder extends Model
{
    use HasFactory;
    protected $fillable = [
        'subscription_plan_id',
        'name',
        'description',
        'features',
        'price',
        'tax_amount',
        'total_amount',
        'ads',
        'duration',
        'expires_at',
        'invoice_no',
        'payment_ref',
        'payment_id',
    ];

    public function billing_address(){
        return $this->belongsTo(BillingAddress::class);
    }
}
