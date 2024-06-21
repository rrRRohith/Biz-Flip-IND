@extends('layouts.wrapper', ['wrapperClass' => 'bg-light'])
@section('contents')
@section('title', 'Search')
<div id="app">
    <div class="container-fluid w-100 d-flex align-items-center"
        style="
      background-image: linear-gradient( #00000078, #00000024 ), url(https://bookly.indigitalapi.com/uploads/static/res/auth.webp);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;">
        <div class="my-5 w-100">
            @include('home.search')
        </div>
    </div>
    <div class="listingContainer" style="display: none">
        <div :class="['mt-5 container-fluid', { 'container': sharedState.listingType != 'map' }]">
            @include('search.listing')
        </div>
    </div>
    <div class="spinner w-100 h-100 position-fixed z-100 top-0 start-0">
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
    'business_categories' => $business_categories,
    'purposeOptions' => $purposeOptions,
    'provinces' => $provinces,
    'cities' => $cities,
    'request' => request(),
])
@push('scripts')
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key={{ env('MAP_API_KEY') }}"></script>
<script
    src="https://cdn.jsdelivr.net/gh/googlemaps/v3-utility-library@07f15d84/markerclustererplus/src/markerclusterer.js">
</script>
<script>
    $(document).ready(async function() {
        $('.listingContainer').show();
        await sleep(500);
        $('.spinner').hide();
    });
    const resultContainer = $('.resultContainer');
    let mapURL = ("/ads/map?{!! request()->getQueryString() !!}");
    $(document).on('change', '.sideFilters input:not(.not-filter)', async (e) => {
        await pushFilter();
        loadResult();
    });

    const pushFilter = async () => {
        let url = new URL(`${$('#sideFilter').attr('action')}?${$('#sideFilter').serialize()}`);
        mapURL = ("/ads/map?" + $('#sideFilter').serialize());
        await history.pushState(null, null, url);
        return true;
    }

    const loadResult = async () => {
        $('.spinner').show();
        loadMap();
        await $.getJSON(location.href, function(data) {
            resultContainer.find('#list').html($(data.html.list));
            resultContainer.find('#grid').html($(data.html.grid));
            $('.total-results span').text(data.total_ads);
        });
        $('.spinner').hide();
    }

    const loadMap = () => {
        $.getJSON(mapURL, function(data) {
            showMap(data.data);
        });
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
    });

    $(document).on('click', '.load-more', async function(e) {
        e.preventDefault();
        $('.load-more').startLoading();
        await $.getJSON($(this).attr('href'), function(data) {
            $('.load-more').parent().remove();
            resultContainer.find('#list').append($(data.html.list));
            resultContainer.find('#grid').append($(data.html.grid));
            $('.total-results span').text(data.total_ads);
        });
    })
    loadMap();
</script>
<script>
    let map;
    let markers = [];
    let markerCluster;
    const showMap = async (ads) => {
        removeMarkers();
        try {
            markerCluster.clearMarkers();
        } catch (error) {}
        let $style = '';
        await ads.forEach(function(ad) {
            setMarker(ad);
            $('body').append(
                `<style>#mapCanvas [src="${ad.image}?styled=true"]{border-radius:50%;object-fit:cover;border:2px solid #fff !important;}</style>`
                );

        });

        markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
            // You can customize the cluster options here
        });
    }
    /**
     * define global markers for ads
     * this is used to dectced hovers, clicks on maps and show infos
     */

    /**
     * set ads one by one into current map
     */
    function setMarker(ad) {
        let geocoder = new google.maps.Geocoder();
        let infowindow = new google.maps.InfoWindow();

        latlng = new google.maps.LatLng(ad.lat, ad.lng);
        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable: false,
            html: ad.name,
            icon: {
                url: ad.image + "?styled=true", // url
                scaledSize: new google.maps.Size(50, 50), // scaled size
                origin: new google.maps.Point(0, 0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            },
            ad_id: ad.id,
            ad: ad,
        });
        markers[ad.id] = marker;
        /**
         * detect click on marker and show info windo
         */
        google.maps.event.addListener(marker, 'click', function(event) {
            infowindow.setContent(makeMarkerContent(this.ad));
            infowindow.setPosition(event.latLng);
            infowindow.open(map, this);
        });
    }
    /**
     * generate marker ad content
     */
    const makeMarkerContent = function(ad) {
        return `<a class="text-decoration-none text-dark" href="${ad.link}">
            <div class="adPop cursor-pointer">
                <header class="mb-1">
                <img class="w-100 rounded-0 place-image border-0" src="${ad.image}">
                </header>
                <footer class="p-3">
                    <p class="fs-5 m-0 fw-semibold text-overflow">${ad.title}</p>
                    <p class="mt-1 mb-0 text-overflow"><i class="bi bi-geo-alt-fill"></i> ${ad.address}</p>
                    <hr>
                    <a href="${ad.link}" class="text-decoration-none fs-6 text-primary">Details <i class="ms-2 bi bi-arrow-right"></i></a>
                </footer>
            </div>        
        </a>`;
    }
    /**
     * remove existing markers from map
     */
    const removeMarkers = function() {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

    }

    const initArchiveMap = async function() {
        //init map for archive;
        let mapOptions = {
            center: new google.maps.LatLng(45.4185817, -75.6167844),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: true,
            fullscreenControl: true,
            styles: [{
                featureType: "poi",
                stylers: [{
                    visibility: "off"
                }]
            }],
            myLocationControl: true,
            myLocationControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT, // Optionally change position
            }
        };

        map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);

        /**
         * detect zoom changes and set search radius
         */
        google.maps.event.addListener(map, 'zoom_changed', async function() {

        });

        /**
         * detect map drag and reload archive based on center coordinates
         */
        google.maps.event.addListener(map, 'dragend', async function() {

        });
    }
    $(document).on('click', '.currentLocation', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                map.setCenter(pos);
                map.setZoom(12);
            });
        }
    });
    $(initArchiveMap);
</script>
@endpush
