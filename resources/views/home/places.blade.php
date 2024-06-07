@if($ads->count())
<div class="container mt-5">
    <div class="d-flex align-items-center mb-4">
        <div class="fs-2 fw-semibold text-overflow col me-2">Featured {{ $title }} For Sale</div>
        <div class="ms-auto">
            <a href="#" class="btn btn-light bg-white shadow-sm border-0 rounded-1">View all <i
                    class="bi bi-arrow-right"></i></a>
        </div>
    </div>
    <div class="row">
        @forelse ($ads as $ad)
            @include('partials.propertyGrid')
        @empty
        <div class="alert alert-warning rounded-1 border-0 m-auto w-auto">
            Ops, no {{ $title }} found...
        </div>
        @endforelse
    </div>
</div>
@endif