<div class="row mt-4">
    <div class="col-md-4 h-100">
        <div class="accordion mb-4 h-100">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold"> <div class="m-auto">Franchise Units </div> </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3">
                        <div class="d-flex pb-md-3 w-100">
                            <div class="me-auto">Canadian</div>
                            <div>{{ $ad->franchise->canadian_units ? : 'N/A' }}</div>
                        </div>
                        <hr>
                        <div class="d-flex pb-md-3 w-100">
                            <div class="me-auto">USA</div>
                            <div>{{ $ad->franchise->us_units ? : 'N/A' }}</div>
                        </div>
                        <hr>
                        <div class="d-flex pb-md-3 w-100">
                            <div class="me-auto">International</div>
                            <div>{{ $ad->franchise->international_units ? : 'N/A' }}</div>
                        </div>
                        <hr>
                        <div class="d-flex pb-md-3 w-100">
                            <div class="me-auto">Corporate</div>
                            <div>{{ $ad->franchise->corporate_units ? : 'N/A' }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="accordion mb-4">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold">  <div class="m-auto">Franchise Fee </div> </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3">
                        <div class="d-flex w-100">
                            <div class="me-auto">Starting From</div>
                            <div>{{ $ad->franchise->franchise_fee ? : 'N/A' }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold"> <div class="m-auto">Liquid Capital Required </div>  </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3">
                        <div class="d-flex w-100">
                            <div class="me-auto">Starting From</div>
                            <div>{{ $ad->franchise->liquid_capital ? : 'N/A' }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold text-center"> <div class="m-auto">Total Investment </div> </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3">
                        <div class="d-flex w-100">
                            <div class="me-auto">Starting From</div>
                            <div>{{ $ad->franchise->total_investment ? : 'N/A' }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="accordion mb-4">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold"> <div class="m-auto"> In Business Since </div> </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3 text-center">
                        <div>{{ $ad->franchise->in_business_since }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold"> <div class="m-auto">Franchising Since </div>  </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3 text-center">
                        <div>{{ $ad->franchise->franchising_since }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion mb-4">
            <div class="accordion-item border-0 shadow-none">
                <h2 class="accordion-header">
                    <button class="accordion-button franchise-button shadow-none p-2 fw-semibold"> <div class="m-auto">Territories  </div> </button>
                </h2>
                <div class="accordion-collapse collapse show" style="">
                    <div class="accordion-body p-3 text-center text-overflow">
                        <div>{{ $ad->franchise->territories }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
