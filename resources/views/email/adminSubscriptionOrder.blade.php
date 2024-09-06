<div>
    <div style="margin-bottom:2rem;">
        A new subscription for the plan {{ $order->name }} has been successfully processed.
    </div>
    <div>
        @include('email.subscriptionOrder')
    </div>
</div>
