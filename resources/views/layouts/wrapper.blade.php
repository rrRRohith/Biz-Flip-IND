@extends('layouts.app')
@section('content')
@include('layouts.header')
<main class="main-wrapper mh-100vh @isset($wrapperClass) {{ $wrapperClass }} @endif wrapper">
    @yield('contents')
</main>
@include('layouts.footer')
@endsection
