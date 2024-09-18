<div class="card mb-5 border-0 rounded-3 bg-white shadow-sm contact-card">
    <div class="card-body p-4">
        <div class="text-overflow mb-3">
            <div class="d-flex align-items-center">
                <div class="me-2">
                    <img class="image-fit w-h-50 rounded-circle" src="{{ $user->picture_url }}" alt="" />
                </div>
                <div class="text-overflow">
                    <div class="fw-semibold text-overflow fs-5">
                        {{ $user->name }}
                    </div>
                    <div class="text-muted">
                        @if($user->seller)
                        {{ $user->seller->address }}, {{ $user->seller->city }}
                        @elseif($user->address)
                        {{ $user->address }}, {{ $user->city }}
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <form data-reset="true" class="ajax" action="" id="contactForm" method="POST">
            @method('PUT')
            @csrf
            <div class="form-group label-top mb-3">
                <label class="fw-semibold">First name</label>
                <input value="{{ auth()->user()->firstname ?? null }}" form="contactForm" name="firstname" type="text" placeholder='Enter your first name'
                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
            </div>
            <div class="form-group label-top mb-3">
                <label class="fw-semibold">Last name</label>
                <input value="{{ auth()->user()->lastname ?? null }}"  form="contactForm" name="lastname" type="text" placeholder='Enter your last name'
                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
            </div>
            <div class="form-group label-top mb-3">
                <label class="fw-semibold">Email</label>
                <input value="{{ auth()->user()->email ?? null }}" form="contactForm" name="email" type="email" placeholder='Enter your email address'
                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
            </div>
            <div class="form-group label-top mb-3">
                <label class="fw-semibold">Phone</label>
                <input value="{{ auth()->user()->phone ?? null }}" form="contactForm" name="phone" type="text" placeholder='Enter phone number'
                    class="form-control border-1 border rounded-1 border-gray shadow-none" />
            </div>
            <div class="form-group label-top mb-3">
                <label class="fw-semibold">Message</label>
                <textarea form="contactForm" name="message" placeholder='Enter your message' class="form-control border-1 border rounded-1 border-gray shadow-none"></textarea>
            </div>
            <div class="form-group mb-4">
                <div class="form-check form-check-lg">
                    <input form="contactForm" role="button"
                        class="form-check-input shadow-none border border-gray border-1 cursor-pointer" type="checkbox"
                        name="agree_terms_and_conditions" value="true" id="agree_terms_and_conditions" />
                    <label role="button" class="form-check-label mt-1" for="agree_terms_and_conditions">
                        Do you need help with financing?
                    </label>
                </div>
            </div>
            <button type="submit" form="contactForm" data-default="Send message" class="continue-btn btn btn-dark shadow-none rounded-1 btn-lg fs-6 w-100 fw-semibold">Send message </button>
        </form>
    </div>
</div>
