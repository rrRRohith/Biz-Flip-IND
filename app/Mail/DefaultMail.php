<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DefaultMail extends Mailable{
    use Queueable, SerializesModels;

    public $subject;
    public $name;
    public $reply_name;
    public $reply_to;
    public $content;

    public $attachment_file;
    public $attachment_name;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $params){
        $this->subject = ($params['subject'] ?? null).' - '.env('APP_NAME');
        $this->name = $params['name'] ?? null;
        $this->reply_name = isset($params['reply_name']) ? $params['reply_name'].' - '.env('APP_NAME') : env('MAIL_FROM_NAME');
        $this->reply_to = $params['reply_to'] ?? null;
        $this->content = $params['contents'] ?? null;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(){
        $mail = $this->replyTo($this->reply_to, $this->reply_name)
        ->subject($this->subject)->view('email.base');
        return $mail;
    }
}
