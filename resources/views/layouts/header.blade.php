<nav class="not-embed navbar navbar-expand-lg border-bottom-1 py-3 px-0 navbar-light bg-white fixed-top shadow-none">
    <div class="container">
        <button class="navbar-toggler border-0 shadow-none p-1 me-2" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand py-1 me-auto" href="/">
            <img src="/logo.png" alt="{{ env('APP_NAME') }}">
        </a>
        
        <div class="d-block d-lg-none">
            @auth
                @php
                    $user = auth()->user();
                @endphp
                @include('layouts.profile')
                @endif
            </div>
            <div class="collapse navbar-collapse mt-0" id="navbarSupportedContent">
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
                            <a data-bs-toggle="modal" data-bs-target="#loginModal" class="text-black nav-link p-2 fw-semibold"
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
