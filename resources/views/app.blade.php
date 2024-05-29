<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'BlipFlip') }}</title>
        <link rel="icon" href="{{ asset('assets/admin/images/logo.png') }}">
        <!-- Vendors Style-->
        <link rel="stylesheet" href="{{ asset('assets/admin/css/vendors_css.css') }}">
        <!-- Style-->
        <link rel="stylesheet" href="{{ asset('assets/admin/css/style.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/admin/css/skin_color.css') }}">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <style>
            .css-1nmdiq5-menu{
                z-index:99999 !important;
            }
            .css-13cymwt-control,.css-t3ipsp-control {
                min-height: 45px !important;
                border-color: hsl(210.49deg 33.7% 64.51%) !important;
            }
        </style>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
