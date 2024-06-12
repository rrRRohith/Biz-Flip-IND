@extends('layouts.wrapper')
@section('contents')
@section('title', $page->title)
<div>
    @include('layouts.pageHeader', ['title' => $page->title])
    <div class="container p-0" id="body">
        <div class="my-5">
            {!! $page->content !!}
        </div>
    </div>
</div>
@endsection
@push('scripts')
    <style>
        table{
            width: 100%;
            background-color: unset !important;
        }
        body{
            background: unset !important;
        }
        .u-row{
            max-width: unset !important;
            width: 100% !important;
        }
        #body img{
            max-width: unset !important;
        }
        #body *{
            font-family: var(--app-font) !important;
        }
    </style>
@endpush
