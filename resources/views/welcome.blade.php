@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', "Businesses for Sale and Franchise Opportunities")
<div>
    <div class="container-fluid w-100 d-flex align-items-center" style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://bookly.indigitalapi.com/uploads/static/res/auth.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 75vh;">
    @include('home.search')
    </div>
    <div class="pb-5">
        @include('home.places', ['title' => 'Businesses'])
        @include('home.places', ['title' => 'Franchises'])
        @include('home.categories')
        @include('home.cities')
        @include('home.brokers')
        @include('home.testimonials')
    </div>
  </div>
@endsection