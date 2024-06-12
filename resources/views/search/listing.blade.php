<div class="row">
    <div class="col-lg-3 d-none d-lg-block search-card">
        <div class="card mb-5 border-0 rounded-3 bg-white shadow-sm contact-card search-card">
            <div class="card-body sideFilters">
                <p class="fw-semibold fs-5">Search</p>
                @include('home.searchFilter', ['idx' => 'side'])
            </div>
        </div>
    </div>
    <div class="col-lg-9">
        <div class="results resultContainer">
            @include('search.results')
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
                @include('home.searchFilter', ['idx' => 'mob'])
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-lg fs-6 btn-light bg-white border-0 shadow-none rounded-1"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-lg btn-dark fs-6 shadow-none border-0 rounded-1 search-ads">
                    Search <i class="bi bi-search m-auto"></i>
                </button>
            </div>
        </div>
    </div>
</div>
