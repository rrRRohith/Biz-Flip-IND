<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Ad, Category, Facility, Features, Province};
use App\Http\Requests\Ad\{AdRequest};
use Inertia\Inertia;
use App\Http\Resources\{AdResource};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\{LeadResource};

class Controller extends BaseController{
    public $user;
    public $seller;
    use \App\Helper\Upload;
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
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function dashboard(Request $request){
        $ads = $this->seller->ads()->count();
        $leads = $this->seller->leads()->count();
        $views = $this->seller->ad_views()->count();
    
        // Calculate view_lead_ratio safely
        $view_lead_ratio = $leads > 0 ? (int) (100 / ($views > 0 ? (int) ($views / $leads) : 1)) : 0;
    
        return Inertia::render('Seller/Dashboard', [
            'data' => [
                'ads' => $ads,
                'leads' => $leads,
                'views' => $views,
                'view_lead_ratio' => $view_lead_ratio,
            ],
            'leads' => LeadResource::collection($this->seller->leads()->latest()->limit(5)->get()),
        ]);
    }
}
