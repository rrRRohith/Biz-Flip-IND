<?php

namespace App\Http\Controllers\Admin;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Http\Requests\Testimonial\StoreTestimonialRequest;
use App\Http\Requests\Testimonial\UpdateTestimonialRequest;
use App\Http\Resources\TestimonialResource;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TestimonialController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonialList = Testimonial::query()->paginate(10);
       
        return Inertia::render('Admin/Testimonial/Index',['testimonialList' => TestimonialResource::collection($testimonialList),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Testimonial/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestimonialRequest $request)
    {
        //
        
        /** @var $image \Illuminate\Http\UploadedFile */
        $image =$request->image ?? null;
   
        if ($image) {
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('testimonial', $imageName, 'images');
         
        }

        $new                = new Testimonial();
        $new->name          = $request->name;
        $new->company_name  = $request->company_name;
        $new->designation   = $request->designation;
        $new->image         = $imagePath ?? null;
        $new->message       = $request->message;
        $new->position      = $request->position;
        $new->status        = $request->status;
        try{
            $new->save();			
            return to_route('admin.testimonial.index')->with('success', 'Testimonial was created.');
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
        $testimonial = Testimonial::where('id',$id)->first();
        return response()->json(new TestimonialResource($testimonial));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        
        $testimonial = Testimonial::where('id',$id)->first();
      
        return Inertia::render('Admin/Testimonial/Edit',['testimonial_item' => new TestimonialResource($testimonial),'success' => session('success'),'error' => session('error')]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestimonialRequest $request,$id)
    {
        //

      

        $testimonial = Testimonial::where('id',$id)->first() ?? abort(404);
        $data = $request->validated();
        $image = $data['image'] ?? null;


        // Handle image removal
        if ($request->remove_image) {
            if ($testimonial->image) {
                Storage::disk('images')->delete($testimonial->image);
                $testimonial->image = null;
            }
        }

        if ($image) {
            if ($testimonial->image) {
                Storage::disk('images')->delete($testimonial->image);
            }
            $imageName = Str::random(20) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('testimonial', $imageName, 'images');
            $testimonial->image  = $imagePath;
        }

        $testimonial->name          = $request->name;
        $testimonial->company_name  = $request->company_name;
        $testimonial->designation   = $request->designation;
        $testimonial->message       = $request->message;
        $testimonial->position      = $request->position;
        $testimonial->status        = $request->status;
        $testimonial->save();

        return to_route('admin.testimonial.index')
            ->with('success', "Testimonial \"$testimonial->name\" was updated");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
   
        $testimonial = Testimonial::where('id',$id)->first() ?? abort(404);
        $name = $testimonial->name;
        $testimonial->delete();
        if ($testimonial->image) {
            Storage::disk('images')->delete($testimonial->image);
           
        }
        return to_route('admin.testimonial.index')
            ->with('success', "Testimonial \"$name\" was deleted");
    }
}
