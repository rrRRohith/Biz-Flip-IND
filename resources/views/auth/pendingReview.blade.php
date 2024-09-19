@extends('layouts.wrapper')
@section('contents')
@section('title', 'Email verified')
<div class="my-5 py-5">
    <div class="container mt-5 pt-5 text-center">
        <div class="my-5">
            <img width="91" height="91" src="https://img.icons8.com/external-happy-man-bomsymbols-/91/external-find-happy-man-human-resource-and-life-style-color-set-2-happy-man-bomsymbols-.png" alt="external-find-happy-man-human-resource-and-life-style-color-set-2-happy-man-bomsymbols-"/>
            <h1>Your account is under review</h1>
            <div>Your profile has been submitted and will be reviewed by our team soon. You will be notified if extra information is needed.</div>
            <div class="">If you believe this is an error, please <a href="/contact">contact us</a>.</div>
        </div>
        <div>
            <div class="text-center mt-4">
                <a href="/" class="btn rounded-1 border-0 m-auto btn-light px-5"><i class="bi bi-arrow-left"></i> Go to home</a>
                <a data-method="post" href="/logout" class="btn rounded-1 border-0 m-auto btn-dark px-5"><i class="bi bi-power"></i> Logout</a>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
    
@endpush