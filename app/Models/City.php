<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class City extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    function province(){
        return  $this->belongsTo(Province::class);
    }
    
}
