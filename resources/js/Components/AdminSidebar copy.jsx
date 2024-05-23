import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';

export default function AdminSidebar() {

    return (
        <>
            <aside className="main-sidebar">
                {/* <!-- sidebar--> */}
                <section className="sidebar position-relative">
                    <div className="multinav">
                        <div className="multinav-scroll h-100" >
                            {/* <!-- sidebar menu--> */}
                            <ul className="sidebar-menu" data-widget="tree">
                                <li className="">
                                    <Link href={route('admin.index')} title="Dashboard">
                                        <i className="bi bi-house"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="treeview">
                                    <Link href="#">
                                        <i className="bi bi-person-check" title="Seller"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span></i>
                                        <span>Seller</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu"> 
                                        <li><Link href={route('admin.sellers')} ><i className="icon-Commit"><span className="path1"></span><span
                                            className="path2"></span></i>Seller List</Link></li>
                                        <li><Link href="{{ route('seller-approvel') }}"><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span>
                                        </i> Approvel Pending</Link></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link href="#">
                                        <i className="bi bi-files-alt" title="Collections"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span><span
                                                className="path5"></span></i>
                                        <span>Collections</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link href={route('admin.category.index')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>Category</Link>
                                        </li>
                                        <li><Link href={route('admin.features.index')}><i className="icon-Commit"><span className="path1"></span><span
                                            className="path2"></span></i>Features</Link></li>
                                        <li><Link href={route('admin.facilities.index')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>Facilities</Link>
                                        </li>
                                        <li><Link href={route('admin.feature-label.index')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>Feature Label</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link href="#">
                                        <i className="bi bi-geo-alt" title="Locations"><span className="path1"></span><span className="path2"></span></i>
                                        <span>Locations</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link href={route('admin.country.index')}><i className="icon-Commit"><span className="path1"></span><span
                                            className="path2"></span></i>Country</Link></li>
                                        <li><Link href={route('admin.province.index')}><i className="icon-Commit"><span className="path1"></span><span
                                            className="path2"></span></i>Province</Link></li>
                                        <li><Link href={route('admin.city.index') }><i className="icon-Commit"><span className="path1"></span><span
                                            className="path2"></span></i>City</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={route('admin.subscribers')}>
                                        <i className="bi bi-person-vcard" title="Subscribers"><span className="path1"></span><span
                                            className="path2"></span></i>
                                        <span>Subscribers</span>
                                    </Link>
                                </li>
                                <li className="treeview">
                                    <Link href="#">
                                        <i className="bi bi-globe-americas" title="Website Manage"><span className="path1"></span><span className="path2"></span></i>
                                        <span>Website</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link href={route('admin.banners')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            Banners
                                        </Link>
                                        </li>
                                        <li><Link href={route('admin.navigation-menu')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            Navigation Menu
                                        </Link>
                                        </li>
                                        <li><Link href={route('admin.testimonials')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            Testimonials
                                        </Link>
                                        </li>
                                        <li><Link href={route('admin.content-page')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            Content Page
                                        </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link href="#">
                                        <i className="bi bi-at" title="Leads"><span className="path1"></span><span className="path2"></span></i>
                                        <span>Leads</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link href={route('admin.contact-messages')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>Contact Message</Link>
                                        </li>
                                        <li><Link href={route('admin.property-leads')}><i className="icon-Commit"><span
                                            className="path1"></span><span
                                                className="path2"></span></i>Property Leads</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <Link href={route('admin.support-tickets')}>
                                        <i className="bi bi-ticket-perforated" title="Support Tickets"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                                className="path4"></span></i>
                                        <span>Support Tickets</span>

                                    </Link>
                                </li>

                                <li className="treeview">
                                    <Link href="#">
                                        <i className="bi bi-gear" title="Settings"><span className="path1"></span><span className="path2"></span></i>
                                        <span>Settings</span>
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link href={route('admin.company-settings')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            Company Settings
                                        </Link></li>
                                        <li><Link href={route('admin.app-settings')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            App Settings
                                        </Link>
                                        </li>
                                        <li><Link href={route('admin.role-permissions')}><i className="icon-Commit"><span
                                            className="path1"></span><span className="path2"></span></i>
                                            Role & Permissions
                                        </Link></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </section >
            </aside >

        </>

    )
}