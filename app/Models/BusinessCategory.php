<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessCategory extends Model
{
    use HasFactory;

    public function selectedItms(){
        return $this->hasMany(CategoriesItem::class, 'business_category_id', 'id');
    }
}
