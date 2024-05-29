<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'BlipFlip') }}</title>
    <link rel="icon" href="{{ asset('assets/admin/images/logo.png') }}">
    <link rel="stylesheet" href="{{ asset('assets/seller.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
    <style>
        .css-1nmdiq5-menu {
            z-index: 99999 !important;
        }

        .css-13cymwt-control,
        .css-t3ipsp-control {
            min-height: 45px !important;
            border-color: hsl(210.49deg 33.7% 64.51%) !important;
        }
    </style>
</head>

<body class="font-sans antialiased bg-white">
    @inertia
</body>

</html>
