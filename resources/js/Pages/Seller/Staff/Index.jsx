import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState } from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import Spinner from '@/Components/Spinner';
import PermissionAllow from '@/Components/PermissionAllow';
import Delete from '../Components/Delete';

export default function Index({ auth, staffs }) {

    const [loading, setLoading] = useState(false);

    const [staffData, setstaffData] = useState(staffs.data);

    const { data, setData } = useForm({
        q: "",
    });

    // useEffect(() => {
    //     searchResult();
    // }, [data]);

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("seller.staffs.search", data));
        setstaffData(response.data);
        setLoading(false);
    }

    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const deleteAction = function (id) {
        setShowDelete(false);
        router.delete(route("seller.staffs.destroy", id))
    }

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowDelete(true);
    }
    const handleClose = () => setShowDelete(false);

    return (
        <>
            {loading && <Spinner />}
            <Head title="Staffs" />
            <Wrapper user={auth.user}>
            <Delete showDelete={showDelete} handleClose={handleClose} deleteAction={deleteAction} deleteId={deleteId} setShowDelete={setShowDelete}></Delete>
                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Staffs</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name, email etc' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-2">
                                                <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral me-2"><i className="bi bi-search"></i></button>
                                            </div>
                                            <PermissionAllow permission="Staff Create">
                                                <div className="ms-auto">
                                                    <Link className="btn btn-primary text-overflow" href={route('seller.staffs.create')}><i className="bi bi-plus text-md"></i>
                                                        <span className="d-none d-md-inline">New staff</span>
                                                    </Link>
                                                </div>
                                            </PermissionAllow>
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
                                                {staffData.length ? (
                                                    <>
                                                        {staffData.map((staff) => (
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
                                                                    <PermissionAllow permission="Staff Edit">
                                                                        <Link href={route('seller.staffs.edit', staff.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-pen"></i></Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission="Staff Delete">
                                                                        <button onClick={(e) => confirmDelete(staff.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                                    </PermissionAllow>
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
                </main>
            </Wrapper>
        </>
    );
}
