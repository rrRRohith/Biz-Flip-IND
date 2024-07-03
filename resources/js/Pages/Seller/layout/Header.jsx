import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';
import ProfileDropdown from '../Components/ProfileDropdown';
import PermissionAllow from '@/Components/PermissionAllow';

const Header = ({ user }) => {
    const { sellertopmenu } = usePage().props;

    return (
        <nav className="navbar seller-top-navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top d-none d-lg-block">
            <div className="container-fluid px-3 px-lg-6">
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <PermissionAllow permission="Ad Create">
                    <Link className="btn btn-primary btn-sm text-overflow" href={route('seller.ads.create')}>Place an ad
                    </Link>
                </PermissionAllow>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li class="nav-item ps-2">
                            <a class="fw-semibold btn btn-primary btn-sm" href="/">Home</a>
                        </li>
                        <li class="nav-item ps-2 ms-2">
                            <div className="navbar-user">
                                <div className="dropdown">
                                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar-parent-child">
                                            <img alt="Image Placeholder" src={user.picture_url} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} className="avatar avatar- rounded-circle" />
                                            <span className="avatar-child avatar-badge bg-success" />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                        <ProfileDropdown user={user}></ProfileDropdown>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;