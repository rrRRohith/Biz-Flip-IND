import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Index({ purposeList, auth, success = null, error = null }) {
     
    const deletePupose = (purpose) => {
      
        Swal.fire({
            title: 'Are you sure you want to delete this Ad Purpose?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.ad_purposes.destroy", purpose.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Ad Purpose has been deleted.', 'success');
                    },
                });
            }
        });
      
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Purpose</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Ad Purpose List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Ad purposes</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                <PermissionAllow permission={'Ad Purpose Create'}>
                                <Link className='btn btn-info text-end' href={route('admin.ad_purposes.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                    <PermissionAllow permission={'Ad Purpose Listing'} message={true}>
                                        <div className="table-responsive rounded card-table">
                                            <Table className="table border-no" id="example1">
                                                <Thead>
                                                    <Tr>
                                                        <Th>#</Th>
                                                        <Th>Name</Th>
                                                        <Th>Position</Th>
                                                        <Th>Status</Th>
                                                        {/* <Th>Last Modified</Th> */}
                                                        <Th></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>

                                                {purposeList.data.map((purpose) => (
                                                    <Tr key={purpose.id} className="hover-primary">
                                                        <Td>{purpose.id}</Td>
                                                        <Td>
                                                            <i className={`${purpose.icon} bi  w-40 rounded-5`}></i>
                                                            <span className='ms-3'>{purpose.title}</span>
                                                        </Td>
                                                        <Td>{purpose.position}</Td>
                                                        <Td>{purpose.status}</Td>
                                                        {/* <Td>{window.formatDateTime(purpose.updated_at)}</Td> */}
                                                        <Td>
                                                            <PermissionAllow permission={'Ad Purpose Edit'}>
                                                                <Link className='btn btn-transparent' href={route('admin.ad_purposes.edit', purpose.id)}>
                                                                    <i className="bi bi-pencil"></i>
                                                                </Link>
                                                            </PermissionAllow>
                                                            <PermissionAllow permission={'Ad Purpose Delete'}>
                                                                <button onClick={(e) => deletePupose(purpose)} className="btn btn-transparent border-0">
                                                                    <i className="bi bi-trash"></i>
                                                                </button>
                                                            </PermissionAllow>
                                                        </Td>
                                                    </Tr>
                                                ))}

                                                </Tbody>
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