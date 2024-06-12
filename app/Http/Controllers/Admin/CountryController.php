<?php

namespace App\Http\Controllers\Admin;

use App\Models\Country;
use Illuminate\Http\Request;
use App\Http\Requests\Country\StoreCountryRequest;
use App\Http\Requests\Country\UpdateCountryRequest;
use App\Http\Resources\CountryResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CountryController extends Controller
{
    public function index()
    {
        $countryList = Country::query()->paginate(10);
       
        return Inertia::render('Admin/Country/Index',['countryList' => CountryResource::collection($countryList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Country/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCountryRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('country', $imageName, 'images');
         
        }
        $new        = new Country();
        $new->name  = $request->name;
        $new->code  = $request->code;
        $new->slug  = Str::slug($request->name);
        $new->image  = $imagePath ?? null;
      
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.country.index')->with('success', 'Country was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Country $country)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        
        $country = Country::where('id',$id)->first();
      
        return Inertia::render('Admin/Country/Edit',['country_item' => new CountryResource($country),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCountryRequest $request,$id)
    {
        //

      

        $country = Country::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        $image = $data['image'] ?? null;


        // Handle image removal
        if ($request->remove_image) {
            if ($country->image) {
                Storage::disk('images')->delete($country->image);
                $country->image = null;
            }
        }

        if ($image) {
            if ($country->image) {
                Storage::disk('images')->delete($country->image);
            }
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('country', $imageName, 'images');
            $country->image  = $imagePath ?? null;
        }

        $country->name  = $request->name;
        $country->slug  = Str::slug($request->name);
        $country->code  = $request->code;
        $country->position=$request->position;
        $country->status= $request->status;
        $country->save();

        return to_route('admin.country.index')
            ->with('success', "country \"$country->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $country = Country::where('id',$id)->first() ?? abort(404);
        $name = $country->name;
        $country->delete();
        if ($country->image) {
            Storage::disk('images')->delete($country->image);
           
        }
        return to_route('admin.country.index')
            ->with('success', "country \"$name\" was deleted");
    }
}
