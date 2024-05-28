import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import {Link} from '@inertiajs/react';

export default function Properties() {
    return (
        <>
            <Head title="Properties" />
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
                                                <input type="search" placeholder='Search by name, location etc' className='form-control' />
                                            </div>
                                            <div className="ms-auto">
                                                <Link class="btn btn-primary" href="/seller/properties/create"><i className="bi bi-plus text-md"></i> New property</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Property</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Date listed</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col"/>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Lakeview Haven
                                                        <div>
                                                            <Link className='small'>View Lakeview Haven</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Toronto, Ontario
                                                    </td>
                                                    <td>
                                                        $ 2,10,000
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
                                                        <div className="btn btn-sm p-2 py-1 btn-success small">Active</div>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-square btn-neutral me-2"><i className="bi bi-pen"></i></button>
                                                        <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Riverband Haven
                                                        <div>
                                                            <Link className='small'>View Riverband Haven</Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Toronto, Ontario
                                                    </td>
                                                    <td>
                                                        $ 2,20,000
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
                                                        <div className="btn btn-sm p-2 py-1 btn-danger small">Inactive</div>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-square btn-neutral me-2"><i className="bi bi-pen"></i></button>
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
