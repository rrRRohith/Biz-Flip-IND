<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

class BusinessCategory extends Model
{
    use HasFactory, HasRelationships;

    protected $appends = [
        'ad_category_collection',
    ];

    public function getIconUrlAttribute(){
        return asset('images/'.$this->icon);
    }
    
    public function selectedItms(){
        return $this->hasMany(CategoriesItem::class, 'business_category_id', 'id');
    }

    public function ads(){
        return $this->belongsToMany(Ad::class, 'ad_business_categories', 'category_id', 'ad_id')->using(AdBusinessCategory::class);
    }

    public function ad_categories(){
        return $this->hasManyDeepFromRelations($this->selectedItms(), (new CategoriesItem())->ad_category());
    }

    public function getAdCategoryCollectionAttribute(){
        return $this->ad_categories()->selectRaw('categories.id as value, categories.name as label, categories.*')->get()->toArray();
    }
}
