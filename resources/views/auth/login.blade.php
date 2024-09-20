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
                        <div>
                            <div class="text-center mb-5">
                                <img class="m-auto" width="240" src="/logo.png" alt="{{ env('APP_NAME') }}">
                            </div>
                            <div class="fs-3 fw-semibold text-center">
                                Login to your account
                            </div>
                            <div class="text-muted text-center mb-4">
                                Enter your email id and password to login to your account.
                            </div>
                            <form data-errorcallback="refreshCaptcha" id="authForm" method="post" action="" class="ajax mb-5">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Email</label>
                                    <input form="authForm" name="email" type="email" placeholder='Enter your email address'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Password</label>
                                    <input form="authForm" name="password" type="password" placeholder='Enter your secret password'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                                @include('auth.captcha')
                                <button type="submit" form="authForm" data-default="Sign in"
                                    class="continue-btn btn-lg fs-6 btn btn-dark shadow-none rounded-1 w-100 fw-semibold">Sign in</button>
                            </form>
                            <div>
                                <div class="text-center">
                                    <div class="text-dark fw-semibold fs-5">
                                        No account yet? Get started for free!
                                    </div>
                                    <a href="/sign-up" class='text-decoration-none fw-semibold text-primary'>Sign up
                                        now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<script>
    function refreshCaptcha() {
        fetch('/refresh-captcha')
            .then(response => response.json())
            .then(data => {
                document.querySelector('.captchaImg').innerHTML = data.captcha;
            });
    }
</script>
@endpush
