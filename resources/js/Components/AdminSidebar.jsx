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

    const urlMatches = (currentUrl, pattern) => {
        // Check if the pattern is an array
        if (Array.isArray(pattern)) {
            // Return true if any pattern in the array matches
            return pattern.some(pat => {
                const regex = new RegExp(`^${pat.replace(/\*/g, '.*')}$`);
                return regex.test(currentUrl);
            });
        } else {
            // If pattern is not an array, treat it as a string
            const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
            return regex.test(currentUrl);
        }
    };

    const path = window.location.pathname;
    return (

        <>
            <aside className="main-sidebar">
                <section className="sidebar position-relative">
                    <div className="multinav">
                        <div className="multinav-scroll h-100">
                            <ul className="sidebar-menu" data-widget="tree">
                                <PermissionAllow permission={'Dashboard'}>

                                    <li className="">
                                        <Link className={urlMatches(path, '/admin') ? 'active-menu' : ''} href={route('admin.index')} title="Dashboard">
                                            <i className="bi bi-house"></i>
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>

                                </PermissionAllow>
                                <PermissionAllow permission={'Categories'}>
                                    <li className="">
                                        <Link className={urlMatches(path, '/admin/business-category*') ? 'active-menu' : ''} href={route('admin.business-category.index')} title="Business Categories">
                                            <i className="bi bi-bookmark-star"></i>
                                            <span>Business Categories</span>
                                        </Link>
                                    </li>
                                </PermissionAllow>
                                <PermissionAllow permission={'Categories'}>
                                    <li className="">
                                        <Link className={urlMatches(path, '/admin/category*') ? 'active-menu' : ''} href={route('admin.business-category.index')} href={route('admin.category.index')} title="Categories">
                                            <i className="bi bi-bookmark-star"></i>
                                            <span>Ad Categories</span>
                                        </Link>
                                    </li>
                                </PermissionAllow>
                                <PermissionAllow permission={'Sellers'}>
                                    <li className="">
                                        <Link className={urlMatches(path, '/admin/users*') ? 'active-menu' : ''} href={route('admin.business-category.index')} href={route('admin.sellers.index')} title="Categories">
                                            <i className="bi bi-person-check"></i>
                                            <span>Users</span>
                                        </Link>
                                    </li>
                                </PermissionAllow>
                                <PermissionAllow permission={'Ads'}>
                                    <li className={`treeview ${openDropdown === 'ads' ? 'active' : ''}`}>
                                        <Link href={route('admin.ads.index')}>
                                            <i className="bi bi-badge-ad" title="ads"></i>
                                            <span>Ads</span>
                                        </Link>
                                    </li>

                                </PermissionAllow>
                                <PermissionAllow permission={'Leads'}>
                                    <li className={`treeview ${openDropdown === 'leads' ? 'active' : ''}`}>
                                        <Link className={urlMatches(path, '/admin/ads*') ? 'active-menu' : ''} href={route('admin.business-category.index')} href={route('admin.leads')} onClick={() => handleToggle('leads')}>
                                            <i className="bi bi-at" title="Leads"></i>
                                            <span>Leads</span>
                                        </Link>
                                    </li>

                                </PermissionAllow>
                                <PermissionAllow permission={'Locations'}>
                                    <li className={`treeview ${openDropdown === 'locations' || urlMatches(path, [
                                        '/admin/province*',
                                        '/admin/city*'
                                    ]) ? 'active' : ''}`}>
                                        <a href="#" onClick={() => handleToggle('locations')}>
                                            <i className="bi bi-geo-alt" title="Locations"></i>
                                            <span>Locations</span>
                                            <span className="pull-right-container">
                                                <i className={`fa ${openDropdown === 'locations' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                            </span>
                                        </a>
                                        {(openDropdown === 'locations' || urlMatches(path, [
                                            '/admin/province*',
                                            '/admin/city*'
                                        ])) && (
                                                <ul className="treeview-menu">
                                                    {/*
                                                <PermissionAllow permission={'Locations'}>
                                                    <li>
                                                        <Link href={route('admin.country.index')}>
                                                            <i className="icon-Commit"></i>Country
                                                        </Link>
                                                    </li>
                                                </PermissionAllow>
                                            */}
                                                    <PermissionAllow permission={'Locations'}>
                                                        <li>
                                                            <Link href={route('admin.province.index')}>
                                                                <i className="icon-Commit"></i>Provinces
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>

                                                    <PermissionAllow permission={'Locations'}>
                                                        <li>
                                                            <Link href={route('admin.city.index')}>
                                                                <i className="icon-Commit"></i>Cities
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                </ul>
                                            )}
                                    </li>

                                </PermissionAllow>

                                <PermissionAllow permission={'Staff Management'}>
                                    <li className="treeview">
                                        <Link className={urlMatches(path, '/admin/staff*') ? 'active-menu' : ''} href={route('admin.business-category.index')} href={route('admin.staff.index')}>
                                            <i className="bi bi-people" title="Staff Management"></i>
                                            <span>Staff Management</span>
                                        </Link>
                                    </li>
                                </PermissionAllow>
                                <PermissionAllow permission={'Support Tickets'}>
                                    <li className="treeview">
                                        <Link className={urlMatches(path, '/admin/support-ticket*') ? 'active-menu' : ''} href={route('admin.business-category.index')} href={route('admin.support-tickets.index')}>
                                            <i className="bi bi-ticket-perforated" title="Support Tickets"></i>
                                            <span>Support Tickets</span>
                                        </Link>
                                    </li>
                                </PermissionAllow>
                                <PermissionAllow permission={'Subscribers'}>
                                    <li>
                                        <Link className={urlMatches(path, '/admin/subscriber*') ? 'active-menu' : ''} href={route('admin.business-category.index')} href={route('admin.subscribers.index')}>
                                            <i className="bi bi-person-vcard" title="Subscribers"></i>
                                            <span>Subscribers</span>
                                        </Link>
                                    </li>

                                </PermissionAllow>
                                {/* <PermissionAllow permission={'Subscribers'}>
                                    <li>
                                        <Link href={route('admin.customers.index')}>
                                            <i className="bi bi-person-vcard" title="Subscribers"></i>
                                            <span>Customers</span>
                                        </Link>
                                    </li>

                                </PermissionAllow> */}


                                {/* <PermissionAllow permission={'Subscribers'}>
                                    <li>
                                        <Link href={route('admin.subscription.index')}>
                                            <i className="bi bi-cash-coin" title="Subscription plans"></i>
                                            <span>Subscription plans</span>
                                        </Link>
                                    </li>

                                </PermissionAllow> */}

                                <PermissionAllow permission={'Subscribers'}>
                                    <li className={`treeview ${openDropdown === 'Subscription' || urlMatches(path, [
                                        '/admin/subscription-plans*',
                                        '/admin/subscription-invoices*',
                                    ]) ? 'active' : ''}`}>
                                        <a href="#" onClick={() => handleToggle('Subscription')}>
                                            <i className="bi bi-cash-coin" title="Subscription"></i>
                                            <span>Subscription</span>
                                            <span className="pull-right-container">
                                                <i className={`fa ${openDropdown === 'Subscription' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                            </span>
                                        </a>
                                        {(openDropdown === 'Subscription' || urlMatches(path, [
                                        '/admin/subscription-plans*',
                                        '/admin/subscription-invoices*',
                                    ])) && (
                                            <ul className="treeview-menu">

                                                <li>
                                                    <Link href={route('admin.subscription.index')}>
                                                        <i title="Subscription plans"></i>
                                                        <span>Subscription plans</span>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link href={route('admin.subscription.subscription-invoices')}>
                                                        <i title="Subscription plans"></i>
                                                        <span>Invoices</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>

                                </PermissionAllow>


                                <PermissionAllow permission={'Collections'}>
                                    <li className={`treeview ${openDropdown === 'collections' || urlMatches(path, [
                                        '/admin/banners*',
                                        '/admin/navigation-menu*',
                                        '/admin/testimonial*',
                                        '/admin/content-page*',
                                        '/admin/features*',
                                        '/admin/ad_purposes*',
                                        '/admin/ad_types*',
                                        '/admin/facilities*',
                                        '/admin/feature-label*',
                                    ]) ? 'active' : ''}`}>
                                        <a href="#" onClick={() => handleToggle('collections')}>
                                            <i className="bi bi-files-alt" title="Collections"></i>
                                            <span>Setup</span>
                                            <span className="pull-right-container">
                                                <i className={`fa ${openDropdown === 'collections' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                            </span>
                                        </a>
                                        {(openDropdown === 'collections' || urlMatches(path, [
                                            '/admin/banners*',
                                            '/admin/navigation-menu*',
                                            '/admin/testimonial*',
                                            '/admin/content-page*',
                                            '/admin/features*',
                                            '/admin/ad_purposes*',
                                            '/admin/ad_types*',
                                            '/admin/facilities*',
                                            '/admin/feature-label*',
                                        ])) && (
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
                                                    <PermissionAllow permission={'Ad Types'}>
                                                        <li>
                                                            <Link href={route('admin.ad_types.index')}>
                                                                <i className="icon-Commit"></i>Ad types
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Ad Purposes'}>
                                                        <li>
                                                            <Link href={route('admin.ad_purposes.index')}>
                                                                <i className="icon-Commit"></i>Ad purposes
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
                                    <li className={`treeview ${openDropdown === 'settings' || urlMatches(path, [
                                        '/admin/company-settings*',
                                        '/admin/role-responsibilities*',
                                        '/admin/backups*'
                                    ]) ? 'active' : ''}`}>
                                        <a href="#" onClick={() => handleToggle('settings')}>
                                            <i className="bi bi-gear" title="Settings"></i>
                                            <span>Settings</span>
                                            <span className="pull-right-container">
                                                <i className={`fa ${openDropdown === 'settings' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                            </span>
                                        </a>
                                        {(openDropdown === 'settings' || urlMatches(path, [
                                            '/admin/company-settings*',
                                            '/admin/role-responsibilities*',
                                            '/admin/backups*'
                                        ])) && (
                                                <ul className="treeview-menu">
                                                    <PermissionAllow permission={'Company Settings'}>
                                                        <li>
                                                            <Link href={route('admin.company-settings.index')}>
                                                                <i className="icon-Commit"></i>Company Settings
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    {/* <PermissionAllow permission={'App Settings'}>
                                                   <li>
                                                        <Link href={route('admin.app-settings.index')}>
                                                            <i className="icon-Commit"></i>App Settings
                                                        </Link>
                                                    </li> 
                                                </PermissionAllow> */}
                                                    <PermissionAllow permission={'Role and Responsibilities'}>
                                                        <li>
                                                            <Link href={route('admin.role-responsibilities.index')}>
                                                                <i className="icon-Commit"></i>Role & Responsibilities
                                                            </Link>
                                                        </li>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Role and Responsibilities'}>
                                                        <li>
                                                            <Link href={route('admin.backups.index')}>
                                                                <i className="icon-Commit"></i>Backups
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
