@isset($banner_image)
<div class="container-fluid bg-light" style="
background-image: linear-gradient( #00000078, #00000024 ), url({{ $banner_image }});
background-position: center center;
background-repeat: no-repeat;
background-size: cover;">
    <div class="d-flex align-items-center">
        <div class="m-auto py-5 text-center">
            <ul class="breadcrumb text-white">
                <li class="pe-1">
                    <a href="/" class="text-decoration-none text-white">Home</a>
                </li>
                {{-- <li class="pe-1">/ Pages</li> --}}
                <li>/ {{ $title }}</li>
            </ul>
            <h1 class="text-capitalize fw-semibold text-white">{{ $title }}</h1>
        </div>
    </div>
</div>

@else
<div class="container-fluid bg-light">
    <div class="d-flex align-items-center">
        <div class="m-auto py-5 text-center">
            <ul class="breadcrumb">
                <li class="pe-1">
                    <a href="/" class="text-decoration-none">Home</a>
                </li>
                {{-- <li class="pe-1">/ Pages</li> --}}
                <li>/ {{ $title }}</li>
            </ul>
            <h1 class="text-capitalize fw-semibold">{{ $title }}</h1>
        </div>
    </div>
</div>
@endif
