@extends('layouts.wrapper', ['bodyClass' => 'bg-light'])
@section('content')
@section('title', 'Sign up')
<div>
    <div class="container-fluid p-3 p-sm-5">
        <div class="container-fluid">
            <a href="/" class='fs-3 text-dark text-decoration-none fw-semibold'><i
                class="bi bi-arrow-left"></i></a>
            <div class="col-xl-4 p-0 m-auto col-lg-6 col-md-9">
                <div class="text-center">
                    <div class="fs-3 fw-semibold mb-4">Sign up</div>
                </div>
                <div>
                    <a href="{{ url('/auth/seller') }}" class='text-decoration-none text-dark'>
                    <div class="card border-0 rounded-4 shadow-sm mb-4">
                        <div class="card-body px-xl-5 p-4 py-4 px-md-4">
                            <div class="d-flex align-items-center">
                                <div>
                                    <div class="fs-3 fw-semibold">For owners</div>
                                    <div class="text-muted">Sell your business directly</div>
                                </div>
                                <div class="fs-3 ms-auto">
                                    <i class="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                    <a href="{{ url('/auth/agent') }}" class='text-decoration-none text-dark'>
                    <div class="card border-0 rounded-4 shadow-sm bg-dark text-white">
                        <div class="card-body px-xl-5 p-4 py-4 px-md-4">
                            <div class="d-flex align-items-center">
                                <div>
                                    <div class="fs-3 fw-semibold">For agents</div>
                                    <div class="text-light">List business and get leads</div>
                                </div>
                                <div class="fs-3 ms-auto">
                                    <i class="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
