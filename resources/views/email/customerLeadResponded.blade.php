<div>
    @if ($lead->ad)
        You have received a response for your inquiry for <a
            href="{{ route('ads.show', ['ad' => $lead->ad]) }}">{{ $lead->ad->title }}</a> from {{ $lead->seller->name }}.
    @else
    You have received a response for your inquiry from {{ $lead->seller->name }}.
    @endif
</div>
@if($lead->ad)
<div style="border-bottom: 1px solid #e5e3e3;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Ad</div>
        <div><a href="{{ route('ads.show', ['ad' => $lead->ad]) }}">{{ $lead->ad->title }}</a></div>
    </div>
</div>
@endif
<div style="border-bottom: 1px solid #ffffff00;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Message</div>
        <div>{{ $lead->message }}</div>
    </div>
</div>
<div style="border-bottom: 1px solid #ffffff00;margin-bottom: 1rem;margin-top: 1rem;padding-bottom: 10px;">
    <div>
        <div style="font-weight: 600;margin-bottom: 6px;">Response</div>
        <div>{{ $lead->response }}</div>
    </div>
</div>
<div style="margin-top:2rem">
    You can directly reply to {{ $lead->seller->name }} through this email.
</div>
