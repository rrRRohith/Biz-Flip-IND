<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdPurpose extends Model
{
    use HasFactory;

    public $fillable = ['title', 'status', 'slug'];
}
