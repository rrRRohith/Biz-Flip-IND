import React, { useState, useEffect } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ModalPopup from '@/Components/ModalPopup';
import ViewCategory from '@/Pages/Admin/Category/ViewCategory';
import axios from 'axios';

export default function Index({ categoryList, auth }) {
    const [show, setShow] = useState(false);
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState(categoryList.data);

    const { data, setData, post, errors, reset } = useForm({
        orderedIds: []
    });

    const deleteCategory = (category) => {
        Swal.fire({
            title: 'Are you sure you want to delete this category?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.category.destroy", category.id), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Category has been deleted.', 'success');
                    },
                });
            }
        });
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    useEffect(() => { setCategories(categoryList.data); }, [categoryList]);


    const displayList = searchQuery.length > 0 ? categories : categoryList.data;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    const paginatedList = displayList.slice(startIdx, endIdx);

    useEffect(() => { setItems(paginatedList); }, [paginatedList]);

    const [items, setItems] = useState(paginatedList);

    const searchingQuery = (value = null) => {
        setSearchQuery(value);

        const filtered = categoryList.data.filter(category =>
            category.name.toLowerCase().includes(value.toLowerCase())
        );
        setCategories(filtered);
        setItems(filtered)
        setCurrentPage(1);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        searchingQuery(value);
    };


    const handleClose = () => setShow(false);
    const handleShow = async (vendor) => {
        try {
            const response = await axios.get(route("admin.category.show", vendor.id));
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Categories</h2>}
        >
            <Head title="Category List" />

            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Ad Categories</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Ad Categories</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Category Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.category.create')}><i className='bi bi-plus'></i> Create</Link>
                                    </PermissionAllow>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <PermissionAllow permission={'Categories Listing'} message="true">
                                            {/* Search input */}
                                            <div className="mb-3 col-lg-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search by Category name..."
                                                    value={searchQuery}
                                                    onChange={handleSearch}
                                                />
                                            </div>
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no" id="example1">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Name</Th>
                                                            <Th className='text-center'>Status</Th>
                                                            <Th className='text-center'>Last Modified</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {items.map((category, index) => (
                                                            <Tr key={index}>
                                                                <Td onClick={() => handleShow(category)} >
                                                                    {category.name}
                                                                </Td>
                                                                <Td onClick={() => handleShow(category)} className='text-center'>
                                                                    <div dangerouslySetInnerHTML={{ __html: window.statusIcon(category.status) }} />
                                                                </Td>
                                                                <Td onClick={() => handleShow(category)} className='text-center'>{window.formatDateTime(category.updated_at)}</Td>
                                                                <Td align='right'>
                                                                    <PermissionAllow permission={'Category Show'}>
                                                                        <span onClick={() => handleShow(category)} className="btn btn-transparent">
                                                                            <i className="bi bi-eye"></i></span>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Category Edit'}>
                                                                        {/* <Link className='btn btn-transparent' href={route('admin.category.form', category.id)}>
                                                                        <i class="bi bi-code-square"></i>
                                                                        </Link> */}

                                                                        <Link className='btn btn-transparent' href={route('admin.category.edit', category.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Category Delete'}>
                                                                        <button onClick={() => deleteCategory(category)} className="btn btn-transparent border-0">
                                                                            <i className="bi bi-trash"></i>
                                                                        </button>
                                                                    </PermissionAllow>
                                                                </Td>
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
                                            </div>

                                            {displayList.length > itemsPerPage && (
                                                <div className="pagination-container float-end py-5">
                                                    <Pagination
                                                        count={Math.ceil(displayList.length / itemsPerPage)}
                                                        page={currentPage}
                                                        onChange={handlePageChange}
                                                    />
                                                </div>
                                            )}
                                        </PermissionAllow>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <ModalPopup show={show} handleClose={handleClose} size="md" title="Ad Category Details">
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
    );
}

Index.propTypes = {
    categoryList: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};