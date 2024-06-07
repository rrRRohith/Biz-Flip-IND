<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Ad, Category, Facility, Features, Province};
use App\Http\Requests\Ad\{AdRequest};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\LeadRequest;

class AdController extends BaseController{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
        
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return view('search', [
            'ads' => Ad::search($request)->paginate(24),
            'categories' => Category::all(),
        ]);
    }

    /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param Ad $ad
     */
    public function show(Request $request, Ad $ad){
        return view('listing')->withAd($ad);
    }

    public function update(LeadRequest $request, Ad $ad){
        $ad->leads()->firstOrCreate(
            $request->only('email', 'phone'), $request->only('firstname', 'lastname', 'message')
        )->update([
            'seller_id' => $ad->seller_id,
        ]);
        return response()->json([
            'success' => true,
            'message' => __("Your message sent successfully.")
        ]);
    }

}
