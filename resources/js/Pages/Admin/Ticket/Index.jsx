import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Dropdown } from '@mui/joy';

export default function Index({ tickets, auth, success = null, error = null }) {

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Support Tickets</h2>}
            success={success}
            error={error}
        >
            <Head title="Support Tickets List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Support Tickets</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                   
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Main content --> */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <PermissionAllow permission={'Support Ticket Listing'} message={'true'}>
                                            <div className="table-responsive rounded card-table">
                                                <table className="table border-no" id="example1">
                                                    <thead>
                                                        <tr>		
                                                            <th>#</th>
                                                            <th>Seller</th>
                                                            <th>Subject</th>
                                                            <th>Priority</th>
                                                            <th>Status</th>
                                                            <th>Created Date</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {tickets.data.map((ticket) => (
                                                            <React.Fragment key={ticket.id}>
                                                                <tr key={ticket.id} className="hover-primary">
                                                                    <td>{ticket.id}</td>
                                                                    <td className='text-capitalize'>{ticket.user.firstname} {ticket.user.lastname}</td>
                                                                    <td className='text-capitalize'>{ticket.subject}</td>
                                                                    <td className='text-capitalize'>{ticket.priority}</td>
                                                                    <td className='text-capitalize'>
                                                                        <span className= {`badge  ${ticket.status == 'open' ? 'bg-info' : 'bg-success'}`}>
                                                                            {ticket.status}
                                                                        </span>
                                                                    </td>
                                                                    <td>{ticket.date_text}</td>
                                                                    <td>
                                                                        <PermissionAllow permission={'Support Ticket Edit'}>
                                                                            <Link className='btn btn-transparent' href={route('admin.support-tickets.show', ticket.id)}>
                                                                                <i className="bi bi-eye"></i>
                                                                            </Link>
                                                                        </PermissionAllow>
                                                                    </td>
                                                                </tr>
                                                            </React.Fragment>
                                                        ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </PermissionAllow>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}

                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}
        </Authenticated>

    )
}