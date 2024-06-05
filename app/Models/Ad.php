<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Ad extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'map_link',
        'title', 
        'price', 
        'description', 
        'ad_purpose', 
        'property_type', 
        'address', 
        'city', 
        'province', 
        'postalcode', 
        'status',
        'map_link', 
        'lat', 
        'lng', 
        'unique_code', 
        'publish_at',
        'status', 
        'has_negotiable', 
        'has_commission', 
        'commission', 
        'slug',
        'space',
        'seo_title',
        'seo_keywords',
        'seo_description'
    ];

    
    function seller(){
        return $this->belongsTo(User::class, 'vendor_id', 'id');
    }

    public function additional_informations(){
        return $this->hasMany(AdAdditionalInfo::class, 'ad_id', 'id');
    }

    public function categories(){
        return $this->belongsToMany(Category::class, 'ad_categories', 'ad_id', 'category_id')->using(AdCategory::class);
    }
    
    public function getCategoryAttribute(){
        return $this->categories()->first();
    }

    public function features(){
        return $this->belongsToMany(Features::class, 'ad_features', 'ad_id', 'feature_id')->using(AdFeature::class);
    }

    public function facilities(){
        return $this->belongsToMany(Facility::class, 'ad_facilities', 'ad_id', 'facility_id')->using(AdFacility::class);
    }

    public function images(){
        return $this->hasMany(AdImage::class, 'ad_id', 'id');
    }

    public function leads(){
        return $this->hasMany(LeadEnquiry::class, 'ad_id', 'id');
    }
}
