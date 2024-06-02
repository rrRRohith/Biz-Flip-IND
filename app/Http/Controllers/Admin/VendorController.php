<?php

namespace App\Http\Controllers\Admin;

use App\Models\Seller;
use Illuminate\Http\Request;
use App\Http\Resources\VendorResource;
use App\Http\Requests\Seller\SellerStoreRequest;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use PHPUnit\Metadata\Uses;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vendorsList = Seller::with('user')->get();

        return Inertia::render('Admin/Seller/Index',['vendorsList' => VendorResource::collection($vendorsList),'success' => session('success'),'error' => session('error')]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Admin/Seller/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SellerStoreRequest $request)
    {
        //
        try{
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
        $user->picture      = $request->picture;
        $user->designation  = $request->designation;
        $user->unique_code  = $this->unique_code();
        $user->password     = Hash::make($request->password ?? 12345678);
        $user->status       = $request->status;
        $user->save();

            $seller                     = new Seller();
            $seller->user_id            = $user->id;
            $seller->short_description  = $request->short_description;
            $seller->description        = $request->description;
            $seller->logo               = $request->logo;
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
            $seller->has_public_view    = $request->has_public_view;
            $seller->position           = $request->position;
            $seller->save();
          
             		
                return to_route('admin.sellers.index')->with('success', 'Seller was created.');
            }
            catch(Exception $e){
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
    public function edit( $id)
    {
        //
        $vendor = Seller::with('user')->where('user_id',$id)->first();
        return Inertia::render('Admin/Seller/Edit',['vendor' => new VendorResource($vendor)]);


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $seller = Seller::with('user')->where('user_id',$id)->first();

        try{
            $user               = User::where('id',$id)->first();
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
            $user->picture      = $request->picture;
            $user->designation  = $request->designation;
            $user->password     = Hash::make($request->password ?? 12345678);
            $user->status       = $request->status;
            $user->save();
    
                
                $seller->user_id            = $user->id;
                $seller->short_description  = $request->short_description;
                $seller->description        = $request->description;
                $seller->logo               = $request->logo;
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
                $seller->has_public_view    = $request->has_public_view;
                $seller->position           = $request->position;
                $seller->save();
              
                         
                    return to_route('admin.sellers.index')->with('success', 'Seller was created.');
                }
                catch(Exception $e){
                    return $e->getMessage();
                }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seller $vendor)
    {
        //
    }


    public function unique_code_generate(){
        return $this->unique_code();
    }
    
    
    function unique_code(){
        
        $pin_gen = rand(00000, 99999).str_pad( 5, STR_PAD_LEFT);
        
        $check_pin = User::where('unique_code',$pin_gen)->first();
        
        if($check_pin){
            return $this->unique_code();
        }
        else
        {
            if(strlen($pin_gen) == 6)
                return $pin_gen;
            else
                return $this->unique_code();
        }
        return $pin_gen;
    }
    
}
