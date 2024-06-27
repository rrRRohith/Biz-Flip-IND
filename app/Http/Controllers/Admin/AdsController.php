<?php

namespace App\Http\Controllers\Admin;
use App\Models\{Ad, Category, Facility, Features, Province};
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Ad\{AdRequest};
use App\Http\Resources\{AdResource};
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Exception;

class AdsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $ads = Ad::with('seller')->where('status',1)->orderBy('updated_at','DESC')->get();
       
        $pendingAdsList= Ad::with('seller')->where('status',0)->orderBy('updated_at','DESC')->get();
        $suspendedAdsList= Ad::with('seller')->where('status',-1)->orderBy('updated_at','DESC')->get();
        $soldAdsList= Ad::with('seller')->where('status',2)->orderBy('updated_at','DESC')->get();

        return Inertia::render('Admin/Ads/Index', [
                            'ads' => AdResource::collection($ads),
                            'pendingAdsList' => AdResource::collection($pendingAdsList),
                            'suspendedAdsList' => AdResource::collection($suspendedAdsList),
                            'soldAdsList' => AdResource::collection($soldAdsList),
                        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Ad $ads,$id)
    {
        //
       $ad =  $ads->with('seller')->where('id',$id)->first();
       return response()->json(new AdResource($ad));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ad $ads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ad $ads, $id)
    {
        //
        $ad =  $ads->with('seller')->where('id',$id)->first();
        $ad->status = $request->status;
       
        try{
            $ad->save();		
            return to_route('admin.ads.index')->with('success', 'Ad was updated.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ads)
    {
        //
    }


    public function pendingApprovel(){
        $ads = Ad::with('seller')->orderBy('updated_at','DESC')->where('status',0)->get();
        return Inertia::render('Admin/Ads/PendingApprovel', [
                            'ads' => AdResource::collection($ads),
                        ]);
    }
}
