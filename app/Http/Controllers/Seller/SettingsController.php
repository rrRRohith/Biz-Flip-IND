<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\SellerSettingsResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\SellerUpdateRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Exception;

class SettingsController extends Controller{
    public $user;
    public $seller;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
			$this->user = \Auth::user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });
    }

    public function index(){
        return Inertia::render('Seller/Settings',['seller' => new SellerSettingsResource($this->seller), 'success' => session('success'),'error' => session('error')]);
    }

    public function store(SellerUpdateRequest $request){
        try{		
            $this->seller->seller ? : $this->seller->seller()->create($request->validated());
            
            $seller = $this->seller->seller;

            $seller->update($request->validated());

            if ($request->has('logo') && $request->logo) {
                if ($seller->logo && $seller->logo != 'default') {
                    Storage::disk('images')->delete($seller->logo);
                }
                $logo = $request->logo;
                $logoName = Str::random(20) . '.' . $logo->getClientOriginalExtension();
                $logoPath = $logo->storeAs('logos', $logoName, 'images');
                $seller->update([
                    'logo' => $logoPath,
                ]);
            }

            $availability = $this->seller->availability ? : $this->seller->availability()->create(['user_id' => $this->seller->id]);
            
            $availability->update($request->days);

            return to_route('seller.settings.index')->with('success', 'Settings updated successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }
}
