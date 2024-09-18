<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\LeadEnquiry;
use Inertia\Inertia;
use App\Http\Resources\{SellerPlanResource};

class PlanController extends BaseController{
    public $user;
    public $seller;
    use \App\Subscription;
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
        $this->middleware("can:Plan Purchase");
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Plan/Index', [
            'can_purchase' => $this->seller->remaining_ads ? false : true,
            'plans' => SellerPlanResource::collection(\App\Models\SubscriptionPlan::whereStatus('1')->whereVisibility('1')->orderBy('price')->get()),
        ]);
    }

     /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param Role $role
     */
    public function show(Request $request, \App\Models\SubscriptionPlan $plan){
        abort_if($this->seller->remaining_ads, 403, 'You still have unused ad benefits. Be sure to take advantage of them before making a new purchase.');
        \App\Models\SubscriptionPlan::whereDefault('0')->whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        return Inertia::render('Seller/Plan/Plan', [
            'address' => [
                'address' => $this->seller->address,
                'city' => $this->seller->city,
                'postalcode' => $this->seller->seller->postalcode ?? null,
                'province' => $this->seller->seller->province ?? null,
                'firstname' => $this->seller->firstname,
                'lastname' => $this->seller->lastname,
                'phone' => $this->seller->phone,
                'email' => $this->seller->email,
            ],
            'plan' => $plan,
            'province_options' => \App\Models\Province::selectRaw("name as value, name as label")->orderBy('name')->get()->toArray(),
        ]);
    }

    public function update(\App\Http\Requests\PlanPurchaseRequest $request, \App\Models\SubscriptionPlan $plan){
        abort_if($this->seller->remaining_ads, 403, 'You still have unused ad benefits. Be sure to take advantage of them before making a new purchase.');
        \App\Models\SubscriptionPlan::whereDefault('0')->whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        \DB::beginTransaction();
        try{
            $subscription = $this->subscribeToPlan($request, $plan, $this->seller);
            $this->subscriptionOrder($subscription);
            try {
                event(new \App\Events\NewNotification(1, $this->seller->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('seller.invoices.index')));
                event(new \App\Events\NewNotification($this->seller->id, 1, 'Subscription plan purchased by seller.', 'Subscription plan purchased by seller.', route('admin.subscription.index')));
            } catch (\Exception $e) {}
            \DB::commit();
            return redirect()->route('seller.invoices.show', ['invoice' => $subscription])->with('success', "Thank you, your subscription has been completed.");
            
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()
            ->with('error', "Something went wrong, please try again.");
        }
    }

}
