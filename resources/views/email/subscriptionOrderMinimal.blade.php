<table style="width: 100%;">
    <tr>
        <td>
            <img width="150" src="https://res.cloudinary.com/rr6/image/upload/v1725617820/logo_md3qog.png"
                alt="">
        </td>
        <td style="text-align: right;">
            <div class="">Invoice no. <strong>{{ $order->invoice_no }}</strong></div>
            <div class="">Date. <strong>{{ $order->created_at->format('d M Y') }}</strong></div>
            <div class="">Subscription tenure. <strong>{{ $order->created_at->format('d M Y') }} to
                    {{ $order->expires_at->format('d M Y') }}</strong></div>
        </td>
    </tr>
</table>

<table style="width: 100%;margin-top: 3rem;margin-bottom: 3rem;">
    <tr>
        <td colspan="2">
            <h5 style="width: 100%">INVOICE SUMMERY</h5>
        </td>
    </tr>
    <tr>
        <td style="padding:10px 0px;">
            Description
        </td>
        <td style="text-align: right;padding:10px 0px;">
            Price
        </td>
    </tr>
    <tr>
        <td style="border-top: 1px solid #dadada;border-bottom: 1px solid #dadada;padding:10px 0px;">
            {{ $order->name }}
            <div>
                {{ $order->ads }} ads | {{ amount($order->price) }}/ {{ $order->duration }} month
            </div>
        </td>
        <td style="border-top: 1px solid #dadada;text-align: right;border-bottom: 1px solid #dadada;padding:10px 0px;">
            {{ amount($order->price) }}
        </td>
    </tr>
</table>
