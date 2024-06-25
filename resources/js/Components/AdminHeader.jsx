import { useState, useCallback } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Head, Link, useForm } from "@inertiajs/react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Inertia } from '@inertiajs/inertia';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import PermissionAllow from '@/Components/PermissionAllow';


export default function AdminHeader({ user, header, onSidebarToggle,  handle, isFullScreen }) {
    // const navigate = useNavigate();

    const handleClick = () => {
        Inertia.post(route('logout'));
    }

   

    return (
        <>
            
                <header className="main-header me-4">
                    <div className=''>
                        <div className="d-flex align-items-center logo-box justify-content-start">
                            <a href="#" onClick={onSidebarToggle}
                                className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent hover-primary"
                                data-toggle="push-menu" role="button">
                                <span className="icon-Align-left"><span className="path1"></span><span className="path2"></span><span
                                    className="path3"></span></span>
                            </a>
                            {/* <!-- Logo --> */}
                            <Link href={route('admin.index')} className="logo">
                                {/* <!-- logo--> */}
                                <div className="logo-lg">
                                    <span className="light-logo"><img src="/logo.png" width={120} alt="logo" /></span>
                                    <span className="dark-logo"><img src="/logo.png" width={120} alt="logo" /></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    {/* <!-- Header Navbar --> */}
                    <nav className="navbar navbar-static-top bg-body">
                        {/* <!-- Sidebar toggle button--> */}
                        <div className="app-menu">
                            <ul className="header-megamenu nav">
                                <li className="btn-group nav-item d-md-none">
                                    <a href="#" className="waves-effect waves-light nav-link push-btn btn-info-light"
                                        data-toggle="push-menu" role="button">
                                        <span className="icon-Align-left"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span></span>
                                    </a>
                                </li>
                                <li className="btn-group nav-item d-none d-xl-inline-block">

                                </li>
                            </ul>
                        </div>

                        <div className="navbar-custom-menu r-side">
                            <ul className="nav navbar-nav">
                                <li className="btn-group nav-item d-lg-inline-flex d-none">
                                    <a href='#'>
                                        <span  data-provide="fullscreen" 
                                            className="waves-effect waves-light nav-link full-screen"
                                            onClick={isFullScreen ? handle.exit : handle.enter}
                                            title={isFullScreen ? "Exit Full Screen" : "Full Screen"} >
                                            <i className="bi bi-arrows-fullscreen"></i>
                                        </span>
                                    </a>
                                    
                                </li>
                                {/* <!-- Notifications --> */}
                                <li className="dropdown notifications-menu">
                                    <span className="label label-primary">5</span>
                                    <a href="#" className="waves-effect waves-light dropdown-toggle "
                                        data-bs-toggle="dropdown" title="Notifications">
                                        <span className="bi bi bi-bell"></span>
                                    </a>
                                    <ul className="dropdown-menu animated bounceIn">

                                        <li className="header">
                                            <div className="p-20">
                                                <div className="flexbox">
                                                    <div>
                                                        <h4 className="mb-0 mt-0">Notifications</h4>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="text-danger">Clear All</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            {/* <!-- inner menu: contains the actual data --> */}
                                            <ul className="menu sm-scrol">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc
                                                        suscipit blandit.
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu
                                                        sapien elementum, in semper diam posuere.
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">View all</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Messages --> */}
                                <li className="dropdown messages-menu">
                                    <span className="label label-primary">5</span>
                                    <a href="#" className="dropdown-toggle " data-bs-toggle="dropdown"
                                        title="Messages">
                                        <span className="bi bi-envelope"></span>
                                    </a>
                                    <ul className="dropdown-menu animated bounceIn">

                                        <li className="header">
                                            <div className="p-20">
                                                <div className="flexbox">
                                                    <div>
                                                        <h4 className="mb-0 mt-0">Messages</h4>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="text-danger">Clear All</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            {/* <!-- inner menu: contains the actual data --> */}
                                            <ul className="menu sm-scrol">
                                                <li>
                                                    {/* <!-- start message --> */}
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="/assets/admin/images/user2-160x160.jpg" className="rounded-circle"
                                                                alt="User Image" />
                                                        </div>
                                                        <div className="mail-contnet">
                                                            <h4>
                                                                Lorem Ipsum
                                                                <small><i className="fa fa-clock-o"></i> 15 mins</small>
                                                            </h4>
                                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit.</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                {/* <!-- end message --> */}
                                                <li>
                                                    <a href="#">
                                                        <div className="pull-left">
                                                            <img src="/assets/admin/images/user3-128x128.jpg" className="rounded-circle"
                                                                alt="User Image" />
                                                        </div>
                                                        <div className="mail-contnet">
                                                            <h4>
                                                                Nullam tempor
                                                                <small><i className="fa fa-clock-o"></i> 4 hours</small>
                                                            </h4>
                                                            <span>Curabitur facilisis erat quis metus congue viverra.</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="footer">
                                            <a href="#">See all e-Mails</a>
                                        </li>
                                    </ul>
                                </li>
                                {/* <!-- Control Sidebar Toggle Button --> */}

                                {/* <!-- Right Sidebar Toggle Button --> */}
                                <li className="btn-group nav-item d-xl-none d-inline-flex">
                                    <a href="#"
                                        className="push-btn right-bar-btn waves-effect waves-light nav-link full-screen btn-primary-light">
                                        <span className="icon-Layout-left-panel-1"><span className="path1"></span><span
                                            className="path2"></span></span>
                                    </a>
                                </li>

                                {/* <!-- User Account--> */}
                                <li className="user user-menu">
                                    <Dropdown >
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

                                                <Link onClick={handleClick} >
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

    )
}