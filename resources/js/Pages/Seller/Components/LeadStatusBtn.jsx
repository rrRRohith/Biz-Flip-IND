export default function ({ lead, sold, attendLead }) {
    return (
        <div className="dropdown">
            {lead.status == 1 && (
                <div className="btn btn-sm p-2 py-1 btn-success small dropdown-toggle" data-bs-toggle="dropdown">Responded</div>
            )}
            {lead.status == 2 && (
                <div className="btn btn-sm p-2 py-1 btn-primary small">Sold</div>
            )}
            {lead.status == 0 && (
                <div className="btn btn-sm p-2 py-1 btn-warning small dropdown-toggle" data-bs-toggle="dropdown">Pending</div>
            )}
            {(lead.status == 0 || lead.status == 1) && (
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {lead.status == 1 && (
                        <li><a onClick={(e) => sold(lead)} className="dropdown-item" href="#">Sold</a></li>
                    )}
                    {lead.status == 0 && (
                        <li><a onClick={(e) => attendLead(lead)} className="dropdown-item" href="#">Responded</a></li>
                    )}
                </ul>
            )}
        </div>
    )
}