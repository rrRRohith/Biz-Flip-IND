<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests\{ContactRequest, SubscribeRequest};

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
        $houses = \App\Models\Category::whereSlug('houses')->first();
        $franchises = \App\Models\Category::whereSlug('franchise')->first();
        return view('welcome', [
            'categories' => \App\Models\BusinessCategory::limit(6)->get(),
            'houses' => $houses ? $houses->ads()->limit(4)->get() : collect([]),
            'franchises' => $franchises ? $franchises->ads()->limit(4)->get() : collect([]),
            'sellers' => \App\Models\User::sellers()->whereStatus('1')->limit(6)->get(),
            'ad_categories' => \App\Models\Category::all(),
            'business_categories'  => \App\Models\BusinessCategory::all(),
            'search_purposeOptions' => ['Rental','Lease','Sale'],
            'testimonials' => \App\Models\Testimonial::latest()->limit(10)->get()->chunk(2)->map(function ($group) {
                return collect($group);
            }),
        ]);
    }

    public function contact(ContactRequest $request){
        \App\Models\ContactEnquiry::create($request->validated());
        return response()->json([
            'success' => true,
            'message' => __("Your message sent successfully.")
        ]);
    }

    public function subscribe(SubscribeRequest $request){
        \App\Models\NewsSubscriber::create($request->validated());
        return response()->json([
            'success' => true,
            'message' => __("Thank you, your email has been added to our list.")
        ]);
    }

    public function page(\App\Models\Page $page){
        return view('page')->withPage($page);
    }

}