<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SubscriptionExpireAlert extends Command
{
    use \App\Emails;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:subscription-expire-alert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(){   
        \App\Models\SubscriptionOrder::where('expires_at', '<=', now()->addDay())
            ->whereNull('expired_alert_at')->get()->each(function($order){
                $this->subscriptionOrderExpired($order);
                $order->update(['expired_alert_at' => now(), 'expire_alert_at' => now()]);
            });

        \App\Models\SubscriptionOrder::where('expires_at', '<=', now()->addDay())
            ->whereNull('expire_alert_at')->get()->each(function($order){
                $this->subscriptionOrderExpiring($order);
                $order->update(['expire_alert_at' => now()]);
            });
    }
}
