<?php

namespace App;
use App\Jobs\Email;
use App\Models\{User, Ad, SubscriptionOrder};
use Illuminate\Http\Request;

trait Emails{
    public function adApproved(Ad $ad){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'name' => $ad->seller->name,
            'to' => $ad->seller->email,
            'subject' => __("Ad :title approved", ['title' => $ad->title]),
            'contents' => view('email.adApproved')->withAd($ad)->render(),
        ]));
    }

    public function adPendingReview(Ad $ad){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'name' => $ad->seller->name,
            'to' => $ad->seller->email,
            'subject' => __("Ad :title is awaiting review", ['title' => $ad->title]),
            'contents' => view('email.adPendingReviewSeller')->withAd($ad)->render(),
        ]));

        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'to' => env('ADMIN_EMAIL'),
            'subject' => __("Ad :title is awaiting review", ['title' => $ad->title]),
            'contents' => view('email.adPendingReviewAdmin')->withAd($ad)->render(),
        ]));
    }

    public function subscriptionOrderExpired(SubscriptionOrder $order){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'name' => $order->seller->name,
            'to' => $order->seller->email,
            'subject' => __("Subscription :plan expired", ['plan' => $order->name]),
            'contents' => view('email.subscriptionOrderExpired')->withOrder($order)->render(),
        ]));
    }

    public function subscriptionOrderExpiring(SubscriptionOrder $order){
        self::email(new Email([
		    'emailClass' => 'DefaultMail',
            'name' => $order->seller->name,
            'to' => $order->seller->email,
            'subject' => __("Subscription :plan expiring soon", ['plan' => $order->name]),
            'contents' => view('email.subscriptionOrderExpiring')->withOrder($order)->render(),
        ]));
    }

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
