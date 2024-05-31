import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
export default function Index({ auth, roles }) {
    const deleteRole = function (role) {
        if (!window.confirm("Are you sure you want to delete the role?")) {
            return;
        }


        router.delete(route("seller.roles.destroy", role))
    }
    return (
        <>
            <Head title="Staff roles" />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Staff roles</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name' className='form-control' />
                                            </div>
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary" href={route('seller.roles.create')}><i className="bi bi-plus text-md"></i> New role</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Permissions</th>
                                                    <th scope="col">Last updated</th>
                                                    <th scope="col" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roles.data.length ? (
                                                    <>
                                                        {roles.data.map((role) => (
                                                            <>
                                                                <tr>
                                                                    <td>
                                                                        #{role.id}
                                                                    </td>
                                                                    <td>
                                                                        {role.name}
                                                                    </td>

                                                                    <td>
                                                                        <Link class="text-decoration-none">{role.total_permissions} permissions</Link>
                                                                    </td>

                                                                    <td>
                                                                        {role.updated_text}
                                                                    </td>
                                                                    <td>
                                                                        <Link href={route('seller.roles.edit', role.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-pen"></i></Link>
                                                                        <button onClick={(e) => deleteRole(role.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                                    </td>
                                                                </tr>
                                                            </>
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
