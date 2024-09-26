<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\SellerSettingsResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\{
    SellerUpdateRequest,
    SellerUpdateStep1Request,
    SellerUpdateStep2Request,
    SellerUpdateStep3Request
};
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
			$this->user = auth()->user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });

        $this->middleware("can:Settings")->only(['index']);
        $this->middleware("can:Settings")->only(['store']);
    }

    public function index(){
        return Inertia::render('Seller/Settings',[
            'API_KEY' => env('MAP_API_KEY'),
            'seller' => new SellerSettingsResource($this->seller),
            'province_options' => \App\Models\Province::selectRaw("name as value, name as label")->orderBy('name')->get()->toArray(),
        ]);
    }

    public function store(SellerUpdateRequest $request){
        try{		
            $this->seller->seller ? : $this->seller->seller()->create($request->validated());
            
            $this->seller->refresh();
            
            $seller = $this->seller->seller;

            $seller->update($request->validated());
            $seller->update([
                'slug' => Str::slug($seller->company_name.'-'.Str::random(4)),
                'has_public_view' => 1,
                'lat' => $request->location['lat'] ?? null,
                'lng' => $request->location['lng'] ?? null,
            ]);

            if ($request->has('logo') && $request->logo) {
                if ($seller->logo && $seller->logo != 'default') {
                    Storage::disk('images')->delete($seller->logo);
                }
                $logo = $request->logo;
                $logoPath = $this->uploadFile(file : $logo, path : 'logos', maxHeight : 200, maxWidth : 200, ratio: '1:1');
                $seller->update([
                    'logo' => $logoPath,
                ]);
            }

            $availability = $this->seller->availability ? : $this->seller->availability()->create(['user_id' => $this->seller->id]);
            
            $availability->update($request->days);
            $this->seller->socials()->delete();
            foreach($request->socials ?? [] as $social => $status){
                $this->seller->socials()->create([
                    'site' => $social,
                    'link ' => ($request->{$social} ?? null),
                    'status' => $status
                ]);
            }

            return redirect()->back()->with('success', 'Settings updated successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function storeStep1(SellerUpdateStep1Request $request){
        try{		
            $this->seller->seller ? : $this->seller->seller()->create($request->validated());
            
            $this->seller->refresh();
            
            $seller = $this->seller->seller;

            $seller->update($request->validated());
            $seller->update([
                'slug' => Str::slug($seller->company_name.'-'.Str::random(4)),
                'has_public_view' => 1,
            ]);

            if ($request->has('logo') && $request->logo) {
                if ($seller->logo && $seller->logo != 'default') {
                    Storage::disk('images')->delete($seller->logo);
                }
                $logo = $request->logo;
                $logoPath = $this->uploadFile(file : $logo, path : 'logos', maxHeight : 200, maxWidth : 200, ratio: '1:1');
                $seller->update([
                    'logo' => $logoPath,
                ]);
            }
            session(['forceAgentForm' => true, 'agentFormShown' => false]);
            return redirect()->back()->with('success', 'Settings updated successfully.');
            
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function storeStep2(SellerUpdateStep2Request $request){
        try{		
            $this->seller->seller ? : $this->seller->seller()->create($request->validated());
            
            $this->seller->refresh();
            
            $seller = $this->seller->seller;

            $seller->update($request->validated());
            $seller->update([
                'lat' => $request->location['lat'] ?? null,
                'lng' => $request->location['lng'] ?? null,
            ]);
            session(['forceAgentForm' => true, 'agentFormShown' => false]);
            return redirect()->back()->with('success', 'Settings updated successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function storeStep3(SellerUpdateStep3Request $request){
        try{	
            session(['forceAgentForm' => false, 'agentFormShown' => true]);	
            return redirect()->back()->with('success', 'Settings updated successfully.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }
}
