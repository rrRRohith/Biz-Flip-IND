<div id="header">
    @include('search.header')
</div>
<div class="mt-4 mb-5">
    <div class="tab-content">
        <div class="tab-pane fade @if ($request->listingType == 'grid' || !$request->listingType) show active @endif" id="grid" role="tabpanel">
            @include('search.grid')
        </div>
        <div class="tab-pane fade @if ($request->listingType == 'list') show active @endif" id="list" role="tabpanel">
            @include('search.list')
        </div>
        <div class="tab-pane fade @if ($request->listingType == 'map') show active @endif" id="map" role="tabpanel">
            <div class="position-relative">
                <div class="p-2 position-absolute top-0 start-0 z-100 z-1">
                    <div class="btn btn-light bg-white rounded-1 border-0 shadow currentLocation">
                        <i class="bi bi-crosshair fs-5"></i>
                    </div>
                </div>
                <div id="mapCanvas" class="rounded-1"></div>
            </div>
        </div>
    </div>
</div>
