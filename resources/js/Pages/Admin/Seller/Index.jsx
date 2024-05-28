import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';

import { Dropdown } from '@mui/joy';

export default function Index({ vendorsList, auth, success = null, error = null }) {
     
    const deleteVendor = (vendor) => {
        if (!window.confirm("Are you sure you want to delete the Vendor?")) {
          return;
        }
        
      
        router.delete(route("admin.sellers.destroy", vendor.id))
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Sellers List</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Sellers List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Sellers List</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link className='btn btn-danger btn-sm text-end' href={route('admin.sellers.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Designation</th>
                                                        <th>Position</th>
                                                        <th>Status</th>
                                                        <th>Last Modified</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {vendorsList.data.map((vendor) => (
                                                
                                                    <tr key={vendor.id} className="hover-primary">
                                                        <td>{vendor.id}</td>
                                                        
                                                        <td>
                                                        <img
                                                            src={vendor.image}
                                                            className='w-100 rounded-5 '
                                                            alt={`${vendor.image} icon`}
                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                        />
                                                        </td>
                                                        <td>{vendor.name}</td>
                                                        <td>{vendor.designation}</td>
                                                        <td>{vendor.position}</td>
                                                        <td>{vendor.status}</td>
                                                        <td>{vendor.updated_at}</td>
                                                        <td>
                                                            <Link className='btn btn-transparent' href={route('admin.sellers.edit', vendor.id)}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                            <button onClick={(e) => deleteVendor(vendor)} className="btn btn-transparent border-0">
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