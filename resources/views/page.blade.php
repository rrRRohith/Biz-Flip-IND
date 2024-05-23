@php
    $pageSlug = request()->route()->slug;
@endphp
@extends('layouts.wrapper')
@section('contents')
@section('title', $pageSlug)
<div>
    @include('layouts.pageHeader', ['title' => $pageSlug])
    <div class="container">
        <div class="my-5">
            <div class="content--single clearfix">
                <h2 class="wp-block-heading" id="definition">What Is a {{ $pageSlug }} page?</h2>
                <p>A <i>{{ $pageSlug }}</i> page is a dedicated section of your website that provides background information about your business or organization. </p>
                <p>A <i>{{ $pageSlug }}</i> page is not a place to push a hard sell or boast about your business. It should help visitors to understand who you are, what you do, and what makes your company unique. </p>
            </div>
        </div>
    </div>
</div>
@endsection
