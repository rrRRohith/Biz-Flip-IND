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
     * @param Ad $ad
     */
    public function show(Request $request, User $agent){
        User::sellers()->findOrfail($agent->id);
        return view('agent', [
            'search_categories' => Category::all(),
            'search_purposeOptions' => ['Rental','Lease','Sale'],
        ])->withSeller($agent);
    }

    public function update(LeadRequest $request, User $agent){
        $agent->leads()->firstOrCreate(
            $request->only('email', 'phone'), $request->only('firstname', 'lastname', 'message')
        );
        return response()->json([
            'success' => true,
            'message' => __("Your message sent successfully.")
        ]);
    }

}
