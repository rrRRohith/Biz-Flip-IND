<div style="display:flex;margin-bottom:10px;">
    <div style="display:flex; margin-right:6px;width: 50px;min-width: 50px;height: 50px;object-fit: cover;border-radius: 50%;background:#5356dd">
        <div style="color:#fff;margin:auto">
            <strong>{{ ucfirst($ticket->user->name[0]) }}</strong>
        </div>
    </div>
    <div style="flex:1">
        <div>
            <div><small>{{ ($ticket->created_at->format('h:i a, d M')) }}</small></div>
            <div style="border: 1px solid #f2f2f7;border-radius: 10px;margin-bottom: 10px;padding: 10px;background:#f2f2f7;">
                <div>
                    <div>{{ $ticket->user->name }} Opened ticket at {{ ($ticket->created_at->format('h:i a, d M')) }} with
                        <span class="ticket-{{ $ticket->priority }}">
                            {{ $ticket->priority }}</span>
                        priority.</div>
                    Subject. <strong>{{ $ticket->subject }}</strong>
                </div>
            </div>
        </div>
    </div>
</div>
@if($message =  $ticket->messages()->first())
<div style="display:flex;margin-bottom:10px;">
    <div style="display:flex; margin-right:6px;width: 50px;min-width: 50px;height: 50px;object-fit: cover;border-radius: 50%;background:#5356dd">
        <div style="color:#fff;margin:auto">
            <strong>{{ ucfirst($message->user->name[0]) }}</strong>
        </div>
    </div>
    <div style="flex:1">
        <div>
            <div><small>{{ $message->user->name }} {{ ($message->created_at->format('h:i a, d M')) }}</small></div>
            <div style="border: 1px solid #f2f2f7;border-radius: 10px;margin-bottom: 10px;padding: 10px;background:#f2f2f7;">
                <div>
                    {{ $message->message }}
                </div>
            </div>
        </div>
    </div>
</div>
@endif
<p></p>
@if($ticket->solved)
<br>
<div style="border: 1px solid #fff3cd;border-radius: 10px;margin-bottom: 10px;padding: 10px;background:#fff3cd">
    This support ticket was marked as solved on {{ ($ticket->updated_at->format('h:i a, d M')) }} and is no
    longer available to send messages.
</div>
@else
<a href="{{ route('admin.support-tickets.show', ['support_ticket' => $ticket->id]) }}" style="text-decoration: none;">
    <div style="color:#666;border: 1px solid #f2f2f7;border-bottom: 2px solid #f2f2f7;border-radius: 6px;padding: 10px;padding-bottom: 4em;">
        <small>Your message</small>
    </div>
    </a>
    <div style="text-align: right"><a href="{{ route('admin.support-tickets.show', ['support_ticket' => $ticket->id]) }}" style="
        padding: 10px 20px;
        display: inline-block;
        margin-top: 10px;
        background: #5356dd;
        color: #fff;
        text-decoration: none;
        border-radius: .5em;
    ">Send your reply</a></div>
@endif