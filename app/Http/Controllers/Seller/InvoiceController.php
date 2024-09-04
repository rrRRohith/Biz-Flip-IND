<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\LeadEnquiry;
use Inertia\Inertia;
use App\Http\Resources\{InvoiceResource};

class InvoiceController extends BaseController{
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
        $this->middleware("can:Invoice List");
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Invoice/Index', [
            'current_invoice' => $this->seller->current_subscription ? new InvoiceResource($this->seller->current_subscription) : null,
            'invoices' => InvoiceResource::collection($this->seller->subscription_orders()->latest()->get()),
            'newInvoice' => $request->invoice ? new InvoiceResource($this->seller->current_subscription) : null,
        ]);
    }

    public function search(Request $request){
        return response()->json(InvoiceResource::collection($this->seller->subscription_orders()->search($request)->latest()->get()));
    }

     /**
     * Show the specified resource.
     * 
     * @param Request $request
     * @param Role $role
     */
    public function show(Request $request, \App\Models\SubscriptionOrder $invoice){
        $this->seller->subscription_orders()->findOrFail($invoice->id);
        return $this->index($request);
    }
}
