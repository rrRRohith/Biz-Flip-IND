import React, { useState, useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import ReactPaginate from 'react-paginate';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ cityList, auth, success = null, error = null }) {
    const { url } = usePage();
    const [filterInput, setFilterInput] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 25;

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const name = searchParams.get('name') || '';
        setFilterInput(name);
    }, []);

    const deleteCity = (city) => {
        if (!window.confirm("Are you sure you want to delete the City?")) {
            return;
        }
        Inertia.delete(route("admin.city.destroy", city.id));
    };

    const handleFilterChange = (e) => {
        setFilterInput(e.target.value);
    };

    const filteredCities = cityList.data.filter(city =>
        city.name.toLowerCase().includes(filterInput.toLowerCase())
    );

    const pageCount = Math.ceil(filteredCities.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
        // Scroll to top when pagination button is clicked
        window.scrollTo(0, 0);
    };

    const handleSearch = () => {
        const searchParams = new URLSearchParams();
        searchParams.append('name', filterInput);
        Inertia.visit(`${url.pathname}?${searchParams.toString()}`);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredCities.slice(offset, offset + itemsPerPage);

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">City</h2>}
            success={success}
            error={error}
        >
            <Head title="City List" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">City</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link className='btn btn-danger btn-sm text-end' href={route('admin.city.create')}>
                                        <i className='bi bi-plus'></i> Create
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="d-flex mb-3 align-items-center">
                                            <input
                                                value={filterInput}
                                                onChange={handleFilterChange}
                                                placeholder="Search by name"
                                                className="form-control me-2"
                                            />
                                            <button onClick={handleSearch} className="btn btn-primary btn-sm">Search</button>
                                        </div>
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
                                                    {currentItems.map((city) => (
                                                        <tr key={city.id} className="hover-primary">
                                                            <td>{city.id}</td>
                                                            <td>
                                                                <img
                                                                    src={city.image}
                                                                    className='w-100 rounded-5'
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
                                                                <button onClick={() => deleteCity(city)} className="btn btn-transparent border-0">
                                                                    <i className="bi bi-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <ReactPaginate
                                            previousLabel={'previous'}
                                            nextLabel={'next'}
                                            breakLabel={'...'}
                                            breakClassName={'break-me'}
                                            pageCount={pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageClick}
                                            containerClassName={'pagination'}
                                            subContainerClassName={'pages pagination'}
                                            activeClassName={'active'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
