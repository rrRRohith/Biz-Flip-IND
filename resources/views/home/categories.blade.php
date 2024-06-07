<div class="container py-5">
    <div class="row categories">
        @foreach ($categories as $category)
            <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                <a href="{{ route('ads.index', ['category' => $category]) }}" class="text-decoration-none">
                    <div class="card border-0 rounded-4 shadow-sm btn btn-outline-primary" role="button">
                        <div class="card-body">
                            <div class="text-center py-2">
                                <div>
                                    <img
                                        src="{{ $category->icon_url }}" />
                                </div>
                                <div class="text-overflow">
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
