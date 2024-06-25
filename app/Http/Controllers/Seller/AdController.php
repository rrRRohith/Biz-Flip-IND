<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Ad, Category, Facility, Features, Province, BusinessCategory};
use App\Http\Requests\Ad\{AdRequest};
use Inertia\Inertia;
use App\Http\Resources\{AdResource};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AdController extends BaseController{
    public $user;
    public $seller;
    use \App\Helper\Upload;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
			$this->user = auth()->user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });

        $this->middleware("can:Ads Listing")->only(['index', 'search']);
        $this->middleware("can:Ad Create")->only(['create', 'store']);
        $this->middleware("can:Ad Edit")->only(['edit', 'update']);
        $this->middleware("can:Ad Delete")->only(['destroy']);
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Ads', [
            'ads' => AdResource::collection($this->seller->ads()->latest()->get()),
        ]);
    }

    public function search(Request $request){
        return response()->json(AdResource::collection($this->seller->ads()->search($request)->latest()->get()));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(){
        return Inertia::render('Seller/AdForm', [
            'categories_options' => Category::selectRaw("id as value, name as label")->get()->toArray(),
            'business_categories_options' => BusinessCategory::selectRaw("id as value, name as label, business_categories.*")->get()->toArray(),
            'facilities_options' => Facility::selectRaw("id as value, name as label")->get()->toArray(),
            'features_options' => Features::selectRaw("id as value, name as label")->get()->toArray(),
            'province_options' => Province::selectRaw("name as value, name as label")->orderBy('name')->get()->toArray(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param AdRequest $request
     */
    public function store(AdRequest $request){
        
        try{
            $ad = $this->seller->ads()->create($request->only(
                'has_commission', 
                'has_negotiation', 
                'map_link', 
                'lat', 
                'lng', 
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
                'space',
                'seo_title',
                'seo_keywords',
                'seo_description',
            ));
            $ad->update([
                'unique_code' => $this->seller->unique_code.$ad->id,
                'publish_at' => $request->status ? now() : null,
                'slug' => Str::slug($request->title.'-'.Str::random(4)),
                'commission' => $request->has_commission == 1 ? $request->commission : null,
            ]);

            foreach($request->additional_info ?? [] as $information){
                $ad->additional_informations()->create(
                    array_intersect_key($information, array_flip(['info', 'value']))
                );
            }

            $uploadedImages = $this->uploadFiles($request->images, 'ads');
            if(count($uploadedImages)){
                foreach($uploadedImages as $image){
                    $ad->images()->create([
                        'image' => $image,
                    ]);
                }
            }

            $ad->categories()->sync($request->category);
            $ad->business_categories()->sync($request->business_category);
            $ad->features()->sync($request->features);
            $ad->facilities()->sync($request->facilities);

            $ad->refresh();

            if($ad->business_category->slug == 'franchise'){
                $ad->franchise()->create($request->only([
                    'canadian_units',
                    'us_units',
                    'international_units',
                    'corporate_units',
                    'franchise_fee',
                    'liquid_capital',
                    'total_investment',
                    'in_business_since',
                    'franchising_since',
                    'territories',
                ]));
            }

            return to_route('seller.ads.index')->with('success', 'Ad created successfully.');
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Edit the specified resource.
     * 
     * @param Request $request
     * @param Ad $ad
     */
    public function edit(Request $request, Ad $ad){
        
        $this->seller->ads()->findOrfail($ad->id);
        return Inertia::render('Seller/AdForm', [
            'ad' => new AdResource($ad),
            'business_categories_options' => BusinessCategory::selectRaw("id as value, name as label, business_categories.*")->get()->toArray(),
            'categories_options' => Category::selectRaw("id as value, name as label")->get()->toArray(),
            'facilities_options' => Facility::selectRaw("id as value, name as label")->get()->toArray(),
            'features_options' => Features::selectRaw("id as value, name as label")->get()->toArray(),
            'province_options' => Province::selectRaw("name as value, name as label")->orderBy('name')->get()->toArray(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param AdRequest $request
     * @param Ad $ad
     */
    public function update(AdRequest $request, Ad $ad){
        $this->seller->ads()->findOrfail($ad->id);
        try{
            $ad->update($request->only(
                'has_commission', 
                'has_negotiation', 
                'map_link', 
                'lat', 
                'lng', 
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
                'space',
                'seo_title',
                'seo_keywords',
                'seo_description',
            ));
            $ad->update([
                'unique_code' => $this->seller->unique_code.$ad->id,
                'publish_at' => $request->status ? now() : null,
            ]);

            $ad->categories()->sync($request->category);
            $ad->business_categories()->sync($request->business_category);
            $ad->features()->sync($request->features);
            $ad->facilities()->sync($request->facilities);

            $ad->additional_informations()->forceDelete();
            foreach($request->additional_info ?? [] as $information){
                $ad->additional_informations()->create(
                    array_intersect_key($information, array_flip(['info', 'value']))
                );
            }

            $ad->images()->whereNotIn('image', $request->uploaded_images ? : [])->get()->each(function($image){
                Storage::disk('images')->delete($image->image);
                $image->forceDelete();
            });

            $uploadedImages = $this->uploadFiles($request->images, 'ads');

            if(count($uploadedImages)){
                foreach($uploadedImages as $image){
                    $ad->images()->create([
                        'image' => $image,
                    ]);
                }
            }

            $ad->refresh();

            if($ad->business_category->slug == 'franchise'){
                $ad->franchise()->updateOrcreate([
                    'ad_id' => $ad->id,
                ], $request->only([
                    'canadian_units',
                    'us_units',
                    'international_units',
                    'corporate_units',
                    'franchise_fee',
                    'liquid_capital',
                    'total_investment',
                    'in_business_since',
                    'franchising_since',
                    'territories',
                ]));
            }

            return to_route('seller.ads.index')->with('success', 'Ad updated successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ad){
        $this->seller->ads()->findOrfail($ad->id);
        $ad->delete();
        //Delete images if forceDeleted
        return to_route('seller.ads.index')->with('success', "Ad was deleted");
    }
}
