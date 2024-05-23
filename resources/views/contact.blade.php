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
                    <form action="">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Name</label>
                                    <input name="name" type="text" placeholder='Enter your name'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Email</label>
                                    <input name="email" type="email" placeholder='Enter your email address'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Phone Numbers</label>
                                    <input name="phone" type="text" placeholder='Enter your phone'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Subject</label>
                                    <input name="subject" type="text" placeholder='Enter subject'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group label-top mb-4">
                                    <label class="fw-semibold">Your message</label>
                                    <textarea name="message" type="text" placeholder='Enter your message'
                                        class="form-control border-1 border rounded-1 border-gray shadow-none"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <button type="submit"
                                class="btn btn-dark shadow-none rounded-1 btn-lg fs-6 ms-auto fw-semibold">Send
                                message <i class="bi bi-chat-left-dots-fill"></i></button>
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
                                        <div class="col" role="button">
                                            <div class="btn btn-light border border-1 bg-white">
                                                <i class="bi bi-instagram"></i>
                                            </div>
                                        </div>
                                        <div class="col" role="button">
                                            <div class="btn btn-light border border-1 bg-white">
                                                <i class="bi bi-twitter-x"></i>
                                            </div>
                                        </div>
                                        <div class="col" role="button">
                                            <div class="btn btn-light border border-1 bg-white">
                                                <i class="bi bi-facebook"></i>
                                            </div>
                                        </div>
                                        <div class="col" role="button">
                                            <div class="btn btn-light border border-1 bg-white">
                                                <i class="bi bi-youtube"></i>
                                            </div>
                                        </div>
                                        <div class="col" role="button">
                                            <div class="btn btn-light border border-1 bg-white">
                                                <i class="bi bi-linkedin"></i>
                                            </div>
                                        </div>
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
