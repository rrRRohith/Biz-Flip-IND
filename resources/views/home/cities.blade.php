@php
    $cities = json_decode(
        json_encode([
            [
                'city' => 'Toronto, Ontario',
                'grid_class' => 'col-md-6',
                'listings' => '14',
                'image' =>
                    'https://res.cloudinary.com/rr6/image/upload/v1716201623/istockphoto-1221431940-612x612_tx4qgn.jpg',
            ],
            [
                'city' => 'Vancouver, British Columbia',
                'grid_class' => 'col-md-6',
                'listings' => '12',
                'image' =>
                    'https://res.cloudinary.com/rr6/image/upload/v1716201623/628f4571de046df5bcb1bde946a83c83_uez400.jpg',
            ],
            [
                'city' => 'Montreal, Quebec',
                'grid_class' => 'col-md-4',
                'listings' => '11',
                'image' =>
                    'https://res.cloudinary.com/rr6/image/upload/v1716201623/76b15abc00ae513ee47854acd7cb3f42_rubex6.jpg',
            ],
            [
                'city' => 'Calgary, Alberta',
                'grid_class' => 'col-md-4',
                'listings' => '16',
                'image' =>
                    'https://res.cloudinary.com/rr6/image/upload/v1716201623/istockphoto-939926344-612x612_eyl4qz.jpg',
            ],
            [
                'city' => 'Edmonton, Alberta',
                'grid_class' => 'col-md-4',
                'listings' => '18',
                'image' =>
                    'https://res.cloudinary.com/rr6/image/upload/v1716201622/Edmonton_Skyline_Northern-Lights-AtTheLookout_WEB_211122_162316_yrwgpa.jpg',
            ],
        ]),
    );
@endphp
<div class="container">
    <div class="text-center mb-4">
        <div class="fs-2 m-auto fw-semibold">Most popular places</div>
        <div class="text-muted">
            Discover the most sought-after locations for businesses in our comprehensive classified listings.
        </div>
    </div>
    <div class="row cities">
        @foreach ($cities as $city)
            <div class="{{ $city->grid_class }} mb-4">
                <a href="{{ route('ads.index', ['city' => $city->city]) }}" role="button"
                    class='text-decoration-none d-block position-relative'>
                    <img class='w-100 rounded-3' src="{{ $city->image }}" alt="" />
                    <div class="position-absolute bottom-0 start-0 w-100">
                        <div class="w-100 d-flex align-items-center p-4 text-light">
                            <div class='text-overflow'>
                                <div class="fw-semibold fs-5 text-overflow">
                                    {{ $city->city }}
                                </div>
                                <div class="text-overflow">{{ $city->listings }} listings</div>
                            </div>
                            <div class="ms-auto fs-3">
                                <i class="bi bi-plus-circle"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        @endforeach
    </div>
</div>
