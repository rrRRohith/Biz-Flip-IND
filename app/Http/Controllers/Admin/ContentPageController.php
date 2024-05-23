<?php

namespace App\Http\Controllers\Admin;

use App\Models\ContentPage;
use Illuminate\Http\Request;
use App\Http\Requests\ContentPage\StoreContentPageRequest;
use App\Http\Requests\ContentPage\UpdateContentPageRequest;
use App\Http\Resources\ContentPageResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ContentPageController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoryList = ContentPage::query()->paginate(10);
       
        return Inertia::render('Admin/Category/Index',['categoryList' => ContentPageResource::collection($categoryList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Content/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContentPageRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('categories', $imageName, 'images');
         
        }
        $new        = new ContentPage();
        $new->name  = $request->category_name;
        $new->slug  = Str::slug($request->category_name);
        $new->icon  = $imagePath;
        $new->parent= null;
        $new->position=$request->position;
        $new->status= $request->status;
        try{
            $new->save();			
            return to_route('admin.category.index')->with('success', 'Category was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(ContentPage $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        
        $category = ContentPage::where('id',$id)->first();
      
        return Inertia::render('Admin/Content/Edit',['category_item' => new ContentPageResource($category),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContentPageRequest $request,$id)
    {
        //

      

        $category = ContentPage::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        $image = $data['image'] ?? null;


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
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('categories', $imageName, 'images');
            $category->icon  = $imagePath;
        }

        $category->name  = $request->category_name;
        $category->slug  = Str::slug($request->category_name);
      
        $category->parent= null;
        $category->position=$request->position;
        $category->status= $request->status;
        $category->save();

        return to_route('admin.category.index')
            ->with('success', "Content Page \"$category->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $category = ContentPage::where('id',$id)->first() ?? abort(404);
        $name = $category->name;
        $category->delete();
        if ($category->icon) {
            Storage::disk('images')->delete($category->icon);
           
        }
        return to_route('admin.category.index')
            ->with('success', "Content Page \"$name\" was deleted");
    }
}
