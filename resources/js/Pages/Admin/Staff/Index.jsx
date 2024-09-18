import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Swal from 'sweetalert2';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import axios from 'axios';
import ViewStaff from '@/Pages/Admin/Staff/ViewStaff';

export default function Index({ auth, staffs }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const deleteStaff = function (staff) {

        Swal.fire({
            title: 'Are you sure you want to delete this staff?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.staff.destroy", staff), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'staff has been deleted.', 'success');
                    },
                });
            }
        });
    }

    const handleClose = () => setShow(false);
    const handleShow = async (staff) => {
        try {
            const response = await axios.get(route("admin.staff.show", staff.id));
            const responseData = response.data;
            setData(responseData);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };


    return (
        <>
            <Authenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Staff List</h2>}
            >
                <Head title="Staff List" />

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div className="content-wrapper me-4">
                    <div className="container-full">
                        {/* <!-- Content Header (Page header) --> */}
                        <div className="content-header">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="d-flex align-items-center">
                                        <div className="me-auto">
                                            <h4 className="page-title">Staff List</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="text-end">
                                        <PermissionAllow permission={'Staff Create'}>
                                            <Link className='btn btn-info text-end' href={route('admin.staff.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                            <PermissionAllow permission={'Staff Listing'} message="true">
                                                <div className="table-responsive rounded card-table">
                                                    <Table className="table border-no" id="example1">
                                                        <Thead >
                                                            <Tr>
                                                                <Th scope="col">#</Th>
                                                                <Th scope="col">Name</Th>
                                                                <Th scope="col">Email</Th>
                                                                <Th scope="col">Phone</Th>
                                                                <Th scope="col">Role</Th>
                                                                <Th scope="col" >Last Modified</Th>
                                                                <Th scope="col" ></Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            {staffs.data.length ? (
                                                                <>
                                                                    {staffs.data.map((staff) => (
                                                                        <Tr key={staff.id}>
                                                                            <Td>
                                                                                #{staff.id}
                                                                            </Td>
                                                                            <Td>
                                                                                {staff.name}
                                                                            </Td>
                                                                            <Td>
                                                                                {staff.email}
                                                                            </Td>
                                                                            <Td>
                                                                                {staff.phone}
                                                                            </Td>
                                                                            <Td>
                                                                                {staff.role_names}
                                                                            </Td>
                                                                            <Td>
                                                                                {staff.date_text}
                                                                            </Td>
                                                                            <Td>
                                                                                <PermissionAllow permission={'Seller Show'}>
                                                                                    <span onClick={() => handleShow(staff)} className="btn btn-transparent">
                                                                                        <i className="bi bi-eye"></i>
                                                                                    </span>
                                                                                </PermissionAllow>
                                                                                <PermissionAllow permission={'Staff Edit'}>
                                                                                    <Link href={route('admin.staff.edit', staff.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-pen"></i></Link>
                                                                                </PermissionAllow>
                                                                                <PermissionAllow permission={'Staff Delete'}>
                                                                                    <button onClick={(e) => deleteStaff(staff.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                                                </PermissionAllow>
                                                                            </Td>
                                                                        </Tr>
                                                                    ))}
                                                                </>
                                                            ) : (<>
                                                                <Tr>
                                                                    <Td className="text-center" colSpan="100">
                                                                        No records found..
                                                                    </Td>
                                                                </Tr>
                                                            </>)}
                                                        </Tbody>
                                                    </Table>
                                                </div>
                                            </PermissionAllow>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Authenticated>

            <ModalPopup show={show} handleClose={handleClose} size="md" title="Staff User Details">
                {data ? (
                    <ViewStaff
                        collection={data}
                        handleClose={handleClose}
                    />
                ) : (
                    'Failed fetching data...'
                )}
            </ModalPopup>
        </>
    );
}
