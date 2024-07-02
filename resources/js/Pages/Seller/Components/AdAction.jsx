export default function AdAction({ ad, status }) {
    return ad.status != -1 &&(
        <div class="dropdown me-2">
            <button data-bs-toggle="dropdown" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i class="bi bi-chevron-compact-down"></i></button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {ad.status == 1 && (
                    <>
                        <li><a onClick={(e) => status(ad, 0)} class="dropdown-item" href="#">Unpublish</a></li>
                        <li><a onClick={(e) => status(ad, 2)} class="dropdown-item" href="#">Mark as sold</a></li>
                    </>
                )}
                {ad.status == 2 && (
                    <>
                        <li><a onClick={(e) => status(ad, 1)} class="dropdown-item" href="#">Mark as available</a></li>
                    </>
                )}
                {ad.status == 0 && (
                    <>
                        <li><a onClick={(e) => status(ad, 1)} class="dropdown-item" href="#">Publish</a></li>
                    </>
                )}
            </ul>
        </div>
    );
}