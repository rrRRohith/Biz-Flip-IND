@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Agents')
<div id="app">
    <div class="container-fluid w-100 d-flex align-items-center"
        style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://res.cloudinary.com/rr6/image/upload/v1724138709/auth_nczirt.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;">
        <div class="my-5 w-100">
            @include('home.search')
        </div>
    </div>
    <div class="container pb-5 mt-4">
        <ul class="breadcrumb">
            <li class="pe-1">
                <a href="/" class="text-decoration-none">Home</a>
            </li>
            <li class="pe-1">/ Agents</li>
        </ul>
        @include('agents.search')
        <div class="total-results mt-2"> Total agents. <span class="fw-semibold">{{ $agents->total() }}</span></div>
        <div class="resultContainer mt-4 pb-5">
            @include('agents.results')
        </div>
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
    'categories' => $ad_categories,
    'business_categories' => $business_categories,
    'purposeOptions' => $search_purposeOptions,
    'provinces' => [],
    'cities' => [],
    'request' => request(),
])
@push('scripts')
<script>
    const resultContainer = $('.resultContainer');
    $(document).on('change', '.agentFilters input:not(.not-filter)', async (e) => {
        await pushFilter();
        loadResult();
    });

    const pushFilter = async () => {
        let url = new URL(`${$('#agentFilter').attr('action')}?${$('#agentFilter').serialize()}`);
        mapURL = ("/ads/map?" + $('#agentFilter').serialize());
        await history.pushState(null, null, url);
        return true;
    }

    const loadResult = async () => {
        $('.spinner').show();
        await $.getJSON(location.href, function(data) {
            resultContainer.html($(data.html));
            $('.total-results span').text(data.total_agents);
        });
        $('.spinner').hide();
    }

    $(document).on('click', '.load-more', async function(e) {
        e.preventDefault();
        $('.load-more').startLoading();
        await $.getJSON($(this).attr('href'), function(data) {
            $('.load-more').parent().remove();
            resultContainer.append($(data.html));
            $('.total-results span').text(data.total_agents);
        });
    })
</script>
@endpush
