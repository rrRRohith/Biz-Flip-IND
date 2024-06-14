<?php

namespace App\Http\Controllers\Admin;

use App\Models\BusinessCategory;
use Illuminate\Http\Request;
use App\Http\Requests\BusinessCategory\StoreBusinessCategoryRequest;
use App\Http\Requests\BusinessCategory\UpdateBusinessCategoryRequest;
use App\Http\Resources\BusinessCategoryResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BusinessCategoryController extends Controller
{

    function __construct()
    {
        $this->middleware('can:Categories Listing',  ['only' => ['index']]);
        $this->middleware('can:Category Create', ['only' => ['create','store']]);
        $this->middleware('can:Category Edit',   ['only' => ['edit','update']]);
        $this->middleware('can:Category Delete', ['only' => ['destroy']]);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoryList = BusinessCategory::orderBy('name','ASC')->get();
       
        return Inertia::render('Admin/BusinessCategory/Index',['categoryList' => BusinessCategoryResource::collection($categoryList)]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/BusinessCategory/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBusinessCategoryRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('categories', $imageName, 'images');
         
        }
        $new        = new BusinessCategory();
        $new->name  = $request->category_name;
        $new->slug  = Str::slug($request->category_name);
        $new->icon  = $imagePath ?? null;
        $new->parent= null;
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.business-category.index')->with('success', 'Category was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(BusinessCategory $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        
        $category = BusinessCategory::where('id',$id)->first();
      
        return Inertia::render('Admin/BusinessCategory/Edit',['category_item' => new BusinessCategoryResource($category),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessCategoryRequest $request,$id)
    {
        //

      

        $category   = BusinessCategory::where('id',$id)->first() ?? abort(404);
        $data       = $request->validated();
        $image      = $data['image'] ?? null;


        // Handle image removal
        if ($request->remove_image) {
            if ($category->icon) {
                Storage::disk('images')->delete($category->icon);
                $category->icon = null;
            }
        }

        if ($image) {
            if ($category->icon) {
                Storage::disk('images')->delete($category->icon);
            }
            $imageName          = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath          = $image->storeAs('categories', $imageName, 'images');
            $category->icon     = $imagePath;
        }

        $category->name         = $request->category_name;
        $category->slug         = Str::slug($request->category_name);
        $category->parent       = null;
        $category->position     = $request->position;
        $category->status       = $request->status;
        $category->save();

        return to_route('admin.business-category.index')
            ->with('success', "BusinessCategory \"$category->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $category = BusinessCategory::where('id',$id)->first() ?? abort(404);
        $name = $category->name;
        $category->delete();
        if ($category->icon) {
            Storage::disk('images')->delete($category->icon);
           
        }
        return to_route('admin.business-category.index')
            ->with('success', "BusinessCategory \"$name\" was deleted");
    }
}
