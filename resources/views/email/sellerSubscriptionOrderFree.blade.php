<div>
    <div style="margin-bottom:2rem;">
        Your subscription for the plan {{ $order->name }} has been successfully processed. Now you can start using {{ env('APP_NAME') }} 
    </div>
    <div>
        <div style="text-align: center"><a href="{{ url('/account/ads/create') }}" style="
            padding: 10px 20px;
            display: inline-block;
            margin-top: 3em;
            background: #333;
            color: #fff;
            text-decoration: none;
            border-radius: .5em;
        ">Place your first ad</a></div>
    </div>
    <div>
        Thank you for your subscription! We appreciate your continued support and look forward to providing you with
        excellent service.
    </div>
</div>
