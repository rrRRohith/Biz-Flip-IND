@extends('layouts.wrapper')
@section('contents')
@section('title', 'Contact us')
<div>
    @include('layouts.pageHeader', ['title' => 'Contact us'])
    <div class="container">
        <div class="my-5">
            <div class="row">
                <div class="col-lg-8 mb-4 mb-lg-0">
                    <div class="fw-semibold fs-3">
                        Drop Us A Line
                    </div>
                    <div class="mb-4">
                        Feel free to connect with us through our online channels for updates, news, and more.
                    </div>
                    <form data-reset="true" data-callback="messageSent" class="ajax" action="" id="contactForm" method="POST">
                        @csrf
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">First name</label> <span class="text-danger"> *</span>
                                    <input form="contactForm" name="firstname" type="text" placeholder='Enter your first name'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Last name</label> <span class="text-danger"> *</span>
                                    <input form="contactForm" name="lastname" type="text" placeholder='Enter your last name'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Email</label> <span class="text-danger"> *</span>
                                    <input form="contactForm" name="email" type="email" placeholder='Enter your email address'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div x-data class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Phone Number</label> <span class="text-danger"> *</span>
                                    <input x-data x-mask="(999) 999-9999" form="contactForm" name="phone" type="text" placeholder='Enter your phone'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Subject</label> <span class="text-danger"> *</span>
                                    <input form="contactForm" name="subject" type="text" placeholder='Enter subject'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Your message</label> <span class="text-danger"> *</span>
                                    <textarea form="contactForm" name="message" type="text" placeholder='Enter your message'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <button form="contactForm" data-default="Send message" type="submit"
                                class="btn btn-dark shadow-none rounded-1 btn-lg continue-btn fs-6 ms-auto fw-semibold">Send
                                message </button>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-5 border-0 rounded-3 bg-light">
                        <div class="card-body p-4">
                            <div class="fw-semibold fs-3">
                                Contact us
                            </div>
                            <div class="mb-3">
                                <div class="fw-semibold fs-5 mb-2">
                                    Address:
                                </div>
                                <div>
                                    101 E 129th St, East Chicago, IN 46312
                                    <br /> United States
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="fw-semibold fs-5 mb-2">
                                    Infomation:
                                </div>
                                <div>
                                    +1 416-855-2085
                                    <br /> info@bizflip.ca
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="fw-semibold fs-5 mb-2">
                                    Opentime:
                                </div>
                                <div>
                                    Monay - Friday: 08:00 - 20:00 <br /> Saturday - Sunday: 10:00 - 18:00
                                </div>
                            </div>
                            <div class="mb-0">
                                <div class="fw-semibold fs-5 mb-2">
                                    Follow us:
                                </div>
                                <div>
                                    <div class="d-flex align-items-center fs-3 text-muted">
                                        @include('socialMedia', ['socials' => \App\Models\SocailLink::whereUserId(1)->get()])
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4">
                    <img src="https://res.cloudinary.com/rr6/image/upload/v1716213731/HILmr_jfipbk.png"
                        class='rounded-3 w-100' alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
    <script>
        function messageSent(response) {
            $('#contactForm').html(`
                <div class="alert alert-success">Thank you, we have received your message, we will get back to you soon.
            `)
        }
    </script>
@endpush