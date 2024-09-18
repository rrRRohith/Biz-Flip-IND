@if ($sellers->count())
    <div class="container mt-5">
        <div class="d-flex align-items-center mb-4">
            <div class="fs-2 fw-semibold text-overflow col me-2">Featured Business Brokers</div>
            <div class="ms-auto">
                <a href="{{ route('agents.index') }}" class="btn btn-light bg-white shadow-sm border-0 rounded-1">View all
                    <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
        <div class="row">
            @foreach ($sellers as $seller)
                <div class="col-xl-2 col-lg-3 col-md-4 mb-3 col-6">
                    <a href="{{ route('agents.show', ['agent' => $seller->seller]) }}"
                        class="text-decoration-none text-dark">
                        <div class="place position-relative rounded-3" role="button">
                            <div class="">
                                <img class="w-100 rounded-3 place-image border-radius-bottom-0"
                                    src="{{ $seller->picture_url }}" alt="" />
                            </div>
                            <div class="mt-2">
                                <p class="mb-0 fw-semibold text-overflow text-capitalize"> {{ $seller->name }} </p>
                                <p class="mb-0 text-gray text-overflow"> <i class="bi bi-geo-alt-fill"></i>
                                    {{ $seller->seller->address }}, {{ $seller->seller->city }}</p>
                            </div>
                        </div>
                    </a>
                </div>
            @endforeach
        </div>
    </div>

@endif
