<a href="{{ route('ads.show', ['ad' => $ad]) }}" class="text-decoration-none text-dark">
    <div class="place position-relative" role="button">
        <div class="position-absolute top-0 end-0 p-2 text-white fs-5 z-1">
            <i class="bi bi-heart"></i>
        </div>
        <div class="">
            <img class="w-100 rounded-3 place-image" src={{ $ad->image_url }} alt="" />
        </div>
        <div>
            <p class="mt-2 mb-0 fw-semibold text-overflow text-capitalize"> {{ $ad->title }} </p>
            <p class="mb-0 text-gray text-overflow"> <i class="bi bi-geo-alt-fill"></i> {{ $ad->address ? __(":address, ", ['address' => $ad->address]) : '' }}{{ $ad->city }} </p>
            <div class="mt-2">
                <div class="d-flex align-items-center">
                    <div class="text-overflow me-2">
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <img class="image-fit w-h-40 rounded-circle" src="{{ $ad->seller->picture_url ?? '' }}"
                                    alt="" />
                            </div>
                            <div class="text-overflow">
                                <div class="text-overflow">
                                    {{ $ad->seller->name ?? '' }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ms-auto col">
                        @if ($ad->ad_type == 'wanted')
                            <div class="fw-semibold text-end">${{ number_format($ad->price) }} -
                                ${{ number_format($ad->price_max) }}</div>
                        @else
                            <div class="fw-semibold text-end">${{ number_format($ad->price) }}</div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</a>
