<div class="m-auto mw-900 w-100">
    <div class="mb-4 text-center">
        <div class="fs-1 fw-semibold text-white">Lets find a perfect place</div>
        <div class="text-light">
            Search over 1000s of places nearby you.
        </div>
    </div>
    <div class="d-none d-md-block">
        <div class="card border-0 rounded-4 mw-900 w-100">
            <div class="card-body w-100 p-3 sideFilters">
                <form action="{{ route('ads.index') }}">
                    <div class="d-flex align-items-center">
                        <div class="me-3 col">
                            <div class="fw-light text-muted">Search</div>
                            <div>
                                <input type="text" v-model="sharedState.q" name="q" id="q_top"
                                    key="q"
                                    class="q bg-white border-0 shadow-none w-auto fw-semibold p-0 border-none form-control p-none"
                                    placeholder="What are you looking for?" />
                            </div>
                        </div>
                        <div class="me-3 col">
                            <div class="fw-light text-muted">Categories</div>
                            <div>
                                <div class="dropdown">
                                    <div class="text-overflow mxw-160" data-bs-auto-close="false" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedCategories }}
                                    </div>
                                    <ul class="dropdown-menu border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                        aria-labelledby="dropdownMenuButton1">
                                        @foreach ($search_categories as $category)
                                        <div :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1', {'fw-semibold text-primary' : sharedState.categories.category__{{ $category->id }}}]">
                                                <div class="form-check p-0">
                                                    <input hidden key="category__{{ $category->id }}"
                                                        v-model="sharedState.categories.category__{{ $category->id }}"
                                                        name="category[]" role="button"
                                                        class="category__{{ $category->id }} form-check-input shadow-none border border-gray border-1"
                                                        id="category__{{ $category->id }}_top"
                                                        value="{{ $category->id }}" type="checkbox" />
                                                    <label role="button" class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                        for="category__{{ $category->id }}_top">{{ $category->name }}</label>
                                                </div>
                                            </div>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="me-3 col">
                            <div class="fw-light text-muted">Purpose</div>
                            <div>
                                <div class="dropdown">
                                    <div class="text-overflow mxw-160" data-bs-auto-close="false" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedPurposes }}
                                    </div>
                                    <ul class="dropdown-menu border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                        aria-labelledby="dropdownMenuButton1">
                                        @foreach ($search_purposeOptions as $key => $purpose)
                                            <div :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1', {'fw-semibold text-primary' : sharedState.purposes.purpose__{{ $key }}}]">
                                                <div class="form-check p-0">
                                                    <input hidden key="purpose__{{ $key }}"
                                                        v-model="sharedState.purposes.purpose__{{ $key }}"
                                                        name="purpose[]" role="button"
                                                        class="purpose__{{ $key }} form-check-input shadow-none border border-gray border-1"
                                                        id="purpose__{{ $key }}_top"
                                                        value="{{ $purpose }}" type="checkbox" />
                                                    <label role="button" class="form-check-label mt-1 d-block w-100 px-3 py-1 text-overflow"
                                                        for="purpose__{{ $key }}_top">{{ $purpose }}</label>
                                                </div>
                                            </div>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="me-3 col">
                            <div class="fw-light text-muted">Price</div>
                            <div>
                                <div class="dropdown w-100">
                                    <div class="text-overflow mxw-160" data-bs-auto-close="false" type="button"
                                        class="priceRange" data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedPriceRange }}
                                    </div>
                                    <ul class="dropdown-menu border-0 w-100 rounded-1 mt-3 shadow-sm p-2 priceDropDown"
                                        aria-labelledby="dropdownMenuButton1">
                                        <div class="range-slider">
                                            <input v-model="sharedState.priceStart" type="range" min="9999"
                                                max="9999999" step="1" name="priceStart"
                                                class="range-slider__input" />
                                            <input v-model="sharedState.priceEnd" type="range" min="9999"
                                                max="9999999" step="1" name="priceEnd"
                                                class="range-slider__input" />
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="submit"
                            class="w-h-50 btn btn-dark ms-auto rounded-circle btn-lg border-0 shadow-none d-flex align-items-center">
                            <i class="bi bi-search m-auto"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="d-md-none">
        <div role="button" class="card border-0 mw-500 m-auto w-100 rounded-4" data-bs-toggle="modal"
            data-bs-target="#searchModal">
            <div class="card-body p-2">
                <div class="d-flex align-items-center">
                    <div>
                        <div>Search</div>
                        <div class="text-muted small">What are you looking for?</div>
                    </div>
                    <div
                        class="w-h-50 btn btn-dark ms-auto rounded-circle btn-lg border-0 shadow-none d-flex align-items-center">
                        <i class="bi bi-search m-auto"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="searchModal" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-light">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="staticBackdropLabel">Search</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body border-0">
                <div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Search</label>
                        <input type="text" name="search" id="password" placeholder="What are you looking for?"
                            class="form-control border-1 border rounded-1 border-gray shadow-none" />
                    </div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Categories</label>
                        <select name=""
                            class="form-control border-1 border rounded-1 border-gray shadow-none form-select"
                            id="">
                            <option value="">All categories</option>
                        </select>
                    </div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Industry</label>
                        <select name=""
                            class="form-control border-1 border rounded-1 border-gray shadow-none form-select"
                            id="">
                            <option value="">All industries</option>
                        </select>
                    </div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Price</label>
                        <select name=""
                            class="form-control border-1 border rounded-1 border-gray shadow-none form-select"
                            id="">
                            <option value="">Add price</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-lg fs-6 btn-light bg-white border-0 shadow-none rounded-1"
                    data-bs-dismiss="modal">Close</button>
                <a href="{{ route('ads.index') }}" class="btn btn-lg btn-dark fs-6 shadow-none border-0 rounded-1">
                    Search <i class="bi bi-search m-auto"></i>
                </a>
            </div>
        </div>
    </div>
</div>
