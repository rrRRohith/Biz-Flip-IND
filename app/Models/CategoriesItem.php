<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class CategoriesItem extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    public function ad_category(){
        return $this->belongsTo(Category::class, 'ad_category_id', 'id');
    }

    public function business_category(){
        return $this->belongsTo(BusinessCategory::class, 'business_category_id', 'id');
    }
}
