<div>
    <div style="margin-bottom:2rem;">
        Your subscription for the plan {{ $order->name }} has been successfully processed. Please review the following summary of your subscription details
    </div>
    <div>
        @include('email.subscriptionOrder')
    </div>
    <div>
        Thank you for your subscription! We appreciate your continued support and look forward to providing you with
        excellent service.
    </div>
</div>
