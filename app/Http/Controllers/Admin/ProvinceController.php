<?php
namespace App\Http\Controllers\Admin;

use App\Models\Province;
use Illuminate\Http\Request;
use App\Models\Country;
use App\Http\Requests\Province\StoreProvinceRequest;
use App\Http\Requests\Province\UpdateProvinceRequest;
use App\Http\Resources\ProvinceResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;;

class ProvinceController extends Controller
{
        public function index()
        {
            $provinceList = Province::query()->paginate(10);
           
            return Inertia::render('Admin/Province/Index',['provinceList' => ProvinceResource::collection($provinceList),'success' => session('success'),'error' => session('error')]);
    
        }
    
        /**
         * Show the form for creating a new resource.
         */
        public function create()
        {
            $countries = Country::where('status',1)->select('id as value','name as label')->get();
           
            return Inertia::render('Admin/Province/Create',['countries' => $countries]);
        }
    
        /**
         * Store a newly created resource in storage.
         */
        public function store(StoreProvinceRequest $request)
        {
            //
           
            /** @var $image \Illuminate\Http\UploadedFile */
            $image =$request->image ?? null;
       
            if ($image) {
                $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('province', $imageName, 'images');
             
            }
            $new        = new Province();
            $new->name  = $request->name;
            $new->slug  = Str::slug($request->name);
            $new->image  = $imagePath ?? null;
            $new->country_id  = $request->country;
            $new->position=$request->position;
            $new->status= $request->status;
            try{
                $new->save();			
                return to_route('admin.province.index')->with('success', 'Province was created.');
            }
            catch(Exception $e){
                return $e->getMessage();
            }
    
        }
    
        /**
         * Display the specified resource.
         */
        public function show(Province $province)
        {
            //
        }
    
        /**
         * Show the form for editing the specified resource.
         */
        public function edit($id)
        {
            //
            $countries = Country::where('status',1)->select('id as value','name as label')->get();

            $province = Province::where('id',$id)->first();
          
            return Inertia::render('Admin/Province/Edit',['countries' => $countries, 'province_item' => new ProvinceResource($province),'success' => session('success'),'error' => session('error')]);
    
        }
    
        /**
         * Update the specified resource in storage.
         */
        public function update(UpdateProvinceRequest $request,$id)
        {
            //
            $province = Province::where('id',$id)->first() ?? abort(404);
            $data = $request->validated();
            $image = $data['image'] ?? null;
    
    
            // Handle image removal
            if ($request->remove_image) {
                if ($province->image) {
                    Storage::disk('images')->delete($province->image);
                    $province->image = null;
                }
            }
    
            if ($image) {
                if ($province->image) {
                    Storage::disk('images')->delete($province->image);
                }
                $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('province', $imageName, 'images');
                $province->image  = $imagePath ?? null;
            }
    
            $province->name  = $request->name;
            $province->slug  = Str::slug($request->name);
          
            $province->position=$request->position;
            $province->status= $request->status;
            $province->save();
    
            return to_route('admin.province.index')
                ->with('success', "Province \"$province->name\" was updated");
    
        }
    
        /**
         * Remove the specified resource from storage.
         */
        public function destroy($id)
        {
       
            $province = Province::where('id',$id)->first() ?? abort(404);
            $name = $province->name;
            $province->delete();
            if ($province->image) {
                Storage::disk('images')->delete($province->image);
               
            }
            return to_route('admin.province.index')
                ->with('success', "Province \"$name\" was deleted");
        }
    }
    