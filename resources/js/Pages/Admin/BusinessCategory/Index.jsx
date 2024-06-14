import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';

export default function Index({ categoryList, auth }) {

    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState(categoryList.data);

    const deleteCategory = (category) => {
        if (!window.confirm("Are you sure you want to delete the category?")) {
            return;
        }


        router.delete(route("admin.business-category.destroy", category.id))
    }


    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };


    const handleSearch = (e) => {
        const value = e.target.value;

        searchingQuery(value)

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


    const displayList = searchQuery.length > 0 ? categories : categoryList.data;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    const paginatedList = displayList.slice(startIdx, endIdx);



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Business Categories</h2>}
        >
            <Head title="Category List" />

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
                                    <PermissionAllow permission={'Category Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.business-category.create')}><i className='bi bi-plus'></i> Create</Link>
                                    </PermissionAllow>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Search input --> */}
                    <div className="mb-3 col-lg-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Business Category name..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>

                    {/* <!-- Main content --> */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <PermissionAllow permission={'Categories Listing'} message="true">
                                            <div className="table-responsive rounded card-table">
                                                <table className="table border-no" id="example1">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th  className='text-center'>Name</th>
                                                            <th  className='text-center'>Status</th>
                                                            <th  className='text-center'>Last Modified</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {displayList.slice(startIdx, endIdx).map((category, index) => (
                                                            <tr key={category.id} className="hover-primary">

                                                                <td>{index + 1}</td>

                                                                <td  className='text-center'>
                                                                    {category.name}
                                                                </td>
                                                                <td className='text-center'>
                                                                    <div dangerouslySetInnerHTML={{ __html: window.statusIcon(category.status) }} />
                                                                </td>
                                                                <td  className='text-center'>{window.formatDateTime(category.updated_at)}</td>
                                                                <td align='right'>
                                                                    <PermissionAllow permission={'Category Edit'}>
                                                                        <Link className='btn btn-transparent' href={route('admin.business-category.edit', category.id)}>
                                                                            <i className="bi bi-pencil"></i>
                                                                        </Link>
                                                                    </PermissionAllow>
                                                                    <PermissionAllow permission={'Category Delete'}>
                                                                        <button onClick={(e) => deleteCategory(category)} className="btn btn-transparent border-0">
                                                                            <i className="bi bi-trash"></i>
                                                                        </button>
                                                                    </PermissionAllow>
                                                                </td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                               {/* <!-- Pagination --> */}
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
                    {/* <!-- /.content --> */}
                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}
        </Authenticated>

    )
}