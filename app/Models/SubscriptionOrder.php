<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class SubscriptionOrder extends Model
{
    use HasFactory;
    protected $appends = ['remaining_ads'];

    protected $casts = [
        'created_at' => 'datetime',
        'expires_at' => 'datetime',
        'update_at' => 'datetime',
    ];

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
        'billing_address_id',
        'expire_alert_at',
        'expired_alert_at',
    ];

    public function billing_address(){
        return $this->belongsTo(BillingAddress::class, 'billing_address_id', 'id');
    }

    public function seller(){
        return $this->belongsTo(User::class);
    }

    public function scopeSearch($q, Request $request){
        return $q->when($request->q, function($q) use($request){
            return $q->where('invoice_no', 'LIKE', "%{$request->q}%");
        });
    }

    public function getRemainingAdsAttribute(){
        return max($this->ads - $this->ads_posted()->withTrashed()->count(), 0);
    }

    public function ads_posted(){
        return $this->belongsToMany(Ad::class, 'subscription_order_ads', 'subscription_order_id', 'ad_id');
    }

    public function getIsActiveAttribute(){
        return \Carbon\Carbon::parse($this->expires_at)->gt(\Carbon\Carbon::now());
    }
}
