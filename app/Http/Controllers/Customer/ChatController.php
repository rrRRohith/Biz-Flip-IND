<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
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
    /**
     * Display a listing of the resource.
     * 
     * @param Request $request
     */
    public function index(Request $request){
        return Inertia::render('Customer/Chat/Index', [
            'chats' => $this->user->chats()
            ->select('chats.*')
            ->leftJoin('chat_messages', 'chats.id', '=', 'chat_messages.chat_id')
            ->groupBy('chats.id', 'chats.customer_id', 'chats.seller_id', 'chats.created_at', 'chats.updated_at') // Include all non-aggregated columns from chats
            ->orderByRaw('MAX(chat_messages.created_at) DESC') // Use orderByRaw instead of orderByDesc with raw expression
            ->get(),
        ]);
    }

    public function show(\App\Models\Chat $chat){
        $chat = $this->user->chats()->findOrfail($chat->id);
        return Inertia::render('Customer/Chat/Index', [
            'chats' => $this->user->chats()
            ->select('chats.*')
            ->leftJoin('chat_messages', 'chats.id', '=', 'chat_messages.chat_id')
            ->groupBy('chats.id', 'chats.customer_id', 'chats.seller_id', 'chats.created_at', 'chats.updated_at') // Include all non-aggregated columns from chats
            ->orderByRaw('MAX(chat_messages.created_at) DESC') // Use orderByRaw instead of orderByDesc with raw expression
            ->get(),
            'chat' => $chat,
            'messages' => \App\Http\Resources\ChatMessageResource::collection($chat->messages()->orderBy('id')->get()),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param MessageRequest $request
     * @param Ticket $ticket
     */
    public function update(MessageRequest $request, \App\Models\Chat $chat){
        $chat = $this->user->chats()->findOrfail($chat->id);
        try{
            $message = $chat->messages()->create($request->validated());
            $message->update([
                'user_id' => $this->user->id,
            ]);
            return to_route('customer.chats.show', ['chat' => $chat]);
        }
        catch(\Exception $e){
			return $e->getMessage();
        }
    }
}
