import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';

export default function Leads() {
    return (
        <>
            <Head title="Profile" />
            <Wrapper>

                <main className="py-6 bg-surface-secondary">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Leads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name, phone etc' className='form-control' />
                                            </div>
                                            <div className="me-auto">
                                                <select className="form-control form-select" id="">
                                                    <option value="">All properties</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
