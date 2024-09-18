<?php
namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewNotification
{
    use Dispatchable, SerializesModels;

    public $senderId;
    public $recipientId;
    public $subject;
    public $message;
    public $redirection;

    public function __construct($senderId, $recipientId, $subject, $message, $redirection)
    {
        $this->senderId = $senderId;
        $this->recipientId = $recipientId;
        $this->subject = $subject;
        $this->message = $message;
        $this->redirection = $redirection;
    }
}
