<?php

namespace App\Http\Controllers\Admin;

use App\Models\{SubscriptionPlan,SubscriptionOrder};
use Illuminate\Http\Request;
use App\Http\Requests\Subscription\StoreSubscriptionRequest;
use App\Http\Requests\Subscription\UpdateSubscriptioRequest;
use App\Http\Resources\{SubscriptionPlanResource,SubscriptionOrderResource};
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
  
        $freePlanAgents     = SubscriptionOrder::orderBy('id','desc')->paginate(30);
        $invoices           = SubscriptionOrder::orderBy('id','desc')->paginate(30);
        
       
        

        return Inertia::render('Admin/Subscription/Plans', [
            'plans' => SubscriptionPlanResource::collection($plans),
            'subscribedAgents' => SubscriptionOrderResource::collection($subscribedAgents),
            'freePlanAgents' => SubscriptionOrderResource::collection($freePlanAgents),
            'invoices' => SubscriptionOrderResource::collection($invoices)
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
        $plans->default     = isset($request->default) ? 1 :0;
        $plans->visibility  = isset($request->visibility) ? 1 :0;
        $plans->status      = isset($request->status) ? 1 : 0;
      
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

    public function subscribedAgents(Request $request){
        $agents = SubscriptionOrder::groupBy('seller_id')->query()->paginate(30);
        return Inertia::render('Admin/Subscription/Plans',['plans' => SubscriptionOrderResource::collection($agents)]);
    }
    
    public function freePlanAgents(Request $request){
        $agents = SubscriptionOrder::groupBy('seller_id')->where('price',0)->query()->paginate(30);
        return Inertia::render('Admin/Subscription/Plans',['plans' => SubscriptionOrderResource::collection($agents)]);
    }

    public function subscriptionInvoices(Request $request){
        $invoices = SubscriptionOrder::orderBy('desc')->query()->paginate(30);
        return Inertia::render('Admin/Subscription/Plans',['plans' => SubscriptionOrderResource::collection($invoices)]);
    }

    public function subscriptionInvoicesShow($id){
        $invoice = SubscriptionOrder::orderBy('desc')->query()->paginate(30);
        return Inertia::render('Admin/Subscription/Plans',['plans' => new SubscriptionOrderResource($invoice)]);
    }



}