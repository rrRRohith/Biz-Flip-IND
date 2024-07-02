<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class AdView extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $fillable = ['ip_address'];

    public function scopeSearch($q, Request $request){
        return $q->when($request->date_range && isset($request->date_range['start']) && isset($request->date_range['end']), fn($q) => $q->whereBetween('ad_views.created_at', [$request->date_range['start'] . ' 00:00:00', $request->date_range['end'] . ' 23:59:59']));
    }
}
