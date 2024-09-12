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
            </div>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" href="/seller/profile">
                <i className="bi bi-pencil me-3" />Profile </Link>
            <Link className="dropdown-item" href="/seller/password">
                <i class="bi bi-shield-lock me-3"></i>Security </Link>
            <PermissionAllow permission="Plan Purchase">
                <Link className="dropdown-item" href="/seller/plans">
                    <i class="bi bi-currency-dollar me-3"></i>Plans </Link>
            </PermissionAllow>
            <PermissionAllow permission="Invoice List">
                <Link className="dropdown-item" href="/seller/invoices">
                    <i class="bi bi-receipt me-3"></i>Invoices </Link>

            </PermissionAllow>
            <PermissionAllow permission="Settings">
                <Link className="dropdown-item" href="/seller/settings">
                    <i className="bi bi-gear me-3" />Settings </Link>
            </PermissionAllow>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" onClick={handleClick}>
                <i className="bi bi-box-arrow-left me-3" />Logout </Link>
        </div>
    );
}