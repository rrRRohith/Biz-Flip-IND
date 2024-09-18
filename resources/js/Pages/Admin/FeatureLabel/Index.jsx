import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export default function Index({ labelList, auth, success = null, error = null }) {
     
    const deleteLabel = (label) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Feature label?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.feature-label.destroy", label.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Feature label has been deleted.', 'success');
                    },
                });
            }
        });
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
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>#</Th>
                                                            <Th>Name</Th>
                                                            <Th>Color</Th>
                                                            <Th>Priority</Th>
                                                            <Th>Status</Th>
                                                            <Th>Last Modified</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {labelList.data.map((label) => (
                                                            <Tr key={label.id} className="hover-primary">
                                                                <Td>{label.id}</Td>
                                                                <Td>{label.name}</Td>
                                                                <Td><div style={{ backgroundColor: label.color,width:"20px",height:"20px" }}></div></Td>
                                                                <Td>{label.priority}</Td>
                                                                <Td>{label.status}</Td>
                                                                <Td>{window.formatDateTime(label.updated_at)}</Td>
                                                                <Td>
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
                                                                </Td>
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
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