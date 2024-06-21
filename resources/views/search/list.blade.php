<div class="row">
    @forelse ($ads as $ad)
        @include('partials.propertyList')
    @empty
        <div class="col-12">
            <div class="my-5">
                <div class="text-center fs-2">
                    Ops, no result found.
                </div>
            </div>
        </div>
    @endforelse
</div>
<div class="text-center mt-4">
    @if ($ads->nextPageUrl())
        <a href="{{ $ads->nextPageUrl() }}" class="btn mt-4 rounded-1 border-0 m-auto btn-dark load-more">Load more ads <i
                class="bi bi-arrow-repeat"></i></a>
    @endif
</div>
