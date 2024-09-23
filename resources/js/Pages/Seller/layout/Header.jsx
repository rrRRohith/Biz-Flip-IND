import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';
import ProfileDropdown from '../Components/ProfileDropdown';
import PermissionAllow from '@/Components/PermissionAllow';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ user }) => {
    const { sellertopmenu } = usePage().props;
    const { notifications } = usePage().props

    return (
        <nav className="navbar seller-top-navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top">
            <div className="container px-3">
                <button className="navbar-toggler me-2 border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* { user.type !== 'customer' &&
                    <PermissionAllow permission="Ad Create">
                        <Link className="btn btn-primary btn-sm text-overflow" href={route('account.ads.create')}>Place an ad
                        </Link>
                    </PermissionAllow>
                 }
                */}
                <a className="navbar-brand me-auto" href="/">
                    <img src="/logo.png" alt="..." />
                </a>
                <Dropdown className="d-block d-lg-none">
                    <Dropdown.Toggle
                        as="a"
                        href="#"
                        className="nav-item ps-2 text-dark ms-2 position-relative"
                    >
                        <li className="dropdown notifications-menu">
                            <span className="label fw-bold text-dark label-dark seller-count">
                                {notifications.length}
                            </span>
                            <a
                                href="#"
                                className="waves-effect text-dark waves-light"
                                title="Notifications"
                            >
                                <span className="bi bi-bell fs-20"></span>
                            </a>
                        </li>
                    </Dropdown.Toggle>
                    {notifications.length > 0 && (
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
                    )}
                </Dropdown>
                <div className="navbar-user d-block d-lg-none ms-2">
                    <div className="dropdown">
                        <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-parent-child">
                                <img alt="Image Placeholder" src={user.picture_url} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} className="avatar avatar- rounded-circle" />
                                <span className="avatar-child avatar-badge bg-success" />
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end profile-dropdown" aria-labelledby="sidebarAvatar">
                            <ProfileDropdown user={user}></ProfileDropdown>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.index')}>Dashboard</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.ads.index')}>Ads</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.leads.index')}>Leads</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.chats.index')}>Messages</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.invoices.index')}>Accounts</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.tickets.index')}>Support</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.staffs.index')}>Staffs</Link>
                        </li>
                        <li className="nav-item me-auto">
                            <Link className="nav-link p-2" href={route('account.settings.index')}>Settings</Link>
                        </li>
                        <li className="d-none d-lg-block">
                            <Dropdown>
                                <Dropdown.Toggle
                                    as="a"
                                    href="#"
                                    className="nav-item ps-2 text-dark ms-2 position-relative"
                                >
                                    <li className="dropdown notifications-menu">
                                        <span className="label fw-bold text-dark label-dark seller-count">
                                            {notifications.length}
                                        </span>
                                        <a
                                            href="#"
                                            className="waves-effect text-dark waves-light"
                                            title="Notifications"
                                        >
                                            <span className="bi bi-bell fs-20"></span>
                                        </a>
                                    </li>
                                </Dropdown.Toggle>
                                {notifications.length > 0 && (
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
                                )}
                            </Dropdown>
                        </li>
                        <li className="nav-item ps-2 ms-2 d-none d-lg-block">
                            <div className="navbar-user">
                                <div className="dropdown">
                                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar-parent-child">
                                            <img alt="Image Placeholder" src={user.picture_url} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} className="avatar avatar- rounded-circle" />
                                            <span className="avatar-child avatar-badge bg-success" />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end profile-dropdown" aria-labelledby="sidebarAvatar">
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