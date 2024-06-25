@php
    $filteredCategories = $filteredAgentCategories = $filteredPurposes = $filteredCities = $filteredProvinces = [];
    $filteredCategoriesNames = $filteredPurposesNames = [];
    foreach ($categories as $category) {
        $filteredCategories["category__{$category->id}"] = in_array($category->id, (array) $request->category);
        $filteredAgentCategories["category__{$category->id}"] = in_array($category->id, (array) $request->agentCategory);
        $filteredCategoriesNames["category__{$category->id}"] = $category->name;
    }
    foreach ($purposeOptions as $key => $purpose) {
        $filteredPurposes["purpose__{$key}"] = in_array($purpose, (array) $request->purpose);
        $filteredPurposesNames["purpose__{$key}"] = $purpose;
    }
    foreach ($provinces as $province) {
        $filteredProvinces["province__{$province->id}"] = in_array($province->name, (array) $request->province);
    }
    foreach ($cities as $key => $city) {
        $filteredCities["city__{$key}"] = in_array($city, (array) $request->city);
    }
@endphp
@push('scripts')
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
        function selectLabels(obj1, obj2, defaultLabel) {
            let selectedLabels = [];
            Object.keys(obj1).forEach(key => {
                if (obj1[key] && obj2[key]) {
                    selectedLabels.push(obj2[key]);
                }
            });

            return selectedLabels.length ? selectedLabels.join(', ') : defaultLabel;
        }
        const {
            createApp,
            ref,
            reactive,
            computed
        } = Vue
        let priceStart = '{{ $request->priceStart ?? 9999 }}';
        let priceEnd = '{{ $request->priceEnd ??  9999999 }}';
        let bcategory = '{{ $request->bcategory ?? "all"}}';
        let country = '{{ $request->country ?? "all" }}';
        const store = reactive({
            q: '{{ $request->q }}',
            aq: '{{ $request->aq }}',
            listingType: '{{ $request->listingType }}',
            priceStart: priceStart,
            priceEnd: priceEnd,
            categories: @json($filteredCategories),
            agentcategories: @json($filteredAgentCategories),
            agentAdCategories : @json($categories),
            bcategory: bcategory,
            purposes: @json($filteredPurposes),
            cities: @json($filteredCities),
            provinces: @json($filteredProvinces),
            categoryLabels: @json($filteredCategoriesNames),
            purposeLabels: @json($filteredPurposesNames),
            business_categories : @json($business_categories),
            countries: @json($countries),
            adProvinces: @json($provinces),
            country : country,
            adCities: @json($cities),
        });
        const selectedCategories = computed(() => {
            return selectLabels(store.categories, store.categoryLabels, "Select industries");
        });
        const selectedAgentCategories = computed(() => {
            return selectLabels(store.agentcategories, store.categoryLabels, "Select industries");
        });
        const selectedPurposes = computed(() => {
            return selectLabels(store.purposes, store.purposeLabels, "Select purpose");
        });
        const selectedPriceRange = computed(() => {
            if (!store.priceStart && !store.priceEnd) {
                return "Add price";
            }

            let priceMin = Math.min(store.priceStart, store.priceEnd);
            let priceMax = Math.max(store.priceStart, store.priceEnd);

            return formatter.format(priceMin) + ' - ' + formatter.format(priceMax);
        });

        const selectedCountry = computed(() => {
            if(store.country == 'all'){
                return 'All countries';
            }

            const country = store.countries.find(item => item.id == store.country);
            return country.name;
        });

        const adCategories = computed(() => {
            if(store.bcategory == 'all'){
                return store.agentAdCategories;
            }
            const category = store.business_categories.find(item => item.id == store.bcategory);
            return category.ad_category_collection;
        });

        const adProvinces = computed(() => {
            if(store.country == 'all'){
                return store.adProvinces;
            }
            const country = store.countries.find(item => item.id == store.country);
            return country.provinces;
        });

        const adCities = computed(() => {
            if(Object.values(store.provinces).includes(true) && store.country == 'all'){
                return store.adProvinces.filter(province => store.provinces['province__' + province.id]).flatMap(province => province.cities);
            }else if(Object.values(store.provinces).includes(true)){
                const country = store.countries.find(item => item.id == store.country);
                return country.provinces.filter(province => store.provinces['province__' + province.id]).flatMap(province => province.cities);
            }
            else if(store.country != 'all'){
                const country = store.countries.find(item => item.id == store.country);
                return country.provinces.flatMap(province => province.cities);
            }
            else{
                return store.adCities;
            }
            
        });

        const selectedBcategory = computed(() => {
            if(store.bcategory == 'all'){
                return "All";
            }
            const category = store.business_categories.find(item => item.id == store.bcategory);
            return category.name;
        });
        const searchProvince = ref('');
        const searchCity = ref('');
        const showProvince = (name) => {
            return name.toLowerCase().includes(searchProvince.value.toLowerCase());
        };
        const showCity = (name) => {
            return name.toLowerCase().includes(searchCity.value.toLowerCase());
        };
        createApp({
            setup() {
                
            },
            data() {
                return {
                    sharedState: store,
                    selectedCategories,
                    selectedAgentCategories,
                    selectedPurposes,
                    selectedPriceRange,
                    showProvince,
                    searchProvince,
                    showCity,
                    searchCity,
                    adCategories,
                    selectedBcategory,
                    selectedCountry,
                    adProvinces,
                    adCities,
                };
            },
        }).mount('#app')
    </script>
@endpush
