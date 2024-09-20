@extends('layouts.wrapper', ['bodyClass' => 'bg-light'])
@section('content')
    @push('styles')
        
    @endpush

@section('title', 'Sign up')
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7">
                <div class='p-3 p-sm-5 mh-100vh'>
                    <a href="/" class='fs-3 text-dark text-decoration-none fw-semibold'><i
                            class="bi bi-arrow-left"></i></a>
                    <div class="m-auto mw-600">
                        @include('auth.signUpForm')
                    </div>
                </div>
            </div>
            <div class="col-md-5"
                style="background-image: url(https://res.cloudinary.com/rr6/image/upload/v1724138709/auth_nczirt.webp);
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
    // function removeClass() {
    //     var elements = document.getElementsByClassName('form-group');

    //     // Loop through all elements and remove the 'error' class
    //     for (var i = 0; i < elements.length; i++) {
    //         elements[i].classList.remove('error');
    //     }
    // }

    // function registered(response) {
    //     $('.hide').remove();
    //     $('.regname').text(response.name);
    //     $('.registered').show();
    // }


    // function refreshCaptcha2() {
    //     fetch('/refresh-captcha')
    //         .then(response => response.json())
    //         .then(data => {
    //             document.querySelector('.captchaImg2').innerHTML = data.captcha;
    //         });
    // }
</script>
@endpush
