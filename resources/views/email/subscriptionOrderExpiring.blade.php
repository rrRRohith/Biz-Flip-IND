<div>
    <div style="margin-bottom:2rem;">
        <div>
            <strong>Notice: Your subscription for {{ $order->name }} has expired.</strong>
        </div>
        Thank you for being a valued subscriber. Please review the details below and renew your subscription to continue
        enjoying our services without interruption. If you need any assistance, we're here to help!
    </div>
    <div>
        @include('email.subscriptionOrderMinimal')
    </div>
    <div>
        We appreciate your choice to be with us. If you have any questions about your subscription or need support,
        please feel free to reach out.
    </div>
</div>
