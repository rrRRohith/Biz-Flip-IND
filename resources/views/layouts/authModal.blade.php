<div class="modal" data-bs-backdrop="static" data-bs-keyboard="false" id="loginModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-md modal-fullscreen-md-down" role="document">
        <div class="modal-content">
            <div class="modal-header border-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4 pt-0">
                @include('auth.loginForm', ['modal' => true])
            </div>
        </div>
    </div>
</div>
<div class="modal" data-bs-backdrop="static" data-bs-keyboard="false" id="registerModal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down" role="document">
        <div class="modal-content">
            <div class="modal-header border-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4 pt-0">
                @include('auth.signUpForm', ['modal' => true])
            </div>
        </div>
    </div>
</div>
@push('scripts')
<script>
    function removeClass() {
        var elements = document.getElementsByClassName('form-group');

        // Loop through all elements and remove the 'error' class
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('error');
        }
    }

    function registered(response) {
        $('.hide').remove();
        $('.regname').text(response.name);
        $('.registered').show();
    }


    function refreshCaptcha1() {
        fetch('/refresh-captcha')
            .then(response => response.json())
            .then(data => {
                document.querySelector('.captchaImg1').innerHTML = data.captcha;
            });
    }

    function refreshCaptcha2() {
        fetch('/refresh-captcha')
            .then(response => response.json())
            .then(data => {
                document.querySelector('.captchaImg2').innerHTML = data.captcha;
            });
    }
</script>
@endpush