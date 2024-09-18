@extends('layouts.wrapper', ['bodyClass' => 'bg-light'])
@section('content')
    @push('styles')
        <style>
            .acc_type {
                cursor: pointer;
            }

            .acc_type.active {
                border: 1px solid #0000 !important;
                background: #c1afaf3c;
                color: #282626;
            }
        </style>
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


                            <form action="" data-callback="registered" id="authForm" method="post"
                                class="ajax hide">
                                @csrf
                                <div class="fs-6 fw-sembold mb-2">Your account information</div>
                                <div class="col-lg-12" x-data="{ accountType: 'individual' }">
                                    <div class="row">
                                        <div class="col-lg-6">

                                            <div @click="accountType = 'individual';removeClass();"
                                                :class="{ 'active': accountType === 'individual' }"
                                                class="card border-0 rounded-4 shadow-sm mb-4 acc_type">
                                                <div class="card-body px-xl-5 px-md-4 ">
                                                    <div class="d-flex align-items-center">
                                                        <div>
                                                            <div class="fs-6 fw-semibold">
                                                                <input type="radio" class="me-3" id="individual"
                                                                    value="individual" x-model="accountType">
                                                                Individual Account
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">

                                            <div @click="accountType = 'agent';removeClass();"
                                                :class="{ 'active': accountType === 'agent' }"
                                                class="card border-0 rounded-4 shadow-sm mb-4 acc_type">
                                                <div class="card-body px-xl-5 px-md-4">
                                                    <div class="d-flex align-items-center">
                                                        <div>

                                                            <div class="fs-6 fw-semibold">
                                                                <input type="radio" class="me-3" id="agent"
                                                                    value="agent" x-model="accountType">Agent Account
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {{-- //common user details --}}
                                    <div class="row">
                                        <div class="col-md-12" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Business name</label>
                                                <input form="authForm" name="company_name" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-12" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Description</label>
                                                <textarea form="authForm" name="description" autocomplete="off" type="text" placeholder='Tell us about your business'
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">First name</label>
                                                <input form="authForm" name="firstname" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Last name</label>
                                                <input form="authForm" name="lastname" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Phone</label>
                                                <input x-mask="(999) 999-9999" form="authForm" name="phone" type="text" autocomplete="off"
                                                    placeholder='' autocomplete="off" maxlength="14"
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Email</label>
                                                <input form="authForm"  autocomplete="off"  name="email" type="email"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Password</label>
                                                <input form="authForm" autocomplete="new-password" name="password" type="password"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Address</label>
                                                <input form="authForm" name="address" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">City</label>
                                                <input form="authForm" name="city" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Postal code</label>
                                                <input form="authForm" x-mask="999 9999" maxlength="8" name="postalcode" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                        <div class="col-md-6" x-show="accountType == 'agent'">
                                            <div class="form-group label-top mb-4">
                                                <label class="fw-semibold">Province</label>
                                                <input form="authForm" name="province" type="text" autocomplete="off"
                                                    placeholder=''
                                                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                            </div>
                                        </div>
                                    </div>
                                   
                                        <div class="row g-3 align-items-center">
                                            <div class="form-group  input-group mb-3 col-lg-12">
                                                <span class="input-group-text bi bi-question-circle" id="basic-addon1"></span>
                                                <input form="authForm"  autocomplete="off" placeholder="Enter captcha code" type="text" name="captcha" id="captcha" class="form-control">
                                                <span class="input-group-text captchaImg" id="basic-addon2">
                                                    <img  src="{{ captcha_src() }}" alt="captcha">
                                                </span>
                                                <span class="input-group-text me-2" id="basic-addon3">
                                                    <span id="passwordHelpInline" role="button" @click="refreshCaptcha()" class=" bi bi-arrow-clockwise fw-bold"></span>
                                                </span>
                                            </div>
                                      </div>
                                      <div class="form-group mb-4">
                                        <div class="form-check form-check-lg">
                                            <input form="authForm" role="button"
                                                class="form-check-input shadow-none border border-gray border-1 cursor-pointer"
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
