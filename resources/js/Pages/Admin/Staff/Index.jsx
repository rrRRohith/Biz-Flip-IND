import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';

export default function Index({ auth, staffs }) {

    const deleteStaff = function (staff) {
        if (!window.confirm("Are you sure you want to delete the staff?")) {
            return;
        }
        router.delete(route("admin.staff.destroy", staff))
    }

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
                                        <Link className='btn btn-danger btn-sm text-end' href={route('admin.staff.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                                    <thead >
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
                                                                            <Link href={route('admin.staff.edit', staff.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-pen"></i></Link>
                                                                            <button onClick={(e) => deleteStaff(staff.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </>
                                                        ) : (<>
                                                            <tr>
                                                                <td className="text-center" colSpan="100">
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
                        </section>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
