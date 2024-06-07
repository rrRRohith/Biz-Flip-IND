<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Category extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    public function ads(){
        return $this->belongsToMany(Ad::class, 'ad_categories', 'category_id', 'ad_id')->using(AdCategory::class);
    }

    public function getIconUrlAttribute(){
        return asset('images/'.$this->icon);
    }
}
