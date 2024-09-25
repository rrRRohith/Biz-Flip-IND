import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Index({ bannersList, auth, success = null, error = null }) {

    const deleteBanner = (banner) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Banners?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.banners.destroy", banner.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Banners has been deleted.', 'success');
                    },
                });
            }
        })
    }



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Banners</h2>}
            success={success}
            error={error}
        >
            <Head title="Banners List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Banners</h4>
                                        <div className="align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Banners Listing'}>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.banners.index')}>Banners</Link></li>
                                                </PermissionAllow>
                                            </ol>
                                        </nav>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Banner Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.banners.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <PermissionAllow permission={'Banners Listing'} message={'true'}>
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>#</Th>
                                                            <Th>Image</Th>
                                                            <Th>Title</Th>
                                                            <Th>Type</Th>
                                                            <Th>Position</Th>
                                                            <Th>Status</Th>
                                                            {/* <Th>Last Modified</Th> */}
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {bannersList.data.map((banner) => (
                                                            <Tr key={banner.id} className="hover-primary">
                                                                <Td>{banner.id}</Td>
                                                                <Td>
                                                                    <img
                                                                        src={banner.picture_desktop || banner.picture_mobile}
                                                                        className='wd-100 rounded-5 '
                                                                        alt={`${banner.picture_desktop} Image`}
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                    />
                                                                </Td>
                                                                <Td>{banner.title}</Td>
                                                                <Td>{banner.type}</Td>
                                                                <Td>{banner.position}</Td>
                                                                <Td>
                                                                <div dangerouslySetInnerHTML={{ __html: window.statusIcon(banner.status) }} />
                                                                </Td>
                                                                {/* <Td>{banner.updated_at}</Td> */}
                                                                <Td>
                                                                    <PermissionAllow permission={'Banner Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.banners.edit', banner.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Banner Delete'}>
                                                                        <button onClick={(e) => deleteBanner(banner)} className="btn btn-transparent border-0">
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