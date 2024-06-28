import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import ViewNavigationMenu from '@/Pages/Admin/NavigationMenu/ViewNavigationMenu';
import axios from 'axios';

export default function Index({ MenuList, auth, success = null, error = null }) {
     
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const deleteMenu = (menu) => {
        Swal.fire({
            title: 'Are you sure you want to delete this menu?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
          }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.navigation-menu.destroy", menu.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'menu has been deleted.', 'success');
                    },
                });
            }
        })
      }

      const handleClose = () => setShow(false);
      const handleShow = async (menu) => {
          try {
              const response = await axios.get(route("admin.navigation-menu.show", menu.id));
              const responseData = response.data;
              console.log(1,response.data)
              setData(responseData);
              setShow(true);
          } catch (error) {
              console.error('Error fetching data', error);
          }
      };
  

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Navigation Menu List</h2>}
        >
            <Head title="Navigation Menu List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Navigation Menu List</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link className='btn btn-info text-end' href={route('admin.navigation-menu.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Title</th>
                                                        <th>Last Modified</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {MenuList.data.map((menu) => (
                                                
                                                    <tr key={menu.id} className="hover-primary">
                                                        <td>{menu.id}</td>
                                                        <td>{menu.title}</td>
                                                        <td>{window.formatDateTime(menu.updated_at)}</td>
                                                        <td>
                                                            <span title='Show' onClick={() => handleShow(menu)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
                                                            <Link className='btn btn-transparent' href={route('admin.navigation-menu.edit', menu.id)}>
                                                                <i className="bi bi-pencil"></i>
                                                            </Link>
                                                            <button onClick={(e) => deleteMenu(menu)} className="btn btn-transparent border-0">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}

                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}
            <ModalPopup show={show} handleClose={handleClose} size="md" title="Navigaion Menu Details">
                {data ? (
                    <ViewNavigationMenu
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