@if($testimonials->count())
<section class="bg-light">
    <div class="container">
        <div class="row align-items-center mt-5">
            <div class="col-md-4">
                <div class="my-5">
                    <h1 class="fs-2 fw-semibold">Testimonials</h1>
                    <div class="fs-5">
                        We believe in client satisfaction. Here are some testimonials by our worthy clients.
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        @foreach($testimonials as $key => $collection)
                        <div class="carousel-item {{ !$key ? 'active' : '' }}" data-bs-interval="10000">
                            <div class="row">
                                @foreach($collection as $testimonial)
                                <div class="col-md-6 mb-3">
                                    <div class="border-0 card shadow-sm rounded-1 bg-white h-100">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mb-3">
                                                <img class="rounded-circle shadow-sm w-h-60 me-2 border border-2 border-light image-fit" src="{{ asset('images/'.$testimonial->image) }}" alt="">
                                                <div>
                                                    <div class="fw-semibold fs-5">{{ $testimonial->name }}</div>
                                                    <div class="">{{ $testimonial->designation }}, {{ $testimonial->company_name }}</div>
                                                </div>
                                            </div>
                                            <div>{{ $testimonial->message }}</div>
                                            <div class="text-warning fs-5">
                                                @include('partials.rating', ['rating' => 5])
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="carousel-indicators position-relative mt-4">
                        @foreach($testimonials as $key => $collection)
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="{{ $key }}" class="{{ !$key ? 'active' : '' }}" aria-current="true" aria-label="Slide 1"></button>
                        @endforeach
                      </div>
                  </div>
            </div>
        </div>
    </div>
</section>
@endif