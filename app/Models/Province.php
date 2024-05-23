<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Country;
class Province extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];


    function country(){
        return  $this->belongsTo(Country::class);
    }
}
