<div class="w-100 bg-white py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-3 mb-3 mb-md-3">
                <div class='mb-4 mw-200'>
                    <img src="https://res.cloudinary.com/rr6/image/upload/v1716203422/unnamed_1_l0br9p.png" class='w-100' alt="" >
                </div>
                <div class='fw-semibold fs-4 mb-4'>
                    <i class="bi bi-telephone"></i>
                    <a href="#" class='text-decoration-none text-muted'> +1 416-855-2085</a>
                </div>
                <div class='fw-semibold fs-4'>
                    <div class='mb-2'>
                        Follow us on social media
                    </div>
                    <div class="d-flex align-items-center fs-3 text-muted">
                        <div class="col" role="button">
                            <div class="btn btn-light border border-1 bg-white">
                                <i class="bi bi-instagram"></i>
                            </div>
                        </div>
                        <div class="col" role="button">
                            <div class="btn btn-light border border-1 bg-white">
                                <i class="bi bi-twitter-x"></i>
                            </div>
                        </div>
                        <div class="col" role="button">
                            <div class="btn btn-light border border-1 bg-white">
                                <i class="bi bi-facebook"></i>
                            </div>
                        </div>
                        <div class="col" role="button">
                            <div class="btn btn-light border border-1 bg-white">
                                <i class="bi bi-youtube"></i>
                            </div>
                        </div>
                        <div class="col" role="button">
                            <div class="btn btn-light border border-1 bg-white">
                                <i class="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3 mb-md-3">
                @include('layouts.menu.bottom.index', ['menu' => 'business-exchange'])
            </div>
            <div class="col-md-3 mb-3 mb-md-3">
                @include('layouts.menu.bottom.index', ['menu' => 'advertise-with-us'])
            </div>
            <div class="col-md-3 mb-3 mb-md-3">
                @include('layouts.menu.bottom.index', ['menu' => 'resources'])
            </div>
        </div>
    </div>
</div>
<div class='' style="background-image: url(https://thebizex.com/bizex-image/newsletterbg.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;">
    <div class="container py-5">
        <div class="row">
            <div class="col-md-6 mb-md-0 mb-3">
                <div class="fw-semibold fs-4 text-white">
                    Sign Up To Receive The Latest Updates And News
                </div>
            </div>
            <div class="col-md-6">
                <form method="POST" action="{{ route('subscribe.store') }}" id="subscribeForm" data-reset="true" class="ajax">
                    @csrf
                    <div class="input-group mb-0">
                        <input name="email_id" form="subscribeForm" type="text" class="form-control shadow-none rounded-1 border-gray" placeholder="Your email address" />
                        <div class="input-group-append">
                            <button data-default="Subscribe" form="subscribeForm" class="btn btn-dark rounded-1 continue-btn border-bottom-2 shadow-none btn-lg fs-6">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<footer class='bg-white border-top border border-light border-bottom-0'>
    <div class="container py-3">
        <p class="m-auto text-center">© 2024 Designed and developed by <a class="text-primary text-decoration-none fw-medium" href="https://indigitalgroup.ca" target="_blank">INDigital Group</a>, All Rights Reserved</p>
    </div>
</footer>