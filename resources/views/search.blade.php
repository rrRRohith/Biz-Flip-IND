@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Search')
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
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-3 d-none d-lg-block search-card">
                <div class="card mb-5 border-0 rounded-3 bg-white shadow-sm contact-card">
                    <div class="card-body">
                        <p class="fw-semibold fs-5">Search</p>
                        @include('home.searchFilter')
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div>
                    <div class="d-flex align-items-center nav-tabs border-0" role="tablist">
                        <div data-bs-toggle="modal" data-bs-target="#filterModal"
                            class="btn btn-dark border-0 rounded-1 shadow-sm me-2 d-block d-lg-none">
                            Filters <i class="bi bi-funnel"></i>
                        </div>
                        <div class="d-none d-lg-block fw-semibold">
                            Showing results of 412
                        </div>
                        <div data-bs-toggle="tab" data-bs-target="#grid" role="tab"
                            class="ms-auto btn btn-light bg-white border-0 rounded-1 shadow-sm me-2 active">
                            Grid <i class="bi bi-grid"></i>
                        </div>
                        <div data-bs-toggle="tab" data-bs-target="#list" role="tab"
                            class="btn btn-light bg-white border-0 rounded-1 shadow-sm me-2">
                            List <i class="bi bi-list-task"></i>
                        </div>
                        <div data-bs-toggle="tab" data-bs-target="#map" role="tab"
                            class="btn btn-light bg-white border-0 rounded-1 shadow-sm">
                            Map <i class="bi bi-geo-alt-fill"></i>
                        </div>
                    </div>
                    <div class="d-block d-lg-none fw-semibold mt-3">
                        Showing results of 412
                    </div>
                </div>
                <div class="mt-4 mb-5">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="grid" role="tabpanel"
                            aria-labelledby="home-tab">
                            <div class="row">
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1682629403_14.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1714673766_18.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1646757622_3.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1715109582_30.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1685366102_97.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1695136348_43.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1669233945_71.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1709263091_4.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1702578531_31.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1711146598_85.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1685393876_76.jpeg',
                                ])
                                @include('partials.propertyGrid3', [
                                    'image' => 'https://bizsold.com/uploads/listings/1709571710_86.jpeg',
                                ])
                            </div>
                            <div class="mt-4 d-flex w-100">
                                <div class="btn rounded-1 border-0 m-auto btn-dark">Load more listings <i
                                        class="bi bi-arrow-repeat"></i></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list" role="tabpanel" aria-labelledby="profile-tab">
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
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1685366102_97.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1695136348_43.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1669233945_71.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1709263091_4.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1702578531_31.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1711146598_85.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1685393876_76.jpeg',
                                ])
                                @include('partials.propertyList', [
                                    'image' => 'https://bizsold.com/uploads/listings/1709571710_86.jpeg',
                                ])
                            </div>
                            <div class="mt-4 d-flex w-100">
                                <div class="btn rounded-1 border-0 m-auto btn-dark">Load more listings <i
                                        class="bi bi-arrow-repeat"></i></div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="map" role="tabpanel" aria-labelledby="contact-tab">
                            <img src="https://res.cloudinary.com/rr6/image/upload/v1716213731/HILmr_jfipbk.png"
                                class='rounded-3 w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="filterModal" data-bs-backdrop="static" data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-light">
                <div class="modal-header border-0">
                    <h5 class="modal-title" id="staticBackdropLabel">Filters</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-0">
                    @include('home.searchFilter')
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn btn-lg fs-6 btn-light bg-white border-0 shadow-none rounded-1"
                        data-bs-dismiss="modal">Close</button>
                    <a href="/search" class="btn btn-lg btn-dark fs-6 shadow-none border-0 rounded-1">
                        Search <i class="bi bi-search m-auto"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
