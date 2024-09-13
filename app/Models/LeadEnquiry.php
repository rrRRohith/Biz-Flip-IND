<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

use Illuminate\Http\Request;

class LeadEnquiry extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = ['seller_id', 'status', 'attender_id', 'firstname', 'email', 'phone', 'lastname', 'message', 'response', 'customer_id', 'chat_id'];

    public function ad(){
        return $this->belongsTo(Ad::class, 'ad_id', 'id');
    }

    public function attender(){
        return $this->belongsTo(User::class, 'attender_id', 'id');
    }

    public function scopeSearch($q, Request $request){
        return $q->when($request->q, function($q) use($request){
            return $q->where('firstname', 'LIKE', "%{$request->q}%")->orWhere('lastname', 'LIKE', "%{$request->q}%");
        })->when($request->ad, fn($q) => $q->whereAdId($request->ad))
        ->when($request->has('status') && !is_null($request->status), fn($q) => $q->whereStatus($request->status))
        ->when($request->category, fn($q) => $q->whereHas('ad', fn($q) => $q->whereHas('business_categories', fn($q) => $q->where('business_categories.id', $request->category))))
        ->when($request->date_range && isset($request->date_range['start']) && isset($request->date_range['end']), fn($q) => $q->whereBetween('created_at', [$request->date_range['start'] . ' 00:00:00', $request->date_range['end'] . ' 23:59:59']));
    }

    public function scopeLast7Days(Builder $query)
    {
        return $query->where('created_at', '>=', now()->subDays(7));
    }
    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }
}
