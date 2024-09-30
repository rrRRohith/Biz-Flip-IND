import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Swal from 'sweetalert2';
import PermissionAllow from '@/Components/PermissionAllow';

export default function Index({ customersList, auth}) {

    const deleteCustomer = (customer) => {
        Swal.fire({
            title: 'Are you sure you want to delete this customer?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.customers.destroy", customer.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Subscriber has been deleted.', 'success');
                    },
                });
            }
        });
    }



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customers</h2>}
        >
            <Head title="Customers List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Customers List</h4>
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
                                        <PermissionAllow permission={'Subscribers Listing'} message="true">
                                            <div className="table-responsive rounded card-table">
                                                <table className="table border-no" id="example1">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Full Name </th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            {/* <th>Last Modified</th> */}
                                                            <th>     </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {customersList.data.map((customer,index) => (

                                                            <tr key={index} className="hover-primary">
                                                                <td>{index+1}</td>
                                                                <td>
                                                                <img
                                                                    src={customer.picture}
                                                                    className='w-30 h-30 me-3 rounded-circle'
                                                                    alt={`${customer.picture} icon`}
                                                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                />
                                                                    {customer.firstname} {customer.lastname}</td>

                                                                <td>{customer.email}</td>
                                                                <td>{customer.phone}</td>
                                                                {/* <td>{customer.updated_at}</td> */}
                                                                <td className="text-end">
                                                                    {/* <PermissionAllow permission={'Subscriber Edit'}>
                                                                        <Link className='btn btn-transparent p-2 px-3' href={route('admin.customers.edit', customer.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Subscriber Delete'}>
                                                                        <button onClick={(e) => deleteCustomer(customer)} className="btn btn-transparent p-2 px-3 border-0">
                                                                            <i className="bi bi-trash"></i>
                                                                        </button>
                                                                    </PermissionAllow> */}
                                                                </td>
                                                            </tr>
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