@extends('layouts.wrapper', ['bodyClass' => 'bg-light'])
@section('content')
@section('title', 'Login')
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class='p-3 p-sm-5 mh-100vh'>
                    <a href="/" class='fs-3 text-dark text-decoration-none fw-semibold'><i
                            class="bi bi-arrow-left"></i></a>
                    <div class="m-auto mw-400">
                        <div>
                            <div class="fs-3 fw-semibold text-center">
                                Login to your account
                            </div>
                            <div class="text-muted text-center mb-4">
                                Enter your email id and password to login to your account.
                            </div>
                            <form action="">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Email</label>
                                    <input name="email" type="email" placeholder='Enter your email address'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Password</label>
                                    <input name="password" type="password" placeholder='Enter your secret password'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                                <button type="submit"
                                    class="btn-lg fs-6 btn btn-dark shadow-none rounded-1 w-100 fw-semibold">Continue</button>
                            </form>
                            <div>
                                <hr class="hr-text mb-4 mt-4" data-content="OR">
                                </hr>
                                <div class="btn-lg fs-6 btn border-1 border bg-white border-gray w-100 shadow-none fw-semibold rounded-1 mb-4">
                                    Login using google account
                                </div>
                                <div class="text-center">
                                    <div class="text-dark fw-semibold fs-5">
                                        Dont have account?
                                    </div>
                                    <div class="text-muted mb-4">
                                        Dont worry, we got your back.
                                    </div>
                                    <a href="/auth" class='text-decoration-none fw-semibold text-primary'>Sign up
                                        now</a>
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
