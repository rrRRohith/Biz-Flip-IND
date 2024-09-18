import PermissionAllow from "@/Components/PermissionAllow";
import { Link } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';

export default function ProfileDropdown({user}) {
    
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