@extends('layouts.wrapper', ['bodyClass' => 'bg-light'])
@section('content')
@section('title', 'Login')
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class='p-3 p-sm-5 mh-100vh'>
                    <a href="/" class='fs-3 text-dark text-decoration-none fw-semibold'><i
                            class="bi bi-arrow-left"></i></a>
                    <div class="m-auto mw-400">
                        @include('auth.loginForm')
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<script>
    // function refreshCaptcha1() {
    //     fetch('/refresh-captcha')
    //         .then(response => response.json())
    //         .then(data => {
    //             document.querySelector('.captchaImg1').innerHTML = data.captcha;
    //         });
    // }
</script>
@endpush
