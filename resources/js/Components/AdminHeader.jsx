import { useState, useCallback } from 'react';
import { usePage } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Head, Link, useForm } from "@inertiajs/react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Inertia } from '@inertiajs/inertia';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import PermissionAllow from '@/Components/PermissionAllow';
import AdminSidebar from './AdminSidebar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function AdminHeader({ user, header, onSidebarToggle, handle, isFullScreen }) {
    const handleClick = () => {
        Inertia.post(route('logout'));
    }

    const { notifications } = usePage().props
    const [show2, setShow] = useState(false);
    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    

    return (
        <>
            <header className="main-header me-4">
                <div className=''>
                    <div className="d-flex align-items-center logo-box justify-content-start">
                        <a href="#" onClick={onSidebarToggle}
                            className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary"
                            role="button">
                            <span className="icon-Align-left" style={{ fontSize: "2.2rem" }}>
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                            </span>
                        </a>
                        <a href="#" onClick={handleShow2}
                            className="waves-effect waves-light nav-link d-md-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary"
                            role="button">
                            <span className="icon-Align-left" style={{ fontSize: "2.2rem" }}>
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                            </span>
                        </a>

                        {/* <!-- Logo --> */}
                        <Link href={route('admin.index')} className="logo">
                            {/* <!-- logo--> */}
                            <div className="logo-lg">
                                <span className="light-logo"><img src="/logo.png" width={150} alt="logo" /></span>
                                <span className="dark-logo"><img src="/logo.png" width={150} alt="logo" /></span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* <!-- Header Navbar --> */}
                <nav className="navbar navbar-static-top bg-body">
                    {/* <!-- Sidebar toggle button--> */}
                    <div className="app-menu">

                        <Offcanvas show={show2} onHide={handleClose2}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <ul className="sidebar-menu" data-widget="tree">
                                    <PermissionAllow permission={'Dashboard'}>

                                        <li className="">
                                            <Link href={route('admin.index')} title="Dashboard">
                                                <i className="bi bi-house"></i>
                                                <span>Dashboard</span>
                                            </Link>
                                        </li>

                                    </PermissionAllow>
                                    <PermissionAllow permission={'Categories'}>
                                        <li className="">
                                            <Link href={route('admin.business-category.index')} title="Business Categories">
                                                <i className="bi bi-bookmark-star"></i>
                                                <span>Business Categories</span>
                                            </Link>
                                        </li>
                                    </PermissionAllow>
                                    <PermissionAllow permission={'Categories'}>
                                        <li className="">
                                            <Link href={route('admin.category.index')} title="Categories">
                                                <i className="bi bi-bookmark-star"></i>
                                                <span>Ad Categories</span>
                                            </Link>
                                        </li>
                                    </PermissionAllow>
                                    <PermissionAllow permission={'Sellers'}>
                                        <li className="">
                                            <Link href={route('admin.sellers.index')} title="Categories">
                                                <i className="bi bi-person-check"></i>
                                                <span>Sellers</span>
                                            </Link>
                                        </li>
                                    </PermissionAllow>
                                    <PermissionAllow permission={'Ads'}>
                                        <li className={`treeview ${openDropdown === 'ads' ? 'active' : ''}`}>
                                            <a href={route('admin.ads.index')}>
                                                <i className="bi bi-badge-ad" title="ads"></i>
                                                <span>Ads</span>
                                            </a>
                                        </li>

                                    </PermissionAllow>
                                    <PermissionAllow permission={'Leads'}>
                                        <li className={`treeview ${openDropdown === 'leads' ? 'active' : ''}`}>
                                            <a href={route('admin.leads')} onClick={() => handleToggle('leads')}>
                                                <i className="bi bi-at" title="Leads"></i>
                                                <span>Leads</span>
                                            </a>
                                        </li>

                                    </PermissionAllow>
                                    <PermissionAllow permission={'Locations'}>
                                        <li className={`treeview ${openDropdown === 'locations' ? 'active' : ''}`}>
                                            <a href="#" onClick={() => handleToggle('locations')}>
                                                <i className="bi bi-geo-alt" title="Locations"></i>
                                                <span>Locations</span>
                                                <span className="pull-right-container">
                                                    <i className={`fa ${openDropdown === 'locations' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                                </span>
                                            </a>
                                            {openDropdown === 'locations' && (
                                                <ul className="treeview-menu">
                                                    <PermissionAllow permission={'Locations'}>
                                                        <li>
                                                            <Link href={route('admin.country.index')}>
                                                                <i className="icon-Commit"></i>Country
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Locations'}>
                                                        <li>
                                                            <Link href={route('admin.province.index')}>
                                                                <i className="icon-Commit"></i>Province
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>

                                                    <PermissionAllow permission={'Locations'}>
                                                        <li>
                                                            <Link href={route('admin.city.index')}>
                                                                <i className="icon-Commit"></i>City
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                </ul>
                                            )}
                                        </li>

                                    </PermissionAllow>

                                    <PermissionAllow permission={'Staff Management'}>
                                        <li className="treeview">
                                            <Link href={route('admin.staff.index')}>
                                                <i className="bi bi-people" title="Staff Management"></i>
                                                <span>Staff Management</span>
                                            </Link>
                                        </li>
                                    </PermissionAllow>
                                    <PermissionAllow permission={'Support Tickets'}>
                                        <li className="treeview">
                                            <Link href={route('admin.support-tickets.index')}>
                                                <i className="bi bi-ticket-perforated" title="Support Tickets"></i>
                                                <span>Support Tickets</span>
                                            </Link>
                                        </li>
                                    </PermissionAllow>
                                    <PermissionAllow permission={'Subscribers'}>
                                        <li>
                                            <Link href={route('admin.subscribers.index')}>
                                                <i className="bi bi-person-vcard" title="Subscribers"></i>
                                                <span>Subscribers</span>
                                            </Link>
                                        </li>

                                    </PermissionAllow>
                                    <PermissionAllow permission={'Collections'}>
                                        <li className={`treeview ${openDropdown === 'collections' ? 'active' : ''}`}>
                                            <a href="#" onClick={() => handleToggle('collections')}>
                                                <i className="bi bi-files-alt" title="Collections"></i>
                                                <span>Collections</span>
                                                <span className="pull-right-container">
                                                    <i className={`fa ${openDropdown === 'collections' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                                </span>
                                            </a>
                                            {openDropdown === 'collections' && (
                                                <ul className="treeview-menu">
                                                    <PermissionAllow permission={'Banners'}>
                                                        <li>
                                                            <Link href={route('admin.banners.index')}>
                                                                <i className="icon-Commit"></i>Banners
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Navigation Menu'}>
                                                        <li>
                                                            <Link href={route('admin.navigation-menu.index')}>
                                                                <i className="icon-Commit"></i>Navigation Menu
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Testimonials'}>
                                                        <li>
                                                            <Link href={route('admin.testimonial.index')}>
                                                                <i className="icon-Commit"></i>Testimonials
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Content Pages'}>
                                                        <li>
                                                            <Link href={route('admin.content-page.index')}>
                                                                <i className="icon-Commit"></i>Pages
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Features'}>
                                                        <li>
                                                            <Link href={route('admin.features.index')}>
                                                                <i className="icon-Commit"></i>Features
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Facilities'}>
                                                        <li>
                                                            <Link href={route('admin.facilities.index')}>
                                                                <i className="icon-Commit"></i>Facilities
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Feature Label'}>
                                                        <li>
                                                            <Link href={route('admin.feature-label.index')}>
                                                                <i className="icon-Commit"></i>Feature Label
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                </ul>
                                            )}
                                        </li>

                                    </PermissionAllow>
                                    <PermissionAllow permission={'Settings'}>
                                        <li className={`treeview ${openDropdown === 'settings' ? 'active' : ''}`}>
                                            <a href="#" onClick={() => handleToggle('settings')}>
                                                <i className="bi bi-gear" title="Settings"></i>
                                                <span>Settings</span>
                                                <span className="pull-right-container">
                                                    <i className={`fa ${openDropdown === 'settings' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                                </span>
                                            </a>
                                            {openDropdown === 'settings' && (
                                                <ul className="treeview-menu">
                                                    <PermissionAllow permission={'Company Settings'}>
                                                        <li>
                                                            <Link href={route('admin.company-settings.index')}>
                                                                <i className="icon-Commit"></i>Company Settings
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'App Settings'}>
                                                        <li>
                                                            <Link href={route('admin.app-settings.index')}>
                                                                <i className="icon-Commit"></i>App Settings
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Role and Responsibilities'}>
                                                        <li>
                                                            <Link href={route('admin.role-responsibilities.index')}>
                                                                <i className="icon-Commit"></i>Role & Responsibilities
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>

                                                </ul>
                                            )}
                                        </li>

                                    </PermissionAllow>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                    <div className="navbar-custom-menu r-side">
                        <ul className="nav navbar-nav">
                            <li className="btn-group nav-item d-lg-inline-flex d-none">
                                <a href='#'>
                                    <span data-provide="fullscreen"
                                        className="waves-effect waves-light nav-link full-screen"
                                        onClick={isFullScreen ? handle.exit : handle.enter}
                                        title={isFullScreen ? "Exit Full Screen" : "Full Screen"} >
                                        <i className="bi bi-arrows-fullscreen"></i>
                                    </span>
                                </a>
                            </li>
                            {/* <!-- Notifications --> */}

                            <>
                                {notifications.length > 0 && (
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            as="a"
                                            href="#"
                                            className="text-dark hover-primary ms-md-30 ms-10"
                                        >
                                            <li className="dropdown notifications-menu">
                                                <span className="label label-primary count">
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
                                                >
                                                    {truncateText(notification.subject, 20)}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )}
                            </>

                            {/* <!-- Messages --> */}
                            <li className="dropdown messages-menu">
                                {/* <span className="label label-primary">5</span> */}
                                <Link href={route('admin.support-tickets.index')} className="dropdown-toggle " data-bs-toggle="dropdown"
                                    title="Messages">
                                    <span className="bi bi-envelope fs-20"></span>
                                </Link>
                            </li>

                            {/* <!-- User Account--> */}
                            <li className="user user-menu">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="a"
                                        href="#"
                                        className="dropdown-toggle p-0 text-dark hover-primary ms-md-30 ms-10"
                                        id="dropdown-custom-components"
                                    >
                                        <span className='fs-2 text-muted'>|</span>
                                        <span className="ps-30 d-md-inline-block d-none">Hello, &nbsp;</span>
                                        <strong className="d-md-inline-block d-none">{user.firstname} {user.lastname}</strong>
                                        <img
                                            src={`/images/` + user.picture} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                            className="user-image rounded-circle avatar bg-white mx-10"
                                            alt="User Image"
                                        />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="animated flipInX">
                                        <PermissionAllow permission={'Profile Edit'}>
                                            <Dropdown.Item href={route('admin.profile.index')}>
                                                <i className="ti-user text-muted me-2"></i> Profile
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                        </PermissionAllow>
                                        <Dropdown.Item href="#">
                                            <Link onClick={handleClick}>
                                                <i className="ti-lock text-muted me-2"></i> Log Out
                                            </Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
