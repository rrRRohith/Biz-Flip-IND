<div id="gallery" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner position-relative">
        @foreach ($ad->images as $image)
        <main data-bs-toggle="modal" data-bs-target="#galleryModal"
            class="page-banner mh-75vh carousel-item @if($loop->first) active @endif background-fit" role="button"
            style="background-image: linear-gradient( #00000038, #00000014 ), url('{{ $image->image_url }}')">
            <div data-bs-target="#popGallery" data-bs-slide-to="0" class="w-100 mh-75vh"></div>
        </main>
        @endforeach
        <button class="carousel-control-prev z-2" type="button" data-bs-target="#gallery" data-bs-slide="prev">
            <i class="bi bi-chevron-compact-left fs-1"></i>
        </button>
        <button class="carousel-control-next z-2" type="button" data-bs-target="#gallery" data-bs-slide="next">
            <i class="bi bi-chevron-compact-right fs-1"></i>
        </button>
    </div>
</div>
<div class="modal" id="galleryModal" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body w-100 p-0 bg-dark border-0 position-relative">
                <div class="position-absolute top-0 end-0 z-2 p-3">
                    <div role="button" class="z-2 d-flex w-h-50 modal-close rounded-circle" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="bi bi-x-lg fs-4 m-auto"></i>
                    </div>
                </div>
                <div id="popGallery" class="carousel slide">
                    <div class="carousel-inner">
                        @foreach ($ad->images as $image)
                            <div class="carousel-item @if($loop->first) active @endif mh-100vh">
                                <div class="d-flex  mh-100vh align-content-center">
                                    <img src="{{ $image->image_url }}"
                                        class="d-block h-auto w-auto m-auto" alt="..." />
                                </div>
                            </div>
                        @endforeach
                        
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#popGallery"
                        data-bs-slide="prev">
                        <i class="bi bi-chevron-compact-left fs-1"></i>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#popGallery"
                        data-bs-slide="next">
                        <i class="bi bi-chevron-compact-right fs-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
