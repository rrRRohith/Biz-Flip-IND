<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;
use App\Mail\DefaultMail;

class Email implements ShouldQueue{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $details;
    protected $mailClass;
    protected $to;
    protected $bcc;
    protected $cc;
  
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($details){
        $this->details = $details;
        $this->mailClass = 'App\\Mail\\'.($details['emailClass'] ?? 'DefaultMail');
        $this->to = $this->details['to'];
        //$this->to = explode(',', env("BCC_EMAIL"));
        $this->bcc = explode(',', env("BCC_EMAIL"));
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(){
        Mail::to($this->to)->bcc($this->bcc)->send(new $this->mailClass($this->details));   
    }
}
