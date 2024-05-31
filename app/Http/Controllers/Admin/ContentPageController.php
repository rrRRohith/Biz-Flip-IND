<?php

namespace App\Http\Controllers\Admin;

use App\Models\Page;
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
        $pageList = Page::query()->paginate(10);
       
        return Inertia::render('Admin/Content/Index',['pageList' => ContentPageResource::collection($pageList),'success' => session('success'),'error' => session('error')]);

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
       
        dd($request->all());
        //
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('page', $imageName, 'images');
        }

        $new                    = new Page();
        $new->name              = $request->title;
        $new->slug              = Str::slug($request->title);
        $new->content           = $request->title;
        $new->data              = $request->data;
        $new->breadcumb_image   = $imagePath ??  null;
        $new->seo_title         = $request->seo_title;
        $new->seo_keywords      = $request->seo_keywords;
        $new->seo_desscription  = $request->seo_desscription;
        $new->status            = $request->status;
        try{
            $new->save();			
            return to_route('admin.content-page.index')->with('success', 'page was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $page = Page::where('id',$id)->first();
      
        return Inertia::render('Admin/Content/Edit',['page_item' => new ContentPageResource($page),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContentPageRequest $request,$id)
    {
        //

        $page = Page::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        $image = $data['image'] ?? null;


        // Handle image removal
        if ($request->remove_image) {
            if ($page->icon) {
                Storage::disk('images')->delete($page->icon);
                $page->icon = null;
            }
        }

        if ($image) {
            if ($page->icon) {
                Storage::disk('images')->delete($page->icon);
            }
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('page', $imageName, 'images');
            $page->icon  = $imagePath;
        }

        $page->name              = $request->title;
        $page->slug              = Str::slug($request->title);
        $page->content           = $request->title;
        $page->data              = $request->data;
        $page->breadcumb_image   = $imagePath ??  null;
        $page->seo_title         = $request->seo_title;
        $page->seo_keywords      = $request->seo_keywords;
        $page->seo_desscription  = $request->seo_desscription;
        $page->status            = $request->status;
        
        $page->save();

        return to_route('admin.content-page.index')
            ->with('success', "Content Page \"$page->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $page = Page::where('id',$id)->first() ?? abort(404);
        $name = $page->name;
        $page->delete();
        if ($page->icon) {
            Storage::disk('images')->delete($page->breadcumb_image);
           
        }
        return to_route('admin.content-page.index')
            ->with('success', "Content Page \"$name\" was deleted");
    }
}
