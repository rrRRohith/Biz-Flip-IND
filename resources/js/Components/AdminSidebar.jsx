import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';

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
                                <li className="">
                                    <Link href={route('admin.index')} title="Dashboard">
                                        <i className="bi bi-house"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className={`treeview ${openDropdown === 'seller' ? 'active' : ''}`}>
                                    <a href="#" onClick={() => handleToggle('seller')}>
                                        <i className="bi bi-person-check" title="Seller"></i>
                                        <span>Seller</span>
                                        <span className="pull-right-container">
                                            <i className={`fa ${openDropdown === 'seller' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                        </span>
                                    </a>
                                    {openDropdown === 'seller' && (
                                        <ul className="treeview-menu">
                                            <li>
                                                <Link href={route('admin.sellers.index')}>
                                                    <i className="icon-Commit"></i>Seller List
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <i className="icon-Commit"></i> Pending Approvel 
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`treeview ${openDropdown === 'properties' ? 'active' : ''}`}>
                                    <a href="#" onClick={() => handleToggle('properties')}>
                                        <i className="bi bi-person-check" title="properties"></i>
                                        <span>Properties</span>
                                        <span className="pull-right-container">
                                            <i className={`fa ${openDropdown === 'properties' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                        </span>
                                    </a>
                                    {openDropdown === 'properties' && (
                                        <ul className="treeview-menu">
                                            <li>
                                                <Link href="">
                                                    <i className="icon-Commit"></i>Properties List
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <i className="icon-Commit"></i>Peding Approvel
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
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
                                            <li>
                                                <Link href={route('admin.category.index')}>
                                                    <i className="icon-Commit"></i>Category
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.features.index')}>
                                                    <i className="icon-Commit"></i>Features
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.facilities.index')}>
                                                    <i className="icon-Commit"></i>Facilities
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.feature-label.index')}>
                                                    <i className="icon-Commit"></i>Feature Label
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
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
                                            <li>
                                                <Link href={route('admin.country.index')}>
                                                    <i className="icon-Commit"></i>Country
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.province.index')}>
                                                    <i className="icon-Commit"></i>Province
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.city.index')}>
                                                    <i className="icon-Commit"></i>City
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link href={route('admin.subscribers.index')}>
                                        <i className="bi bi-person-vcard" title="Subscribers"></i>
                                        <span>Subscribers</span>
                                    </Link>
                                </li>
                                <li className={`treeview ${openDropdown === 'website' ? 'active' : ''}`}>
                                    <a href="#" onClick={() => handleToggle('website')}>
                                        <i className="bi bi-globe-americas" title="Website Manage"></i>
                                        <span>Website</span>
                                        <span className="pull-right-container">
                                            <i className={`fa ${openDropdown === 'website' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                        </span>
                                    </a>
                                    {openDropdown === 'website' && (
                                        <ul className="treeview-menu">
                                            <li>
                                                <Link href={route('admin.banners.index')}>
                                                    <i className="icon-Commit"></i>Banners
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.navigation-menu.index')}>
                                                    <i className="icon-Commit"></i>Navigation Menu
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.testimonial.index')}>
                                                    <i className="icon-Commit"></i>Testimonials
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.content-page.index')}>
                                                    <i className="icon-Commit"></i>Content Page
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`treeview ${openDropdown === 'leads' ? 'active' : ''}`}>
                                    <a href="#" onClick={() => handleToggle('leads')}>
                                        <i className="bi bi-at" title="Leads"></i>
                                        <span>Leads</span>
                                        <span className="pull-right-container">
                                            <i className={`fa ${openDropdown === 'leads' ? 'fa-angle-down' : 'fa-angle-right'} pull-right`}></i>
                                        </span>
                                    </a>
                                    {openDropdown === 'leads' && (
                                        <ul className="treeview-menu">
                                            <li>
                                                <Link href={route('admin.contact_index')}>
                                                    <i className="icon-Commit"></i>Contact Message
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.propery_leads_index')}>
                                                    <i className="icon-Commit"></i>Property Leads
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="treeview">
                                    <Link href={route('admin.support-tickets.index')}>
                                        <i className="bi bi-ticket-perforated" title="Support Tickets"></i>
                                        <span>Support Tickets</span>
                                    </Link>
                                </li>
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
                                            <li>
                                                <Link href={route('admin.company-settings.index')}>
                                                    <i className="icon-Commit"></i>Company Settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.app-settings.index')}>
                                                    <i className="icon-Commit"></i>App Settings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.role-permissions')}>
                                                    <i className="icon-Commit"></i>Role & Permissions
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </>
    );
}
