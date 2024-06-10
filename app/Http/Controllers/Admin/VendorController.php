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
use PHPUnit\Metadata\Uses;

class VendorController extends Controller
{

    private $user;

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
        $vendorsList = Seller::with('user')->get();

        return Inertia::render('Admin/Seller/Index', ['vendorsList' => VendorResource::collection($vendorsList)]);
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
        return Inertia::render('Admin/Seller/Create', ['cities' => $cities,'provinces' => $provinces]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SellerStoreRequest $request)
    {
   

        if ($request->has('picture') && $request->picture) {
            $picture = $request->picture;
            $imgName = Str::random(20) . '.' . $picture->getClientOriginalExtension();
            $imgPath = $picture->storeAs('avatars', $imgName, 'images');
        }

        
        if ($request->has('logo') && $request->logo) {
            $logo = $request->logo;
            $imgName2 = Str::random(20) . '.' . $logo->getClientOriginalExtension();
            $imgPath2 = $logo->storeAs('logo', $imgName2, 'images');
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

            $seller                     = new Seller();
            $seller->user_id            = $user->id;
            $seller->short_description  = $request->short_description;
            $seller->description        = $request->description;
            $seller->logo               = $imgPath2;
            $seller->company_name       = $request->company_name;
            $seller->address            = $request->full_address;
            $seller->email              = $request->company_email;
            $seller->phone              = $request->company_phone;
            $seller->alt_email          = $request->alt_email;
            $seller->alt_phone          = $request->alt_phone;
            $seller->map_code           = $request->map_code;
            $seller->lat                = $request->lat;
            $seller->long               = $request->long;
            $seller->employee           = $request->employee;
            $seller->website            = $request->website;
            $seller->feature_label_id   = null;
            $seller->business_type      = $request->business_type;
            $seller->has_public_view    = $request->has('public_profile_on') && $request->public_profile_on ? 1 : 0;
            $seller->position           = $request->position;
            $seller->save();

            $availableDay           = new SellerAvailability();
            $availableDay->user_id	= $user->id;
            $availableDay->mon	    = $request->days['mon'];
            $availableDay->tue	    = $request->days['tue'];
            $availableDay->wed	    = $request->days['wed'];
            $availableDay->thu	    = $request->days['thu'];
            $availableDay->fri	    = $request->days['fri'];
            $availableDay->sat	    = $request->days['sat'];
            $availableDay->sun      = $request->days['sun'];
            $availableDay->save();

            return to_route('admin.sellers.index')->with('success', 'Seller was created.');
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Seller $vendor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $vendor = Seller::with('user')->where('user_id', $id)->first();

        $cities = City::where('status', 1)->orderBy('position')->pluck('name')->map(function ($city) {
            return ['value' => $city, 'label' => $city];
        })->toArray();
        $provinces = Province::where('status', 1)->orderBy('position')->pluck('name')->map(function ($province) {
            return ['value' => $province, 'label' => $province];
        })->toArray();
    

       
        return Inertia::render('Admin/Seller/Edit', ['seller' => new VendorResource($vendor),'cities' => $cities,'provinces' => $provinces]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SellerUpdateRequest $request, $id)
    {
        //
        $seller = Seller::with('user')->where('user_id', $id)->first();

        
        if ($request->remove_picture) {
            if ($seller->user->picture) {
                Storage::disk('images')->delete($seller->user->picture);
                $seller->user->picture = null;
            }
        }
        if ($request->remove_logo) {
            if ($seller->logo) {
                Storage::disk('images')->delete($seller->logo);
                $seller->logo = null;
            }
        }
        
       


    

        try {
            $user               = User::where('id', $id)->first();
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

            $image = $request->picture;
            if ($image) {
                if ($user->picture) {
                    Storage::disk('images')->delete($user->picture);
                }
                $imageName          = Str::random(20) . '.' . $image->getClientOriginalExtension();
                $imagePath          = $image->storeAs('avatars', $imageName, 'images');
                $user->picture      = $imagePath ?? null;
            }

            
            $user->status       = $request->status;
            $user->save();

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
            $seller->long               = $request->long;
            $seller->employee           = $request->employee;
            $seller->website            = $request->website;
            $seller->feature_label_id   = null;
            $seller->business_type      = $request->business_type;
            $seller->has_public_view    =  $request->has('public_profile_on') && $request->public_profile_on ? 1 : 0;
            $seller->position           = $request->position;

            $logo = $request->logo;
            if ($logo) {
                if ($seller->logo) {
                    Storage::disk('images')->delete($seller->logo);
                }
                $imageName      = Str::random(20) . '.' . $logo->getClientOriginalExtension();
                $imagePath      = $logo->storeAs('logo', $imageName, 'images');
                $seller->logo   = $imagePath ?? null;
            }
            $seller->save();
            
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($user_id)
    {       
        $user   = User::where('id', $user_id)->first() ?? abort(404);
        $seller = Seller::with('user')->where('user_id', $user_id)->first();
        SellerAvailability::where('user_id',$user_id)->delete();
        
        if ($user->picture) {
            Storage::disk('images')->delete($user->picture);
        }

        if ($seller->logo) {
            Storage::disk('images')->delete($seller->logo);
        }
        
        $seller->delete();
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
