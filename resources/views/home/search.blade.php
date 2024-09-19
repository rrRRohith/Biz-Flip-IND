<div class="m-auto mw-1100 w-100">
    <div class="mb-2 @if ($business_categories->count()) mb-4 @endif text-center">
        <h1 class="fs-1 fw-semibold text-white">Find a Business</h1>
        {{-- <div class="text-light">
            Search over 1000s of places nearby you.
        </div> --}}
    </div>
    <form action="{{ route('ads.index') }}" class="position-relative">
    <div class="d-none d-md-block">
        <div class="w-auto d-flex mt-0 mx-auto mb-4">
            <div class="d-flex m-auto mb-3 p-1 bg-white algin-items-center rounded-2">
                <div class="">
                    <input v-model="sharedState.type" hidden type="radio" id="type_sale" name="type" value="sale">
                    <label for="type_sale" :class="['btn rounded-2 px-3 border-0',
                    {
                        'btn-dark': sharedState.type == 'sale',
                        'bg-white': sharedState.type != 'sale'
                    }
                ]" for="">For Sale</label>
                </div>
                <div class="">
                    <input v-model="sharedState.type" hidden type="radio" id="type_wanted" name="type" value="wanted">
                    <label for="type_wanted" :class="['btn rounded-2 border-0 px-3 ms-2',
                    {
                        'btn-dark': sharedState.type == 'wanted',
                        'bg-white': sharedState.type != 'wanted'
                    }
                ]" for="">For Buy</label>
                </div>
            </div>
        </div>
        <div class="card border-0 rounded-4 mw-1100 m-auto w-100 mainFilter">
            <div class="card-body w-100 p-3 sideFilters ">
                    @if ($business_categories->count())
                        <div class="position-absolute business-categories z-1 w-100">
                            <div class="bg-white w-fit-content m-auto shadow-sm p-2 pb-0 px-3 rounded-2">
                                <div class="row">
                                    <div class="col-auto">
                                        <input value="all" v-model="sharedState.bcategory" id="bcategory__all"
                                            name="bcategory" hidden type="radio">
                                        <label
                                            :class="['fw-semibold pb-2',
                                                {
                                                    'selected-business-category text-primary': sharedState.bcategory ==
                                                        'all'
                                                }
                                            ]"
                                            role="button" for="bcategory__all">
                                            <div class="d-flex align-items-center">
                                                <img class="me-2" width="20"
                                                    src="https://img.icons8.com/ios/50/process--v1.png" alt="">
                                                <div>All</div>
                                            </div>
                                        </label>
                                    </div>
                                    @foreach ($business_categories as $category)
                                        <div class="col-auto">
                                            <input value="{{ $category->id }}" v-model="sharedState.bcategory"
                                                id="bcategory__{{ $category->id }}" name="bcategory" hidden
                                                type="radio">
                                            <label
                                                :class="['fw-semibold pb-2',
                                                    {
                                                        'selected-business-category text-primary': sharedState
                                                            .bcategory == {{ $category->id }}
                                                    }
                                                ]"
                                                role="button" for="bcategory__{{ $category->id }}">
                                                <div class="d-flex align-items-center">
                                                    <img class="me-2" width="20" src="{{ $category->icon_url }}"
                                                        alt="">
                                                    <div>{{ $category->name }}</div>
                                                </div>
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    @endif
                    <div class="d-flex align-items-center @if ($business_categories->count()) pt-3 @endif">
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
                            <div class="fw-light text-muted">Industries</div>
                            <div>
                                <div class="dropdown">
                                    <div v-cloak class="text-overflow mxw-160" data-bs-auto-close="outside"
                                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedCategories }}
                                    </div>
                                    <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                        aria-labelledby="dropdownMenuButton1">
                                        <div v-for="category in adCategories">
                                            <div
                                                :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                    {
                                                        'fw-semibold text-primary': sharedState.categories[
                                                            'category__' + category.id]
                                                    }
                                                ]">
                                                <div class="form-check p-0">
                                                    <input hidden
                                                        v-model="sharedState.categories['category__' + category.id]"
                                                        name="category[]" role="button"
                                                        class="form-check-input shadow-none border border-gray border-1"
                                                        :id="'category__' + category.id + '_' + 'top'"
                                                        :value="category.id" type="checkbox" />
                                                    <label role="button"
                                                        class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                        :for="'category__' + category.id + '_' + 'top'">@{{ category.name }}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="me-3 col">
                            {{-- <div class="fw-light text-muted">Country</div> --}}
                            <div class="fw-light text-muted">Location</div>
                            <div>
                                <div class="dropdown">
                                    {{-- <div v-cloak class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedCountry }}
                                    </div> --}}
                                    <div v-cloak class="text-overflow mxw-160" data-bs-auto-close="outside"
                                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedLocation }}
                                    </div>
                                    <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                        aria-labelledby="dropdownMenuButton1">
                                        <div class="d-none hidden" hidden>
                                            <span class="me-1">
                                                <input type="radio" v-model="sharedState.country"
                                                    id="country__all_top" hidden name="country" value="all">
                                                <label role="button"
                                                    :class="['btn rounded-4 border-0 btn-sm btn-light',
                                                        { 'btn-dark': sharedState.country == 'all' }
                                                    ]"
                                                    for="country__all_top">All countries</label>
                                            </span>
                                            @foreach ($countries as $country)
                                                <span class="me-1">
                                                    <input type="radio" v-model="sharedState.country"
                                                        id="country__{{ $country->id }}_top" hidden name="country"
                                                        value="{{ $country->id }}">
                                                    <label role="button"
                                                        :class="['btn rounded-4 border-0 btn-sm btn-light',
                                                            {
                                                                'btn-dark': sharedState.country ==
                                                                    '{{ $country->id }}'
                                                            }
                                                        ]"
                                                        for="country__{{ $country->id }}_top">{{ $country->name }}</label>
                                                </span>
                                            @endforeach
                                        </div>
                                        <div>
                                            <div @click="toggleShowCities"
                                                class="text-muted px-3 d-flex align-items-center" role="button">
                                                <span >
                                                    <div v-if="sharedState.showCities"><i class="bi bi-arrow-left"></i> Cities</div>
                                                    <div v-else>Provinces</div>
                                                </span>
                                            </div>
                                            <div v-if="!sharedState.showCities">
                                                <div v-if="adProvinces.length > 0">
                                                    <div v-for="province in adProvinces">
                                                        <div
                                                            :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                                {
                                                                    'fw-semibold text-primary': sharedState.provinces[
                                                                        'province__' + province.id]
                                                                }
                                                            ]">
                                                            <div class="form-check p-0">
                                                                <input hidden
                                                                    v-model="sharedState.provinces['province__' + province.id]"
                                                                    name="province[]" role="button"
                                                                    class="form-check-input shadow-none border border-gray border-1"
                                                                    :id="'province__' + province.id + '_' + 'top'"
                                                                    :value="province.name" type="checkbox" />
                                                                <label role="button"
                                                                    class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                                    :for="'province__' + province.id + '_' + 'top'">@{{ province.name }}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="small px-3">
                                                    No provinces found
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-if="sharedState.showCities">
                                                <div v-if="adCities.length > 0">
                                                    <div v-for="city in adCities">
                                                        <div
                                                            :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                                {
                                                                    'fw-semibold text-primary': sharedState.cities[
                                                                        'city__' + city.id]
                                                                }
                                                            ]">
                                                            <div class="form-check p-0">
                                                                <input hidden
                                                                    v-model="sharedState.cities['city__' + city.id]"
                                                                    name="city[]" role="button"
                                                                    class="form-check-input shadow-none border border-gray border-1"
                                                                    :id="'city__' + city.id + '_' + 'top'"
                                                                    :value="city.name" type="checkbox" />
                                                                <label role="button"
                                                                    class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                                    :for="'city__' + city.id + '_' + 'top'">@{{ city.name }}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-else class="small px-3">
                                                    No cities found
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {{-- <div class="me-3 col">
                            <div class="fw-light text-muted">Purpose</div>
                            <div>
                                <div class="dropdown">
                                    <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedPurposes }}
                                    </div>
                                    <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                        aria-labelledby="dropdownMenuButton1">
                                        @foreach ($search_purposeOptions as $key => $purpose)
                                            <div
                                                :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                    {
                                                        'fw-semibold text-primary': sharedState.purposes
                                                            .purpose__{{ $key }}
                                                    }
                                                ]">
                                                <div class="form-check p-0">
                                                    <input hidden
                                                        v-model="sharedState.purposes.purpose__{{ $key }}"
                                                        name="purpose[]" role="button"
                                                        class="purpose__{{ $key }} form-check-input shadow-none border border-gray border-1"
                                                        id="purpose__{{ $key }}_top"
                                                        value="{{ $purpose }}" type="checkbox" />
                                                    <label role="button"
                                                        class="form-check-label mt-1 d-block w-100 px-3 py-1 text-overflow"
                                                        for="purpose__{{ $key }}_top">{{ $purpose }}</label>
                                                </div>
                                            </div>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div> --}}
                        <div class="me-3 col">
                            <div class="fw-light text-muted">Price</div>
                            <div>
                                <div class="dropdown w-100">
                                    <div v-cloak class="text-overflow mxw-160" data-bs-auto-close="outside"
                                        type="button" class="priceRange" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        @{{ selectedPriceRange }}
                                    </div>
                                    <ul class="dropdown-menu c-scroll border-0 w-100 rounded-1 mt-3 shadow-sm p-2 priceDropDown"
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
                
            </div>
        </div>
        {{-- <div class="w-auto d-flex mt-2">
            <div class="d-flex bg-white p-1 algin-items-center rounded-4">
                <div class="">
                    <input v-model="sharedState.type" hidden type="radio" id="type_sale" name="type" value="sale">
                    <label for="type_sale" :class="['btn', 'rounded-4', 'btn-sm', 'border-0',
                    {
                        'btn-dark': sharedState.type == 'sale'
                    }
                ]" for="">Sale</label>
                </div>
                <div class="">
                    <input v-model="sharedState.type" hidden type="radio" id="type_wanted" name="type" value="wanted">
                    <label for="type_wanted" :class="['btn', 'rounded-4', 'btn-sm', 'border-0',
                    {
                        'btn-dark': sharedState.type == 'wanted'
                    }
                ]" for="">Wanted</label>
                </div>
            </div>
        </div> --}}
    </div>
    </form>
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
                <form id="searchForm" action="{{ route('ads.index') }}">
                    <div>
                        <div class="form-group mb-4 label-top">
                            <label for="search">Search</label>
                            <input type="text" v-model="sharedState.q" name="q" name="search"
                                id="password" placeholder="What are you looking for?"
                                class="form-control border-1 border rounded-1 border-gray shadow-none" />
                        </div>
                        <div
                            class="form-group mb-4 border-bottom-2 bg-white border-1 border rounded-1 pt-0 border-gray shadow-none p-2">
                            <label for="search" class="text-primary small mb-1"><small>Category</small></label>
                            <div class="dropdown">
                                <div class="text-overflow mxw-160" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    @{{ selectedBcategory }}
                                </div>

                                <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                    aria-labelledby="dropdownMenuButton1">
                                    @foreach ($business_categories as $category)
                                        <div
                                            :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                {
                                                    'fw-semibold text-primary': sharedState.bcategory ==
                                                        {{ $category->id }}
                                                }
                                            ]">
                                            <div class="form-check p-0">
                                                <input hidden v-model="sharedState.bcategory" name="bcategory"
                                                    role="button"
                                                    class="form-check-input shadow-none border border-gray border-1"
                                                    id="bcategory__{{ $category->id }}_mob"
                                                    value="{{ $category->id }}" type="radio" />
                                                <label role="button"
                                                    class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                    for="bcategory__{{ $category->id }}_mob">{{ $category->name }}</label>
                                            </div>
                                        </div>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <div
                            class="form-group mb-4 border-bottom-2 bg-white border-1 border rounded-1 pt-0 border-gray shadow-none p-2">
                            <label for="search" class="text-primary small mb-1"><small>Categories</small></label>
                            <div class="dropdown">
                                <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    @{{ selectedCategories }}
                                </div>
                                <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                    aria-labelledby="dropdownMenuButton1">
                                    <div v-for="category in adCategories">
                                        <div
                                            :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                {
                                                    'fw-semibold text-primary': sharedState.categories['category__' +
                                                        category.id]
                                                }
                                            ]">
                                            <div class="form-check p-0">
                                                <input hidden
                                                    v-model="sharedState.categories['category__' + category.id]"
                                                    name="category[]" role="button"
                                                    class="form-check-input shadow-none border border-gray border-1"
                                                    :id="'category__' + category.id + '_' + 'mob'"
                                                    :value="category.id" type="checkbox" />
                                                <label role="button"
                                                    class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                    :for="'category__' + category.id + '_' + 'mob'">@{{ category.name }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="form-group mb-4 border-bottom-2 bg-white border-1 border rounded-1 pt-0 border-gray shadow-none p-2">
                            {{-- <label for="search" class="text-primary small mb-1"><small>Country</small></label> --}}
                            <label for="search" class="text-primary small mb-1"><small>Location</small></label>
                            <div class="dropdown">
                                {{-- <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    @{{ selectedCountry }}
                                </div> --}}
                                <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    @{{ selectedLocation }}
                                </div>
                                <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                    aria-labelledby="dropdownMenuButton1">
                                    <div class="hidden d-none" hidden>
                                        <span class="me-1">
                                            <input type="radio" v-model="sharedState.country" id="country__all_mob"
                                                hidden name="country" value="all">
                                            <label role="button"
                                                :class="['btn rounded-4 border-0 btn-sm btn-light', {
                                                    'btn-dark': sharedState
                                                        .country == 'all'
                                                }]"
                                                for="country__all_mob">All countries</label>
                                        </span>
                                        @foreach ($countries as $country)
                                            <span class="me-1">
                                                <input type="radio" v-model="sharedState.country"
                                                    id="country__{{ $country->id }}_mob" hidden name="country"
                                                    value="{{ $country->id }}">
                                                <label role="button"
                                                    :class="['btn rounded-4 border-0 btn-sm btn-light',
                                                        { 'btn-dark': sharedState.country == '{{ $country->id }}' }
                                                    ]"
                                                    for="country__{{ $country->id }}_mob">{{ $country->name }}</label>
                                            </span>
                                        @endforeach
                                    </div>
                                    <div>
                                        <div @click="toggleShowCities"
                                            class="text-muted px-3 d-flex align-items-center" role="button">
                                            <span >
                                                <div v-if="sharedState.showCities"><i class="bi bi-arrow-left"></i> Cities</div>
                                                <div v-else>Provinces</div>
                                            </span>
                                        </div>
                                        <div v-if="!sharedState.showCities">
                                            <div v-if="adProvinces.length > 0">
                                                <div v-for="province in adProvinces">
                                                    <div
                                                        :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                            {
                                                                'fw-semibold text-primary': sharedState.provinces[
                                                                    'province__' + province.id]
                                                            }
                                                        ]">
                                                        <div class="form-check p-0">
                                                            <input hidden
                                                                v-model="sharedState.provinces['province__' + province.id]"
                                                                name="province[]" role="button"
                                                                class="form-check-input shadow-none border border-gray border-1"
                                                                :id="'province__' + province.id + '_' + 'mob'"
                                                                :value="province.name" type="checkbox" />
                                                            <label role="button"
                                                                class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                                :for="'province__' + province.id + '_' + 'mob'">@{{ province.name }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else class="small px-3">
                                                No provinces found
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div v-if="sharedState.showCities">
                                            <div v-if="adCities.length > 0">
                                                <div v-for="city in adCities">
                                                    <div
                                                        :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                            {
                                                                'fw-semibold text-primary': sharedState.cities[
                                                                    'city__' + city.id]
                                                            }
                                                        ]">
                                                        <div class="form-check p-0">
                                                            <input hidden
                                                                v-model="sharedState.cities['city__' + city.id]"
                                                                name="city[]" role="button"
                                                                class="form-check-input shadow-none border border-gray border-1"
                                                                :id="'city__' + city.id + '_' + 'mob'"
                                                                :value="city.name" type="checkbox" />
                                                            <label role="button"
                                                                class="form-check-label d-block w-100 px-3 py-1 mt-1 text-overflow"
                                                                :for="'city__' + city.id + '_' + 'mob'">@{{ city.name }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else class="small px-3">
                                                No cities found
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        {{-- <div
                            class="form-group mb-4 border-bottom-2 bg-white border-1 border rounded-1 pt-0 border-gray shadow-none p-2">
                            <label for="search" class="text-primary small mb-1"><small>Purpose</small></label>
                            <div class="dropdown">
                                <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    @{{ selectedPurposes }}
                                </div>
                                <ul class="dropdown-menu c-scroll border-0 p-2 mt-3 w-100 rounded-1 shadow-sm p-0 priceDropDown"
                                    aria-labelledby="dropdownMenuButton1">
                                    @foreach ($search_purposeOptions as $key => $purpose)
                                        <div
                                            :class="['form-group', 'mb-1', 'p-0', 'dropdown-item', 'rounded-1',
                                                {
                                                    'fw-semibold text-primary': sharedState.purposes
                                                        .purpose__{{ $key }}
                                                }
                                            ]">
                                            <div class="form-check p-0">
                                                <input hidden
                                                    v-model="sharedState.purposes.purpose__{{ $key }}"
                                                    name="purpose[]" role="button"
                                                    class="purpose__{{ $key }} form-check-input shadow-none border border-gray border-1"
                                                    id="purpose__{{ $key }}_top"
                                                    value="{{ $purpose }}" type="checkbox" />
                                                <label role="button"
                                                    class="form-check-label mt-1 d-block w-100 px-3 py-1 text-overflow"
                                                    for="purpose__{{ $key }}_top">{{ $purpose }}</label>
                                            </div>
                                        </div>
                                    @endforeach
                                </ul>
                            </div>
                        </div> --}}
                        <div
                            class="form-group mb-4 border-bottom-2 bg-white border-1 border rounded-1 pt-0 border-gray shadow-none p-2">
                            <label for="search" class="text-primary small mb-1"><small>Price</small></label>
                            <div>
                                <div class="dropdown w-100">
                                    <div class="text-overflow mxw-160" data-bs-auto-close="outside" type="button"
                                        class="priceRange" data-bs-toggle="dropdown" aria-expanded="false">
                                        @{{ selectedPriceRange }}
                                    </div>
                                    <ul class="dropdown-menu c-scroll border-0 w-100 rounded-1 mt-3 shadow-sm p-2 priceDropDown"
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
                        <div>
                            <div class="row">
                                <div class="col-6">
                                    <input v-model="sharedState.type" hidden type="radio" id="type_sale_mob" name="type" value="sale">
                                    <label for="type_sale_mob" :class="['btn text-center w-100 border-0 py-2 rounded-1',
                                    {
                                        'btn-dark': sharedState.type == 'sale',
                                        'bg-white': sharedState.type != 'sale'
                                    }
                                ]" for="">For Sale</label>
                                </div>
                                <div class="col-6">
                                    <input v-model="sharedState.type" hidden type="radio" id="type_wanted_mob" name="type" value="wanted">
                                    <label for="type_wanted_mob" :class="['btn text-center w-100 border-0 py-2 rounded-1',
                                    {
                                        'btn-dark': sharedState.type == 'wanted',
                                        'bg-white': sharedState.type != 'wanted',
                                    }
                                ]" for="">For Buy</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-lg fs-6 btn-light bg-white border-0 shadow-none rounded-1"
                    data-bs-dismiss="modal">Close</button>
                <button form="searchForm" class="btn btn-lg btn-dark fs-6 shadow-none border-0 rounded-1">
                    Search <i class="bi bi-search m-auto"></i>
                </button>
            </div>
        </div>
    </div>
</div>
