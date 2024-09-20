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
                        <div>
                            <div class="hide">
                                <div class="fs-3 fw-semibold text-center">
                                    Register your account
                                </div>
                                <div class="text-muted text-center mb-4">
                                    Please fill this form to create your free account.
                                </div>
                            </div>


                            <form action="" data-errorcallback="refreshCaptcha" data-callback="registered"
                                id="authForm" method="post" class="ajax hide">
                                @csrf
                                <div class="fs-6 fw-sembold mb-2">I am an</div>
                                <div class="col-lg-12" x-data="{ accountType: 'individual' }">
                                    <div class="row">
                                        <div class="col-lg-6">

                                            <div role="button" @click="accountType = 'individual';removeClass();"
                                                :class="{ 'active border-primary': accountType === 'individual' }"
                                                :class="{ 'border-white': accountType != 'individual' }"
                                                class="card border-2 rounded-1 shadow-none mb-4 acc_type">
                                                <div class="card-body px-xl-5 px-md-4 position-relative">
                                                    <div x-show="accountType == 'individual'" class="position-absolute top-0 end-0 p-1">
                                                        <i class="bi text-primary bi-check-circle fs-5"></i>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="fs-6 fw-semibold">
                                                                <input hidden type="radio" class="me-3" id="individual"
                                                                    value="individual" x-model="accountType">
                                                                Individual
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">

                                            <div role="button" @click="accountType = 'agent';removeClass();"
                                                :class="{ 'active border-primary': accountType === 'agent' }"
                                                :class="{ 'border-white': accountType != 'agent' }"
                                                class="card border-2 rounded-1 shadow-none mb-4 acc_type">
                                                <div class="card-body px-xl-5 px-md-4 position-relative">
                                                    <div x-show="accountType == 'agent'" class="position-absolute top-0 end-0 p-1">
                                                        <i class="bi text-primary bi-check-circle fs-5"></i>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="fs-6 fw-semibold">
                                                                <input hidden type="radio" class="me-3" id="agent"
                                                                    value="agent" x-model="accountType">Agent
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {{-- //common user details --}}
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Email</label>
                                                <input form="authForm" autocomplete="off" name="email" type="email"
                                                    placeholder='Your email address'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Password</label>
                                                <input form="authForm" autocomplete="new-password" name="password"
                                                    type="password" placeholder='Set your password'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Confirm Password</label>
                                                <input form="authForm" 
                                                    name="password_confirmation" autocomplete="new-password" type="password"
                                                    placeholder='Set your password'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">First name</label>
                                                <input form="authForm" name="firstname" type="text"
                                                    autocomplete="off" placeholder='Your first name'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Last name</label>
                                                <input form="authForm" name="lastname" type="text" autocomplete="off"
                                                    placeholder='Your last name'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Phone</label>
                                                <input x-mask="(999) 999-9999" form="authForm" name="phone"
                                                    type="text" autocomplete="off" placeholder='Enter your phone'
                                                    autocomplete="off" maxlength="14"
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-12" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Business name</label>
                                                <input form="authForm" name="company_name" type="text"
                                                    autocomplete="off" placeholder='Your business name'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-12" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Description</label>
                                                <textarea form="authForm" name="description" autocomplete="off" type="text"
                                                    placeholder='Tell us about your business' class="form-control border-1 border rounded-1 border-gray shadow-none"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Address</label>
                                                <input form="authForm" name="address" type="text"
                                                    autocomplete="off" placeholder='Your address'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-4" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">City</label>
                                                <input form="authForm" name="city" type="text"
                                                    autocomplete="off" placeholder='Your city'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-4" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Postal code</label>
                                                <input form="authForm" x-mask="999 9999" maxlength="8"
                                                    name="postalcode" type="text" autocomplete="off"
                                                    placeholder='Your postalcode'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-4" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Province</label>
                                                <select form="authForm" name="province" class="form-control border-1 border rounded-1 border-gray shadow-none">
                                                    <option disabled selected value="">Select province</option>
                                                    @foreach($provinces as $province)
                                                    <option value="{{ $province->name }}">{{ $province->name }}</option>
                                                    @endforeach
                                                </select>
                                                {{-- <input form="authForm" name="province" type="text"
                                                    autocomplete="off" placeholder='Your province'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" /> --}}
                                            </div>
                                        </div>
                                    </div>
                                    @include('auth.captcha')
                                    <div class="form-group mb-4">
                                        <div class="form-check form-check-lg">
                                            <input form="authForm" role="button"
                                                class="form-check-input light shadow-none border border-gray border-1 cursor-pointer"
                                                type="checkbox" name="subscribe_news" value="true"
                                                id="subscribe_news" />
                                            <label role="button" class="form-check-label mt-1"
                                                for="subscribe_news">
                                                Don't miss out. Subscribe now to receive exclusive content and updates.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-4">
                                        <div class="form-check form-check-lg">
                                            <input form="authForm" role="button"
                                                class="form-check-input light shadow-none border border-gray border-1 cursor-pointer"
                                                type="checkbox" name="agree_terms_and_conditions" value="true"
                                                id="agree_terms_and_conditions" />
                                            <label role="button" class="form-check-label mt-1"
                                                for="agree_terms_and_conditions">
                                                I agree to the <a href="#" class="text-decoration-none">Privacy
                                                    policy</a> and <a href="#"
                                                    class="text-decoration-none">Terms of
                                                    use</a>
                                            </label>
                                        </div>
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
                                <div class="mb-1">Welcome <span class="regname"></span> Thank you for registering with us.  Please verify your email by clicking the link we've sent to your inbox. Once verified, you'll be ready to start using our service.!</div>
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
    function removeClass() {
        var elements = document.getElementsByClassName('form-group');

        // Loop through all elements and remove the 'error' class
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('error');
        }
    }

    function registered(response) {
        $('.hide').remove();
        $('.regname').text(response.name);
        $('.registered').show();
    }


    function refreshCaptcha() {
        fetch('/refresh-captcha')
            .then(response => response.json())
            .then(data => {
                document.querySelector('.captchaImg').innerHTML = data.captcha;
            });
    }
</script>
@endpush
