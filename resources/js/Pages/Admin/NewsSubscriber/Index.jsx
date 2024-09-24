import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Swal from 'sweetalert2';
import PermissionAllow from '@/Components/PermissionAllow';

export default function Index({ subscribersList, auth, success = null, error = null }) {

    const deleteSubscriber = (subscriber) => {
        Swal.fire({
            title: 'Are you sure you want to delete this subscriber?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.subscribers.destroy", subscriber.id), {
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Subscriber</h2>}
            success={success}
            error={error}
        >
            <Head title="Subscribers List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Subscribers List</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Subscriber Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.subscribers.create')}><i className='bi bi-plus'></i> Create</Link>
                                    </PermissionAllow>
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
                                                            <th>Full Name</th>
                                                            <th>Email</th>
                                                            <th>Type of Needed</th>
                                                            <th>Status</th>
                                                            {/* <th>Last Modified</th> */}
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {subscribersList.data.map((subscriber) => (

                                                            <tr key={subscriber.id} className="hover-primary">
                                                                <td>{subscriber.id}</td>
                                                                <td>{subscriber.firstname} {subscriber.lastname}</td>

                                                                <td>{subscriber.email_id}</td>
                                                                <td>{subscriber.type_of_needed}</td>
                                                                <td>{subscriber.status_text}</td>
                                                                {/* <td>{subscriber.updated_at}</td> */}
                                                                <td>
                                                                    <PermissionAllow permission={'Subscriber Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.subscribers.edit', subscriber.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Subscriber Delete'}>
                                                                        <button onClick={(e) => deleteSubscriber(subscriber)} className="btn btn-transparent border-0">
                                                                            <i className="bi bi-trash"></i>
                                                                        </button>
                                                                    </PermissionAllow>
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