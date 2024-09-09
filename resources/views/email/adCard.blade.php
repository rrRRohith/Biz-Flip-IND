<table style="width: 100%;">
    <tr>
        <td colspan="2">
            <img style="margin:2rem auto;width:100%;height: 200px;object-fit: cover;object-position: center;border-radius: 10px;" src={{ $ad->image_url }} alt="" />
        </td>
    </tr>
    <tr>
        <td style="">
            <strong>
                {{ $ad->title }}
            </strong>
            <div>
                {{ $ad->address }}, {{ $ad->city }}
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <table>
                <tr>
                    <td>
                        <img style="border-radius:50%;height:45px;width:45px;object-fit:cover;object-position:center"
                        src="{{ $ad->seller->picture_url ?? '' }}" alt="" />
                    </td>
                    <td>
                        {{ $ad->seller->name ?? '' }}
                    </td>
                </tr>
            </table>
        </td>
        <td style="text-align: right">
            <strong>$ {{ number_format($ad->price) }}</strong>
        </td>
    </tr>
</table>
