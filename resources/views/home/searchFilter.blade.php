<form action="{{ route('ads.index') }}" id="sideFilter">
    <input type="hidden" name="listingType" v-model="sharedState.listingType">
    <div>
        <div class="form-group mb-4 label-top">
            <label for="search">Search</label>
            <input type="text" v-model="sharedState.q" name="q" key="q" id="q_{{ $idx }}"
                placeholder="What are you looking for?"
                class="q form-control border-1 border rounded-1 border-gray shadow-none" />
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none p-3 fw-semibold" type="button"
                        data-bs-toggle="collapse" data-bs-target="#bcategory-filter">
                        Category
                    </button>
                </h2>
                <div id="bcategory-filter" class="accordion-collapse collapse show">
                    <div class="accordion-body p-3">
                        <div>
                            <div class="form-group mb-1">
                                <div class="form-check form-check-lg">
                                    <input value="all" v-model="sharedState.bcategory" name="bcategory"
                                        type="radio" class="form-check-input shadow-none border border-gray border-1"
                                        id="bcategory__all_{{ $idx }}" type="checkbox" />
                                    <label role="button" class="form-check-label mt-1"
                                        for="bcategory__all_{{ $idx }}">All categories</label>
                                </div>
                            </div>
                            @foreach ($business_categories as $category)
                                <div class="form-group mb-1">
                                    <div class="form-check form-check-lg">
                                        <input value="{{ $category->id }}" v-model="sharedState.bcategory"
                                            name="bcategory" type="radio"
                                            class="form-check-input shadow-none border border-gray border-1"
                                            id="bcategory__{{ $category->id }}_{{ $idx }}" type="checkbox" />
                                        <label role="button" class="form-check-label mt-1"
                                            for="bcategory__{{ $category->id }}_{{ $idx }}">{{ $category->name }}</label>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none p-3 fw-semibold" type="button"
                        data-bs-toggle="collapse" data-bs-target="#category-filter">
                        Industries
                    </button>
                </h2>
                <div id="category-filter" class="accordion-collapse collapse show">
                    <div class="accordion-body p-3">
                        <div>
                            <div v-for="category in adCategories">
                                <div class="form-group mb-1">
                                    <div class="form-check form-check-lg">
                                        <input v-model="sharedState.categories['category__' + category.id]"
                                            :value="category.id" role="button" name="category[]"
                                            class="form-check-input shadow-none border border-gray border-1"
                                            :id="'category__' + category.id + '_' + '{{ $idx }}'"
                                            type="checkbox" />
                                        <label role="button" class="form-check-label mt-1"
                                            :for="'category__' + category.id + '_' + '{{ $idx }}'">@{{ category.name }}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none p-3 fw-semibold collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#industry-filter">
                        Purpose
                    </button>
                </h2>
                <div id="industry-filter" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div>
                            @foreach ($purposeOptions as $key => $purpose)
                                <div class="form-group mb-1">
                                    <div class="form-check form-check-lg">
                                        <input v-model="sharedState.purposes.purpose__{{ $key }}"
                                            name="purpose[]" role="button"
                                            class="form-check-input shadow-none border border-gray border-1"
                                            id="purpose__{{ $key }}_{{ $idx }}"
                                            value="{{ $purpose }}" type="checkbox" />
                                        <label role="button" class="form-check-label mt-1 text-overflow"
                                            for="purpose__{{ $key }}_{{ $idx }}">{{ $purpose }}</label>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none p-3 fw-semibold collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#price-filter">
                        Price
                    </button>
                </h2>
                <div id="price-filter" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <div class="mb-2">@{{ selectedPriceRange }}</div>
                        <div class="range-slider">
                            <input v-model="sharedState.priceStart" type="range" min="9999" max="9999999"
                                step="1" name="priceStart" value="100000" class="range-slider__input" />
                            <input v-model="sharedState.priceEnd" type="range" min="9999" max="9999999"
                                step="1" name="priceEnd" value="2000000" class="range-slider__input" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none p-3 fw-semibold collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#province-filter">
                        Province
                    </button>
                </h2>
                <div id="province-filter" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        {{-- <div class="form-group mb-2">
                            <input v-model="searchProvince" type="text" placeholder="Search provinces"
                                class="not-filter form-control border-1 border rounded-1 border-gray shadow-none">
                        </div> --}}
                        {{-- <div class="filterContainer c-scroll ps-2">
                            @forelse ($provinces as $province)
                                <div v-show="showProvince('{{ $province->name }}')" class="form-group mb-1">
                                    <div class="form-check form-check-lg">
                                        <input v-model="sharedState.provinces.province__{{ $province->id }}"
                                            name="province[]" role="button"
                                            class="form-check-input shadow-none border border-gray border-1"
                                            id="province__{{ $province->id }}_{{ $idx }}"
                                            value="{{ $province->name }}" type="checkbox" />
                                        <label role="button" class="form-check-label mt-1 text-overflow"
                                            for="province__{{ $province->id }}_{{ $idx }}">{{ $province->name }}</label>
                                    </div>
                                </div>
                            @empty
                                <div class="text-danger">No province found</div>
                            @endforelse
                        </div> --}}
                        <input v-model="searchProvince" type="text" placeholder="Search city"
                                class="not-filter form-control border-0 rounded-1 mb-1 bg-light border-gray shadow-none">
                        <div class="filterContainer c-scroll ps-2">
                            <div v-if="adProvinces.length > 0" class="search-res">
                                <template v-for="province in adProvinces" :key="province.id">
                                    <div v-if="showProvince(province.name)" class="form-check form-check-lg">
                                        <input v-model="sharedState.provinces['province__' + province.id]"
                                            name="province[]" role="button"
                                            class="form-check-input shadow-none border border-gray border-1"
                                            :id="'province__' + province.id + '_' + '{{ $idx }}'"
                                            :value="province.name" type="checkbox" />
                                        <label role="button" class="form-check-label mt-1 text-overflow"
                                            :for="'province__' + province.id + '_' + '{{ $idx }}'">@{{ province.name }}</label>
                                    </div>
                                </template>
                            </div>
                            <div v-else>
                                No provinces found
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-0">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none p-3 fw-semibold collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#city-filter">
                        City
                    </button>
                </h2>
                <div id="city-filter" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        {{-- <div class="form-group mb-2">
                            <input v-model="searchCity" type="text" placeholder="Search city"
                                class="not-filter form-control border-1 border rounded-1 border-gray shadow-none">
                        </div> --}}
                        {{-- <div class="filterContainer c-scroll ps-2">
                            @forelse ($cities as $key => $city)
                                <div v-show='showCity("{{ $city }}")' class="form-group mb-1">
                                    <div class="form-check form-check-lg">
                                        <input key="city__{{ $key }}"
                                            v-model="sharedState.cities.city__{{ $key }}" name="city[]"
                                            role="button"
                                            class="city__{{ $key }} form-check-input shadow-none border border-gray border-1"
                                            id="city__{{ $key }}_{{ $idx }}"
                                            value="{{ $city }}" type="checkbox" />
                                        <label role="button" class="form-check-label mt-1 text-overflow"
                                            for="city__{{ $key }}_{{ $idx }}">{{ $city }}</label>
                                    </div>
                                </div>
                            @empty
                                <div class="text-danger">No cities found</div>
                            @endforelse
                        </div> --}}
                        <input v-model="searchCity" type="text" placeholder="Search city"
                                class="not-filter form-control border-0 rounded-1 mb-1 bg-light border-gray shadow-none">
                        <div class="filterContainer c-scroll ps-2">
                            <div v-if="adCities.length > 0" class="search-res">
                                <template v-for="city in adCities" :key="city.id">
                                    <div v-if='showCity(city.name)' class="form-check form-check-lg">
                                        <input v-model="sharedState.cities['city__' + city.id]"
                                            name="city[]" role="button"
                                            class="form-check-input shadow-none border border-gray border-1"
                                            :id="'city__' + city.id + '_' + '{{ $idx }}'"
                                            :value="city.name" type="checkbox" />
                                        <label role="button" class="form-check-label mt-1 text-overflow"
                                            :for="'city__' + city.id + '_' + '{{ $idx }}'">@{{ city.name }}</label>
                                    </div>
                                </template>
                            </div>
                            <div v-else>
                                No cities found
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="{{ route('ads.index') }}" class="text-decoration-none d-block mt-3 fw-semibold"><i
            class="bi bi-arrow-repeat"></i> Clear all filters</a>
</form>
