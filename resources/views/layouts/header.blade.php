<nav class="not-embed navbar navbar-expand-lg py-3 px-0 navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
        <a class="navbar-brand py-1" href="/">
            <img src="/logo.png" alt="{{ env('APP_NAME') }}">
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                @include('layouts.menu.top.index')
                @auth
                    @php
                        $user = auth()->user();
                    @endphp
                    <div class="dropdown">
                        <div role="button" class="cursor-pointer" data-bs-toggle="dropdown">
                            <img class="rounded-circle shadow-sm header-image" src="{{ $user->picture_url }}"
                                alt="">
                        </div>
                        <ul class="dropdown-menu profile-dropdown rounded-2 pb-2 dropdown-menu-end border-0 shadow-sm p-0 mt-4">
                            <div class="d-flex align-items-center p-2 px-3">
                                <div>
                                    <div class="text-muted">Signed in as</div>
                                    <p class="mb-0 fw-semibold text-overflow fs-6">{{ $user->name }}</p>
                                </div>
                            </div>
                            <hr class="light"/>
                            @if (auth()->user()->type == 'admin' || auth()->user()->type == 'admin staff')
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/admin"><span class="d-flex align-items-center"><i class="bi bi-speedometer me-3"></i> Dashboard </span></a></li>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/admin/profile"><span class="d-flex align-items-center"><i class="bi bi-pencil me-3"></i> Profile </span></a></li>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/admin/password"><span class="d-flex align-items-center"><i class="bi bi-shield-lock me-3"></i> Security </span></a></li>
                            @elseif(auth()->user()->type == 'seller' || auth()->user()->type == 'seller staff')
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account"><span class="d-flex align-items-center"><i class="bi bi-speedometer me-3"></i> Dashboard </span></a></li>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account/profile"><span class="d-flex align-items-center"><i class="bi bi-pencil me-3"></i> Profile </span></a></li>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/account/password"><span class="d-flex align-items-center"><i class="bi bi-shield-lock me-3"></i> Security </span></a></li>
                            @elseif(auth()->user()->type == 'customer')
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/customer"><span class="d-flex align-items-center"><i class="bi bi-speedometer me-3"></i> Dashboard </span></a></li>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/customer/profile"><span class="d-flex align-items-center"><i class="bi bi-pencil me-3"></i> Profile </span></a></li>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="/customer/password"><span class="d-flex align-items-center"><i class="bi bi-shield-lock me-3"></i> Security </span></a></li>
                            @endif
                            <hr class="light"/>
                            <li><a class="dropdown-item rounded-1 p-2 px-3" href="{{ route('logout') }}" data-method="post"><span class="d-flex align-items-center"><i class="bi bi-box-arrow-left me-3"></i> Logout </span></a></li>
                        </ul>
                    </div>
                @else
                    <li class="nav-item">
                        <a data-bs-toggle="modal" data-bs-target="#loginModal" class="nav-link p-2 fw-semibold"
                            href="/login">Login</a>
                    </li>
                    {{-- <li class="nav-item">
                        <a class="nav-link p-2 fw-semibold" href="/sign-up">Sign up</a>
                    </li> --}}
                    <li class="nav-item ps-2">
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
