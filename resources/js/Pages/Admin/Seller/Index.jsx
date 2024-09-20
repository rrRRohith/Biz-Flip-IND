import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ModalPopup from '@/Components/ModalPopup';
import ViewSeller from '@/Pages/Admin/Seller/ViewSeller';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Height } from '@mui/icons-material';

export default function Index({ vendorsList, pendingVendorsList, suspendedVendorsList, auth }) {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQuery2, setSearchQuery2] = useState('all');
    const [filteredVendors, setFilteredVendors] = useState(vendorsList.data);
    const [filteredPendingVendors, setFilteredPendingVendors] = useState(pendingVendorsList.data);
    const [filteredSuspendedVendors, setFilteredSuspendedVendors] = useState(suspendedVendorsList.data);
    const [key, setKey] = useState('ApprovedSellers');
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const deleteVendor = (vendor) => {
        Swal.fire({
            title: 'Are you sure you want to delete the User?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {

            if (result.isConfirmed) {
                router.delete(route("admin.sellers.destroy", vendor.id));
            }
        })
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
            (vendor.company_name?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.full_name?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.email?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.phone?.toLowerCase().includes(value.toLowerCase()))
            );
            setFilteredVendors(filtered);
        } else if (key === 'PendingApproval') {
            filtered = pendingVendorsList.data.filter(vendor =>
            (vendor.company_name?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.full_name?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.email?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.phone?.toLowerCase().includes(value.toLowerCase()))
            );
            setFilteredPendingVendors(filtered);
        } else if (key === 'SuspendedSellers') {
            filtered = suspendedVendorsList.data.filter(vendor =>
            (vendor.company_name?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.full_name?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.email?.toLowerCase().includes(value.toLowerCase()) ||
                vendor.phone?.toLowerCase().includes(value.toLowerCase()))
            );
            setFilteredSuspendedVendors(filtered);
        }
        setCurrentPage(1);
    };

    const handleSearchType = (e) => {

        const value2 = e.target.value;
        setSearchQuery2(value2);
        let filtered2;

        if (key === 'ApprovedSellers') {
            if (value2 == 'agent') {
                filtered2 = vendorsList.data.filter(vendor =>
                    vendor.is_agent === true
                );
            }
            else if (value2 == 'individual') {
                filtered2 = vendorsList.data.filter(vendor =>
                    vendor.is_agent == false
                );
            }
            else {
                filtered2 = vendorsList.data;
            }

            setFilteredVendors(filtered2);
        } else if (key === 'PendingApproval') {
            if (value2 == 'agent') {
                filtered2 = vendorsList.data.filter(vendor =>
                    vendor.is_agent == true
                );
            }
            else if (value2 == 'individual') {
                filtered2 = vendorsList.data.filter(vendor =>
                    vendor.is_agent == false
                );
            }
            else {
                filtered2 = vendorsList.data;
            }
            setFilteredPendingVendors(filtered2);
        } else if (key === 'SuspendedSellers') {
            if (value2 == 'agent') {
                filtered2 = vendorsList.data.filter(vendor =>
                    vendor.is_agent == true
                );
            }
            else if (value2 == 'individual') {
                filtered2 = vendorsList.data.filter(vendor =>
                    vendor.is_agent == false
                );
            }
            else {
                filtered2 = vendorsList.data;
            }
            setFilteredSuspendedVendors(filtered2);
        }
        setCurrentPage(1);
    };

    const getDisplayList = () => {
        if (searchQuery.length > 0 || searchQuery2.length > 0) {
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
            <Head title="Users List" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Users Listing</h4>
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
                        className=""
                    >
                        <Tab eventKey="ApprovedSellers" title="Active Users">
                            <VendorTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                deleteVendor={deleteVendor}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                handleSearchType={handleSearchType}
                            />
                        </Tab>

                        <Tab eventKey="SuspendedSellers" title="Suspended">
                            <VendorTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                deleteVendor={deleteVendor}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                handleSearchType={handleSearchType}
                            />
                        </Tab>
                        {/* <Tab eventKey="PendingApproval" title={`Pending Approval (${pendingVendorsList.data.length})`}> */}
                        <Tab eventKey="PendingApproval" title={
                            <>
                                <span>Unverified</span>
                                {pendingVendorsList.data.length > 0 && (
                                    <span className="pending-approval-count">
                                        {pendingVendorsList.data.length}
                                    </span>
                                )}
                            </>
                        }>

                            <VendorTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                deleteVendor={deleteVendor}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                handleSearchType={handleSearchType}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <ModalPopup show={show} handleClose={handleClose} size="md" title="Seller Details">
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

const VendorTable = ({ displayList, startIdx, endIdx, deleteVendor, handlePageChange, currentPage, itemsPerPage, handleShow, searchQuery, handleSearch, handleSearchType }) => (
    <section className="content2">
        <div className="row">
            <div className="col-12">
                <div className="box">
                    <div className="box-body">
                        <PermissionAllow permission={'Categories Listing'} message="true">
                            <div className='row'>
                                <div className="mb-3 col-lg-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by name,company name,phone or email"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="mb-3 col-lg-2">
                                    <select name="type" className='form-control select-option' style={{ WebkitAppearance:"auto !important" }} onChange={handleSearchType}>
                                        <option value={'all'}>All</option>
                                        <option value={'agent'}>Agent</option>
                                        <option value={'individual'}>Individual users</option>

                                    </select>
                                </div>
                                

                            </div>

                            <div className="table-responsive rounded card-table">
                            {displayList.length > 0 ?
                            <>
                             <Table className="table border-no" id="example1">
                                    <Thead>
                                        <Tr>
                                            {/* <Th>#</Th> */}
                                            <Th>Full Name</Th>
                                            <Th>Email</Th>
                                            <Th>Mobile Number</Th>
                                            <Th>Designation</Th>
                                            <Th>Subscription</Th>
                                            <Th>Ads</Th>
                                            <Th>Started at</Th>
                                            <Th>Last login</Th>
                                            <Th className="text-end"></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {displayList.slice(startIdx, endIdx).map((vendor) => (
                                            <Tr key={vendor.id} className="hover-primary">
                                                {/* <Td valign="middle">{vendor.id}</Td> */}
                                                <Td role="button" valign="middle" className="d-flex" onClick={() => handleShow(vendor)} >
                                                    <div className="avatar-userlisting position-relative" style={{ height: '60px', width: '60px' }}>
                                                        <span
                                                            className="d-block"
                                                            style={{
                                                                backgroundImage: `url(${vendor.picture})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center',
                                                                height: '60px',
                                                                width: '60px',
                                                                borderRadius: '50%',
                                                            }}
                                                        ></span>

                                                        <span
                                                            className={`position-absolute ${vendor.is_agent ? 'bg-dropbox' : 'bg-success'} text-white d-flex justify-content-center align-items-center`}
                                                            style={{
                                                                bottom: '0',
                                                                right: '0',
                                                                borderRadius: '50%',
                                                                width: '20px',
                                                                height: '20px',
                                                                fontSize: '12px',
                                                            }}
                                                        >
                                                            {vendor.is_agent ? 'A' : 'I'}
                                                        </span>
                                                    </div>

                                                    <div className="ms-20">
                                                        {vendor.is_agent && (
                                                            <>
                                                                <span className="text-bold text-uppercase">{vendor.company_name}</span>
                                                                <br />
                                                            </>
                                                        )}
                                                        <span>{vendor.full_name}</span>
                                                    </div>

                                                </Td>
                                                <Td  valign="middle">{vendor.email}</Td>
                                                <Td  valign="middle">{vendor.phone}</Td>
                                                <Td  valign="middle">{vendor.designation}</Td>
                                                <Td>
                                                    {vendor.current_subscription?.name}
                                                </Td>
                                                <Td>{(vendor.ads).length}</Td>
                                                <Td>{window.formatDate(vendor.created_at)}<br />{window.formatTime(vendor.created_at)}</Td>
                                                <Td> {vendor.last_login != null && (
                                                    <>
                                                        {window.formatDate(vendor.last_login)} <br />{window.formatTime(vendor.last_login)}
                                                    </>
                                                )}
                                                </Td>
                                                <Td className="text-end">
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
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </>
                            :
                            <>
                                <div className='h-100 text-center'>
                                    <h5>No users found!</h5>
                                </div>
                            </>
                            }
                               
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

