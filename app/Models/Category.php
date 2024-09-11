<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Staudenmeir\EloquentHasManyDeep\HasRelationships;
class Category extends Model
{
    use HasFactory, SoftDeletes,HasRelationships;
    protected $dates = ['deleted_at'];

    public function ads(){
        return $this->belongsToMany(Ad::class, 'ad_categories', 'category_id', 'ad_id')->using(AdCategory::class);
    }

    public function getIconUrlAttribute(){
        return image_url($this->icon);
        // return asset('images/'.$this->icon);
    }

    public function selectedItms(){
        return $this->hasMany(CategoriesItem::class, 'ad_category_id', 'id');
    }

    public function business_categories(){
    
        return $this->hasManyDeepFromRelations($this->selectedItms(), (new CategoriesItem())->business_category());
    }

}
