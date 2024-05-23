@php
    $testimonials = collect([
        collect([
            [
                'name' => 'James McGill',
                'city' => 'Toronto',
                'title' => 'Awesome platform',
                'description' => 'I have been a happy and satisfied customer of Business Exchange for many years.',
                'rating' => 5,
                'image' => 'https://res.cloudinary.com/rr6/image/upload/v1716198115/Jimmy_McGill_infobox_iog9ex.webp'
            ],
            [
                'name' => 'Charles McGill',
                'city' => 'Toronto',
                'title' => 'Thank you',
                'description' => 'I have been a happy and satisfied customer of Business Exchange for many years.',
                'rating' => 4,
                'image' => 'https://res.cloudinary.com/rr6/image/upload/v1716198115/Chuck_McGill_Infobox_ev9lit.webp'
            ]]), collect([
            [
                'name' => 'Kim Wexler',
                'city' => 'Toronto',
                'title' => 'Assured leads',
                'description' => 'I have been a happy and satisfied customer of Business Exchange for many years.',
                'rating' => 5,
                'image' => 'https://res.cloudinary.com/rr6/image/upload/v1716198115/Kim_Wexler_infobox_rscays.webp'
            ],
            [
                'name' => 'Howard Hamlin',
                'city' => 'Toronto',
                'title' => 'Sell fast',
                'description' => 'I have been a happy and satisfied customer of Business Exchange for many years.',
                'rating' => 4,
                'image' => 'https://res.cloudinary.com/rr6/image/upload/v1716198366/a5f51e4d1e9c95f3b655ff1f5eae8a09_rr2enq.jpg'
            ]])
    ])
@endphp
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
                        @foreach($testimonials as $key => $testimonials)
                        <div class="carousel-item {{ !$key ? 'active' : '' }}" data-bs-interval="10000">
                            <div class="row">
                                @foreach($testimonials as $testimonial)
                                <div class="col-md-6 mb-3">
                                    <div class="border-0 card shadow-sm rounded-1 bg-white h-100">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center mb-3">
                                                <img class="rounded-circle shadow-sm w-h-60 me-2 border border-2 border-light image-fit" src="{{ $testimonial['image'] }}" alt="">
                                                <div>
                                                    <div class="fw-semibold fs-5">{{ $testimonial['name'] }}</div>
                                                    <div class="">{{ $testimonial['city'] }}</div>
                                                </div>
                                            </div>
                                            <div class="fw-semibold">{{ $testimonial['title'] }}</div>
                                            <div>{{ $testimonial['description'] }}</div>
                                            <div class="text-warning fs-5">
                                                @include('partials.rating', ['rating' => $testimonial['rating']])
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
                        @foreach($testimonials as $key => $testimonials)
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="{{ $key }}" class="{{ !$key ? 'active' : '' }}" aria-current="true" aria-label="Slide 1"></button>
                        @endforeach
                      </div>
                  </div>
            </div>
        </div>
    </div>
</section>