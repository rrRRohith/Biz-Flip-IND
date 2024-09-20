<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Resources\{VendorResource,SellerResource};
use App\Http\Requests\Seller\SellerStoreRequest;
use App\Http\Requests\Seller\SellerUpdateRequest;
use App\Models\{User,City,Seller,SellerAvailability,Province};
use Exception;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\FeatureLabel;
use PHPUnit\Metadata\Uses;
use App\Events\NewNotification;

class VendorController extends Controller
{

    private $user;
    use \App\Subscription;
    
    public function __construct(Request $request)
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->user = auth()->user();
            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vendorsList            = User::where('type','seller')->with('seller')->where('status',1)->get();
        $pendingVendorsList     = User::where('type','seller')->with('seller')->where('status',0)->get();
        $suspendedVendorsList   = User::where('type','seller')->with('seller')->where('status',-1)->get();

        return Inertia::render('Admin/Seller/Index', 
                    [
                    'vendorsList' => VendorResource::collection($vendorsList),
                    'pendingVendorsList' => VendorResource::collection($pendingVendorsList),
                    'suspendedVendorsList' => VendorResource::collection($suspendedVendorsList)
                    ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        $cities = City::where('status', 1)->orderBy('position')->pluck('name')->map(function ($city) {
                            return ['value' => $city, 'label' => $city];
                        })->toArray();
        $provinces = Province::where('status', 1)->orderBy('position')->pluck('name')->map(function ($province) {
                                    return ['value' => $province, 'label' => $province];
                                })->toArray();
                                
        $featureLabel = FeatureLabel::where('status', 1)->select('name', 'id')->get()
                                ->map(function ($feature) {
                                    return ['value' => $feature->id, 'label' => $feature->name];
                                })->toArray();

        return Inertia::render('Admin/Seller/Create', ['cities' => $cities,'provinces' => $provinces,'featureLabel'=> $featureLabel]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SellerStoreRequest $request)
    {
   

        if ($request->has('picture') && $request->picture) {
            $imgPath = $this->uploadFile(file : $request->picture, path : 'avatars', maxHeight : 200, maxWidth : 200, ratio: '1:1');
        }

        
        if ($request->has('logo') && $request->logo) {
            $imgPath2 = $this->uploadFile(file : $request->logo, path : 'logo', maxHeight : 200, maxWidth : 200, ratio: '1:1');
        }

        try {
            $user               = new User();
            $user->firstname    = $request->firstname;
            $user->lastname     = $request->lastname;
            $user->email        = $request->email;
            $user->phone        = $request->phone;
            $user->address      = $request->address;
            $user->postalcode   = $request->postalcode;
            $user->city         = $request->city;
            $user->province     = $request->province;
            $user->country      = $request->country;
            $user->type         = 'seller';
            $user->role_id      = 2;
            $user->parent_id    = null;
            $user->picture      = $imgPath ?? null;
            $user->designation  = $request->designation;
            $user->unique_code  = $this->unique_code();
            $user->password     = Hash::make($request->password ?? 12345678);
            $user->status       = $request->status;
            $user->save();

            try {
                $this->accountCreated($user);
                if($defaultPlan = \App\Models\SubscriptionPlan::whereDefault('1')->first()){
                    $this->subscribeToPlan($request, $defaultPlan, $user);
                    try {
                        event(new \App\Events\NewNotification(1, $user->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('seller.invoices.index')));
                    } catch (\Exception $e) {}
                }
            } catch (\Exception $e) {
                
            }

            $seller                     = new Seller();
            $seller->user_id            = $user->id;
            $seller->short_description  = $request->short_description;
            $seller->description        = $request->description;
            $seller->logo               = $imgPath2 ?? null;
            $seller->company_name       = $request->company_name;
            $seller->address            = $request->full_address;
            $seller->email              = $request->company_email;
            $seller->phone              = $request->company_phone;
            $seller->alt_email          = $request->alt_email;
            $seller->alt_phone          = $request->alt_phone;
            $seller->map_code           = $request->map_code;
            $seller->lat                = $request->lat;
            $seller->lng                = $request->lng;
            $seller->employee           = $request->employee;
            $seller->website            = $request->website;
            $seller->feature_label_id   = $request->featureLabel ?? null;
            $seller->business_type      = $request->business_type;
            $seller->has_public_view    = $request->has('public_profile_on') && $request->public_profile_on ? 1 : 0;
            $seller->position           = $request->position;
            $seller->save();

            $seller->update([
                'slug' => Str::slug($seller->company_name.'-'.Str::random(4)),
            ]);

            $availableDay           = new SellerAvailability();
            $availableDay->user_id	= $user->id;
            $availableDay->mon	    = $request->days['mon'] ?? 0;
            $availableDay->tue	    = $request->days['tue'] ?? 0;
            $availableDay->wed	    = $request->days['wed'] ?? 0;
            $availableDay->thu	    = $request->days['thu'] ?? 0;
            $availableDay->fri	    = $request->days['fri'] ?? 0;
            $availableDay->sat	    = $request->days['sat'] ?? 0;
            $availableDay->sun      = $request->days['sun'] ?? 0;
            $availableDay->save();

            return to_route('admin.sellers.index')->with('success', 'Seller was created.');
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $vendor = User::with('seller')->where('id', $id)->first() ?? abort(404);
        return response()->json(new VendorResource($vendor));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $vendor = User::with('seller')->where('id', $id)->first() ?? abort(404);

        $cities = City::where('status', 1)->orderBy('position')->pluck('name')->map(function ($city) {
            return ['value' => $city, 'label' => $city];
        })->toArray();
        $provinces = Province::where('status', 1)->orderBy('position')->pluck('name')->map(function ($province) {
            return ['value' => $province, 'label' => $province];
        })->toArray();
    
        $featureLabel = FeatureLabel::where('status', 1)->select('name', 'id')->get()
        ->map(function ($feature) {
            return ['value' => $feature->id, 'label' => $feature->name];
        })->toArray();

       
        return Inertia::render('Admin/Seller/Edit', ['seller' => new VendorResource($vendor),'cities' => $cities,'provinces' => $provinces,'featureLabel' => $featureLabel]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SellerUpdateRequest $request, $id)
    {
        //
        $user   = User::where('id', $id)->first() ?? abort(404);
        $seller = Seller::with('user')->where('user_id', $user->id)->first();

        // if(!$seller){
            // $seller = new Seller();
        // }
        
        if ($request->remove_picture) {
            if (($user->picture) && ($user->picture != null)) {
                Storage::disk('images')->delete($user->picture);
                $user->picture = null;
            }
        }

        if($seller){
            if ($request->remove_logo) {
                if (($seller->logo) && ($seller->logo != null) ) {
                    Storage::disk('images')->delete($seller->logo);
                    $seller->logo = null;
                }
            }

        }
        

        try {
           
            $user->firstname    = $request->firstname;
            $user->lastname     = $request->lastname;
            $user->email        = $request->email;
            $user->phone        = $request->phone;
            $user->address      = $request->address;
            $user->postalcode   = $request->postalcode;
            $user->city         = $request->city;
            $user->province     = $request->province;
            $user->country      = $request->country;
            $user->designation  = $request->designation;

            if($request->has('password') && $request->password){
                $user->password     =  Hash::make($request->password);
            }

            if ($request->picture) {
                if (($user->picture) && ($user->picture != null)) {
                    Storage::disk('images')->delete($user->picture);
                }
                $user->picture = $this->uploadFile(file : $request->picture, path : 'avatars', maxHeight : 200, maxWidth : 200, ratio: '1:1');
            }

            
            $user->status       = $request->status;
            $user->save();

            if($seller){
                $seller->short_description  = $request->short_description;
                $seller->description        = $request->description;
                $seller->company_name       = $request->company_name;
                $seller->address            = $request->address;
                $seller->email              = $request->email;
                $seller->phone              = $request->phone;
                $seller->alt_email          = $request->alt_email;
                $seller->alt_phone          = $request->alt_phone;
                $seller->map_code           = $request->map_code;
                $seller->lat                = $request->lat;
                $seller->lng                = $request->lng;
                $seller->employee           = $request->employee;
                $seller->website            = $request->website;
                $seller->feature_label_id   = $request->featureLabel ?? null;
                $seller->business_type      = $request->business_type;
                $seller->has_public_view    =  $request->has('public_profile_on') && $request->public_profile_on ? 1 : 0;
                $seller->position           = $request->position;

                if ($request->logo) {
                    if (($seller->logo) && ($seller->logo != null) ) {
                        Storage::disk('images')->delete($seller->logo);
                    }
                    $seller->logo = $this->uploadFile(file : $request->logo, path : 'logo', maxHeight : 200, maxWidth : 200, ratio: '1:1');
                }
                $seller->save();

                $seller->update([
                    'slug' => Str::slug($seller->company_name.'-'.Str::random(4)),
                ]);
            }
            
             SellerAvailability::where('user_id',$user->id)->delete();

            $availableDay           = new SellerAvailability();
            $availableDay->user_id	= $user->id;
            $availableDay->mon	    = $request->days['mon'] ?? null;
            $availableDay->tue	    = $request->days['tue'] ?? null;
            $availableDay->wed	    = $request->days['wed'] ?? null;
            $availableDay->thu	    = $request->days['thu'] ?? null;
            $availableDay->fri	    = $request->days['fri'] ?? null;
            $availableDay->sat	    = $request->days['sat'] ?? null;
            $availableDay->sun      = $request->days['sun'] ?? null;
            $availableDay->save();


            return to_route('admin.sellers.index')->with('success', 'Seller was updated.');

        } catch (Exception $e) {
            return $e;
        }
    }


    public function statusUpdate(Request $request,$user_id){
        $user   = User::where('id', $user_id)->first() ?? abort(404);
        $user->status = $request->status;
        try{
             $user->save();	
           
            if($request->status == '0'){
                event(new NewNotification(auth()->user()->id, $user_id, 'Your Account is Pending Stage', 'A account has been pending stage.', route('seller.index')));
            }
            else if($request->status == '1'){
                $this->accountApproved($user);
                event(new NewNotification(auth()->user()->id, $user_id, 'Your Account is Approved', 'A account has been approved.', route('seller.index')));
    
            }
            else if($request->status == '-1'){
                event(new NewNotification(auth()->user()->id, $user_id, 'Your Account is Suspended', 'A account has been suspended.', route('seller.index')));
            }

           	
            return to_route('admin.sellers.index')->with('success', 'Status was updated.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($user_id)
    {       
        $user   = User::where('id', $user_id)->first() ?? abort(404);
        $seller = Seller::with('user')->where('user_id', $user_id)->first();
        SellerAvailability::where('user_id',$user_id)->delete();
        
        if (($user->picture) && ($user->picture != null)) {
            Storage::disk('images')->delete($user->picture);
        }

        if ($seller && ($seller->logo) && ($seller->logo != null)) {
            Storage::disk('images')->delete($seller->logo);
        }
        
        if($seller){

            $seller->delete();
        }
        $user->delete();

        return to_route('admin.sellers.index')
            ->with('success', "Slleer was deleted");

    }


    public function unique_code_generate()
    {
        return $this->unique_code();
    }


    function unique_code()
    {

        $pin_gen = rand(00000, 99999) . str_pad(5, STR_PAD_LEFT);

        $check_pin = User::where('unique_code', $pin_gen)->first();

        if ($check_pin) {
            return $this->unique_code();
        } else {
            if (strlen($pin_gen) == 6)
                return $pin_gen;
            else
                return $this->unique_code();
        }
        return $pin_gen;
    }


    function pendingApprovel(){
        $seller = User::with('seller')->where('type','seller')->orderBy('updated_at','DESC')->where('status',0)->get();
       
        return Inertia::render('Admin/Seller/PendingApprovel', [
                            'sellers' => SellerResource::collection($seller),
                        ]);
    }
}
