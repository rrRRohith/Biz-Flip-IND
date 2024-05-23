<div id="gallery" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner position-relative">
        <main data-bs-toggle="modal" data-bs-target="#galleryModal" class="page-banner mh-75vh carousel-item active background-fit" role="button"
            style="background-image: linear-gradient( #00000038, #00000014 ), url(https://res.cloudinary.com/rr6/image/upload/v1716280858/r-architecture-NeN1D7Z3Ick-unsplash_huu6t4.jpg)">
            <div data-bs-target="#popGallery" data-bs-slide-to="0" class="w-100 mh-75vh"></div>
        </main>
        <main data-bs-toggle="modal" data-bs-target="#galleryModal" class="page-banner mh-75vh carousel-item background-fit" role="button"
            style="background-image: linear-gradient( #00000038, #00000014 ), url(https://res.cloudinary.com/rr6/image/upload/v1716280858/r-architecture-KQgrVfR3r74-unsplash_exjis7.jpg)">
            <div data-bs-target="#popGallery" data-bs-slide-to="1" class="w-100 mh-75vh"></div>
        </main>
        <main data-bs-toggle="modal" data-bs-target="#galleryModal" class="page-banner mh-75vh carousel-item background-fit" role="button"
            style="background-image: linear-gradient( #00000038, #00000014 ), url(https://res.cloudinary.com/rr6/image/upload/v1716280858/r-architecture-2gDwlIim3Uw-unsplash_dexbmp.jpg)">
            <div data-bs-target="#popGallery" data-bs-slide-to="2" class="w-100 mh-75vh"></div>
        </main>
        <button class="carousel-control-prev z-2" type="button" data-bs-target="#gallery" data-bs-slide="prev">
            <i class="bi bi-chevron-compact-left fs-1"></i>
        </button>
        <button class="carousel-control-next z-2" type="button" data-bs-target="#gallery" data-bs-slide="next">
            <i class="bi bi-chevron-compact-right fs-1"></i>
        </button>
    </div>
</div>
<div class="modal" id="galleryModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-body w-100 p-0 bg-dark border-0 position-relative">
                <div class="position-absolute top-0 end-0 z-2 p-3">
                    <div role="button" class="z-2 d-flex w-h-50 modal-close rounded-circle" data-bs-dismiss="modal" aria-label="Close">
                        <i class="bi bi-x-lg fs-4 m-auto"></i>
                    </div>
                </div>
                <div id="popGallery" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active mh-100vh">
                            <div class="d-flex  mh-100vh align-content-center">
                                <img src="https://res.cloudinary.com/rr6/image/upload/v1716280858/r-architecture-NeN1D7Z3Ick-unsplash_huu6t4.jpg" class="d-block h-auto w-auto m-auto" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-item mh-100vh">
                            <div class="d-flex  mh-100vh align-content-center">
                                <img src="https://res.cloudinary.com/rr6/image/upload/v1716280858/r-architecture-KQgrVfR3r74-unsplash_exjis7.jpg" class="d-block h-auto w-auto m-auto" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-item mh-100vh">
                            <div class="d-flex  mh-100vh align-content-center">
                                <img src="https://res.cloudinary.com/rr6/image/upload/v1716280858/r-architecture-2gDwlIim3Uw-unsplash_dexbmp.jpg" class="d-block h-auto w-auto m-auto" alt="..." />
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#popGallery" data-bs-slide="prev">
                        <i class="bi bi-chevron-compact-left fs-1"></i>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#popGallery" data-bs-slide="next">
                        <i class="bi bi-chevron-compact-right fs-1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>