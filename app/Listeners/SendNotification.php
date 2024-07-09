<?php
namespace App\Listeners;

use App\Events\NewNotification;
use App\Models\DashboardNotification;

class SendNotification
{
    public function handle(NewNotification $event)
    {
        DashboardNotification::create([
            'sender_id' => $event->senderId,
            'recipient_id' => $event->recipientId,
            'subject' => $event->subject,
            'message' => $event->message,
            'redirection' => $event->redirection,
            'status' => 0,
        ]);
    }
}
