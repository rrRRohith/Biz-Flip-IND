@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', "{$seller->name} | {$seller->seller->company_name}")
<div id="app">

    <div class="container-fluid w-100 d-flex align-items-center"
        style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://bookly.indigitalapi.com/uploads/static/res/auth.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;">
        <div class="my-5 w-100">
            @include('home.search')
        </div>
    </div>
    <div class="container mt-5">
        <ul class="breadcrumb">
            <li class="pe-1">
                <a href="/" class="text-decoration-none">Home</a>
            </li>
            <li class="pe-1">/ <a href="/agents" class="text-decoration-none">Agents</a></li>
            <li class="pe-1">/ {{ $seller->seller->company_name }}</li>
        </ul>
        <div class="card border-0 rounded-3 mb-5">
            <div class="card-body p-4">
                <div class="text-overflow me-2">
                    <div class="d-flex align-items-center">
                        <div class="me-2">
                            <img class="image-fit w-h-60 rounded-circle" src="{{ $seller->seller->logo_url }}"
                                alt="" />
                        </div>
                        <div class="text-overflow">
                            <div class="fw-semibold text-overflow fs-4">
                                {{ $seller->seller->company_name }}
                            </div>
                            <div class="text-muted">
                                <i class="bi bi-geo-alt-fill"></i> {{ $seller->seller->address }},
                                {{ $seller->seller->city }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class='mt-4'>
                    {{ $seller->seller->description }}
                </div>
                <div class='mt-3'>
                    <a target="_blank" href="{{ $seller->seller->website }}"
                        class='btn btn-sm btn-secondary border-0 rounded-3 text-decoration-none me-3'>Visit website
                        <i class="bi bi-box-arrow-up-right"></i></a>
                    <a role="button" data-url="{{ request()->url() }}" data-title="{{ "{$seller->name} | {$seller->seller->company_name}" }}" class='share btn btn-sm btn-secondary border-0 rounded-3 text-decoration-none'>
                        Share <i class="bi bi-share"></i></a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mb-4 m-lg-0">
                @if ($seller->ads()->count())
                    <div class='mb-4'>
                        <div class="fw-semibold mb-3 fs-5">
                            Listings of {{ $seller->name }} from {{ $seller->seller->company_name }}
                        </div>
                        <div class="row">
                            @foreach ($seller->ads()->limit(12)->get() as $ad)
                                @include('partials.propertyList')
                            @endforeach
                        </div>
                    </div>
                @endif
                <div class='mb-4'>
                    <div class="fw-semibold mb-3 fs-5">
                        Locate {{ $seller->seller->company_name }}
                    </div>
                    <iframe class="w-100 rounded-1 mh-400px"
                        src= "https://maps.google.com/maps?q={{ $seller->seller->lat }},{{ $seller->seller->lng }}&hl=es;z=14&output=embed"></iframe>
                </div>
            </div>
            <div class="col-lg-4">
                @include('partials.contact', ['user' => $seller])
            </div>
            <div class="my-4"></div>
        </div>
    </div>
</div>
@endsection
@include('search.scripts', [
    'categories' => $ad_categories,
    'business_categories' => $business_categories,
    'purposeOptions' => $search_purposeOptions,
    'provinces' => [],
    'cities' => [],
    'request' => request(),
])
@push('scripts')
@endpush