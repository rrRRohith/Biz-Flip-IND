<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Http\Requests\ticket\{MessageRequest, TicketRequest};
use Inertia\Inertia;
use App\Http\Resources\{TicketMessageResource, TicketResource};
use App\Events\NewNotification;

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
			$this->user = auth()->user();
            $this->seller = $this->user->employer ? : $this->user;
            return $next($request);
        });

        $this->middleware("can:Support Ticket Listing")->only(['index', 'search', 'show']);
        $this->middleware("can:Support Ticket Create")->only(['create', 'store']);
        $this->middleware("can:Support Ticket Edit")->only(['update']);
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

    public function search(Request $request){
        return response()->json(TicketResource::collection($this->seller->tickets()->search($request)->latest()->get()));
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
            $ticketNo = $this->generateTicketNumber();
            $ticket = $this->seller->tickets()->create($request->only(['subject', 'priority']));
            $ticket->update([
                'ticket_no' => $ticketNo,
            ]);
            $ticket->messages()->create($request->only(['message']))->update([
                'user_id' => $this->user->id,
                
            ]);

            event(new NewNotification(auth()->user()->id, 1, 'New Support Ticket Created', 'A created new support ticket.', route('admin.support-tickets.index')));
            $this->ticketCreated($ticket);
            
            return to_route('account.tickets.show', ['ticket' => $ticket->id])->with('success', 'Ticket created successfully.');
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

            event(new NewNotification(auth()->user()->id, 1, 'Support Ticket Resubmited', 'A Support Ticket has resubmited.', route('admin.support-tickets.index')));

            return to_route('account.tickets.show', ['ticket' => $ticket->id]);
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    public function generateTicketNumber(){
        $prefix = 'FAB';
        $date = \Carbon\Carbon::now()->format('Ymd');
        $orderCountToday = \App\Models\Ticket::whereDate('created_at', \Carbon\Carbon::today())->count();
        $orderNumber = $orderCountToday + 1;
        $orderNumberPadded = str_pad($orderNumber, 4, '0', STR_PAD_LEFT);
        return  $prefix . $date . $orderNumberPadded;
    }
}
