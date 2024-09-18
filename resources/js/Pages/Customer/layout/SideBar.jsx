import { Link, usePage } from '@inertiajs/react';
import { useLocation } from 'react-router-dom';
import ProfileDropdown from '../Components/ProfileDropdown';
import PermissionAllow from '@/Components/PermissionAllow';
import { Inertia } from '@inertiajs/inertia';

const urlMatches = (currentUrl, pattern) => {
    const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
    return regex.test(currentUrl);
};

const handleClick = () => {
    Inertia.post(route('logout'));
}


const SideBar = ({ user }) => {
    const path = window.location.pathname;
    return (
        <>
            <nav className="navbar show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0" id="navbarVertical">
                <div className="container-fluid px-3 px-lg-4">
                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-none d-lg-block text-center" href="/">
                        <img src="/logo.png" alt="..." />
                    </a>
                    <div className='me-auto ms-3 d-lg-none'>
                        
                    </div>
                    <div className='ms-auto me-3 d-lg-none'>
                        <a className="fw-semibold btn btn-primary btn-sm" href="/">Home</a>
                    </div>
                    <div className="navbar-user d-lg-none">
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
                    <div className="collapse navbar-collapse" id="sidebarCollapse">
                        <div className="mt-auto" />
                        <div className="mb-5 text-center d-none d-lg-block">
                            <img alt="Image Placeholder" src={user.picture_url} onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} className="avatar avatar-big rounded-circle border-2 border-light rounded-circle" />
                            <div className="text-center text-md font-bold mt-3">{user.firstname} {user.lastname}</div>
                        </div>
                        <ul className="navbar-nav p-0 px-lg-3">
                            <li className={`nav-item rounded-0 rounded-lg-3 mb-2 ${urlMatches(path, '/customer') || urlMatches(path, '/customer/chats*') ? 'bg-gray-100' : ''}`}>
                                <Link className='nav-link text-md rounded-0 rounded-lg-3' href={route('customer.index')}>
                                <i class="bi bi-chat-left-dots"></i> Messages
                                </Link>
                            </li>
                            <li className={`nav-item rounded-0 rounded-lg-3 mb-2 ${urlMatches(path, '/customer/profile*') ? 'bg-gray-100' : ''}`}>
                                <Link className="nav-link text-md rounded-0 rounded-lg-3" href={route('customer.profile.index')}>
                                    <i className="bi bi-person"></i> Profile
                                </Link>
                            </li>
                            <li className={`nav-item rounded-0 rounded-lg-3 mb-2 ${urlMatches(path, '/customer/password') ? 'bg-gray-100' : ''}`}>
                                <Link className="nav-link text-md rounded-0 rounded-lg-3" href={route('customer.password.index')}>
                                <i class="bi bi-shield-lock"></i> Security
                                </Link>
                            </li>
                            <li className="nav-item rounded-0 rounded-lg-3 mb-2">
                                <Link className="nav-link text-md rounded-0 rounded-lg-3" onClick={handleClick}>
                                    <i className="bi bi-power"></i> Logout
                                </Link>
                            </li>
                        </ul>
                        <div className="mb-auto" />
                        {/* <div className="my-4 px-lg-6 position-relative d-none d-lg-block">
                            <div className="dropup w-full">
                                <button className="btn-light bg-gray-100 d-flex w-full py-3 ps-3 pe-4 align-items-center border-0 border-none shadow-none rounded-0 rounded-lg-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="me-3">
                                        <img alt="Image Placeholder" onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} src={user.picture_url} className="avatar avatar- rounded-circle" />
                                    </span>
                                    <span className="flex-fill text-start text-sm font-semibold">{user.firstname} {user.lastname}</span>
                                    <span>
                                        <i className="bi bi-chevron-expand text-dark text-opacity-70" />
                                    </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end w-full mb-2 shadow-sm">
                                    <ProfileDropdown user={user}></ProfileDropdown>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </nav>

        </>
    );
}
export default SideBar;