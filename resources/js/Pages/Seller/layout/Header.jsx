import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';
import ProfileDropdown from '../Components/ProfileDropdown';
import PermissionAllow from '@/Components/PermissionAllow';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ user }) => {
    const { sellertopmenu } = usePage().props;
    const { notifications, menu } = usePage().props
    const urlMatches = (currentUrl, pattern) => {
        const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
        return regex.test(currentUrl);
    };
    const path = window.location.pathname;
    return (
        <nav className="navbar seller-top-navbar navbar-expand-lg navbar-light bg-white border-bottom px-0 fixed-top">
            <div className="container px-3 position-relative">
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
                <a className="navbar-brand me-auto" as="a" href="/">
                    <img src="/logo.png" alt="..." />
                </a>
                <Dropdown className="d-block d-lg-none">
                    <Dropdown.Toggle
                        as="a"
                        href="#"
                        className="nav-item ps-2 text-dark ms-2 position-relative"
                    >
                        <li className="dropdown notifications-menu">
                            <span className="label fw-bold text-dark d-flex align-items-center label-dark seller-count">
                                <span className="small m-auto font-normal">
                                    {notifications.length}
                                </span>
                            </span>
                            <Link
                                as="a" href="#"
                                className="waves-effect text-dark waves-light"
                                title="Notifications"
                            >
                                <span className="bi bi-bell fs-20"></span>
                            </Link>
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
                        <Link as="a" href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-parent-child">
                                <img alt="Image Placeholder" src={user.picture_url} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} className="avatar avatar- rounded-circle" />
                                <span className="avatar-child avatar-badge bg-success" />
                            </div>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end profile-dropdown" aria-labelledby="sidebarAvatar">
                            <ProfileDropdown user={user}></ProfileDropdown>
                        </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        {menu.map((item, key) => (
                            <li key={item.id || key} className="nav-item me-auto">
                                <a className="nav-link p-2" href={item.link}>{item.title}</a>
                            </li>
                        ))}
                        {/* <li className="nav-item me-auto">
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
                        </li> */}
                        <li className="d-none d-lg-block">
                            <Dropdown>
                                <Dropdown.Toggle
                                    as="a"
                                     href="#"
                                    className="nav-item ps-2 text-dark ms-2 position-relative"
                                >
                                    <li className="dropdown notifications-menu">
                                        <span className="label fw-bold text-dark d-flex align-items-center label-dark seller-count">
                                            <span className="small m-auto font-normal">
                                                {notifications.length}
                                            </span>
                                        </span>
                                        <Link
                                            as="a" href="#"
                                            className="waves-effect text-dark waves-light"
                                            title="Notifications"
                                        >
                                            <span className="bi bi-bell fs-20"></span>
                                        </Link>
                                    </li>
                                </Dropdown.Toggle>
                                {notifications.length > 0 && (
                                    <Dropdown.Menu className="animated flipInX">
                                        {notifications.map((notification) => (
                                            <Dropdown.Item
                                                key={notification.id} // Ensure each notification has a unique 'id'
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
                                    <Link as="a" href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar-parent-child">
                                            <img alt="Image Placeholder" src={user.picture_url} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} className="avatar avatar- rounded-circle" />
                                            <span className="avatar-child avatar-badge bg-success" />
                                        </div>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-end profile-dropdown" aria-labelledby="sidebarAvatar">
                                        <ProfileDropdown user={user}></ProfileDropdown>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <ul className="navbar-nav me-auto mb-2 d-lg-none mb-lg-0 align-items-center">
                        <Link className='dropdown-item p-2' href='/account'>Dashboard</Link>

                        <PermissionAllow permission="Ads Listing">
                            <Link as="a" className='dropdown-item p-2' href="/account/ads">
                                Ads </Link>
                        </PermissionAllow>
                        <PermissionAllow permission="Ads Leads Listing">
                            <Link className='dropdown-item p-2' as="a" href="/account/leads">
                                Leads </Link>
                        </PermissionAllow>
                        <PermissionAllow permission="Messages">
                            <Link className='dropdown-item p-2' as="a" href="/account/chats">
                                Messages</Link>
                        </PermissionAllow>

                        {user.is_agent && (
                            <>
                                <PermissionAllow permission="Staff Listing">
                                    <Link className='dropdown-item p-2' as="a" href="/account/staffs">
                                        Staffs </Link>
                                </PermissionAllow>
                                <PermissionAllow permission="Settings">
                                    <Link className='dropdown-item p-2' as="a" href="/account/settings">
                                        Company Settings </Link>
                                </PermissionAllow>
                            </>
                        )}
                        <PermissionAllow permission="Invoice List">
                            <Link className='dropdown-item p-2' as="a" href="/account/invoices">
                                Billing </Link>
                        </PermissionAllow>
                        <PermissionAllow permission="Support Ticket Listing">
                            <Link className='dropdown-item p-2' as="a" href="/account/tickets">
                                Support </Link>
                        </PermissionAllow>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;