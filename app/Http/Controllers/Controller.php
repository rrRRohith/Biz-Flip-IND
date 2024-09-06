<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Requests\{ContactRequest, SubscribeRequest};
use View;

class Controller extends BaseController{
    use AuthorizesRequests, ValidatesRequests;
    use \App\Emails;
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct(){
        View::share('countries', \App\Models\Country::with(['provinces', 'provinces.cities'])->whereStatus(1)->with('provinces')->get());
        View::share('provinces', \App\Models\Province::with(['cities' => fn($q) => $q->orderBy('name')])->orderBy('name')->whereStatus(1)->get());
        View::share('ad_categories',  \App\Models\Category::whereStatus(1)->orderBy('position')->get());
        View::share('cities', \App\Models\City::orderBy('name')->get());
        View::share('categories',  \App\Models\Category::whereStatus(1)->orderBy('position')->get());
        View::share('business_categories', \App\Models\BusinessCategory::whereStatus(1)->orderBy('position')->get());
    }

    public function home(){
        $businesses = \App\Models\BusinessCategory::whereSlug('business')->first();
        $franchises = \App\Models\BusinessCategory::whereSlug('franchise')->first();
        return view('welcome', [
            'categories' => \App\Models\BusinessCategory::limit(6)->get(),
            'businesses' => $businesses ? $businesses->ads()->whereStatus(1)->limit(4)->get() : collect([]),
            'franchises' => $franchises ? $franchises->ads()->whereStatus(1)->limit(4)->get() : collect([]),
            'sellers' => \App\Models\User::sellers()->whereStatus('1')->limit(6)->get(),
            'search_purposeOptions' => ['Rental','Lease','Sale'],
            'testimonials' => \App\Models\Testimonial::latest()->limit(10)->get()->chunk(2)->map(function ($group) {
                return collect($group);
            }),
        ]);
    }

    public function contact(ContactRequest $request){
        \App\Models\ContactEnquiry::create($request->validated());
        $this->adminContactReceived($request);
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

    public function pricing(){
        return view('pricing')->withPlans(
            \App\Models\SubscriptionPlan::when(auth()->check(), fn($q) => $q->where('default', '0'))->
            whereStatus('1')->whereVisibility('1')->orderBy('price')->get()
        );
    }
}