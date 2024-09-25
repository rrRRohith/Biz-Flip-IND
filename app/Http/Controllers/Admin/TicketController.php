<?php

namespace App\Http\Controllers\Admin;
use Inertia\Inertia;
use App\Models\Ticket;
use Illuminate\Http\Request;
use App\Http\Requests\ticket\{MessageRequest, TicketRequest};
use App\Http\Resources\TicketResource;
use App\Http\Resources\TicketMessageResource;
use App\Events\NewNotification;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $ticketsQ = Ticket::orderByRaw("
        CASE 
            WHEN status = 'Open' THEN 1 
            WHEN status = 'Closed' THEN 2 
            ELSE 3 
        END
        ")->orderByRaw("
            CASE 
                WHEN priority = 'High' THEN 1 
                WHEN priority = 'Medium' THEN 2 
                WHEN priority = 'Low' THEN 3 
                ELSE 4 
            END
        ")->orderBy('created_at', 'ASC');

        $ticketsOpenQ = clone $ticketsQ;
        $ticketsClosedQ = clone $ticketsQ;
        $ticketsNewQ = clone $ticketsQ;

        $ticketsOpen = $ticketsOpenQ->whereStatus('open')->get();
        $ticketsClosed = $ticketsClosedQ->whereStatus('solved')->get();
        $ticketsNew = $ticketsNewQ->whereStatus('open')->whereNull('responded_at')->get();

        return Inertia::render('Admin/Ticket/Index', [
            //'tickets' => TicketResource::collection($tickets),
            'newTickets' => TicketResource::collection($ticketsNew),
            'closedTickets' => TicketResource::collection($ticketsClosed),
            'openTickets' => TicketResource::collection($ticketsOpen),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $tickets = Ticket::where('id',$id)->first();
        $messages = $tickets->messages()->get();
        return Inertia::render('Admin/Ticket/Show', [
            'ticket' => new TicketResource($tickets),
            'messages' => TicketMessageResource::collection($messages),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MessageRequest $request, $id)
    {
        //
        $ticket = Ticket::whereStatus('open')->findOrfail($id);
  
        try{
            $ticket->update([
                'responded_at' => now(),
            ]);
            $message = $ticket->messages()->create([
                'message' => $request->input('message'),
                'attachments' => $request->hasFile('attachments') ? $this->upload_files($request->file('attachments')) : null,
                'user_id' => auth()->user()->id,
            ]);

            event(new NewNotification(auth()->user()->id, $ticket->user_id, 'Support Ticket Updated', 'A support ticket as replied.', route('account.tickets.index')));

            
            return redirect()->route('admin.support-tickets.show', ['support_ticket' => $ticket->id])->withSuccess('Message added successfully.');
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }

    public function close($id){
        $ticket = Ticket::whereStatus('open')->findOrfail($id);
        $ticket->status = 'solved';
        $ticket->save();

        event(new NewNotification(auth()->user()->id, $ticket->user_id, 'Support Ticket Closed', 'A closed support ticket.', route('account.tickets.index')));


        return redirect()->route('admin.support-tickets.index',)->withSuccess('Ticket closed successfully.');


    }

    public function reopen(Ticket $ticket){
        $ticket->status = 'open';
        $ticket->save();
        return redirect()->back()->withSuccess('Ticket reopned successfully.');
    }

}
