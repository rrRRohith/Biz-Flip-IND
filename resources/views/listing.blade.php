@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', $ad->title)
<div class="">
    <div class="mt-5 not-embed">
        <div class="container pt-5">
            <ul class="breadcrumb">
                <li class="pe-1">
                    <a href="/" class="text-decoration-none">Home</a>
                </li>
                <li class="pe-1">/ <a href="{{ route('ads.index') }}" class="text-decoration-none">Ads</a></li>
                @if ($ad->business_category)
                    <li class="pe-1">/ <a href="{{ route('ads.index', ['bcategory' => $ad->business_category->id]) }}"
                            class="text-decoration-none">{{ $ad->business_category->name }}</a></li>
                @endif
                @if ($ad->category)
                    <li class="pe-1">/ <a href="{{ route('ads.index', ['category' => $ad->category->id]) }}"
                            class="text-decoration-none">{{ $ad->category->name }}</a></li>
                @endif
                <li class="pe-1">/ {{ $ad->title }}</li>
            </ul>
        </div>
    </div>
    @include('partials.gallery')
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-8 mb-4 m-lg-0">
                <div>
                    <h1 class="fs-2 fw-semibold">{{ $ad->title }}</h1>
                    @if($ad->ad_type == 'wanted')
                    <div class="fs-5 fw-semibold">${{ number_format($ad->price) }} - ${{ number_format($ad->price_max) }}</div>
                    @else
                    <div class="fs-5 fw-semibold">${{ number_format($ad->price) }}</div>
                    @endif
                    @if ($ad->is_franchise)
                        @include('franchise')
                    @endif
                    <div class="text-overflow mt-4">
                        <span class="text-uppercase">Location</span>. <i class="bi bi-geo-alt-fill"></i><span
                            class="fw-semibold">{{ $ad->city }}</span>
                    </div>
                    @if ($ad->business_category)
                        <div class="text-overflow">
                            <span class="text-uppercase">Category</span>. <a
                                href="{{ route('ads.index', ['bcategory' => $ad->business_category->id]) }}"
                                class="fw-semibold text-decoration-none">{{ $ad->business_category->name }}</a>
                        </div>
                    @endif
                    @if ($ad->category)
                        <div class="text-overflow">
                            <span class="text-uppercase">Industry</span>. <a
                                href="{{ route('ads.index', ['category' => $ad->category->id]) }}"
                                class="fw-semibold text-decoration-none">{{ $ad->category->name }}</a>
                        </div>
                    @endif
                </div>
                <div class="mt-4">
                    <p class='fw-semibold fs-5'>Ad details</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Ad ID:</span>
                                <div class="content fw-semibold">{{ $ad->unique_code }}</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Price:</span>
                                <div class="content fw-semibold">${{ number_format($ad->price) }}</div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property Size:</span>
                                <div class="content fw-semibold">{{ $ad->space }}</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property Type:</span>
                                <div class="content fw-semibold">{{ $ad->property_type }}</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property Status:</span>
                                <div class="content fw-semibold">{{ $ad->ad_purpose }}</div>
                            </div>
                        </div>
                        @foreach ($ad->additional_informations as $addInfo)
                            <div class="col-md-6">
                                <div class="d-flex mb-2">
                                    <span class="label w-35 text-muted me-2">{{ $addInfo->info }}:</span>
                                    <div class="content fw-semibold">{{ $addInfo->value }}</div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="mt-4">
                    <p class='fw-semibold fs-5'>Features</p>
                    @foreach ($ad->features as $feature)
                        <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm">{{ $feature->name }}
                        </div>
                    @endforeach
                </div>
                <div class="mt-4">
                    <p class='fw-semibold fs-5'>Facilities</p>
                    @foreach ($ad->facilities as $facility)
                        <div class="btn btn-light border-0 me-2 mb-2 bg-white btn-sm shadow-sm">{{ $facility->name }}
                        </div>
                    @endforeach
                </div>
                <div class="mt-4">
                    {!! $ad->description !!}
                </div>
                @if($ad->ad_type == 'sale')
                <div class='mt-4 mb-4 not-embed'>
                    <div class="fw-semibold mb-3 fs-5">
                        Locate {{ $ad->title }}
                    </div>
                    <iframe class="w-100 rounded-1 mh-400px"
                        src= "https://maps.google.com/maps?q={{ $ad->lat }},{{ $ad->lng }}&hl=es;z=14&output=embed"></iframe>
                </div>
                @endif
                <div class="mb-4 not-embed">
                    <a role="button" data-url="{{ request()->url() }}" data-title="{{ $ad->title }}"
                        class='share btn btn-sm btn-secondary border-0 rounded-3 text-decoration-none'>
                        Share <i class="bi bi-share"></i></a>
                </div>
                @if ($ad->seller_ads()->count() && $ad->seller->is_agent)
                    <div class='mb-4 not-embed'>
                        <div class="fw-semibold mb-3 fs-5">
                            Other listings by {{ $ad->seller->name }}
                        </div>
                        <div class="row">
                            @foreach ($ad->seller_ads()->limit(2)->get() as $sAd)
                                @include('partials.propertyList', ['ad' => $sAd])
                            @endforeach
                        </div>
                        <div class="mt-4 d-flex w-100">
                            <a href="{{ route('agents.show', ['agent' => $ad->seller->seller]) }}"
                                class="btn rounded-1 border-0 m-auto btn-dark">View all listings <i
                                    class="bi bi-arrow-repeat"></i></a>
                        </div>
                    </div>
                @endif
            </div>
            <div class="col-lg-4 not-embed">
                @include('partials.contact', ['user' => $ad->seller])
            </div>
            <div class="my-4"></div>
            @if ($ad->similar_ads->count())
                <div class='mb-5 not-embed'>
                    <div class="fw-semibold mb-3 fs-5">
                        Similar listing
                    </div>
                    <div class="row">
                        @foreach ($ad->similar_ads as $sAd)
                            @include('partials.propertyGrid', ['ad' => $sAd])
                        @endforeach
                    </div>
                    <div class="mt-4 d-flex w-100">
                        <a href="{{ route('ads.index') }}" class="btn rounded-1 border-0 m-auto btn-dark">View all
                            listings <i class="bi bi-arrow-repeat"></i></a>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
@endsection
@push('scripts')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script>
    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    // nav: true,
                    loop: true,
                },
                600: {
                    items: 3,
                    // nav: false,
                    loop: true,
                },
                1000: {
                    items: 3,
                    // nav: true,
                    loop: true,
                }
            }
        });
    });
    
    $(document).ready(() => {
        if(!(document.cookie.split('; ').find(row => row.startsWith('client_ip=')) || '').split('=')[1] || null){
            $.getJSON("https://api.ipify.org?format=json", function(data) {
                document.cookie = `client_ip=${data.ip}`;
                $.getJSON(location.href);
            })
        }
    });
</script>
@endpush
