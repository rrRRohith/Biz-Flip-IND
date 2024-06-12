<div>
    <div class="d-flex align-items-center nav-tabs border-0" role="tablist">
        <div data-bs-toggle="modal" data-bs-target="#filterModal"
            class="btn btn-dark border-0 rounded-1 shadow-sm me-2 d-block d-lg-none">
            Filters <i class="bi bi-funnel"></i>
        </div>
        <div class="d-none d-lg-block fw-semibold">
            Showing results {{ $ads->count() }} of {{ $ads->total() }}
        </div>
        <div data-bs-toggle="tab" data-bs-target="#grid" role="tab" data-value="grid"
            class="ms-auto btn btn-light bg-white border-0 rounded-1 shadow-sm me-2 @if ($request->listingType == 'grid' || !$request->listingType) active @endif listing-type">
            Grid <i class="bi bi-grid"></i>
        </div>
        <div data-bs-toggle="tab" data-bs-target="#list" role="tab" data-value="list"
            class="btn btn-light bg-white border-0 rounded-1 shadow-sm me-2 listing-type @if ($request->listingType == 'list') active @endif">
            List <i class="bi bi-list-task"></i>
        </div>
        <div data-bs-toggle="tab" data-bs-target="#map" role="tab" data-value="map"
            class="btn btn-light bg-white border-0 rounded-1 shadow-sm listing-type @if ($request->listingType == 'map') active @endif">
            Map <i class="bi bi-geo-alt-fill"></i>
        </div>
    </div>
    <div class="d-block d-lg-none fw-semibold mt-3">
        Showing results {{ $ads->count() }} of {{ $ads->total() }}
    </div>
</div>
<div class="mt-4 mb-5">
    <div class="tab-content">
        <div class="tab-pane fade @if ($request->listingType == 'grid' || !$request->listingType) show active @endif" id="grid" role="tabpanel">
            <div class="row">
                @forelse ($ads as $ad)
                    @include('partials.propertyGrid3')
                @empty
                    <div class="col-12">
                        <div class="my-5">
                            <div class="text-center fs-2">
                                Ops, no result found.
                            </div>
                        </div>
                    </div>
                @endforelse
            </div>
        </div>
        <div class="tab-pane fade @if ($request->listingType == 'list') show active @endif" id="list" role="tabpanel">
            <div class="row">
                @forelse ($ads as $ad)
                    @include('partials.propertyList')
                @empty
                    <div class="col-12">
                        <div class="my-5">
                            <div class="text-center fs-2">
                                Ops, no result found.
                            </div>
                        </div>
                    </div>
                @endforelse
            </div>
        </div>
        <div class="tab-pane fade @if ($request->listingType == 'map') show active @endif" id="map" role="tabpanel">
            <img src="https://res.cloudinary.com/rr6/image/upload/v1716213731/HILmr_jfipbk.png" class='rounded-3 w-100'
                alt="" />
        </div>
    </div>
</div>
