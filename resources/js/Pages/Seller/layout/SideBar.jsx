import { Link, usePage } from '@inertiajs/react';
import { useLocation } from 'react-router-dom';

const urlMatches = (currentUrl, pattern) => {
    const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
    return regex.test(currentUrl);
};

const testUrlMatches = () => {
    console.log(urlMatches('/seller', '/seller')); // Should print true
    console.log(urlMatches('/seller/properties', '/seller/properties*')); // Should print true
    console.log(urlMatches('/seller/properties/123', '/seller/properties*')); // Should print true
    console.log(urlMatches('/seller/leads', '/seller/leads*')); // Should print true
    console.log(urlMatches('/seller/profile', '/seller/profile*')); // Should print true
    console.log(urlMatches('/seller/settings', '/seller/settings*')); // Should print true
    console.log(urlMatches('/some/other/path', '/seller*')); // Should print false
};

testUrlMatches();

const SideBar = () => {
    const path = window.location.pathname;
    return (
        <>
            <nav className="navbar show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0" id="navbarVertical">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 d-none d-lg-block text-center" href="#">
                        <img src="https://res.cloudinary.com/rr6/image/upload/v1716203422/unnamed_1_l0br9p.png" alt="..." />
                    </a>
                    <div className="navbar-user d-lg-none">
                        <div className="dropdown">
                            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar-parent-child">
                                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                    <span className="avatar-child avatar-badge bg-success" />
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                <a href="#" className="dropdown-item">Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="sidebarCollapse">
                        <div className="mt-auto" />
                        <div className="mb-5 text-center d-none d-lg-block">
                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-big rounded-circle border-2 border-light rounded-circle" />
                            <div className="text-center text-md font-bold">Tahlia Mooney</div>
                        </div>
                        <ul className="navbar-nav p-0 px-lg-3">
                            <li className={`nav-item rounded-3 mb-2 ${urlMatches(path, '/seller') ? 'bg-gray-100' : ''}`}>
                                <Link className='nav-link text-md rounded-3' href="/seller">
                                <i className="bi bi-speedometer"></i> Dashboard
                                </Link>
                            </li>
                            <li className={`nav-item rounded-3 mb-2 ${urlMatches(path, '/seller/properties*') ? 'bg-gray-100' : ''}`}>
                                <Link className="nav-link text-md rounded-3" href="/seller/properties">
                                <i className="bi bi-house"></i> Properties
                                </Link>
                            </li>
                            <li className={`nav-item rounded-3 mb-2 ${urlMatches(path, '/seller/leads*') ? 'bg-gray-100' : ''}`}>
                                <Link className="nav-link text-md rounded-3" href="/seller/leads">
                                <i className="bi bi-house-check"></i> Leads
                                </Link>
                            </li>
                            <li className={`nav-item rounded-3 mb-2 ${urlMatches(path, '/seller/profile*') ? 'bg-gray-100' : ''}`}>
                                <Link className="nav-link text-md rounded-3" href="/seller/profile">
                                <i className="bi bi-person"></i> Account
                                </Link>
                            </li>
                            <li className={`nav-item rounded-3 mb-2 ${urlMatches(path, '/seller/settings*') ? 'bg-gray-100' : ''}`}>
                                <Link className="nav-link text-md rounded-3" href="/seller/settings">
                                <i className="bi bi-gear"></i> Settings
                                </Link>
                            </li>
                            <li className="nav-item rounded-3 mb-2">
                                <Link className="nav-link text-md rounded-3" href="/logout">
                                <i className="bi bi-power"></i> Logout
                                </Link>
                            </li>
                        </ul>
                        <div className="mb-auto" />
                    </div>
                </div>
            </nav>

        </>
    );
}
export default SideBar;