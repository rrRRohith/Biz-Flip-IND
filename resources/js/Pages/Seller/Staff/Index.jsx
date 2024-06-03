import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function Index({ auth, staffs }) {

    const deleteStaff = function (staff) {
        if (!window.confirm("Are you sure you want to delete the staff?")) {
            return;
        }
        router.delete(route("seller.staffs.destroy", staff))
    }

    return (
        <>
            <Head title="Staffs" />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Staffs</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name, email' className='form-control' />
                                            </div>
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary" href={route('seller.staffs.create')}><i className="bi bi-plus text-md"></i> New staff</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Last updated</th>
                                                    <th scope="col" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {staffs.data.length ? (
                                                    <>
                                                        {staffs.data.map((staff) => (
                                                            <tr key={staff.id}>
                                                                <td>
                                                                    #{staff.id}
                                                                </td>
                                                                <td>
                                                                    {staff.name}
                                                                </td>
                                                                <td>
                                                                    {staff.email}
                                                                </td>
                                                                <td>
                                                                    {staff.phone}
                                                                </td>
                                                                <td>
                                                                    {staff.role_names}
                                                                </td>
                                                                <td>
                                                                    {staff.date_text}
                                                                </td>
                                                                <td>
                                                                    <Link href={route('seller.staffs.edit', staff.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-pen"></i></Link>
                                                                    <button onClick={(e) => deleteStaff(staff.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </>
                                                ) : (<>
                                                    <tr>
                                                        <td className="text-center" colspan="100">
                                                            No records found..
                                                        </td>
                                                    </tr>
                                                </>)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
