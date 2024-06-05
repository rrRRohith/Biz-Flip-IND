import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Link } from '@inertiajs/react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
export default function Index({ auth, tickets }) {
    return (
        <>
            <Head title="Support tickets" />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Support tickets</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by subject' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary text-overflow" href={route('seller.tickets.create')}><i className="bi bi-plus text-md"></i> 
                                                <span className="d-none d-md-inline">Open ticket</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
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
                                                {tickets.data.length ? (
                                                    <>
                                                        {tickets.data.map((ticket) => (
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
                                                        <td className="text-center" colspan="100">
                                                            No records found..
                                                        </td>
                                                    </tr>
                                                </>)}
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
