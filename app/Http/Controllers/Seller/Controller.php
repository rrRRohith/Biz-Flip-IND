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
use App\Http\Resources\{TicketMessageResource, TicketResource};
use DB;
use App\Http\Resources\SellerSettingsResource;

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

        $leads = $this->seller->leads()->count();
        $views = $this->seller->ad_views()->count();
        
        $view_lead_ratio = $leads > 0 ? (int) (100 / ($views > 0 ? (int) max(($views / $leads), 1) : 1)) : 0;
        
        $showAgentForm = !$this->seller->last_login && $this->seller->seller;
        if(!$this->seller->last_login){
            $this->seller->update([
                'last_login' => now(),
            ]);
        }
        return Inertia::render('Seller/Dashboard', [
            'data' => [
                'ads' => $this->seller->ads()->count(),
                'leads' => $leads,
                'views' => $views,
                'view_lead_ratio' => $view_lead_ratio,
            ],
            'current_invoice' => $this->seller->current_subscription,
            'ads' => AdResource::collection($this->seller->ads()->withCount('views')->orderBy('views_count', 'desc')->get()),
            'tickets' => TicketResource::collection($this->seller->tickets()->latest()->limit(5)->get()),
            'leads' => LeadResource::collection($this->seller->leads()->latest()->limit(5)->get()),
            'showAgentForm' => $showAgentForm,
            'seller' => new SellerSettingsResource($this->seller),
            'province_options' => \App\Models\Province::selectRaw("name as value, name as label")->orderBy('name')->get()->toArray(),
        ]);
    }

    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function graph(Request $request){
        $leadsCollection = collect($this->seller->leads()->search($request)
            ->select(DB::raw('DATE_FORMAT(created_at, "%d-%m-%y") as date'),DB::raw('count(*) as count'))
            ->groupBy('date')->orderByDesc('date')->get()->pluck('count', 'date')->toArray());

        $viewsCollection = collect($this->seller->ad_views()->search($request)
            ->select(DB::raw('DATE_FORMAT(ad_views.created_at, "%d-%m-%y") as date'),DB::raw('count(*) as count'))
            ->groupBy('date', 'ads.seller_id')->orderByDesc('date')->get()->pluck('count', 'date')->toArray());

        $allDates = $leadsCollection->keys()->merge($viewsCollection->keys())->unique();

        $combined = $allDates->mapWithKeys(function ($date) use ($leadsCollection, $viewsCollection) {
            return [
                $date => [
                    'date' => \Carbon\Carbon::createFromFormat('d-m-y', $date)->timestamp,
                    'leads' => $leadsCollection->get($date, 0),
                    'views' => $viewsCollection->get($date, 0)
                ]
            ];
        });

        return response()->json($combined->sortBy('date')->toArray());
    }
}
