<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Http\Request;

class Ad extends Model
{
     use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    use \Staudenmeir\EloquentHasManyDeep\HasRelationships;

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
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }

    public function additional_informations(){
        return $this->hasMany(AdAdditionalInfo::class, 'ad_id', 'id');
    }

    public function categories(){
        return $this->belongsToMany(Category::class, 'ad_categories', 'ad_id', 'category_id')->using(AdCategory::class);
    }

    public function business_categories(){
        return $this->belongsToMany(BusinessCategory::class, 'ad_business_categories', 'ad_id', 'category_id')->using(AdBusinessCategory::class);
    }
    
    public function getCategoryAttribute(){
        return $this->categories()->first();
    }

    public function getBusinessCategoryAttribute(){
        return $this->business_categories()->first();
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

    public function image(){
        return $this->hasOne(AdImage::class, 'ad_id', 'id');
    }

    public function getImageUrlAttribute(){
        return $this->image->image_url ?? asset('/assets/admin/images/noimage.webp');
    }

    public function leads(){
        return $this->hasMany(LeadEnquiry::class, 'ad_id', 'id');
    }

    public function scopeSearch($q, Request $request){
        return $q->when($request->q, function($q) use($request){
            return $q->where('title', 'LIKE', "%{$request->q}%")->orWhere('address', 'LIKE', "%{$request->q}%")
            ->orWhere('city', 'LIKE', "%{$request->q}%");
        });
    }

    public function views(){
        return $this->hasMany(AdView::class, 'ad_id', 'id');
    }

    public function seller_ads(){
        return $this->hasManyDeepFromRelations($this->seller(), (new User())->ads())->where('ads.id', "!=", $this->id);
    }

    public function getSimilarAdsAttribute(){
        return $this->category ?  $this->category->ads()->limit(4)->where('ads.id', "!=", $this->id)->get() : collect([]);
    }

    public function scopeSearchListings($q, Request $request){
        return $q->when($request->province, fn($q) => $q->whereIn('province', (array) $request->province))
        ->when($request->city, fn($q) => $q->whereIn('city', (array) $request->city))
        ->when($request->purpose, fn($q) => $q->whereIn('ad_purpose', (array) $request->purpose))
        //->when($request->price, fn($q) => $q->where('price', '<=', $request->price))
        ->when($request->priceStart && $request->priceEnd, function($q) use($request){
            $priceMin = min($request->priceStart, $request->priceEnd);
            $priceMax = max($request->priceStart, $request->priceEnd);

            return $q->where('price', '<=', $priceMax)->where('price', '>=', $priceMin);
        })->when($request->category, fn($q) => $q->whereHas('categories', fn($q) => $q->whereIn('categories.id', (array) $request->category)))
        ->when($request->bcategory && $request->bcategory != 'all', fn($q) => $q->whereHas('business_categories', fn($q) => $q->whereIn('business_categories.id', (array) $request->bcategory)));
    }
}
