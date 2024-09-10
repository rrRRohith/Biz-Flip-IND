<div>
    <div style="margin-bottom:2rem;">
        <div>
            <strong>New ad "{{ $ad->title }}" has been submitted and is awaiting review.</strong>
        </div>
        @include('email.adCard')
        <div>
            This ad will remain unpublished until it is approved.
        </div>
    </div>
</div>
