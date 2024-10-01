<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\LeadEnquiry;
use Inertia\Inertia;
use App\Http\Resources\{SellerPlanResource};
use App\Http\Resources\{InvoiceResource};

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
            'can_purchase' => $this->seller->can_post_ads ? false : true,
            'current_invoice' => $this->seller->current_subscription ? new InvoiceResource($this->seller->current_subscription) : null,
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
        if($this->seller->can_post_ads){
            return redirect()->route('account.plans.index')->withError("You still have unused ad benefits. Be sure to take advantage of them before making a new purchase.");
        }
        abort_if($this->seller->can_post_ads, 403, 'You still have unused ad benefits. Be sure to take advantage of them before making a new purchase.');
        \App\Models\SubscriptionPlan::whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        abort_if($this->seller->current_invoice && $plan->default == '1', 404);
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

    public function subscribePlan(Request $request, \App\Models\SubscriptionPlan $plan){
        abort_if($this->seller->current_invoice, 403);
        \App\Models\SubscriptionPlan::whereDefault('1')->whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        \DB::beginTransaction();
        try{
            $request->merge($this->seller->default_billing_address);
            $subscription = $this->subscribeToPlan($request, $plan, $this->seller);
            $this->freeSubscriptionOrder($subscription);
            try {
                event(new \App\Events\NewNotification(1, $this->seller->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('account.invoices.index')));
            } catch (\Exception $e) {}
            \DB::commit();
            return redirect()->route('account.index')->with('success', "Thank you, your subscription has been completed.");
            
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()
            ->with('error', "Something went wrong, please try again.");
        }
    }

    public function update(\App\Http\Requests\PlanPurchaseRequest $request, \App\Models\SubscriptionPlan $plan){
        abort_if($this->seller->can_post_ads, 403, 'You still have unused ad benefits. Be sure to take advantage of them before making a new purchase.');
        \App\Models\SubscriptionPlan::whereStatus('1')->whereVisibility('1')->orderBy('price')->findOrfail($plan->id);
        abort_if($this->seller->current_invoice && $plan->default == '1', 404);
        \DB::beginTransaction();
        try{
            $subscription = $this->subscribeToPlan($request, $plan, $this->seller);
            $this->subscriptionOrder($subscription);
            try {
                event(new \App\Events\NewNotification(1, $this->seller->id, 'Subscription plan activated successfully.', 'Subscription plan activated successfully.', route('account.invoices.index')));
                event(new \App\Events\NewNotification($this->seller->id, 1, 'Subscription plan purchased by account.', 'Subscription plan purchased by account.', route('admin.subscription.index')));
            } catch (\Exception $e) {}
            \DB::commit();
            return redirect()->route('account.invoices.show', ['invoice' => $subscription])->with('success', "Thank you, your subscription has been completed.");
            
        }
        catch(\Exception $e){
            \DB::rollBack();
            return redirect()->back()
            ->with('error', "Something went wrong, please try again.");
        }
    }

}
