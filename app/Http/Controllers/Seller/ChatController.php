<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Customer\ChatController as Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\UserProfileResource;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\{ProfileUpdateRequest, PasswordRequest};
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Exception;
use App\Http\Requests\ticket\{MessageRequest, TicketRequest};

class ChatController extends Controller{
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
            return $next($request);
        });
    }
}
