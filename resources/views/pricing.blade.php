@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Pricing')
<div>
    @include('layouts.pageHeader', ['title' => 'Pricing'])
    <div class="container" id="body">
        <div class="my-5">
            <div class="row justify-content-center">
                @foreach ($plans as $plan)
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                        <div class="card border-0 rounded-3 shadow-sm py-4">
                            <div class="card-body text-center">
                                <h5 class="card-title fw-semibold">{{ $plan->name }}</h5>
                                <div class="text-primary mb-3">
                                    @if ($plan->price > 0)
                                        <h5 class="card-title fw-semibold">{{ amount($plan->price) }} <small>/
                                            {{ $plan->duration > 1 ? "{$plan->duration} month" : 'month' }}</small></h5>
                                    @else
                                        <h5 class="card-title fw-semibold">{{ amount($plan->price) }} <small>/
                                            {{ $plan->duration > 1 ? "first {$plan->duration} month" : 'first month' }}</small>
                                        </h5>
                                    @endif
                                </div>

                                <p class="card-text">{{ $plan->description }}</p>
                                <div>{{ $plan->features }}</div>
                                @if (!auth()->check() && $plan->default == '1')
                                    <a href="{{ url('/auth') }}"
                                        class="mt-5 btn-lg fs-6 btn btn-outline-dark shadow-none rounded-5 px-5 fw-semibold">Sign
                                        up for free</a>
                                @elseif(auth()->check() && $plan->default == '1')
                                    <button @disabled(true) href="#"
                                class="mt-5 btn-lg fs-6 btn btn-outline-dark shadow-none rounded-5 px-5 fw-semibold">Not available</button>
                                @else
                                    <a href="{{ route('account.plans.show', ['plan' => $plan]) }}" class="mt-5 btn-lg fs-6 btn btn-dark shadow-none rounded-5 px-5 fw-semibold">Get
                                        started</a>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
@push('scripts')
<style>
    table {
        width: 100%;
        background-color: unset !important;
    }

    body {
        background: unset !important;
    }

    .u-row {
        max-width: unset !important;
        width: 100% !important;
    }

    #body img {
        max-width: unset !important;
    }

    #body * {
        font-family: var(--app-font) !important;
    }
</style>
@endpush
