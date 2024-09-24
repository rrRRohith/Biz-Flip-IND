<?php

namespace App\Http\Controllers\Admin;

use App\Models\{BusinessCategory,CategoriesItem,Category};
use Illuminate\Http\Request;
use App\Http\Requests\BusinessCategory\StoreBusinessCategoryRequest;
use App\Http\Requests\BusinessCategory\UpdateBusinessCategoryRequest;
use App\Http\Resources\BusinessCategoryResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Resources\CategoryResource;

class BusinessCategoryController extends Controller
{

    function __construct()
    {
        $this->middleware('can:Categories Listing',  ['only' => ['index']]);
        $this->middleware('can:Category Create', ['only' => ['create','store']]);
        $this->middleware('can:Category Edit',   ['only' => ['edit','update']]);
        $this->middleware('can:Category Delete', ['only' => ['destroy']]);

        //$this->middleware('can:frachise', ['only' => 'store', 'destroy']);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoryList = BusinessCategory::orderBy('position')->get();
       
        return Inertia::render('Admin/BusinessCategory/Index',['categoryList' => BusinessCategoryResource::collection($categoryList)]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $adCategoryList = Category::orderBy('position')->where('status','1')->get();
      
        return Inertia::render('Admin/BusinessCategory/Create',['adCategoryList' => CategoryResource::collection($adCategoryList)]);
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
            $imagePath = $this->uploadFile(file : $image, path : 'categories', maxHeight : 200, maxWidth : 200, ratio: '1:1');
         
        }
        $new        = new BusinessCategory();
        $new->name  = $request->category_name;
        $new->slug  = Str::slug($request->category_name);
        $new->icon  = $imagePath ?? null;
        $new->parent= null;
        $new->description  = $request->description;
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();	
            foreach($request->adCategories ?? [] as $CitmId){
                $catItm                     = new CategoriesItem();
                $catItm->ad_category_id     = $CitmId;	
                $catItm->business_category_id = $new->id;
                $catItm->save();	
            }
            return to_route('admin.business-category.index')->with('success', 'Category was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $category = BusinessCategory::with('ad_categories')->where('id',$id)->first();

        return response()->json(new BusinessCategoryResource($category));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $category = BusinessCategory::where('id',$id)->first();
        $adCategoryList = Category::orderBy('position')->where('status','1')->get();

        return Inertia::render('Admin/BusinessCategory/Edit',['category_item' => new BusinessCategoryResource($category),'adCategoryList' => CategoryResource::collection($adCategoryList)]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessCategoryRequest $request,$id)
    {
        //
        $category   = BusinessCategory::where('id',$id)->first() ?? abort(404);
        $data       = $request->validated();
        $image      =  $request->image ?? null;


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
            $category->icon     = $this->uploadFile(file : $image, path : 'categories', maxHeight : 200, maxWidth : 200, ratio: '1:1');
        }

        $category->name         = $request->category_name;
        $category->slug         = Str::slug($request->category_name);
        $category->description  = $request->description;
        $category->parent       = null;
        $category->position     = $request->position;
        $category->status       = $request->status;
        $category->save();

        CategoriesItem::where('business_category_id',$category->id)->delete();
        foreach($request->adCategories ?? [] as $CitmId){
          
            $catItm                         = new CategoriesItem();
            $catItm->ad_category_id         = $CitmId;	
            $catItm->business_category_id   = $category->id;
            $catItm->save();	
        }

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

    public function positionUpdate(Request $request){
       
        foreach($request->orderedIds ?? [] as $position => $id){
            $category = BusinessCategory::where('id',$id)->first();
            if($category){
                $category->position = $position+1;
                $category->save();
            }
        }
        return response()->json('Position Updated');

        // return to_route('admin.business-category.index')->with('success', "Position Updated ");
    }

}

