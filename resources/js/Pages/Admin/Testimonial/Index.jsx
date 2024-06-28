import React, { useState, useEffect }  from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Swal from 'sweetalert2';
import ViewTestimonial from '@/Pages/Admin/Testimonial/ViewTestimonial';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import axios from 'axios';

export default function Index({ testimonialList, auth, success = null, error = null }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const deleteTestimonial = (testimonial) => {
        Swal.fire({
            title: 'Are you sure you want to delete this testimonial?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.testimonial.destroy", testimonial.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'testimonial has been deleted.', 'success');
                    },
                });
            }
        });
    }

    const handleClose = () => setShow(false);
    const handleShow = async (vendor) => {
          try {
              const response = await axios.get(route("admin.testimonial.show", vendor.id));
              const responseData = response.data;
              
              setData(responseData);
              setShow(true);
          } catch (error) {
              console.error('Error fetching data', error);
          }
      };



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Testimonial</h2>}
            success={success}
            error={error}
        >
            <Head title="Testimonial List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Testimonials</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Testimonial Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.testimonial.create')}><i className='bi bi-plus'></i> Create</Link>
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
                                        <PermissionAllow permission={'Testimonials Listing'} message={true}>
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>#</Th>
                                                            <Th>Name</Th>
                                                            <Th>Company</Th>
                                                            <Th>Designation</Th>
                                                            <Th>Status</Th>
                                                            <Th>Last Modified</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>

                                                        {testimonialList.data.map((testimonial) => (

                                                            <Tr key={testimonial.id} className="hover-primary">
                                                                <Td>{testimonial.id}</Td>
                                                                <Td>
                                                                    <img
                                                                        src={testimonial.image}
                                                                        className='w-40 rounded-5 '
                                                                        alt={`${testimonial.image} icon`}
                                                                        onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                    />
                                                                <span className='ms-3'>{testimonial.name}</span>
                                                                </Td>
                                                                <Td>{testimonial.company_name}</Td>
                                                                <Td>{testimonial.designation}</Td>
                                                                <Td>{testimonial.status}</Td>
                                                                <Td>{window.formatDateTime(testimonial.updated_at)}</Td>
                                                                <Td> 
                                                                    <PermissionAllow permission={'Testimonial Show'}>
                                                                        <span onClick={() => handleShow(testimonial)} className="btn btn-transparent">
                                                                            <i className="bi bi-eye"></i></span>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Testimonial Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.testimonial.edit', testimonial.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Testimonial Delete'}>
                                                                        <button onClick={(e) => deleteTestimonial(testimonial)} className="btn btn-transparent border-0">
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

            <ModalPopup show={show} handleClose={handleClose} size="md" title="Testimonial Details">
                {data ? (
                    <ViewTestimonial
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