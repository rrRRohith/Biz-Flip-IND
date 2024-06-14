import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ModalPopup from '@/Components/ModalPopup';
import ViewSeller from '@/Pages/Admin/Seller/ViewSeller';
import axios from 'axios';

export default function Index({ vendorsList, pendingVendorsList, suspendedVendorsList, auth }) {
    const itemsPerPage = 20;

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredVendors, setFilteredVendors] = useState(vendorsList.data);
    const [filteredPendingVendors, setFilteredPendingVendors] = useState(pendingVendorsList.data);
    const [filteredSuspendedVendors, setFilteredSuspendedVendors] = useState(suspendedVendorsList.data);
    const [key, setKey] = useState('ApprovedSellers');

    const deleteVendor = (vendor) => {
        if (!window.confirm("Are you sure you want to delete the Seller?")) {
            return;
        }
        router.delete(route("admin.sellers.destroy", vendor.id));
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        let filtered;
        if (key === 'ApprovedSellers') {
            filtered = vendorsList.data.filter(vendor =>
                vendor.full_name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredVendors(filtered);
        } else if (key === 'PendingApproval') {
            filtered = pendingVendorsList.data.filter(vendor =>
                vendor.full_name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredPendingVendors(filtered);
        } else if (key === 'SuspendedSellers') {
            filtered = suspendedVendorsList.data.filter(vendor =>
                vendor.full_name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuspendedVendors(filtered);
        }
        setCurrentPage(1);
    };

    const getDisplayList = () => {
        if (searchQuery.length > 0) {
            if (key === 'ApprovedSellers') {
                return filteredVendors;
            } else if (key === 'PendingApproval') {
                return filteredPendingVendors;
            } else if (key === 'SuspendedSellers') {
                return filteredSuspendedVendors;
            }
        } else {
            if (key === 'ApprovedSellers') {
                return vendorsList.data;
            } else if (key === 'PendingApproval') {
                return pendingVendorsList.data;
            } else if (key === 'SuspendedSellers') {
                return suspendedVendorsList.data;
            }
        }
    };

    const displayList = getDisplayList();
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = async (vendor) => {
        try {
            const response = await axios.get(route("admin.sellers.show", vendor.id));
            const responseData = response.data;
            setData(responseData);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleSubmit = () => {
        setShow(false); // Close the modal after submission
        // Additional logic after form submission
    };

    return (
        <Authenticated user={auth.user}>
            <Head title="Sellers List" />

            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Sellers Listing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Seller Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.sellers.create')}><i className='bi bi-plus'></i> Create</Link>
                                    </PermissionAllow>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs
                        id="uncontrolled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="ApprovedSellers" title="Approved Sellers">
                            <div className="mb-3 col-lg-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <VendorTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                deleteVendor={deleteVendor}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                            />
                        </Tab>
                        <Tab eventKey="PendingApproval" title={`Pending Approval (${pendingVendorsList.data.length})`}>
                            <div className="mb-3 col-lg-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <VendorTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                deleteVendor={deleteVendor}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                            />
                        </Tab>
                        <Tab eventKey="SuspendedSellers" title="Suspended Sellers">
                            <div className="mb-3 col-lg-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <VendorTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                deleteVendor={deleteVendor}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <ModalPopup show={show} handleClose={handleClose} size="lg" title="Seller Details">
                {data ? (
                    <ViewSeller
                        collection={data}
                        handleClose={handleClose}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    'Failed fetching data...'
                )}
            </ModalPopup>
        </Authenticated>
    );
}

const VendorTable = ({ displayList, startIdx, endIdx, deleteVendor, handlePageChange, currentPage, itemsPerPage, handleShow }) => (
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile Number</th>
                                            <th>Company Name</th>
                                            <th>Designation</th>
                                            <th  className='text-center'>Status</th>
                                            <th>Last Modified</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {displayList.slice(startIdx, endIdx).map((vendor) => (
                                            <tr key={vendor.id} className="hover-primary">
                                                <td>{vendor.id}</td>
                                                <td>
                                                    <img
                                                        src={vendor.picture}
                                                        className='w-30 h-30 me-3 rounded-circle'
                                                        alt={`${vendor.picture} icon`}
                                                        onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                    /> <span>{vendor.full_name}</span>
                                                </td>
                                                <td>{vendor.email}</td>
                                                <td>{vendor.phone}</td>
                                                <td>{vendor.company_name}</td>
                                                <td>{vendor.designation}</td>
                                                <td className='text-center'>
                                                    <div dangerouslySetInnerHTML={{ __html: window.statusIcon(vendor.status) }} />
                                                </td>
                                                <td>{vendor.updated_at}</td>
                                                <td>
                                                    <PermissionAllow permission={'Seller Show'}>
                                                        <span onClick={() => handleShow(vendor)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Seller Edit'}>
                                                        <Link className='btn btn-transparent' href={route('admin.sellers.edit', vendor.id)}>
                                                            <i className="bi bi-pencil"></i>
                                                        </Link>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission={'Seller Edit'}>
                                                        <button onClick={() => deleteVendor(vendor)} className="btn btn-transparent border-0">
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </PermissionAllow>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
);
