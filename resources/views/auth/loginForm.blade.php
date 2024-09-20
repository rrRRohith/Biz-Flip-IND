<div>
    @if(!isset($modal))
    <div class="text-center mb-5">
        <img class="m-auto" width="240" src="/logo.png" alt="{{ env('APP_NAME') }}">
    </div>
    @endif
    <div class="fs-3 fw-semibold text-center">
        Login to your account
    </div>
    <div class="text-muted text-center mb-4">
        Enter your email id and password to login to your account.
    </div>
    <form data-errorcallback="refreshCaptcha1" id="loginForm" method="post" action="/login" class="ajax mb-4">
        <div class="form-group label-top mb-4">
            <label class="fw-semibold">Email</label>
            <input form="loginForm" name="email" type="email" placeholder='Enter your email address'
                class="form-control border-1 border rounded-1 border-gray shadow-none" />
        </div>
        <div class="form-group label-top mb-4">
            <label class="fw-semibold">Password</label>
            <input form="loginForm" name="password" type="password" placeholder='Enter your secret password'
                class="form-control border-1 border rounded-1 border-gray shadow-none" />
        </div>
        @include('auth.captcha', ['suffix' => '1', 'form' => 'loginForm'])
        <button type="submit" form="loginForm" data-default="Sign in"
            class="continue-btn btn-lg fs-6 btn btn-dark shadow-none rounded-1 w-100 fw-semibold">Sign in</button>
    </form>
    <div>
        <div class="text-center">
            {{-- <div class="text-dark fw-semibold fs-5">
                No account yet? Get started for free!
            </div> --}}
            <hr class="hr-text mb-4 mt-4" data-content="No account yet? Get started for free!">
        </hr>
            <a @isset($modal) data-bs-toggle="modal" data-bs-target="#registerModal" @endif href="/sign-up" class='text-decoration-none fw-semibold text-primary'>Sign up
                now</a>
        </div>
    </div>
</div>