<div class="row">
    @foreach ($agents as $seller)
        <div class=' col-xl-3 col-lg-3 col-md-4 mb-3 col-6'>
            <a href="{{ route('agents.show', ['agent' => $seller->seller]) }}" class="text-decoration-none text-dark">
                <div class="place position-relative rounded-3" role="button">
                    <div class="">
                        <img class="w-100 rounded-3 place-image border-radius-bottom-0" src="{{ $seller->picture_url }}"
                            alt="" />
                    </div>
                    <div class="mt-2">
                        <p class="mb-0 fw-semibold text-overflow text-capitalize"> {{ $seller->name }} </p>
                        <p class="mb-0 text-gray text-overflow"> <i class="bi bi-geo-alt-fill"></i> {{ $seller->seller->address }},
                            {{ $seller->seller->city }}</p>
                    </div>
                    <div class="text-overflow text-muted small">
                        {{ $seller->seller->description }}
                    </div>
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            <div class="text-overflow me-2">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img class="image-fit w-h-40 rounded-circle"
                                            src="{{ $seller->seller->logo_url }}"
                                            alt="">
                                    </div>
                                    <div class="text-overflow">
                                        <div class="text-overflow"> {{ $seller->seller->company_name }} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    @endforeach
</div>
<div class="text-center mt-4">
    @if ($agents->nextPageUrl())
        <a href="{{ $agents->nextPageUrl() }}&listingType=list" class="btn mt-4 rounded-1 border-0 m-auto btn-dark load-more">Load more results <i
                class="bi bi-arrow-repeat"></i></a>
    @endif
</div>