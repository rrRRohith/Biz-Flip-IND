@php
    $menu = menu('main-menu');
@endphp
@if ($menu && $menu->childs()->count())
    @foreach ($menu->childs as $item)
        <li class="nav-item">
            <a class="nav-link p-2 fw-semibold" href="{{ url($item->link) }}">{{ $item->title }}</a>
        </li>
    @endforeach
@endif
