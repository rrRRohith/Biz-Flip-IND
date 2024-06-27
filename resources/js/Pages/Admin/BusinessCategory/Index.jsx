import React, { useState, useEffect } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import ViewCategory from '@/Pages/Admin/BusinessCategory/ViewCategory';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Index({ categoryList, auth }) {
    const [show, setShow] = useState(false);
  
    const [categories, setCategories] = useState(categoryList.data);

    const { data, setData, post, errors, reset } = useForm({
        orderedIds: []
    });

    const deleteCategory = (category) => {

        Swal.fire({
            title: 'Are you sure you want to delete this category?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {

            if (result.isConfirmed) {
                router.delete(route("admin.business-category.destroy", category.id))
            }
        })

    }


    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };



    const searchingQuery = (value = null) => {
        setSearchQuery(value);
        console.log(searchQuery)
        const filtered = categoryList.data.filter(category =>
            category.name.toLowerCase().includes(value.toLowerCase())
        );
        setCategories(filtered);
        setCurrentPage(1);

    }

    // useEffect(() => {
    //     setCategories(categoryList.data);
    // }, [categoryList]);



    // useEffect(() => {
    //     setItems(paginatedList);
    // }, [paginatedList]);

    
    const [items, setItems] = useState(categoryList.data);
    const handleClose = () => setShow(false);

    const handleDragEnd = async (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, reorderedItem);

        const updatedItems = reorderedItems.map((item, index) => ({
            ...item,
            position: index + 1
        }));

        setItems(updatedItems);
        setCategories(updatedItems);

        const orderedIdsArray = updatedItems.map(item => item.id);
        setData('orderedIds', orderedIdsArray);
        try {
            const response = await axios.post(route('admin.business-category.position-update'), {
                orderedIds: orderedIdsArray
            });

            toast.success(response.data, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });

        } catch (error) {
            console.error('Error posting data:', error);
        }


    };


    const handleShow = async (vendor) => {
        try {
            const response = await axios.get(route("admin.business-category.show", vendor.id));
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Business Categories</h2>}
        >
            <Head title="Business Category List" />
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                draggable={false}
            />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Business Categories</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Business Categories</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className="text-end">
                                    {/* <PermissionAllow permission={'Category Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.business-category.create')}><i className='bi bi-plus'></i> Create</Link>
                                    </PermissionAllow> */}
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
                                        <PermissionAllow permission={'Categories Listing'} message="true">

                                            <div className="table-responsive rounded card-table">
                                                <DragDropContext onDragEnd={handleDragEnd}>
                                                    <Droppable droppableId="categories">
                                                        {(provided) => (
                                                            <Table className="table border-no" id="example1" {...provided.droppableProps} ref={provided.innerRef}>
                                                                <Thead>
                                                                    <Tr>
                                                                        <Th></Th>
                                                                        <Th>Name</Th>
                                                                        <Th className='text-center'>Status</Th>
                                                                        <Th className='text-center'>Last Modified</Th>
                                                                        <Th></Th>
                                                                    </Tr>
                                                                </Thead>
                                                                <Tbody>
                                                                    {items.map((category, index) => (
                                                                        <Draggable key={`${category.id}-${category.name}`} draggableId={`${category.id}-${category.name}`} index={index}>
                                                                            {(provided, snapshot) => (
                                                                                <Tr
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    className={` ${snapshot.isDragging ? 'dragging' : ''}`}
                                                                                >
                                                                                    <Td><i className='bi bi-arrows-move me-3 fw-bold'></i></Td>
                                                                                    <Td>

                                                                                        {category.name}
                                                                                    </Td>
                                                                                    <Td className='text-center'>
                                                                                        <div dangerouslySetInnerHTML={{ __html: window.statusIcon(category.status) }} />
                                                                                    </Td>
                                                                                    <Td className='text-center'>{window.formatDateTime(category.updated_at)}</Td>
                                                                                    <Td align='right'>
                                                                                        <PermissionAllow permission={'Category Show'}>
                                                                                            <span onClick={() => handleShow(category)} className="btn btn-transparent">
                                                                                                <i className="bi bi-eye"></i></span>
                                                                                        </PermissionAllow>
                                                                                        <PermissionAllow permission={'Category Edit'}>
                                                                                            <Link className='btn btn-transparent' href={route('admin.business-category.edit', category.id)}>
                                                                                                <i className="bi bi-pencil"></i>
                                                                                            </Link>
                                                                                        </PermissionAllow>
                                                                                        {/* <PermissionAllow permission={'Category Delete'}>
                                                                                            <button onClick={() => deleteCategory(category)} className="btn btn-transparent border-0">
                                                                                                <i className="bi bi-trash"></i>
                                                                                            </button>
                                                                                        </PermissionAllow> */}
                                                                                    </Td>
                                                                                </Tr>
                                                                            )}
                                                                        </Draggable>
                                                                    ))}
                                                                    {provided.placeholder}
                                                                </Tbody>
                                                            </Table>
                                                        )}
                                                    </Droppable>
                                                </DragDropContext>
                                            </div>
                                            {/* <!-- Pagination --> */}
                                            
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
          
            <ModalPopup show={show} handleClose={handleClose} size="md" title="Business Category Details">
                {data ? (
                    <ViewCategory
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