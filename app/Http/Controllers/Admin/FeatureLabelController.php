<?php

namespace App\Http\Controllers\Admin;

use App\Models\FeatureLabel;
use Illuminate\Http\Request;
use App\Http\Requests\FeatureLabel\StoreFeatureLabelRequest;
use App\Http\Requests\FeatureLabel\UpdateFeatureLabelRequest;
use App\Http\Resources\FeatureLabelResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class FeatureLabelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilityList = FeatureLabel::query()->paginate(10);
       
        return Inertia::render('Admin/FeatureLabel/Index',['labelList' => FeatureLabelResource::collection($facilityList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/FeatureLabel/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFeatureLabelRequest $request)
    {
       
       
        $new        = new FeatureLabel();
        $new->name  = $request->name;
        $new->slug  = Str::slug($request->name);
     
        $new->color  = $request->color;
        $new->priority=$request->priority;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.feature-label.index')->with('success', 'facility was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(FeatureLabel $facility)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //

        $label = FeatureLabel::where('id',$id)->first();
      
        
        return Inertia::render('Admin/FeatureLabel/Edit',['label_item' => new FeatureLabelResource($label),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFeatureLabelRequest $request,$id)
    {
        //

      

        $facility = FeatureLabel::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
    

        $facility->name  = $request->name;
        $facility->slug  = Str::slug($request->name);
      
        $facility->color  = $request->color;
        $facility->priority=$request->priority;
        $facility->status= $request->status;
        $facility->save();

        return to_route('admin.feature-label.index')
            ->with('success', "Feature Label \"$facility->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $facility = FeatureLabel::where('id',$id)->first() ?? abort(404);
        $name = $facility->name;
        $facility->delete();
        
        return to_route('admin.feature-label.index')
            ->with('success', "Feature Label \"$name\" was deleted");
    }
}
