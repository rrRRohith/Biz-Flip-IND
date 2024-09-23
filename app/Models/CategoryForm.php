<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryForm extends Model
{
    use HasFactory;

    public $fillable = [
        'category_id',
        'name',
        'label',
        'placeholder',
        'values',
        'type',
        'required',
    ];
}
