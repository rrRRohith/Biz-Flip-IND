import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';

import { Dropdown } from '@mui/joy';

export default function Index({ pageList, auth, success = null, error = null }) {
     
    const deletePage = (page) => {
        if (!window.confirm("Are you sure you want to delete the page?")) {
          return;
        }
        
      
        router.delete(route("admin.content-page.destroy", page.id))
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Content Page</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="page List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Content Page</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link className='btn btn-danger btn-sm text-end' href={route('admin.content-page.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                                        <th>Icon</th>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Status</th>
                                                        <th>Last Modified</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {pageList.data.map((page) => (
                                                
                                                    <tr key={page.id} className="hover-primary">
                                                        <td>{page.id}</td>
                                                        
                                                        <td>
                                                        <img
                                                            src={page.icon}
                                                            className='w-100 rounded-5 '
                                                            alt={`${page.icon} icon`}
                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                        />
                                                        </td>
                                                        <td>{page.name}</td>
                                                        <td>{page.position}</td>
                                                        <td>{page.status}</td>
                                                        <td>{page.updated_at}</td>
                                                        <td>
                                                            <Link className='btn btn-transparent' href={route('admin.content-page.edit', page.id)}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                            <button onClick={(e) => deletePage(page)} className="btn btn-transparent border-0">
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