@php
    $menu = menu($menu);
@endphp
@if($menu && $menu->childs()->count())
<div>
    <div class="fw-semibold fs-5 mb-3">
        {{ $menu->title }}
    </div>
    <div>
        @foreach ($menu->childs as $item)
            <div class="mb-2"><a href="{{ url($item->link) }}" class='text-decoration-none text-muted'>{{ $item->title }}</a></div>
        @endforeach
    </div>
</div>
@endif