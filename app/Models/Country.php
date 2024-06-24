<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Country extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    public function provinces(){
        return $this->hasMany(Province::class, 'country_id', 'id');
    }
}
