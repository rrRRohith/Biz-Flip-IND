<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Ad, Category, Facility, Features, Province, User};
use App\Http\Requests\Ad\{AdRequest};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\LeadRequest;

class AgentController extends BaseController{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        
    }

    /**
     * Show the specified resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        $agents = User::sellers()->whereStatus('1')->searchAgent($request)->paginate(24)->appends(request()->query());
        return $request->ajax() ? response()->json([
            'success' => true,
            'total_agents' => $agents->total(),
            'html' => view('agents.results')->withAgents($agents)->render(),
        ]) : view('agents.index', [
            'search_purposeOptions' => ['Rental','Lease','Sale'],
            'agents' => $agents,
        ]);
    }

    /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param \App\Models\Seller $agent
     */
    public function show(Request $request, \App\Models\Seller $agent){
        $user = User::sellers()->findOrfail($agent->user_id);
        return view('agents.agent', [
            'ad_categories' => Category::all(),
            'business_categories'  => \App\Models\BusinessCategory::all(),
            'search_purposeOptions' => ['Rental','Lease','Sale'],
        ])->withSeller($user);
    }

    public function update(LeadRequest $request, \App\Models\Seller $agent){
        $agent = User::sellers()->findOrfail($agent->user_id);
        $agent->leads()->firstOrCreate(
            $request->only('email', 'phone'), $request->only('firstname', 'lastname', 'message')
        );

        if(auth()->check() && auth()->user()->type == 'customer'){
            $chat = $agent->chats()->firstOrCreate([
                'customer_id' => auth()->user()->id,
            ]);

            $chat->messages()->create([
                'user_id' => auth()->user()->id,
                'message' => $request->message,
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => __("Your message sent successfully.")
        ]);
    }

}
