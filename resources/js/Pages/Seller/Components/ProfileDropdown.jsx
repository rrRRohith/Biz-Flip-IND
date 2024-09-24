import PermissionAllow from "@/Components/PermissionAllow";
import { Link } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';

export default function ProfileDropdown({ user }) {

    const handleClick = () => {
        Inertia.post(route('logout'));
    }

    return (
        <div className="">
            <div className="dropdown-header">
                <span className="d-block text-sm text-muted mb-1">Signed in as</span>
                <span className="d-block text-heading font-semibold">{user.firstname} {user.lastname}</span>
                <div class="text-muted">{user.email}</div>
            </div>
            <div className="dropdown-divider"></div>
            {user.type == 'customer' ? (
                <>
                    <Link className="dropdown-item" href="customer/profile">
                        <i className="bi bi-pencil me-3" />Profile </Link>
                    <Link className="dropdown-item" href="/customer/password">
                        <i class="bi bi-shield-lock me-3"></i>Security </Link>
                </>
            ) : (
                <>
                    <Link className="dropdown-item" href="/account">
                        <i class="bi bi-speedometer me-3"></i>Dashboard </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" href="/account/profile">
                        <i className="bi bi-pencil me-3" />Profile </Link>
                    <Link className="dropdown-item" href="/account/password">
                        <i class="bi bi-shield-lock me-3"></i>Security </Link>
                    <PermissionAllow permission="Invoice List">
                        <Link className="dropdown-item" href="/account/invoices">
                            <i class="bi bi-receipt me-3"></i>Billing </Link>
                    </PermissionAllow>
                    {/* <div className="dropdown-divider" />
                    <Link className="dropdown-item" href="/account">
                        <i class="bi bi-speedometer me-3"></i>Dashboard </Link>
                    <PermissionAllow permission="Ads Listing">
                        <Link className="dropdown-item" href="/account/ads">
                            <i className="bi bi-house me-3"></i>Ads </Link>
                    </PermissionAllow>
                    <PermissionAllow permission="Ads Leads Listing">
                        <Link className="dropdown-item" href="/account/leads">
                            <i className="bi bi-house-check me-3"></i>Leads </Link>
                    </PermissionAllow>
                    <PermissionAllow permission="Messages">
                        <Link className="dropdown-item" href="/account/chats">
                            <i className="bi bi-chat-left-dots me-3"></i>Messages</Link>
                    </PermissionAllow> */}
                    {/* <PermissionAllow permission="Plan Purchase">
                        <Link className="dropdown-item" href="/account/plans">
                            <i class="bi bi-currency-dollar me-3"></i>Plans </Link>
                    </PermissionAllow> */}
                    {/* <PermissionAllow permission="Invoice List">
                        <Link className="dropdown-item" href="/account/invoices">
                            <i class="bi bi-receipt me-3"></i>Accounts </Link>
                    </PermissionAllow>
                    <PermissionAllow permission="Support Ticket Listing">
                        <Link className="dropdown-item" href="/account/tickets">
                            <i className="bi bi-headset me-3"></i>Support tickets </Link>
                    </PermissionAllow> */}
                    {user.is_agent && (
                        <>
                            {/* <PermissionAllow permission="Staff Listing">
                                <Link className="dropdown-item" href="/account/staffs">
                                    <i className="bi bi-people me-3"></i>Staffs </Link>
                            </PermissionAllow> */}
                            {/* <PermissionAllow permission="Role and Responsibilities Listing">
                                <Link className="dropdown-item" href="/account/staffs/roles">
                                    <i class="bi bi-person-gear me-3"></i>Staff roles </Link>
                            </PermissionAllow> */}
                            {/* <PermissionAllow permission="Settings">
                                <Link className="dropdown-item" href="/account/settings">
                                    <i className="bi bi-gear me-3" />Settings </Link>
                            </PermissionAllow> */}
                        </>
                    )}
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" onClick={handleClick}>
                        <i className="bi bi-box-arrow-left me-3" />Logout </Link>
                </>
            )}

        </div>
    );
}