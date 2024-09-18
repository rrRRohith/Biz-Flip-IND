<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocailLink extends Model
{
    use HasFactory; 

    protected $fillable = [
        'site', 'link', 'user_id', 'status'
    ];
}
