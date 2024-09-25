import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>		
                                                            <Th>#</Th>
                                                            <Th>User</Th>
                                                            <Th>Subject</Th>
                                                            <Th>Priority</Th>
                                                            <Th>Status</Th>
                                                            <Th>Created Date</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <tbody>

                                                        {tickets.data.map((ticket) => (
                                                            <React.Fragment key={ticket.id}>
                                                                <Tr key={ticket.id} className="hover-primary">
                                                                    <Td>{ticket.id}</Td>
                                                                    <Td className='text-capitalize'>{ticket.user.firstname} {ticket.user.lastname}</Td>
                                                                    <Td className='text-capitalize'>{ticket.subject}</Td>
                                                                    <Td className='text-capitalize'>{ticket.priority}</Td>
                                                                    <Td className='text-capitalize'>
                                                                        <span className= {`badge  ${ticket.status == 'open' ? 'bg-info' : 'bg-success'}`}>
                                                                            {ticket.status}
                                                                        </span>
                                                                    </Td>
                                                                    <Td>{ticket.date_text}</Td>
                                                                    <Td>
                                                                        <PermissionAllow permission={'Support Ticket Edit'}>
                                                                             <Link className='btn btn-transparent' href={route('admin.support-tickets.show', ticket.id)}>
                                                                                <i className="bi bi-eye"></i>
                                                                            </Link>
                                                                        </PermissionAllow>
                                                                    </Td>
                                                                </Tr>
                                                            </React.Fragment>
                                                        ))}

                                                    </tbody>
                                                </Table>
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