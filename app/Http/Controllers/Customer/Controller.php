<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\{Ad, Category, Facility, Features, Province};
use App\Http\Requests\Ad\{AdRequest};
use Inertia\Inertia;
use App\Http\Resources\{AdResource};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\{LeadResource};
use App\Http\Resources\{TicketMessageResource, TicketResource};
use DB;

class Controller extends BaseController{
    public $user;
    use \App\Helper\Upload;
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
            return $next($request);
        });
    }
}
