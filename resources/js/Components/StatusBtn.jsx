export default function ({ status }) {
    if (status == -1) {
        return (
            <div className="badge  p-2 py-1 bg-danger small">Suspended</div>
        );
    }
    else if (status == 0) {
        return (
            <div className="badge  p-2 py-1 bg-warning small">Pending</div>
        );
    } else if (status == 1) {
        return (
            <div className="badge  p-2 py-1 bg-success small">Active</div>
        );
    }
    else if (status == 2) {
        return (
            <div className="badge  p-2 py-1 bg-info small">Completed</div>
        );
    } 
    else {
        return (
            <div className="badge  p-2 py-1 bg-danger small">Inactive</div>
        );
    }
}