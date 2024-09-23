<?php

namespace App\Http\Controllers\Admin;

use App\Models\AdType;
use Illuminate\Http\Request;
use App\Http\Requests\AdType\StoreAdTypeRequest;
use App\Http\Requests\AdType\UpdateAdTypeRequest;
use App\Http\Resources\AdTypeResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class AdTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $typeList = AdType::query()->paginate(10);
       
        return Inertia::render('Admin/AdTypes/Index',['typeList' => AdTypeResource::collection($typeList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/AdTypes/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdTypeRequest $request)
    {

        $new        = new AdType();
        $new->title  = $request->title;
        $new->slug  = Str::slug($request->title);
        $new->icon  = $request->icon ?? null;
        
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.ad_types.index')->with('success', 'type was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(AdType $type)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdType $ad_type)
    {
        $type = $ad_type;
      
        
        return Inertia::render('Admin/AdTypes/Edit',['type_item' => new AdTypeResource($type),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdTypeRequest $request,$id)
    {
        //

      

        $type = AdType::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        

        $type->title  = $request->title;
        $type->slug  = Str::slug($request->title);
        $type->icon  = $request->icon ?? null;
        $type->position=$request->position;
        $type->status= $request->status;
        $type->save();

        return to_route('admin.ad_types.index')
            ->with('success', "Type \"$type->title\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $type = AdType::where('id',$id)->first() ?? abort(404);
        $name = $type->title;
        $type->delete();
        // if ($type->icon) {
        //     Storage::disk('images')->delete($type->icon);
           
        // }
        return to_route('admin.ad_types.index')
            ->with('success', "Type \"$name\" was deleted");
    }
}


