@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Search')
<div id="app">
    <div class="container-fluid w-100 d-flex align-items-center"
        style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://bookly.indigitalapi.com/uploads/static/res/auth.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 50vh;">
        @include('home.search')
    </div>
    <div class="container mt-5">
        @include('search.listing')
    </div>
    <div style="display: none" class="spinner w-100 h-100 position-fixed z-100 top-0 start-0">
        <div class="w-100 h-100 d-flex align-items-center">
            <div class="spinner-grow text-light m-auto" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</div>
@endsection
@include('search.scripts', [
    'categories' => $categories,
    'purposeOptions' => $purposeOptions,
    'provinces' => $provinces,
    'cities' => $cities,
    'request' => request(),
])
@push('scripts')
<script>
    const resultContainer = $('.resultContainer');
    $(document).on('change', '.sideFilters input', async (e) => {
        await pushFilter();
        loadResult();

    });

    const pushFilter = async () => {
        let url = new URL(`${$('#sideFilter').attr('action')}?${$('#sideFilter').serialize()}`);
        await history.pushState(null, null, url);
        return true;
    }


    const loadResult = async () => {
        $('.spinner').show();
        await $.getJSON(location.href, function(data) {
            resultContainer.html($(data.html)); // Updating the result container with the fetched data
        });
        $('.spinner').hide();
    }

    $(document).on('click', '.listing-type', function() {
        $('[name="listingType"]').val($(this).data('value'));
        pushFilter();
    });
    $('.search-ads').on('click', async () => {
        $('div#filterModal').modal('hide');
        await pushFilter();
        loadResult();
    })
    $('input.price').on('input', function() {
        $('.priceRange').text(formatter.format($(this).val()));
    })
</script>
@endpush
