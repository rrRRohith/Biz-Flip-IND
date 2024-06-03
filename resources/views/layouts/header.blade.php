<nav class="navbar navbar-expand-lg py-3 px-0 navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
        <a class="navbar-brand py-1" href="/">
            <img src="https://res.cloudinary.com/rr6/image/upload/v1716203422/unnamed_1_l0br9p.png" alt="{{ env('APP_NAME') }}">
        </a>
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link p-2 fw-semibold" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-2 fw-semibold" href="/about-us">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-2 fw-semibold" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-2 fw-semibold" href="/careers">Careers</a>
                </li>
                @auth
                    @if(auth()->user()->type == 'admin' || auth()->user()->type == 'admin staff')
                    <li class="nav-item">
                        <a class="nav-link p-2 fw-semibold" href="/admin">Dashboard</a>
                    </li>
                    @elseif(auth()->user()->type == 'seller' || auth()->user()->type == 'seller staff')
                    <li class="nav-item">
                        <a class="nav-link p-2 fw-semibold" href="/seller">Dashboard</a>
                    </li>
                    @endif
                @else
                <li class="nav-item">
                    <a class="nav-link p-2 fw-semibold" href="/login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-2 fw-semibold" href="/auth">Register</a>
                </li>
                @endif
            </ul>
        </div>
    </div>
</nav>