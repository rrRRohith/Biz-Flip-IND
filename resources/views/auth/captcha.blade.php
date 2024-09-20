@if (!env('CAPTCHA_VALIDATION_DISABLE'))
    <div class="form-group label-top mb-4">
        <label class="fw-semibold">Captcha</label>
        <div class="input-group mb-0">

            <span class="input-group-text bg-white border-bottom-2 bi bi-question-circle" id="basic-addon1"></span>
            <input form="authForm" autocomplete="off" placeholder="Enter captcha code" type="text" name="captcha"
                id="captcha" class="form-control border-1 border rounded-0 border-gray shadow-none">
            <span class="input-group-text captchaImg bg-white border-bottom-2" id="basic-addon2">
                <img src="{{ captcha_src() }}" alt="captcha">
            </span>
            <span class="input-group-text bg-white border-bottom-2" id="basic-addon3">
                <span id="passwordHelpInline" role="button" @click="refreshCaptcha()"
                    class=" bi bi-arrow-clockwise fw-bold"></span>
            </span>
        </div>
    </div>
@endif
