import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Pagination } from '@mui/material';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';

export default function Index({ countryList, auth, success = null, error = null }) {
    console.log(countryList)
    const deleteCountry = (country) => {
        Swal.fire({
            title: 'Are you sure you want to delete this country?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.country.destroy", country.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Country has been deleted.', 'success');
                    },
                });
            }
        });

    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Country</h2>}

        >
            <Head title="Country List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Country</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Country Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.country.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <PermissionAllow permission={'Countries Listing'} message="true">
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>#</Th>
                                                            <Th>Name</Th>
                                                            <Th>Code</Th>
                                                            <Th>Position</Th>
                                                            <Th>Status</Th>
                                                            <Th>Last Modified</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>

                                                        {countryList.data.map((country) => (

                                                            <tr key={country.id} className="hover-primary">
                                                                <td>{country.id}</td>
                                                                <td>
                                                                    <img
                                                                        src={country.image}
                                                                        className='w-40 rounded-5 '
                                                                        alt={`${country.image} icon`}
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                    />
                                                                    <span className='ms-3'>{country.name}</span>
                                                                </td>
                                                                <td>{country.code}</td>
                                                                <td>{country.position}</td>
                                                                <td>{country.status}</td>
                                                                <td>{country.updated_at}</td>
                                                                <td>
                                                                    <PermissionAllow permission={'Country Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.country.edit', country.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Country Delete'}>
                                                                        <button onClick={(e) => deleteCountry(country)} className="btn btn-transparent border-0">
                                                                            <i className="bi bi-trash"></i>
                                                                        </button>
                                                                    </PermissionAllow>
                                                                </td>
                                                            </tr>
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