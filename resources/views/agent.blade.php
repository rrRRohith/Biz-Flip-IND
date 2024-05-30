@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Agent')
<div>
    
    <div class="container-fluid w-100 d-flex align-items-center"
        style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://bookly.indigitalapi.com/uploads/static/res/auth.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 50vh;">
        @include('home.search')
    </div>
    <div class="container agent-container">
        <div class="card border-0 rounded-3 mb-5">
            <div class="card-body p-4">
                <div class="text-overflow me-2">
                    <div class="d-flex align-items-center">
                        <div class="me-2">
                            <img class="image-fit w-h-60 rounded-circle"
                                src="https://res.cloudinary.com/rr6/image/upload/v1716213343/1042239_407_vaviwn.png"
                                alt="" />
                        </div>
                        <div class="text-overflow">
                            <div class="fw-semibold text-overflow fs-4">
                                Able Realty
                            </div>
                            <div class="text-muted">
                                <i class="bi bi-geo-alt-fill"></i> Toronto
                            </div>
                        </div>
                        <div class="btn rounded-1 border-0 ms-auto btn-dark">
                            Send a message <i class="bi bi-chat-left-dots-fill"></i>
                        </div>
                    </div>
                </div>
                <div class='mt-4'>
                    Welcome to Able Realty, where your real estate dreams become reality. Located in the heart of
                    Toronto, we specialize in helping you buy, sell, and invest in properties throughout the Greater
                    Toronto Area. Our team of experienced professionals is dedicated to providing personalized service
                    and expert guidance to ensure a seamless and successful real estate experience.
                </div>
                <div class='mt-3'>
                    <a href="#"
                        class='btn btn-sm btn-secondary border-0 rounded-3 text-decoration-none me-3'>Visit website
                        <i class="bi bi-box-arrow-up-right"></i></a>
                    <a href="#" class='btn btn-sm btn-secondary border-0 rounded-3 text-decoration-none'>
                        Share <i class="bi bi-share"></i></a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mb-4 m-lg-0">
                <div class='mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Listings of James McGill from Able Realty
                    </div>
                    <div class="row">
                        @include('partials.propertyList', [
                            'image' => 'https://bizsold.com/uploads/listings/1682629403_14.jpeg',
                        ])
                        @include('partials.propertyList', [
                            'image' => 'https://bizsold.com/uploads/listings/1714673766_18.jpeg',
                        ])
                        @include('partials.propertyList', [
                            'image' => 'https://bizsold.com/uploads/listings/1646757622_3.jpeg',
                        ])
                        @include('partials.propertyList', [
                            'image' => 'https://bizsold.com/uploads/listings/1715109582_30.jpeg',
                        ])
                    </div>
                    <div class="mt-4 d-flex w-100">
                        <div class="btn rounded-1 border-0 m-auto btn-dark">Load more listings <i
                                class="bi bi-arrow-repeat"></i></div>
                    </div>
                </div>
                <div class='mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Locate Able Realty
                    </div>
                    <img src="https://res.cloudinary.com/rr6/image/upload/v1716213731/HILmr_jfipbk.png"
                        class='rounded-3 w-100' alt="" />
                </div>
            </div>
            <div class="col-lg-4">
                @include('partials.contact')
            </div>
            <div class="my-4"></div>
        </div>
    </div>
</div>
@endsection
