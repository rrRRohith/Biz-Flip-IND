import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Index({ facilityList, auth, success = null, error = null }) {
     
    const deleteFacility = (facility) => {
      
        Swal.fire({
            title: 'Are you sure you want to delete this Facility?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.facilities.destroy", facility.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Facility has been deleted.', 'success');
                    },
                });
            }
        });
      
      }

      

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Facility</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Facility List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Facilities</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                <PermissionAllow permission={'Facility Create'}>
                                <Link className='btn btn-info text-end' href={route('admin.facilities.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                    <PermissionAllow permission={'Facilities Listing'} message={true}>
                                        <div className="table-responsive rounded card-table">
                                            <Table className="table border-no" id="example1">
                                                <Thead>
                                                    <Tr>
                                                        <Th>#</Th>
                                                        <Th>Icon</Th>
                                                        <Th>Name</Th>
                                                        <Th>Position</Th>
                                                        <Th>Status</Th>
                                                        <Th>Last Modified</Th>
                                                        <Th></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>

                                                {facilityList.data.map((facility) => (
                                                    <Tr key={facility.id} className="hover-primary">
                                                        <Td>{facility.id}</Td>
                                                        <Td>
                                                            <img
                                                                src={facility.icon}
                                                                className='w-40 rounded-5 '
                                                                alt={`${facility.icon} icon`}
                                                                onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                            /> <span className='ms-3'>{facility.name}</span>
                                                        </Td>
                                                        <Td>{facility.position}</Td>
                                                        <Td>{facility.status}</Td>
                                                        <Td>{window.formatDateTime(facility.updated_at)}</Td>
                                                        <Td>
                                                            <PermissionAllow permission={'Facility Edit'}>
                                                                <Link className='btn btn-transparent' href={route('admin.facilities.edit', facility.id)}>
                                                                    <i className="bi bi-pencil"></i>
                                                                </Link>
                                                            </PermissionAllow>
                                                            <PermissionAllow permission={'Facility Delete'}>
                                                                <button onClick={(e) => deleteFacility(facility)} className="btn btn-transparent border-0">
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