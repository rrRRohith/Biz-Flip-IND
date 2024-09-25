import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Index({ typeList, auth, success = null, error = null }) {
     
    const deletePupose = (type) => {
      
        Swal.fire({
            title: 'Are you sure you want to delete this Ad Type?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.ad_types.destroy", type.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Ad Type has been deleted.', 'success');
                    },
                });
            }
        });
      
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Type</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Ad Type List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Ad types</h4>
                                        <div className="align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Facilities Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.ad_types.index')}>Ad Type</Link></li>
                                                </PermissionAllow>
                                            </ol>
                                        </nav>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                <PermissionAllow permission={'Ad Type Create'}>
                                <Link className='btn btn-info text-end' href={route('admin.ad_types.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                    <PermissionAllow permission={'Ad Type Listing'} message={true}>
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

                                                {typeList.data.map((type) => (
                                                    <Tr key={type.id} className="hover-primary">
                                                        <Td>{type.id}</Td>
                                                        <Td>
                                                            <i className={`${type.icon} bi  w-40 rounded-5`}></i>
                                                            <span className='ms-3'>{type.title}</span>
                                                        </Td>
                                                        <Td>{type.position}</Td>
                                                        <Td>
                                                        <div dangerouslySetInnerHTML={{ __html: window.statusIcon(type.status) }} />
                                                        </Td>
                                                        {/* <Td>{window.formatDateTime(type.updated_at)}</Td> */}
                                                        <Td>
                                                            <PermissionAllow permission={'Ad Type Edit'}>
                                                                <Link className='btn btn-transparent' href={route('admin.ad_types.edit', type.id)}>
                                                                    <i className="bi bi-pencil"></i>
                                                                </Link>
                                                            </PermissionAllow>
                                                            <PermissionAllow permission={'Ad Type Delete'}>
                                                                <button onClick={(e) => deletePupose(type)} className="btn btn-transparent border-0">
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