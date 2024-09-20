<?php

namespace App\Http\Controllers\Admin;

use App\Models\Facility;
use Illuminate\Http\Request;
use App\Http\Requests\Facility\StoreFacilityRequest;
use App\Http\Requests\Facility\UpdateFacilityRequest;
use App\Http\Resources\FacilityResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilityList = Facility::query()->paginate(10);
       
        return Inertia::render('Admin/Facilities/Index',['facilityList' => FacilityResource::collection($facilityList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Facilities/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacilityRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imagePath = $this->uploadFile(file : $image, path : 'facilities', maxHeight : 100, maxWidth : 100, ratio: '1:1');
        }

        $new        = new Facility();
        $new->name  = $request->facility_name;
        $new->slug  = Str::slug($request->facility_name);
        $new->icon  = $request->icon ?? null;
     
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.facilities.index')->with('success', 'facility was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Facility $facility)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //

        $facility = Facility::where('id',$id)->first();
      
        
        return Inertia::render('Admin/Facilities/Edit',['facility_item' => new FacilityResource($facility),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFacilityRequest $request,$id)
    {
        //

      

        $facility = Facility::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        $image = $data['image'] ?? null;


        // Handle image removal
        // if ($request->remove_image) {
        //     if ($facility->icon) {
        //         Storage::disk('images')->delete($facility->icon);
        //         $facility->icon = null;
        //     }
        // }

        // if ($image) {
        //     if ($facility->icon) {
        //         Storage::disk('images')->delete($facility->icon);
        //     }
        //     $facility->icon = $this->uploadFile(file : $image, path : 'facilities', maxHeight : 100, maxWidth : 100, ratio: '1:1');
        // }

        

        $facility->name  = $request->facility_name;
        $facility->slug  = Str::slug($request->facility_name);
        $facility->icon  = $request->icon ?? null;
        $facility->position=$request->position;
        $facility->status= $request->status;
        $facility->save();

        return to_route('admin.facilities.index')
            ->with('success', "Facility \"$facility->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $facility = Facility::where('id',$id)->first() ?? abort(404);
        $name = $facility->name;
        $facility->delete();
        // if ($facility->icon) {
        //     Storage::disk('images')->delete($facility->icon);
           
        // }
        return to_route('admin.facilities.index')
            ->with('success', "Facility \"$name\" was deleted");
    }
}


