<?php

namespace App\Http\Controllers\Admin;

use App\Models\AdPurpose;
use Illuminate\Http\Request;
use App\Http\Requests\AdPurpose\StoreAdPurposeRequest;
use App\Http\Requests\AdPurpose\UpdateAdPurposeRequest;
use App\Http\Resources\AdPurposeResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class AdPurposeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $purposeList = AdPurpose::query()->paginate(10);
       
        return Inertia::render('Admin/AdPurposes/Index',['purposeList' => AdPurposeResource::collection($purposeList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/AdPurposes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdPurposeRequest $request)
    {

        $new        = new AdPurpose();
        $new->title  = $request->title;
        $new->slug  = Str::slug($request->title);
        $new->icon  = $request->icon ?? null;
        
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.ad_purposes.index')->with('success', 'purpose was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(AdPurpose $purpose)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdPurpose $ad_purpose)
    {
        $purpose = $ad_purpose;
      
        
        return Inertia::render('Admin/AdPurposes/Edit',['purpose_item' => new AdPurposeResource($purpose),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdPurposeRequest $request,$id)
    {
        //

      

        $purpose = AdPurpose::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        

        $purpose->title  = $request->title;
        $purpose->slug  = Str::slug($request->title);
        $purpose->icon  = $request->icon ?? null;
        $purpose->position=$request->position;
        $purpose->status= $request->status;
        $purpose->save();

        return to_route('admin.ad_purposes.index')
            ->with('success', "Purpose \"$purpose->title\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $purpose = AdPurpose::where('id',$id)->first() ?? abort(404);
        $name = $purpose->title;
        $purpose->delete();
        // if ($purpose->icon) {
        //     Storage::disk('images')->delete($purpose->icon);
           
        // }
        return to_route('admin.ad_purposes.index')
            ->with('success', "Purpose \"$name\" was deleted");
    }
}


