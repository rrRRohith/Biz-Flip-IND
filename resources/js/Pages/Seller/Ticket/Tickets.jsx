import { Link } from '@inertiajs/react';

export default ({ticketData}) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-nowrap">
                <thead className="table-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Date created</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Status</th>
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {ticketData.length ? (
                        <>
                            {ticketData.map((ticket) => (
                                <>
                                    <tr>
                                        <td>
                                            #{ticket.id}
                                        </td>
                                        <td>
                                            {ticket.subject}
                                        </td>

                                        <td>
                                            {ticket.date_text}
                                        </td>
                                        <td>
                                            <div className={`btn btn-sm p-2 py-1 text-white small text-capitalize status-${ticket.priority}`}>
                                                {ticket.priority}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={`btn btn-sm p-2 py-1 text-white small text-capitalize status-${ticket.status}`}>
                                                {ticket.status}
                                            </div>
                                        </td>
                                        <td>
                                            <Link href={route('seller.tickets.show', ticket.id)} className="btn btn-sm btn-square btn-neutral"><i className="bi bi-eye"></i></Link>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </>
                    ) : (<>
                        <tr>
                            <td className="text-center" colSpan="100">
                                No records found..
                            </td>
                        </tr>
                    </>)}
                </tbody>
            </table>
        </div>
    );
}