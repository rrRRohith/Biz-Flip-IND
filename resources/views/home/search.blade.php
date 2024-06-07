<div class="m-auto mw-900 w-100">
    <div class="mb-4 text-center">
        <div class="fs-1 fw-semibold text-white">Lets find a perfect place</div>
        <div class="text-light">
            Search over 1000s of places nearby you.
        </div>
    </div>
    <div class="d-none d-md-block">
        <div class="card border-0 rounded-4 mw-900 w-100">
            <div class="card-body w-100 p-2">
                <div class="d-flex align-items-center">
                    <div class="me-3 col">
                        <div>Search</div>
                        <div>
                            <input type="text" name="" id=""
                                class="border-0 shadow-none w-auto p-0 border-none form-control p-none"
                                placeholder="What are you looking for?" />
                        </div>
                    </div>
                    <div class="me-3 col">
                        <div>Categories</div>
                        <div>
                            <select name=""
                                class="border-0 text-muted shadow-none p-0 w-auto border-none form-control p-none"
                                id="">
                                <option value="">All categories</option>
                            </select>
                        </div>
                    </div>
                    <div class="me-3 col">
                        <div>Industry</div>
                        <div>
                            <select name=""
                                class="border-0 text-muted shadow-none p-0 w-auto border-none form-control p-none"
                                id="">
                                <option value="">All industries</option>
                            </select>
                        </div>
                    </div>
                    <div class="me-3 col">
                        <div>Price</div>
                        <div>
                            <select name=""
                                class="border-0 text-muted shadow-none p-0 w-auto border-none form-control p-none"
                                id="">
                                <option value="">Add price</option>
                            </select>
                        </div>
                    </div>
                    <a href="{{ route('ads.index') }}"
                        class="w-h-50 btn btn-dark ms-auto rounded-circle btn-lg border-0 shadow-none d-flex align-items-center">
                    <i class="bi bi-search m-auto"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="d-md-none">
        <div role="button" class="card border-0 mw-500 m-auto w-100 rounded-4" data-bs-toggle="modal"
            data-bs-target="#searchModal">
            <div class="card-body p-2">
                <div class="d-flex align-items-center">
                    <div>
                        <div>Search</div>
                        <div class="text-muted small">What are you looking for?</div>
                    </div>
                    <div
                        class="w-h-50 btn btn-dark ms-auto rounded-circle btn-lg border-0 shadow-none d-flex align-items-center">
                        <i class="bi bi-search m-auto"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="searchModal" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-light">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="staticBackdropLabel">Search</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body border-0">
                <div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Search</label>
                        <input type="text" name="search" id="password" placeholder="What are you looking for?"
                            class="form-control border-1 border rounded-1 border-gray shadow-none" />
                    </div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Categories</label>
                        <select name=""
                            class="form-control border-1 border rounded-1 border-gray shadow-none form-select"
                            id="">
                            <option value="">All categories</option>
                        </select>
                    </div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Industry</label>
                        <select name=""
                            class="form-control border-1 border rounded-1 border-gray shadow-none form-select"
                            id="">
                            <option value="">All industries</option>
                        </select>
                    </div>
                    <div class="form-group mb-4 label-top">
                        <label for="search">Price</label>
                        <select name=""
                            class="form-control border-1 border rounded-1 border-gray shadow-none form-select"
                            id="">
                            <option value="">Add price</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-lg fs-6 btn-light bg-white border-0 shadow-none rounded-1"
                    data-bs-dismiss="modal">Close</button>
                <a href="{{ route('ads.index') }}" class="btn btn-lg btn-dark fs-6 shadow-none border-0 rounded-1">
                Search <i class="bi bi-search m-auto"></i>
                </a>
            </div>
        </div>
    </div>
</div>
