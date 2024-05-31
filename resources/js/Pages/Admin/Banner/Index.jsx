import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Dropdown } from '@mui/joy';

export default function Index({ bannersList, auth, success = null, error = null }) {

    const deleteBanner = (banner) => {
        if (!window.confirm("Are you sure you want to delete the Banners?")) {
            return;
        }


        router.delete(route("admin.banners.destroy", banner.id))
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
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Banner Create'}>
                                        <Link className='btn btn-danger btn-sm text-end' href={route('admin.banners.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                                <table className="table border-no" id="example1">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Image</th>
                                                            <th>Title</th>
                                                            <th>Type</th>
                                                            <th>Position</th>
                                                            <th>Status</th>
                                                            <th>Last Modified</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {bannersList.data.map((banner) => (

                                                            <tr key={banner.id} className="hover-primary">
                                                                <td>{banner.id}</td>

                                                                <td>
                                                                    <img
                                                                        src={banner.picture_desktop || banner.picture_mobile}
                                                                        className='w-100 rounded-5 '
                                                                        alt={`${banner.picture_desktop} Image`}
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                    />
                                                                </td>
                                                                <td>{banner.title}</td>
                                                                <td>{banner.type}</td>
                                                                <td>{banner.position}</td>
                                                                <td>{banner.status}</td>
                                                                <td>{banner.updated_at}</td>
                                                                <td>
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
                                                                </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
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