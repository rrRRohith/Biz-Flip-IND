<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\LeadEnquiry;
use Inertia\Inertia;
use App\Http\Resources\{LeadResource};
use App\Http\Requests\{LeadRespondRequest};

class LeadController extends BaseController{
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

        $this->middleware("can:Ads Leads Listing")->only(['index', 'search']);
        $this->middleware("can:Ad Lead Edit")->only(['update']);
        $this->middleware("can:Ad Lead Edit")->only(['destroy']);
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Leads', [
            'categories' => \App\Models\BusinessCategory::selectRaw("id as value, name as label")->get()->toArray(),
            'ads' => $this->seller->ads()->selectRaw("title as label, id as value")->get()->toArray(),
            'leads' => LeadResource::collection($this->seller->leads()->latest()->get()),
        ]);
    }

    public function search(Request $request){
        return response()->json(LeadResource::collection($this->seller->leads()->search($request)->latest()->get()));
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param UpdateRequest $request
     * @param LeadEnquiry $lead
     */
    public function update(Request $request, LeadEnquiry $lead){
        $this->seller->leads()->findOrfail($lead->id);
        try{
            $lead->update([
                'status' => $request->status == 'sold' ? '2' : '1',
                'attender_id' => $this->user->id,
            ]);
            return redirect()->back()->with('success', 'Lead updated successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LeadEnquiry $lead){
        $this->seller->leads()->findOrfail($lead->id);
        $lead->delete();
        return redirect()->back()->with('success', "Lead was deleted");
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param UpdateRequest $request
     * @param LeadEnquiry $lead
     */
    public function respond(LeadRespondRequest $request, LeadEnquiry $lead){
        $this->seller->leads()->findOrfail($lead->id);
        try{
            $lead->update([
                'status' => '1',
                'attender_id' => $this->user->id,
                'response' => $request->message,
            ]);
            if($lead->customer_id){
                $chat = $this->seller->chats()->firstOrCreate([
                    'customer_id' => $lead->customer_id,
                ]);

                $chat->messages()->create([
                    'user_id' => auth()->user()->id,
                    'message' => $request->message,
                ]);

                $lead->update([
                    'chat_id' => $chat->id,
                ]);
            }
            $this->customerLeadResponded($lead);
            return redirect()->back()->with('success', 'Lead responded successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }
}
