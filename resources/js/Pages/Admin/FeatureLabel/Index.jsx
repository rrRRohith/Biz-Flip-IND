import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';

import { Dropdown } from '@mui/joy';

export default function Index({ labelList, auth, success = null, error = null }) {
     
    const deleteLabel = (label) => {
        if (!window.confirm("Are you sure you want to delete the Feature label?")) {
          return;
        }
        
      
        router.delete(route("admin.feature-label.destroy", label.id))
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Feature Label</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Feature Label List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Feature Label</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Feature Label Create'}>
                                    <Link className='btn btn-info text-end' href={route('admin.feature-label.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <div className="table-responsive rounded card-table">
                                            <PermissionAllow permission={'Feature Label Listing'} message={true}>
                                            <table className="table border-no" id="example1">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Color</th>
                                                        <th>Priority</th>
                                                        <th>Status</th>
                                                        <th>Last Modified</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {labelList.data.map((label) => (
                                                
                                                    <tr key={label.id} className="hover-primary">
                                                        <td>{label.id}</td>
                                                        <td>{label.name}</td>
                                                        <td><div style={{ backgroundColor: label.color,width:"20px",height:"20px" }}></div></td>
                                                        <td>{label.priority}</td>
                                                        <td>{label.status}</td>
                                                        <td>{label.updated_at}</td>
                                                        <td>
                                                        <PermissionAllow permission={'Feature Label Edit'}>
                                                            <Link className='btn btn-transparent' href={route('admin.feature-label.edit', label.id)}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                        </PermissionAllow>
                                                            <PermissionAllow permission={'Feature Label Delete'}>
                                                            <button onClick={(e) => deleteLabel(label)} className="btn btn-transparent border-0">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                            </PermissionAllow>
                                                        </td>
                                                    </tr>
                                                ))}

                                                </tbody>
                                            </table>
                                            </PermissionAllow>
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