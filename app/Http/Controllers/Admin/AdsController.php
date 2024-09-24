<?php

namespace App\Http\Controllers\Admin;
use App\Models\{Ad, Category, Facility, Features, Province, DashboardNotification,BusinessCategory};
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Ad\{AdRequest};
use App\Http\Resources\{AdResource,BusinessCategoryResource};
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Exception;
use App\Events\NewNotification;


class AdsController extends Controller
{
    use \App\Emails;
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
        $onHoldAdsList= Ad::with('seller')->where('status',3)->orderBy('updated_at','DESC')->get();
        $categories  = BusinessCategory::where('status',1)->get();
        DashboardNotification::where('recipient_id', auth()->user()->id)->update(['read_at' => date('Y-m-d H:i:s')]);
        return Inertia::render('Admin/Ads/Index', [
                            'ads'              => AdResource::collection($ads),
                            'pendingAdsList'   => AdResource::collection($pendingAdsList),
                            'suspendedAdsList' => AdResource::collection($suspendedAdsList),
                            'soldAdsList'      => AdResource::collection($soldAdsList),
                            'onHoldAdsList'    => AdResource::collection($onHoldAdsList),
                            'categories'       => BusinessCategoryResource::collection($categories)
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
        $statusOld = $ad->status;
        $ad->status = $request->status;
       
        try{
            $ad->save();	

            if($request->status == '0'){
                event(new NewNotification(auth()->user()->id, $ad->seller_id, 'Your Post is Pending Stage', 'A post has been pending stage.', route('account.ads.index')));
            }
            else if($request->status == '1'){
                if($statusOld == '0'){
                    $this->adApproved($ad);
                }
                event(new NewNotification(auth()->user()->id, $ad->seller_id, 'Your Post is Approved', 'A post has been approved.', route('account.ads.index')));
    
            }
            else if($request->status == '-1'){
                event(new NewNotification(auth()->user()->id, $ad->seller_id, 'Your Post is Suspended', 'A post has been suspended.', route('account.ads.index')));
    
            }
           

            
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
