<nav class="not-embed navbar navbar-expand-lg py-3 px-0 navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
        <a class="navbar-brand py-1" href="/">
            <img src="/logo.png" alt="{{ env('APP_NAME') }}">
        </a>
        <button class="navbar-toggler ms-auto border-0 shadow-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-block d-lg-none">
            @auth
                @php
                    $user = auth()->user();
                @endphp
                @include('layouts.profile')
                @endif
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    @include('layouts.menu.top.index')
                    @auth
                        @php
                            $user = auth()->user();
                        @endphp
                        <div class="d-none d-lg-block">
                            @include('layouts.profile')
                        </div>
                    @else
                        <li class="nav-item me-auto ">
                            <a data-bs-toggle="modal" data-bs-target="#loginModal" class="nav-link p-2 fw-semibold"
                                href="/login">Login</a>
                        </li>
                        {{-- <li class="nav-item">
                        <a class="nav-link p-2 fw-semibold" href="/sign-up">Sign up</a>
                    </li> --}}
                        <li class="nav-item ps-2 me-auto">
                            <a data-bs-toggle="modal" data-bs-target="#registerModal" class="fw-semibold btn btn-dark btn-sm"
                                href="/sign-up">Register</a>
                        </li>
                        @endif
                    </ul>
                </div>

            </div>
        </nav>
        @guest
            @include('layouts.authModal')
            @endif
