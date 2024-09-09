<div>
    <div style="margin-bottom:2rem;">
        <div>
            <strong>Your ad "{{ $ad->title }}" has been successfully submitted and is currently under
                review.</strong>
        </div>
        @include('email.adCard')
        <div>
            Once our team has finished reviewing it, your ad will be published, and you’ll start receiving leads. Thank
            you for using our service!
        </div>
    </div>
</div>
