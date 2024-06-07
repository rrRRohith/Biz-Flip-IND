<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests\ContactRequest;

class Controller extends BaseController{
    use AuthorizesRequests, ValidatesRequests;

    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct(){
        //
    }

    public function home(){
        $houses = \App\Models\Category::whereSlug('house')->first();
        $franchises = \App\Models\Category::whereSlug('franchise')->first();
        return view('welcome', [
            'categories' => \App\Models\Category::limit(6)->get(),
            'houses' => $houses ? $houses->ads()->limit(4)->get() : collect([]),
            'franchises' => $franchises ? $franchises->ads()->limit(4)->get() : collect([]),
            'sellers' => \App\Models\User::sellers()->limit(6)->get(),
        ]);
    }

    public function contact(ContactRequest $request){
        \App\Models\ContactEnquiry::create($request->validated());
        return response()->json([
            'success' => true,
            'message' => __("Your message sent successfully.")
        ]);
    }

}