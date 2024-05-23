<div class="container mt-5">
    <div class="d-flex align-items-center mb-4">
        <div class="fs-2 fw-semibold text-overflow col me-2">Featured {{ $title }} For Sale</div>
        <div class="ms-auto">
            <a href="#" class="btn btn-light bg-white shadow-sm border-0 rounded-1">View all <i
                class="bi bi-arrow-right"></i></a>
        </div>
    </div>
    <div class="row">
        @include('partials.propertyGrid', ['image' => 'https://bizsold.com/uploads/listings/1682629403_14.jpeg'])
        @include('partials.propertyGrid', ['image' => 'https://bizsold.com/uploads/listings/1714673766_18.jpeg'])
        @include('partials.propertyGrid', ['image' => 'https://bizsold.com/uploads/listings/1646757622_3.jpeg'])
        @include('partials.propertyGrid', ['image' => 'https://bizsold.com/uploads/listings/1715109582_30.jpeg'])
    </div>
</div>
