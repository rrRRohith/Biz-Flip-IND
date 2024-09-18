<?php

namespace App\Http\Controllers\Admin;

use App\Models\Features;
use Illuminate\Http\Request;
use App\Http\Requests\Features\StoreFeaturesRequest;
use App\Http\Requests\Features\UpdateFeaturesRequest;
use App\Http\Resources\FeaturesResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class FeaturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $featuresList = Features::query()->paginate(10);
       
        return Inertia::render('Admin/Features/Index',['featuresList' => FeaturesResource::collection($featuresList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Features/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFeaturesRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $this->uploadFile(file : $image, path : 'features', maxHeight : 100, maxWidth : 100, ratio: '1:1');
         
        }
        $new        = new Features();
        $new->name  = $request->feature_name;
        $new->slug  = Str::slug($request->feature_name);
        $new->icon  = $imagePath ?? null;
     
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.features.index')->with('success', 'Features was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Features $features)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //

        $features = Features::where('id',$id)->first();
      
        
        return Inertia::render('Admin/Features/Edit',['features_item' => new FeaturesResource($features),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFeaturesRequest $request,$id)
    {
        //

      

        $features = Features::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        $image = $data['image'] ?? null;


        // Handle image removal
        if ($request->remove_image) {
            if ($features->icon) {
                Storage::disk('images')->delete($features->icon);
                $features->icon = null;
            }
        }

        if ($image) {
            if ($features->icon) {
                Storage::disk('images')->delete($features->icon);
            }
            
            $features->icon = $this->uploadFile(file : $image, path : 'features', maxHeight : 100, maxWidth : 100, ratio: '1:1');
        }

        $features->name  = $request->feature_name;
        $features->slug  = Str::slug($request->feature_name);
      
        $features->position=$request->position;
        $features->status= $request->status;
        $features->save();

        return to_route('admin.features.index')
            ->with('success', "Features \"$features->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $features = Features::where('id',$id)->first() ?? abort(404);
        $name = $features->name;
        $features->delete();
        if ($features->icon) {
            Storage::disk('images')->delete($features->icon);
           
        }
        return to_route('admin.features.index')
            ->with('success', "Features \"$name\" was deleted");
    }
}
