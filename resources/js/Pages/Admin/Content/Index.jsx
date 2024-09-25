import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import PageView from '@/Pages/Admin/Content/PageView';
import axios from 'axios';

export default function Index({ pageList, auth, success = null, error = null }) {

    
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = async (ad) => {
        try {
            const response = await axios.get(route("admin.content-page.show", ad.id));
            const responseData = response.data;
            setData(responseData);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const deletePage = (page) => {
        Swal.fire({
            title: 'Are you sure you want to delete this page?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.content-page.destroy", page.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'page has been deleted.', 'success');
                    },
                });
            }
        })
    }



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Content Page</h2>}
            success={success}
            error={error}
        >
            <Head title="Content Page List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Content Page</h4>
                                        <div className="align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Content Pages Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.content-page.index')}>Content Page</Link></li>
                                                </PermissionAllow>
                                                
                                            </ol>
                                        </nav>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Content Page Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.content-page.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <PermissionAllow permission={'Content Pages Listing'} message={true}>
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>#</Th>
                                                            <Th>Title</Th>
                                                            <Th>Status</Th>
                                                            {/* <Th>Last Modified</Th> */}
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {pageList.data.map((page) => (
                                                            <Tr key={page.id} className="hover-primary">
                                                                <Td>{page.id}</Td>
                                                                <Td>{page.title}</Td>
                                                                <Td>{page.status}</Td>
                                                                {/* <Td>{page.updated_at}</Td> */}
                                                                <Td>
                                                                    <span onClick={() => handleShow(page)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
                                                                    <PermissionAllow permission={'Content Page Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.content-page.edit', page.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Content Page Delete'}>
                                                                        <button onClick={(e) => deletePage(page)} className="btn btn-transparent border-0">
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


             {/* Display modal for  details */}
             <ModalPopup show={show} handleClose={handleClose} size="lg" title="Page Show">
                {data ? (
                    <PageView
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