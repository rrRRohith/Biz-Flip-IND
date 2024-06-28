import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import PermissionAllow from '@/Components/PermissionAllow';

export default function AdminSidebar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <>
            <aside className="main-sidebar">
                <section className="sidebar position-relative">
                    <div className="multinav">
                        <div className="multinav-scroll h-100">
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
                                        <a  href={route('admin.ads.index')}>
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
                        </div>
                    </div>
                </section>
            </aside>
        </>
    );
}
