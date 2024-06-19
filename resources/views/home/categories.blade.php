<div class="container py-5">
    <div class="row categories">
        @foreach ($categories as $category)
            {{-- <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3"> --}}
            <div class="col-xl col-lg col-md-4 col-6 mb-3">
                <a href="{{ route('ads.index', ['bcategory' => $category]) }}" class="text-decoration-none">
                    <div class="card border-0 rounded-4 shadow-sm btn btn-outline-primary" role="button">
                        <div class="card-body">
                            <div class="text-center py-2">
                                <div class="mb-2">
                                    <img
                                        src="{{ $category->icon_url }}" />
                                </div>
                                <div class="text-overflow fw-semibold">
                                    {{ $category->name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        @endforeach
    </div>
</div>
