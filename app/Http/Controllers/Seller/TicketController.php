<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Http\Requests\ticket\{MessageRequest, TicketRequest};
use Inertia\Inertia;
use App\Http\Resources\{TicketMessageResource, TicketResource};

class TicketController extends BaseController{
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
			$this->user = \Auth::user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Seller/Ticket/Index', [
            'tickets' => TicketResource::collection($this->seller->tickets()->latest()->get()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(){
        return Inertia::render('Seller/Ticket/Create');
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param TicketRequest $request
     */
    public function store(TicketRequest $request){
        try{
            $ticket = $this->seller->tickets()->create($request->only(['subject', 'priority']));
            $ticket->messages()->create($request->only(['message']))->update([
                'user_id' => $this->user->id,
            ]);
            return to_route('seller.tickets.show', ['ticket' => $ticket->id])->with('success', 'Ticket created successfully.');
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     * 
     * @param Request $request
     * @param Ticket $ticket
     */
    public function show(Request $request, Ticket $ticket){
        $this->seller->tickets()->findOrfail($ticket->id);

        $messages = $ticket->messages()->get();
        
        return Inertia::render('Seller/Ticket/Ticket',[
            'ticket' => $ticket,
            'messages' => TicketMessageResource::collection($messages),
            'success' => session('success'),
            'error' => session('error'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param MessageRequest $request
     * @param Ticket $ticket
     */
    public function update(MessageRequest $request, Ticket $ticket){
        $this->seller->tickets()->whereStatus('open')->findOrfail($ticket->id);
        try{
            $message = $ticket->messages()->create($request->validated());
            $message->update([
                'user_id' => $this->user->id,
                'attachments' => $request->attachments ? $this->upload_files('attachments') : null,
            ]);
            return to_route('seller.tickets.show', ['ticket' => $ticket->id]);
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }
}
