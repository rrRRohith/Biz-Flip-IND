import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';

import { Dropdown } from '@mui/joy';

export default function Index({ featuresList, auth, success = null, error = null }) {

    const deleteFeature = (feature) => {
        if (!window.confirm("Are you sure you want to delete the feature?")) {
            return;
        }


        router.delete(route("admin.features.destroy", feature.id))
    }



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Features</h2>}
            success={success}
            error={error}
        >
            <Head title="feature List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Features</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Feature Create'}>
                                        <Link className='btn btn-danger btn-sm text-end' href={route('admin.features.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <PermissionAllow permission={'Features Listing'} message={true}>
                                            <div className="table-responsive rounded card-table">
                                                <table className="table border-no" id="example1">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Icon</th>
                                                            <th>Name</th>
                                                            <th>Position</th>
                                                            <th>Status</th>
                                                            <th>Last Modified</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {featuresList.data.map((feature) => (

                                                            <tr key={feature.id} className="hover-primary">
                                                                <td>{feature.id}</td>

                                                                <td>
                                                                    <img
                                                                        src={feature.icon}
                                                                        className='w-100 rounded-5 '
                                                                        alt={`${feature.icon} icon`}
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                    />
                                                                </td>
                                                                <td>{feature.name}</td>
                                                                <td>{feature.position}</td>
                                                                <td>{feature.status}</td>
                                                                <td>{feature.updated_at}</td>
                                                                <td>
                                                                    <PermissionAllow permission={'Feature Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.features.edit', feature.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Feature Delete'}>
                                                                        <button onClick={(e) => deleteFeature(feature)} className="btn btn-transparent border-0">
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