<?php

namespace App;
use Illuminate\Http\Request;

trait Subscription{
    public function subscribeToPlan(Request $request, \App\Models\SubscriptionPlan $plan, \App\Models\User $user){
        /**
         * Create subscription order
         */
        $subscription_order = $user->subscription_orders()->create($plan->order_array);
        
        /**
         * Set invoice no and payment ref
         */
        $subscription_order->update([
            'invoice_no' => $this->generateInvoiceNumber(),
        ]);

        /**
         * Create billing address
         */
        $subscription_order->billing_address()->create(
            $request->only([
                'firstname',
                'lastname',
                'phone',
                'email',
                'address',
                'city',
                'province',
                'postalcode',
            ])
        );
        $subscription_order->refresh();
        return $subscription_order;
    }

    public function generateInvoiceNumber(){
        $date = \Carbon\Carbon::now()->format('Ymd');
        $orderCountToday = \App\Models\SubscriptionOrder::whereDate('created_at', \Carbon\Carbon::today())->count();
        $orderNumber = $orderCountToday + 1;
        $orderNumberPadded = str_pad($orderNumber, 4, '0', STR_PAD_LEFT);
        return  $date . $orderNumberPadded;
    }
}
