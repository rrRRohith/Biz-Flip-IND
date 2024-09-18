<?php

namespace App\Http\Controllers\Admin;

use App\Models\City;
use Illuminate\Http\Request;
use App\Models\Province;
use App\Models\Country;
use App\Http\Requests\City\StoreCityRequest;
use App\Http\Requests\City\UpdateCityRequest;
use App\Http\Resources\CityResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;;

class CityController extends Controller
{
    public function index()
        {
            $cityList = City::orderBy('name')->get();
           
            return Inertia::render('Admin/City/Index',['cityList' => CityResource::collection($cityList),'success' => session('success'),'error' => session('error')]);
    
        }

        public function getProvincesByCountry($countryId)
        {
            $provinces = Province::where('country_id', $countryId)
                                 ->where('status', 1)
                                 ->select('id as value', 'name as label')
                                 ->get();
    
            return response()->json($provinces);
        }
    
        /**
         * Show the form for creating a new resource.
         */
        public function create()
        {
            // $countries = Country::where('status',1)->select('id as value','name as label')->get();
            $provinces = Province::where('country_id', 1)
            ->where('status', 1)
            ->select('id as value', 'name as label')
            ->get();
            return Inertia::render('Admin/City/Create',['provinces' => $provinces]);
        }
    
        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreCityRequest $request)
        {
            $new        = new City();
            $new->name  = $request->name;
            $new->slug  = Str::slug($request->name);
            $new->province_id  = $request->province;
            $new->position=$request->position;
            $new->status= $request->status;
            try{
                $new->save();			
                return to_route('admin.city.index')->with('success', 'City was created.');
            }
            catch(Exception $e){
                return $e->getMessage();
            }
    
        }
    
        /**
         * Display the specified resource.
         */
        public function show(City $city)
        {
            //
        }
    
        /**
         * Show the form for editing the specified resource.
         */
        public function edit($id)
        {
            //
            // $countries = Country::where('status',1)->select('id as value','name as label')->get();
            $provinces = Province::where('country_id', 1)
            ->where('status', 1)
            ->select('id as value', 'name as label')
            ->get();
            $city = City::where('id',$id)->first();
          
            return Inertia::render('Admin/City/Edit',['provinces' => $provinces, 'city_item' => new CityResource($city),'success' => session('success'),'error' => session('error')]);
    
        }
    
        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateCityRequest $request,$id)
        {
            //
            $city = City::where('id',$id)->first() ?? abort(404);
            $data = $request->validated();
    
            $city->name  = $request->name;
            $city->slug  = Str::slug($request->name);
          
            $city->position=$request->position;
            $city->status= $request->status;
            $city->save();
    
            return to_route('admin.city.index')
                ->with('success', "City \"$city->name\" was updated");
    
        }
    
        /**
         * Remove the specified resource from storage.
         */
        public function destroy($id)
        {
       
            $city = City::where('id',$id)->first() ?? abort(404);
            $name = $city->name;
            $city->delete();
            if ($city->image) {
                Storage::disk('images')->delete($city->image);
               
            }
            return to_route('admin.city.index')
                ->with('success', "City \"$name\" was deleted");
        }
}
