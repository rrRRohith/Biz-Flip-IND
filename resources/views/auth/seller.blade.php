@extends('layouts.wrapper', ['bodyClass' => 'bg-light'])
@section('content')
@section('title', 'Sign up')
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class='p-3 p-sm-5 mh-100vh'>
                    <a href="/auth" class='fs-3 text-dark text-decoration-none fw-semibold'><i
                            class="bi bi-arrow-left"></i></a>
                    <div class="m-auto mw-600">
                        <div>
                            <div class="hide">
                                <div class="fs-3 fw-semibold text-center">
                                    Register your account
                                </div>
                                <div class="text-muted text-center mb-4">
                                    Please fill this form to create your free account.
                                </div>
                            </div>
                            <form action="" data-callback="registered" id="authForm" method="post"
                                class="ajax hide">
                                @csrf
                                <div class="fs-5 fw-sembold mb-2">Your account information</div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group label-top mb-4">
                                            <label class="fw-semibold">First name</label>
                                            <input form="authForm" name="firstname" type="text"
                                                placeholder='Enter your first name'
                                                class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group label-top mb-4">
                                            <label class="fw-semibold">Last name</label>
                                            <input form="authForm" name="lastname" type="text"
                                                placeholder='Enter your first name'
                                                class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group label-top mb-4">
                                            <label class="fw-semibold">Phone</label>
                                            <input form="authForm" name="phone" type="text"
                                                placeholder='Enter your first phone'
                                                class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group label-top mb-4">
                                            <label class="fw-semibold">Email</label>
                                            <input form="authForm" name="email" type="email"
                                                placeholder='Enter your email address'
                                                class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group label-top mb-4">
                                            <label class="fw-semibold">Password</label>
                                            <input form="authForm" name="password" type="password"
                                                placeholder='Enter your secret password'
                                                class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group  mb-4">
                                    <div class="form-check form-check-lg">
                                        <input form="authForm" role="button"
                                            class="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                            type="checkbox" name="agree_terms_and_conditions" value="true"
                                            id="agree_terms_and_conditions" />
                                        <label role="button" class="form-check-label mt-1"
                                            htmlFor="agree_terms_and_conditions">
                                            I agree to the <a href="#" class="text-decoration-none">Privacy
                                                policy</a> and <a href="#" class="text-decoration-none">Terms of
                                                use</a>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" form="authForm" data-default="Continue"
                                    class="continue-btn btn-lg fs-6 btn btn-dark shadow-none rounded-1 w-100 fw-semibold">Continue</button>
                            </form>
                            <div class="registered" style="display: none">
                                <div class="text-center">
                                    <img width="64" height="64"
                                        src="https://img.icons8.com/pastel-glyph/64/handshake--v2.png"
                                        alt="handshake--v2" />
                                    <div class="mt-4 fs-4">Awesome!</div>
                                </div>
                                <div class="mb-1">We received your request to become a verified seller on
                                    {{ env('APP_NAME') }}. We are minutes away from verifying your information and
                                    granting approval.</div>
                                <div class="fw-semibold">Thanks for choosing {{ env('APP_NAME') }}</div>
                                <div class="text-center mt-4">
                                    <a href="/" class="btn rounded-1 border-0 m-auto btn-dark px-5">Go home</a>
                                </div>
                            </div>
                            <div class="hide">
                                <hr class="hr-text mb-4 mt-4" data-content="Already have any account?">
                                </hr>
                                <div class="text-center">
                                    <a href="/login" class='text-decoration-none fw-semibold text-primary'>Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6"
                style="background-image: url(https://bookly.indigitalapi.com/uploads/static/res/auth.webp);
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: fixed;">
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<script>
    function registered(response) {
        $('.hide').remove();
        $('.registered').show();
    }
</script>
@endpush
