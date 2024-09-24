import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import ViewRole from '@/Pages/Admin/Role/ViewRole';
import PermissionAllow from '@/Components/PermissionAllow';
import axios from 'axios';

export default function Index({ roleList, auth, success = null, error = null }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const deleteRole = (role) => {
        Swal.fire({
            title: 'Are you sure you want to delete this role?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.role-responsibilities.destroy", role.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'role has been deleted.', 'success');
                    },
                });
            }
        })
    }

    const handleClose = () => setShow(false);
    const handleShow = async (vendor) => {
        try {
            const response = await axios.get(route("admin.role-responsibilities.show", vendor.id));
            const responseData = response.data;
            setData(responseData);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Role & Responsibilities</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Role & Responsibilities" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Role & Responsibilities</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link className='btn btn-info text-end' href={route('admin.role-responsibilities.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                            <Table className="table border-no" id="example1">
                                                <Thead>
                                                    <Tr>
                                                        <Th>#</Th>
                                                        <Th>Name</Th>
                                                        <Th>No of Permissions</Th>
                                                        {/* <Th>Last Modified</Th> */}
                                                        <Th></Th> 
                                                    </Tr> 
                                                </Thead>
                                                <Tbody>
                                                    {roleList.data.map((role) => (
                                                        <Tr key={role.id} className="hover-primary">
                                                            <Td>{role.id}</Td>
                                                            <Td>{role.name}</Td>
                                                            <Td>{Object.keys(role.permissions).length}</Td>
                                                            {/* <Td>{window.formatDateTime(role.updated_at)}</Td> */}
                                                            <Td>
                                                                <span title='Show' onClick={() => handleShow(role)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
                                                                <Link title='Edit' className='btn btn-transparent' href={route('admin.role-responsibilities.edit', role.id)}>
                                                                    <i className="bi bi-pencil"></i>
                                                                </Link>
                                                                {(role.name !== 'admin' && role.name !== 'seller' && role.name !== 'customer') && (
                                                                    <button title='Delete' onClick={(e) => deleteRole(role)} className="btn btn-transparent border-0">
                                                                        <i className="bi bi-trash"></i>
                                                                    </button>
                                                                )}
                                                            </Td>
                                                        </Tr>
                                                    ))}
                                                </Tbody>
                                            </Table>
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
            <ModalPopup show={show} handleClose={handleClose} size="lg" title="Role Details">
                {data ? (
                    <ViewRole
                        collection={data}
                        handleClose={handleClose}
                    />
                ) : (
                    'Failed fetching data...'
                )}
            </ModalPopup>
        </Authenticated>

    )
}