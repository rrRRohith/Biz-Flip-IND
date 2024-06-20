@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', $ad->title)
<div>
    @include('partials.gallery')
    <div class="container agent-container">
        <div class="card border-0 rounded-3 mb-2">
            <div class="card-body p-4">
                <div class="text-overflow me-2">
                    <div class="d-flex align-items-center">
                        <div class="me-2">
                            <img class="image-fit w-h-60 rounded-circle" src="{{ $ad->seller->is_agent ? $ad->seller->seller->logo_url : $ad->seller->picture_url }}"
                                alt="" />
                        </div>
                        <div class="text-overflow">
                            <div class="fw-semibold text-overflow fs-4">
                                {{ $ad->title }}
                            </div>
                            <div class="text-muted">
                                By {{ $ad->seller->is_agent ? $ad->seller->seller->company_name : $ad->seller->name }}
                            </div>
                        </div>
                        <div class="btn rounded-1 border-0 ms-auto btn-dark">
                            Send a message <i class="bi bi-chat-left-dots-fill"></i>
                        </div>
                    </div>
                </div>
                <div class='mt-3'>
                    @if($ad->seller->is_agent)
                    <a target="_blank." href="{{ $ad->seller->seller->website }}"
                        class='btn btn-sm btn-secondary border-0 rounded-3 text-decoration-none me-3'>Visit website
                        <i class="bi bi-box-arrow-up-right"></i></a>
                    @endif
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
                        {{ $ad->description }}
                    </div>
                </div>
                <div class="mt-4">
                    <p class='fw-semibold fs-5'>Property Details</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex mb-2">
                                <span class="label w-35 text-muted me-2">Property ID:</span>
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
                <div class='mt-4 mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Locate Lakeview Haven, Lake Tahoe
                    </div>
                    <iframe class="w-100 rounded-1 mh-400px"
                        src= "https://maps.google.com/maps?q={{ $ad->lat }},{{ $ad->lng }}&hl=es;z=14&output=embed"></iframe>
                </div>
                @if($ad->seller_ads()->count() && $ad->seller->is_agent)
                <div class='mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Other listings by James McGill
                    </div>
                    <div class="row">
                        @foreach ($ad->seller_ads()->limit(2)->get() as $sAd)
                            @include('partials.propertyList', ['ad' => $sAd])
                        @endforeach
                    </div>
                    <div class="mt-4 d-flex w-100">
                        <a href="{{ route('agents.show', ['agent' => $ad->seller->seller]) }}" class="btn rounded-1 border-0 m-auto btn-dark">View all listings <i
                                class="bi bi-arrow-repeat"></i></a>
                    </div>
                </div>
                @endif
            </div>
            <div class="col-lg-4">
                @include('partials.contact', ['user' => $ad->seller])
            </div>
            <div class="my-4"></div>
            @if($ad->similar_ads->count())
            <div class='mb-5'>
                <div class="fw-semibold mb-3 fs-5">
                    Similar listing
                </div>
                <div class="row">
                    @foreach ($ad->similar_ads as $sAd)
                        @include('partials.propertyGrid', ['ad' => $sAd])
                    @endforeach
                </div>
                <div class="mt-4 d-flex w-100">
                    <a href="{{ route('ads.index') }}" class="btn rounded-1 border-0 m-auto btn-dark">View all listings <i
                        class="bi bi-arrow-repeat"></i></a>
                </div>
            </div>
            @endif
        </div>
    </div>
</div>
@endsection
