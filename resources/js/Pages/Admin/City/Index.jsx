import React, { useState, useEffect } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Pagination } from '@mui/material';

export default function Index({ cityList, auth, success = null, error = null }) {
    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const name = searchParams.get('name') || '';
        searchingQuery(name);
    }, []);

    const deleteCity = (city) => {
        if (!window.confirm("Are you sure you want to delete the City?")) {
            return;
        }

        router.delete(route("admin.city.destroy", city.id));
    };

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

        const filtered = cityList.data.filter(city =>
            city.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCities(filtered);
        setCurrentPage(1);

    }



    // Determine which list to display
    const displayList = searchQuery.length > 0 ? filteredCities : cityList.data;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">City</h2>}
            success={success}
            error={error}
        >
            <Head title="City List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Cities</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Cities</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link className='btn btn-info text-end' href={route('admin.city.create')}>
                                        <i className='bi bi-plus'></i> Create
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Search input --> */}
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name..."
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
                                        <div className="table-responsive rounded card-table">
                                            <table className="table border-no" id="example1">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Position</th>
                                                        <th>Status</th>
                                                        <th>Last Modified</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {displayList.slice(startIdx, endIdx).map((city, index) => (
                                                        <tr key={city.id} className="hover-primary">
                                                            <td>{index + startIdx + 1}</td>
                                                            <td>
                                                                <img
                                                                    src={city.image}
                                                                    className='w-100 rounded-5 '
                                                                    alt={`${city.image} icon`}
                                                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                />
                                                            </td>
                                                            <td>{city.name}</td>
                                                            <td>{city.position}</td>
                                                            <td>{city.status}</td>
                                                            <td>{city.updated_at}</td>
                                                            <td>
                                                                <Link className='btn btn-transparent' href={route('admin.city.edit', city.id)}>
                                                                    <i className="bi bi-pencil"></i>
                                                                </Link>
                                                                <button onClick={(e) => deleteCity(city)} className="btn btn-transparent border-0">
                                                                    <i className="bi bi-trash"></i>
                                                                </button>
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
    );
}
