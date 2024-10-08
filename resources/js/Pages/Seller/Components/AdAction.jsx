export default function AdAction({ ad, status }) {
    return ad.status != -1 && ad.status != '0' && ad.status !='3' && (
        <>
            <span className='position-absolute'>
                <div className="dropdown me-2">
                    <button data-bs-toggle="dropdown" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-chevron-compact-down"></i></button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {ad.status == 1 && ad.publish_at && (
                            <>
                                <li><a onClick={(e) => status(ad, 0)} className="dropdown-item" href="#">Unpublish</a></li>
                                <li><a onClick={(e) => status(ad, 2)} className="dropdown-item" href="#">Mark as sold</a></li>
                            </>
                        )}
                        {ad.status == 1 && !ad.publish_at && (
                            <>
                                <li><a onClick={(e) => status(ad, 1)} className="dropdown-item" href="#">Publish</a></li>
                            </>
                        )}
                        {ad.status == 2 && (
                            <>
                                <li><a onClick={(e) => status(ad, 1)} className="dropdown-item" href="#">Mark as available</a></li>
                            </>
                        )}
                        {/* {ad.status == 0 && (
                            <>
                                <li><a onClick={(e) => status(ad, 1)} className="dropdown-item" href="#">Publish</a></li>
                            </>
                        )} */}
                    </ul>
                </div>
            </span>
            <a type="button" className="btn btn-sm btn-square btn-neutral me-2"><i className="bi bi-pen"></i></a>
        </>
    );
}