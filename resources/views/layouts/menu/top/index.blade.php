@php
    $menu = menu('main-menu');
@endphp
@if ($menu && $menu->childs()->count())
    @foreach ($menu->childs as $item)
        <li class="nav-item me-auto">
            <a class="nav-link p-2 text-black" href="{{ url($item->link) }}">{{ $item->title }}</a>
        </li>
    @endforeach
@endif
