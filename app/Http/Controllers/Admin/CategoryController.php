<?php

namespace App\Http\Controllers\Admin;

use App\Models\{Category,BusinessCategory,CategoriesItem};
use App\Http\Resources\BusinessCategoryResource;
use Illuminate\Http\Request;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CategoryController extends Controller
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
        $categoryList = Category::orderBy('name','ASC')->get();
       
        return Inertia::render('Admin/Category/Index',['categoryList' => CategoryResource::collection($categoryList)]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $BusinesscategoryList = BusinessCategory::orderBy('name','ASC')->where('status','1')->get();
        return Inertia::render('Admin/Category/Create',['BusinesscategoryList' => BusinessCategoryResource::collection($BusinesscategoryList)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imagePath = $this->uploadFile(file : $image, path : 'categories', maxHeight : 200, maxWidth : 200, ratio: '1:1');
        }
        $new        = new Category();
        $new->name  = $request->category_name;
        $new->slug  = Str::slug($request->category_name);
        $new->description =  $request->description;
        $new->icon  = $imagePath ?? null;
        $new->parent= null;
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();	

            foreach($request->businessCategories ?? [] as $CitmId){
                $catItm                     = new CategoriesItem();
                $catItm->ad_category_id     = $new->id;
                $catItm->business_category_id = $CitmId;	
                $catItm->save();	
            }		
            return to_route('admin.category.index')->with('success', 'Category was created.');
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
        $category = Category::with('business_categories')->where('id',$id)->first();
 
        return response()->json(new CategoryResource($category));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        
        $category = Category::where('id',$id)->first();
        $BusinesscategoryList = BusinessCategory::orderBy('name','ASC')->where('status','1')->get();

        return Inertia::render('Admin/Category/Edit',['category_item' => new CategoryResource($category),'BusinesscategoryList' => BusinessCategoryResource::collection($BusinesscategoryList)]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request,$id)
    {
        //

      

        $category   = Category::where('id',$id)->first() ?? abort(404);
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
            $category->icon     = $this->uploadFile(file : $image, path : 'categories', maxHeight : 200, maxWidth : 200, ratio: '1:1');
        }

        $category->name         = $request->category_name;
        $category->slug         = Str::slug($request->category_name);
        $category->description  = $request->description;
        $category->parent       = null;
        $category->position     = $request->position;
        $category->status       = $request->status;
        $category->save();

        CategoriesItem::where('ad_category_id',$category->id)->delete();
        
        foreach($request->businessCategories ?? [] as $CitmId){
            $catItm                         = new CategoriesItem();
            $catItm->ad_category_id         = $category->id;
            $catItm->business_category_id   = $CitmId;	
            $catItm->save();	
        }

        return to_route('admin.category.index')
            ->with('success', "Category \"$category->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $category = Category::where('id',$id)->first() ?? abort(404);
        $name = $category->name;
        $category->delete();
        if ($category->icon) {
            Storage::disk('images')->delete($category->icon);
           
        }
        return to_route('admin.category.index')
            ->with('success', "Category \"$name\" was deleted");
    }

    public function positionUpdate(Request $request){
       
        foreach($request->orderedIds ?? [] as $position => $id){
            $category = Category::where('id',$id)->first();
            if($category){
                $category->position = $position+1;
                $category->save();
            }
        }
        return to_route('admin.category.index')->with('success', "Position Updated ");
    }


}
