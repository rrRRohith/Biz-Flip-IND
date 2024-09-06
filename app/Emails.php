<?php

namespace App;
use App\Jobs\Email;
use App\Models\{User, Ad, SubscriptionOrder};
use Illuminate\Http\Request;

trait Emails{
    public function subscriptionOrder(SubscriptionOrder $order){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'to' => env('ADMIN_EMAIL'),
            'subject' => __("New Subscription for plan :plan", ['plan' => $order->name]),
            'contents' => view('email.adminSubscriptionOrder')->withOrder($order)->render(),
        ]));

        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'to' => $order->seller->email,
            'name' => $order->seller->name,
            'subject' => __("Your :plan Subscription is processed", ['plan' => $order->name]),
            'contents' => view('email.sellerSubscriptionOrder')->withOrder($order)->render(),
        ]));
    }

    public function adminContactReceived(Request $request){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'to' => env('ADMIN_EMAIL'),
            'subject' => __("Contact inquiry from :firstname :lastname", ['firstname' => $request->firstname, 'lastname' => $request->lastname]),
            'contents' => view('email.adminContactReceived')->withRequest($request)->render(),
            'reply_name' => __(":firstname :lastname", ['firstname' => $request->firstname, 'lastname' => $request->lastname]),
            'reply_to' => $request->email,
        ]));
    }

    public function sellerLeadReceived(User $user, Ad $ad, Request $request){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'to' => $user->email,
            'subject' => __("New inquiry from :firstname :lastname", ['firstname' => $request->firstname, 'lastname' => $request->lastname]),
            'name' => $user->name,
            'contents' => view('email.sellerLeadReceived')->withRequest($request)->withAd($ad)->render(),
            'reply_name' => __(":firstname :lastname", ['firstname' => $request->firstname, 'lastname' => $request->lastname]),
            'reply_to' => $request->email,
        ]));
    }
    /**
     * Dispatch email job
     * @param Email $mail
     */
    public static function email(Email $mail){
        !ENV('EMAIL', false) OR dispatch($mail);
    }
}
