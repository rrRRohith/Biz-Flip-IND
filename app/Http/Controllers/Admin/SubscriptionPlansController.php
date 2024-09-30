<?php

namespace App\Http\Controllers\Admin;

use App\Models\{SubscriptionPlan,SubscriptionOrder};
use Illuminate\Http\Request;
use App\Http\Requests\Subscription\StoreSubscriptionRequest;
use App\Http\Requests\Subscription\UpdateSubscriptioRequest;
use App\Http\Resources\{SubscriptionPlanResource,SubscriptionOrderResource,InvoiceResource};
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Exception;

class SubscriptionPlansController extends Controller
{

    public function plans()
    {
        $plans              = SubscriptionPlan::get();
        $subscribedAgents   = SubscriptionOrder::with('seller')->orderBy('id','desc')->get();
  
        $freePlanAgents     = SubscriptionOrder::orderBy('id','desc')->get();
        $invoices           = SubscriptionOrder::orderBy('id','desc')->get();
        
        return Inertia::render('Admin/Subscription/Plans', [
            'plans' => SubscriptionPlanResource::collection($plans),
            'subscribedAgents' => SubscriptionOrderResource::collection($subscribedAgents),
            'freePlanAgents' => SubscriptionOrderResource::collection($freePlanAgents),
            'invoices' => InvoiceResource::collection($invoices)
        ]);
    }

    public function subscriptionInvoices(){
        $invoices           = SubscriptionOrder::orderBy('id','desc')->notfree()->get();
        return Inertia::render('Admin/Subscription/InvoicesTable', [
            'invoices' => InvoiceResource::collection($invoices)
        ]);
    }

    public function plansStore(StoreSubscriptionRequest $request){
      
        $plans              = new SubscriptionPlan();
        $plans->name        = $request->name;
        $plans->description = $request->description;
        $plans->features    = $request->features;
        $plans->price       = $request->price;
        $plans->ads         = $request->ads;
        $plans->duration    = $request->duration;
        $plans->default     = isset($request->default) ? 1 : 0; 
        $plans->visibility  = isset($request->visibility) ? 1 : 0; 
        $plans->status      = isset($request->status) ? 1 : 0;
      
        try{
            $plans->save();	
            
            return to_route('admin.subscription.index')->with('success', 'Subscription plan was created.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function plansEdit($id){
        $plans = SubscriptionPlan::where('id',$id)->first();
        return Inertia::render('Admin/Subscription/Create',['plan' => new SubscriptionPlanResource($plans)]);
    }

    
    public function plansUpdate(UpdateSubscriptioRequest $request,$id){
      
        $plans              = SubscriptionPlan::where('id',$id)->first() ?? abort(404);
        $plans->name        = $request->name;
        $plans->description = $request->description;
        $plans->features    = $request->features;
        $plans->price       = $request->price;
        $plans->ads         = $request->ads;
        $plans->duration    = $request->duration;
        $plans->default     = ($request->default == 1) ? 1 :0;
        $plans->visibility  = ($request->visibility == 1) ? 1 :0;
        $plans->status      = ($request->status == 1) ? 1 : 0;
      
        try{
            $plans->save();	
            return to_route('admin.subscription.index')->with('success', 'Subscription plan was updated.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

    public function plansDelete($id){
       
        try{
            SubscriptionPlan::where('id',$id)->delete();
            return to_route('admin.subscription.index')->with('success', 'Subscription plan was deleted.');
        }
        catch(Exception $e){
            return $e->getMessage();
        }
    }

}