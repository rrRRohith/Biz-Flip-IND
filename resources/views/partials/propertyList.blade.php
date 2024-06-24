<div class="mb-3 col-12">
    <a href="{{ route('ads.show', ['ad' => $ad]) }}" class="text-decoration-none text-dark">
    <div class="place position-relative bg-white rounded-3 shadow-sm" role="button">
        <div class="row align-items-center">
            <div class='col-sm-4'>
                <div class="position-absolute top-0 end-0 p-2 text-white fs-5 z-1">
                    <i class="bi bi-heart"></i>
                </div>
                <div class="">
                    <img class="w-100 rounded-3 place-image-small image-fit" src={{ $ad->image_url }} alt="" />
                </div>
            </div>
            <div class='col-sm-8 text-overflow'>
                <div class="pe-3 py-3 ps-3 ps-sm-0">
                    <p class="mt-0 mb-0 fs-5 fw-semibold text-overflow text-capitalize"> {{ $ad->title }} </p>
                    <p class="mb-0 text-gray text-overflow"> <i class="bi bi-geo-alt-fill"></i>{{ $ad->address }}, {{ $ad->city }} </p>
                    <div class="text-muted text-overflow">
                        {{ strip_tags($ad->description) }}
                    </div>
                    @if($ad->business_category)
                    <div class="text-overflow">
                        Category. <span class="fw-semibold">{{ $ad->business_category->name }}</span>
                    </div>
                    @endif
                    @if($ad->category)
                    <div class="text-overflow">
                        Industry. <span class="fw-semibold">{{ $ad->category->name }}</span>
                    </div>
                    @endif
                    <div class="mt-2">
                        <div class="d-flex align-items-center">
                            <div class="text-overflow me-2">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <img class="image-fit w-h-40 rounded-circle"
                                            src="{{ $ad->seller->picture_url }}"
                                            alt="" />
                                    </div>
                                    <div class="text-overflow">
                                        <div class="text-overflow">
                                            {{ $ad->seller->name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ms-auto col">
                                <div class="fw-semibold text-end">$ {{ number_format($ad->price) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </a>
</div>
