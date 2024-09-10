<table style="width: 100%;">
    <tr>
        <td>
            <img width="150" src="https://res.cloudinary.com/rr6/image/upload/v1725617820/logo_md3qog.png"
                alt="">
        </td>
        <td style="text-align: right;">
            <h2 style="margin-bottom: 0;">INVOICE</h2>
            <div>Date {{ $order->created_at->format('d M Y') }}</div>
        </td>
    </tr>
</table>
<table style="width: 100%;margin-top: 3rem;">
    <tr>
        <td>
            <h5>BILL TO</h5>
            <div>
                {{ $order->billing_address->firstname }} {{ $order->billing_address->lastname }}
            </div>
            @if ($order->billing_address->address)
                <div>
                    {{ $order->billing_address->address }}, {{ $order->billing_address->city }}
                </div>
                <div>
                    {{ $order->billing_address->province }}, {{ $order->billing_address->postalcode }}
                </div>
            @else
                <div>
                    {{ $order->billing_address->phone }}
                </div>
                <div>
                    {{ $order->billing_address->email }}
                </div>
            @endif
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
                {{ $order->ads }} ads | ${{ $order->price }}/ {{ $order->duration }} month
            </div>
        </td>
        <td style="border-top: 1px solid #dadada;text-align: right;border-bottom: 1px solid #dadada;padding:10px 0px;">
            ${{ $order->price }}
        </td>
    </tr>
    <tr>
        <td style="text-align: right;padding:10px 0px;" colspan="2">
            <h4 style="font-weight: 400;margin: 0px;margin-bottom: 4px;">Sub total. ${{ $order->price }}</h4>
            <h4 style="font-weight: 400;margin: 0px;margin-bottom: 4px;">Tax amount. ${{ $order->tax_amount }}</h4>
            <h4 style="font-weight: 400;margin: 0px;margin-bottom: 4px;">Grant total. ${{ $order->total_amount }}
            </h4>
        </td>
    </tr>
</table>
