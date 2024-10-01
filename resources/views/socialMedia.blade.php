@foreach ($socials as $social)
    @switch($social->site)
        @case('facebook')
            <div class="col-auto me-2" role="button"><a target="_blank" href="{{ $social->link }}"
                    class="btn btn-light border border-1 bg-white"><i class="bi bi-facebook"></i></a></div>
        @break

        @case('instagram')
            <div class="col-auto me-2" role="button"><a target="_blank" href="{{ $social->link }}"
                    class="btn btn-light border border-1 bg-white"><i class="bi bi-instagram"></i></a></div>
        @break

        @case('linkedin')
            <div class="col-auto me-2" role="button"><a target="_blank" href="{{ $social->link }}"
                    class="btn btn-light border border-1 bg-white"><i class="bi bi-linkedin"></i></a></div>
        @break

        @case('x')
            <div class="col-auto me-2" role="button"><a target="_blank" href="{{ $social->link }}"
                    class="btn btn-light border border-1 bg-white"><i class="bi bi-twitter-x"></i></a></div>
        @break

        @case('youtube')
            <div class="col-auto me-2" role="button"><a target="_blank" href="{{ $social->link }}"
                    class="btn btn-light border border-1 bg-white"><i class="bi bi-youtube"></i></a></div>
        @break
    @endswitch
@endforeach
