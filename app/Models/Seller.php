<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Seller extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'user_id',
        'phone',
        'email',
        'logo',
        'company_name',
        'short_description',
        'description',
        'address',
        'website',
        'employee'
    ];

    public function getLogoAttribute($logo){
        return $logo ? : 'default.png';
    }

    public function getLogoUrlAttribute($logo){
        return asset('images/'.$this->logo);
    }
}
