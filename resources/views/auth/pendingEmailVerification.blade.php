@extends('layouts.wrapper')
@section('contents')
@section('title', 'Pending email verification')
<div class="my-5 py-5">
    <div class="container mt-5 pt-5 text-center">
        <div class="my-5">
            <img width="91" height="91" src="https://img.icons8.com/external-happy-man-bomsymbols-/91/external-find-happy-man-human-resource-and-life-style-color-set-2-happy-man-bomsymbols-.png" alt="external-find-happy-man-human-resource-and-life-style-color-set-2-happy-man-bomsymbols-"/>
            <h1>Email verification pending</h1>
            <div>Please verify your email by clicking the link we've sent to your inbox. Once verified, you'll be ready to start using our service.</div>
            <div class="text-center mt-4">
                @if(!session('message'))
                <a href="/verify-email-pending" data-method="post" class="btn rounded-1 border-0 m-auto btn-light px-5"><i class="bi bi-arrow-clockwise"></i> Resend email</a>
                @endif
                <a data-method="post" href="/verify-email-pending" class="btn rounded-1 border-0 m-auto btn-dark px-5"><i class="bi bi-power"></i> Logout</a>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
@if (\Session::has('message'))
<script>
toast("{{ \Session::get('message') }}", 'success');
</script>
@endif
@endpush