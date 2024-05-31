import { Link } from "@inertiajs/react";

export default function () {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Property</th>
                            <th scope="col">Date</th>
                            <th scope="col">Message</th>
                            <th scope="col">Contact details</th>
                            <th scope="col">Status</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    Jane doe
                                </div>
                                <div className="small text-muted">
                                    Toronto
                                </div>
                            </td>
                            <td>
                                <div>
                                    Lakeview Haven
                                </div>
                                <div className="small text-muted">
                                    Lake Tahoe
                                </div>
                            </td>
                            <td>
                                <div>
                                    June 10th 2024
                                </div>
                                <div className="small text-muted">
                                    01:30 pm
                                </div>
                            </td>
                            <td>
                                <div role='button' className="text-primary text-decoration-underline">Read message</div>
                            </td>
                            <td>
                                <div>
                                    jane@example.com
                                </div>
                                <div className="small text-muted">
                                    +1 932 981 8715
                                </div>
                            </td>
                            <td>
                                <div className="btn btn-sm p-2 py-1 btn-primary small">Contacted</div>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    John doe
                                </div>
                                <div className="small text-muted">
                                    Toronto
                                </div>
                            </td>
                            <td>
                                <div>
                                    Lakeview Haven
                                </div>
                                <div className="small text-muted">
                                    Lake Tahoe
                                </div>
                            </td>
                            <td>
                                <div>
                                    June 6th 2024
                                </div>
                                <div className="small text-muted">
                                    04:30 pm
                                </div>
                            </td>
                            <td>
                                <div role='button' className="text-primary text-decoration-underline">Read message</div>
                            </td>
                            <td>
                                <div>
                                    john@example.com
                                </div>
                                <div className="small text-muted">
                                    +1 908 987 8765
                                </div>
                            </td>
                            <td>
                                <div className="btn btn-sm p-2 py-1 btn-success small">New</div>
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}