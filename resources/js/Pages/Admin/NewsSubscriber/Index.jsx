import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';

import { Dropdown } from '@mui/joy';

export default function Index({ subscribersList, auth, success = null, error = null }) {
     
    const deleteSubscriber = (subscriber) => {
        if (!window.confirm("Are you sure you want to delete the subscriber?")) {
          return;
        }
        
      
        router.delete(route("admin.subscribers.destroy", subscriber.id))
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Subscriber</h2>}
            success = {success}
            error   = {error}
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
                                    <Link className='btn btn-info text-end' href={route('admin.subscribers.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <div className="table-responsive rounded card-table">
                                            <table className="table border-no" id="example1">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Full Name</th>
                                                        <th>Email</th>
                                                        <th>Type of Needed</th>
                                                        <th>Status</th>
                                                        <th>Last Modified</th>
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
                                                        <td>{subscriber.status}</td>
                                                        <td>{subscriber.updated_at}</td>
                                                        <td>
                                                            <Link className='btn btn-transparent' href={route('admin.subscribers.edit', subscriber.id)}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                            <button onClick={(e) => deleteSubscriber(subscriber)} className="btn btn-transparent border-0">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}

                                                </tbody>
                                            </table>
                                        </div>
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