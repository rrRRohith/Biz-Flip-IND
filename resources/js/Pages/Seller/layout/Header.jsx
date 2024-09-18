import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';
import ProfileDropdown from '../Components/ProfileDropdown';
import PermissionAllow from '@/Components/PermissionAllow';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ user }) => {
    const { sellertopmenu } = usePage().props;
    const { notifications } = usePage().props

    return (
        <nav className="navbar seller-top-navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top d-none d-lg-block">
            <div className="container-fluid px-3 px-lg-6">
                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                { user.type !== 'customer' &&
                    <PermissionAllow permission="Ad Create">
                        <Link className="btn btn-primary btn-sm text-overflow" href={route('seller.ads.create')}>Place an ad
                        </Link>
                    </PermissionAllow>
                 }
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item ps-2">
                            <a className="fw-semibold btn btn-primary btn-sm" href="/">Home</a>
                        </li>
                        <>
                            {notifications.length > 0 && (
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="a"
                                        href="#"
                                        className="nav-item ps-2 ms-2 position-relative"
                                    >
                                        <li className="dropdown notifications-menu">
                                            <span className="label fw-bold label-primary seller-count">
                                                {notifications.length}
                                            </span>
                                            <a
                                                href="#"
                                                className="waves-effect waves-light"
                                                title="Notifications"
                                            >
                                                <span className="bi bi-bell fs-20"></span>
                                            </a>
                                        </li>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="animated flipInX">
                                        {notifications.map((notification, index) => (
                                            <Dropdown.Item
                                                key={index}
                                                href={notification.redirection} 
                                                title={notification.subject}
                                            >
                                                {truncateText(notification.subject, 20)}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            )}
                        </>
                        <li className="nav-item ps-2 ms-2">
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