import { Link } from "@inertiajs/react";
import PermissionAllow from "@/Components/PermissionAllow";

export default function TopMenu({ user }) {
    const urlMatches = (currentUrl, pattern) => {
        const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
        return regex.test(currentUrl);
    };
    const path = window.location.pathname;
    return (

        <>
            <div className="mt-20 bg-lighter py-0 pb-0">
                <div className="container px-3 position-relative">
                    <nav class="navbar seller-top-navbar navbar-expand-lg p-0 top-menu position-relative">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                                <Link className={`dropdown-item  ${urlMatches(path, '/account') ? 'active-link' : ''}`} href='/account'><i class="bi bi-speedometer me-3"></i> Dashboard</Link>
                                
                                <PermissionAllow permission="Ads Listing">
                                    <Link className={`dropdown-item  ${urlMatches(path, '/account/ads*') ? 'active-link' : ''}`} href="/account/ads">
                                        <i className="bi bi-house me-3"></i>Ads </Link>
                                </PermissionAllow>
                                <PermissionAllow permission="Ads Leads Listing">
                                    <Link className={`dropdown-item  ${urlMatches(path, '/account/leads*') ? 'active-link' : ''}`} href="/account/leads">
                                        <i className="bi bi-house-check me-3"></i>Leads </Link>
                                </PermissionAllow>
                                <PermissionAllow permission="Messages">
                                    <Link className={`dropdown-item  ${urlMatches(path, '/account/chats*') ? 'active-link' : ''}`} href="/account/chats">
                                        <i className="bi bi-chat-left-dots me-3"></i>Messages</Link>
                                </PermissionAllow>
                                
                                {user.is_agent && (
                                    <>
                                        <PermissionAllow permission="Staff Listing">
                                            <Link className={`dropdown-item  ${urlMatches(path, '/account/staffs*') ? 'active-link' : ''}`} href="/account/staffs">
                                                <i className="bi bi-people me-3"></i>Staffs </Link>
                                        </PermissionAllow>
                                        <PermissionAllow permission="Settings">
                                            <Link className={`dropdown-item  ${urlMatches(path, '/account/settings*') ? 'active-link' : ''}`} href="/account/settings">
                                                <i className="bi bi-gear me-3" />Company Settings </Link>
                                        </PermissionAllow>
                                    </>
                                )}
                                <PermissionAllow permission="Invoice List">
                                    <Link className={`dropdown-item  ${urlMatches(path, '/account/invoices*') || urlMatches(path, '/account/plans*') ? 'active-link' : ''}`} href="/account/invoices">
                                        <i class="bi bi-receipt me-3"></i>Billing </Link>
                                </PermissionAllow>
                                <PermissionAllow permission="Support Ticket Listing">
                                    <Link className={`dropdown-item  ${urlMatches(path, '/account/tickets*') ? 'active-link' : ''}`} href="/account/tickets">
                                        <i className="bi bi-headset me-3"></i>Support </Link>
                                </PermissionAllow>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}