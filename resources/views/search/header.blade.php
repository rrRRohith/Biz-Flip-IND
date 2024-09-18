<div class="d-flex align-items-center nav-tabs border-0" role="tablist">
    <div data-bs-toggle="modal" data-bs-target="#filterModal"
        class="btn btn-dark border-0 rounded-1 shadow-sm me-2 d-block d-lg-none">
        Filters <i class="bi bi-funnel"></i>
    </div>
    <div class="d-none d-lg-block total-results">
        Total ads. <span class="fw-semibold">{{ $ads->total() }}</span>
    </div>
    <div @click="sharedState.listingType='grid'" data-bs-toggle="tab" data-bs-target="#grid" role="tab" data-value="grid"
        class="ms-auto btn btn-light bg-white border-0 rounded-1 shadow-sm me-2 @if ($request->listingType == 'grid' || !$request->listingType) active @endif listing-type">
        Grid <i class="bi bi-grid"></i>
    </div>
    <div @click="sharedState.listingType='list'" data-bs-toggle="tab" data-bs-target="#list" role="tab" data-value="list"
        class="btn btn-light bg-white border-0 rounded-1 shadow-sm me-2 listing-type @if ($request->listingType == 'list') active @endif">
        List <i class="bi bi-list-task"></i>
    </div>
    <div @click="sharedState.listingType='map'" data-bs-toggle="tab" data-bs-target="#map" role="tab" data-value="map"
        class="btn btn-light bg-white border-0 rounded-1 shadow-sm listing-type @if ($request->listingType == 'map') active @endif">
        Map <i class="bi bi-geo-alt-fill"></i>
    </div>
</div>
<div class="d-block d-lg-none mt-3 total-results">
    Total ads. <span class="fw-semibold">{{ $ads->total() }}</span>
</div>
