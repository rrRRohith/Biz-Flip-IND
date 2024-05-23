<?php

namespace App\Http\Controllers\Admin;

use App\Models\Banner;
use Illuminate\Http\Request;
use Exception;
use App\Http\Resources\BannerResource;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Http\Requests\Banner\StoreBannerRequest;
use App\Http\Requests\Banner\UpdateBannerRequest;
class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $bannersList = Banner::query()->paginate(10);
       
        return Inertia::render('Admin/Banner/Index',['bannersList' => BannerResource::collection($bannersList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/Banner/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBannerRequest $request)
    {
        //

        if ($request->picture_desktop) {
            $imageName = Str::random(20) . '.' . $request->picture_desktop->getClientOriginalExtension();
            $imagePath = $request->picture_desktop->storeAs('banners', $imageName, 'images');
        }
        
        if ($request->picture_mobile) {
            $imageName2 = Str::random(20) . '.' . $request->picture_mobile->getClientOriginalExtension();
            $imagePath2 = $request->picture_mobile->storeAs('banners', $imageName2, 'images');
        }
        $new                = new Banner();
        $new->title         = $request->title;	
        $new->redirection   = $request->redirection;	
        $new->type          = $request->type;	
        $new->new_window    = $request->new_window;	
        $new->picture_desktop = $imagePath ?? null;
        $new->picture_mobile= $imagePath2  ?? null;
        $new->position      = $request->position;
        $new->status        = $request->status;
        try{
            $new->save();			
            return to_route('admin.banners.index')->with('success', 'Banner was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(Banner $banner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        
        $banner = Banner::where('id',$id)->first();
      
        return Inertia::render('Admin/Banner/Edit',['banner' => new BannerResource($banner),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {   
        //

        $banner = Banner::where('id',$id)->first();

           // Handle image removal
        if ($request->remove_image) {
            if ($banner->picture_desktop) {
                Storage::disk('images')->delete($banner->picture_desktop);
                $banner->picture_desktop = null;
            }
        }

        if ($request->picture_desktop) {
            if ($banner->picture_desktop) {
                Storage::disk('images')->delete($banner->picture_desktop);
            }
            $imageName = Str::random(20) . '.' . $request->picture_desktop->getClientOriginalExtension();
            $imagePath = $request->picture_desktop->storeAs('banners', $imageName, 'images');
            $banner->picture_desktop  = $imagePath;
        }


           // Handle image removal
           if ($request->remove_image2) {
            if ($banner->picture_mobile) {
                Storage::disk('images')->delete($banner->picture_mobile);
                $banner->picture_mobile = null;
            }
        }

        if ($request->picture_mobile) {
            if ($banner->picture_mobile) {
                Storage::disk('images')->delete($banner->picture_mobile);
            }
            $imageName = Str::random(20) . '.' . $request->picture_mobile->getClientOriginalExtension();
            $imagePath = $request->picture_mobile->storeAs('banners', $imageName, 'images');
            $banner->picture_mobile  = $imagePath;
        }

        $banner->title         = $request->title;	
        $banner->redirection   = $request->redirection;	
        $banner->type          = $request->type;	
        $banner->new_window    = $request->new_window;	
  
        $banner->position      = $request->position;
        $banner->status        = $request->status;
        try{
            $banner->save();			
            return to_route('admin.banners.index')->with('success', 'Banner was updated.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $banner = Banner::where('id',$id)->first() ?? abort(404);
        $title = $banner->title;
        $banner->delete();
        if ($banner->icon) {
            Storage::disk('images')->delete($banner->icon);
           
        }
        return to_route('admin.banners.index')
            ->with('success', "Banner \"$title\" was deleted");
    }
}
