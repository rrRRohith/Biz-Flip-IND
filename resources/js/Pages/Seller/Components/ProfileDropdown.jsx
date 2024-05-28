import { Link } from "@inertiajs/react";
export default function ProfileDropdown() {
    return (
        <div>
            <div className="dropdown-header">
                <span className="d-block text-sm text-muted mb-1">Signed in as</span>
                <span className="d-block text-heading font-semibold">Tahlia Mooney</span>
            </div>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" href="/seller/profile">
                <i className="bi bi-pencil me-3" />Profile </Link>
            <Link className="dropdown-item" href="/seller/settings">
                <i className="bi bi-gear me-3" />Settings </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" href="#">
                <i className="bi bi-box-arrow-left me-3" />Logout </Link>
        </div>
    );
}