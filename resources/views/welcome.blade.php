@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', "Businesses for Sale and Franchise Opportunities")
<div id="app">
    <div class="container-fluid w-100 d-flex align-items-center" style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://res.cloudinary.com/rr6/image/upload/v1724138709/auth_nczirt.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 50vh;">
    @include('home.search')
    </div>
    <div class="pb-5">
        @include('home.categories', ['categories' => $categories])
        @include('home.places', ['title' => 'Businesses', 'ads' => $businesses])
        @include('home.places', ['title' => 'Franchises', 'ads' => $franchises])
        @include('home.cities')
        @include('home.advertise')
        @include('home.brokers', ['sellers' => $sellers])
        @include('home.testimonials')
    </div>
  </div>
@endsection
@include('search.scripts', [
    'categories' => $ad_categories,
    'business_categories' => $business_categories,
    'purposeOptions' => $search_purposeOptions,
    'provinces' => $provinces,
    'cities' => [],
    'request' => request(),
])
@push('scripts')
@endpush