@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Listing')
<div>
    @include('partials.gallery')
    <div class="container agent-container">
        <div class="card border-0 rounded-3 mb-2">
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
                                Lakeview Haven, Lake Tahoe
                            </div>
                            <div class="text-muted">
                                By Able Realty
                            </div>
                        </div>
                        <div class="btn rounded-1 border-0 ms-auto btn-dark">
                            Send a message <i class="bi bi-chat-left-dots-fill"></i>
                        </div>
                    </div>
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
                <div class=''>
                    <p class='fw-semibold fs-5'>Description</p>
                    <div>
                        Located around an hour away from Paris, between the Perche and the Iton valley, in a beautiful
                        wooded park bordered by a charming stream, this country property immediately seduces with its
                        bucolic and soothing environment.
                    </div>
                </div>
                <div class="mt-4">
                    <p class='fw-semibold fs-5'>Property Details</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property ID:</span>
                                <div class="content fw-semibold">AVT1020</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Bedrooms:</span>
                                <div class="content fw-semibold">4</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Price:</span>
                                <div class="content fw-semibold">$250,00<span
                                        class="caption-1 fw-4 text-variant-1">/month</span></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Bedrooms:</span>
                                <div class="content fw-semibold">1</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property Size:</span>
                                <div class="content fw-semibold">1200 SqFt</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Bathsrooms:</span>
                                <div class="content fw-semibold">1</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Year built:</span>
                                <div class="content fw-semibold">2023 - 12 - 11</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Bathsrooms:</span>
                                <div class="content fw-semibold">3</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property Type:</span>
                                <div class="content fw-semibold">House, Apartment</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Garage:</span>
                                <div class="content fw-semibold">1</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property Status:</span>
                                <div class="content fw-semibold">For Rent</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Garage Size:</span>
                                <div class="content fw-semibold">1200 SqFt</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <p class='fw-semibold fs-5'>Amenities And Features</p>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i class="bi bi-fire"></i>
                        Smoke alarm</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i class="bi bi-snow"></i>
                        Refrigerator</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i class="bi bi-cloud"></i>
                        Carbon monoxide alarm</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i
                            class="bi bi-prescription2"></i> First aid kit</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i
                            class="bi bi-camera-video"></i> Security cameras</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i
                            class="bi bi-cup-hot"></i> Coffee maker</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i class="bi bi-tv"></i> TV
                        with standard cable</div>
                    <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm"><i class="bi bi-cookie"></i>
                        Microwave</div>
                </div>
                <div class='mt-4 mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Locate Lakeview Haven, Lake Tahoe
                    </div>
                    <img src="https://res.cloudinary.com/rr6/image/upload/v1716213731/HILmr_jfipbk.png"
                        class='rounded-3 w-100' alt="" />
                </div>
                <div class='mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Other listings by James McGill
                    </div>
                    <div class="row">
                        @include('partials.propertyList', [
                            'image' => 'https://bizsold.com/uploads/listings/1682629403_14.jpeg',
                        ])
                        @include('partials.propertyList', [
                            'image' => 'https://bizsold.com/uploads/listings/1714673766_18.jpeg',
                        ])
                    </div>
                    <div class="mt-4 d-flex w-100">
                        <a href="/agent" class="btn rounded-1 border-0 m-auto btn-dark">View all listings <i
                                class="bi bi-arrow-repeat"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                @include('partials.contact')
            </div>
            <div class="my-4"></div>
            <div class='mb-5'>
                <div class="fw-semibold mb-3 fs-5">
                    Similar listing
                </div>
                <div class="row">
                    @include('partials.propertyGrid', [
                        'image' => 'https://bizsold.com/uploads/listings/1682629403_14.jpeg',
                    ])
                    @include('partials.propertyGrid', [
                        'image' => 'https://bizsold.com/uploads/listings/1714673766_18.jpeg',
                    ])
                    @include('partials.propertyGrid', [
                        'image' => 'https://bizsold.com/uploads/listings/1646757622_3.jpeg',
                    ])
                    @include('partials.propertyGrid', [
                        'image' => 'https://bizsold.com/uploads/listings/1715109582_30.jpeg',
                    ])
                </div>
                <div class="mt-4 d-flex w-100">
                    <div class="btn rounded-1 border-0 m-auto btn-dark">View more listings <i
                            class="bi bi-arrow-repeat"></i></div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
