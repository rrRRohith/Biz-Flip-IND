// Index.jsx

import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import ModalPopup from '@/Components/ModalPopup';
import AdView from '@/Pages/Admin/Ads/AdView';
import StatusBtn from '@/Components/StatusBtn';
import axios from 'axios';
import Badge from '@/Components/Badge';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Pagination } from '@mui/material';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Index = ({ ads, pendingAdsList, suspendedAdsList, soldAdsList, auth, success = null, error = null }) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAds, setFilteredAds] = useState(ads.data);
    const [filteredPendingAds, setFilteredPendingAds] = useState(pendingAdsList.data);
    const [filteredSuspendedAds, setFilteredSuspendedAds] = useState(suspendedAdsList.data);
    const [filteredSoldAds, setFilteredSoldAds] = useState(soldAdsList.data);
    const [key, setKey] = useState('PendingApproval');
    

    
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        let filtered;
        if (key === 'ApprovedAds') {
            filtered = ads.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredAds(filtered);
        } else if (key === 'PendingApproval') {
            filtered = pendingAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredPendingAds(filtered);
        } else if (key === 'SuspendedAds') {
            filtered = suspendedAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuspendedAds(filtered);
        } else if (key === 'SoldAds') {
            filtered = soldAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSoldAds(filtered);
        }
        setCurrentPage(1);
    };

    const getDisplayList = () => {
        if (searchQuery.length > 0) {
            if (key === 'ApprovedAds') {
                return filteredAds;
            } else if (key === 'PendingApproval') {
                return filteredPendingAds;
            } else if (key === 'SuspendedAds') {
                return filteredSuspendedAds;
            } else if (key === 'SoldAds') {
                return filteredSoldAds;
            }
            
        } else {
            if (key === 'ApprovedAds') {
                return ads.data;
            } else if (key === 'PendingApproval') {
                return pendingAdsList.data;
            } else if (key === 'SuspendedAds') {
                return suspendedAdsList.data;
            } else if (key === 'SoldAds') {
                return soldAdsList.data;
            }
        }
    };

    const displayList = getDisplayList();
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    const handleClose = () => setShow(false);
    const handleShow = async (ad) => {
        
        try {
            const response = await axios.get(route("admin.ads.show", ad.id));
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
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ads Listing</h2>}
            success={success}
            error={error}
        >
            <Head title="Ads Listing" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Ads Listing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">

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
                        <Tab eventKey="PendingApproval" title={
                            <>
                                <span>Pending Review</span> 
                                {pendingAdsList.data.length > 0 && (
                                    <span className="pending-approval-count">
                                        {pendingAdsList.data.length}
                                    </span>
                                )}
                            </>
                        }>
                            <AdTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                            />
                        </Tab>
                        <Tab eventKey="ApprovedAds" title="Active">
                            <AdTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                            />
                        </Tab>
                    
                        
                        <Tab eventKey="SuspendedAds" title="On Hold">
                            <AdTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                            />
                        </Tab>
                        
                        <Tab eventKey="SuspendedAds" title="Rejected">
                            <AdTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                            />
                        </Tab>
                        <Tab eventKey="SoldAds" title="Sold">
                            <AdTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                            />
                        </Tab>
                    </Tabs>
                   
                    {/* <!-- /.content --> */}
                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}

            {/* Display modal for ad details */}
            <ModalPopup show={show} handleClose={handleClose} size="lg" title="Ad Details">
              
                {data ? (
                    <AdView
                        collection={data}
                        handleClose={handleClose}
                        onSubmit={handleSubmit} // Pass handleSubmit function to AdView
                        keyVal={key}
                    />
                ) : (
                    'Failed fetching data...'
                )}
            </ModalPopup>
        </Authenticated>
    );
};


const AdTable = ({ displayList, startIdx, endIdx, handlePageChange, currentPage, itemsPerPage, handleShow, searchQuery, handleSearch }) => (
    <section className="content2">
        <div className="row">
            <div className="col-12">
                <div className="box">
                    <div className="box-body">
                        <PermissionAllow permission={'Ad Show'} message={'true'}>
                            <div className="mb-3 col-lg-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by ad name or user name"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                            <div className="table-responsive rounded card-table">
                                <Table className="table border-no" id="example1">
                                    <Thead>
                                        <Tr>
                                            <Th>#</Th>
                                            <Th>Ad</Th>
                                            <Th>City</Th>
                                            <Th className="text-end">Price</Th>
                                            <Th>Leads</Th>
                                            <Th>Type</Th>
                                            <Th>Purpose</Th>
                                            <Th>User</Th>
                                            {/* <Th>Last Modified</Th> */}
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                            {displayList.slice(startIdx, endIdx).map((ad) => (
                                                <Tr key={ad.id}>
                                                    <Td>
                                                        <Badge value={`#${ad.unique_code}`} bg="bg-dark" color='text-white' />
                                                    </Td>
                                                    <Td role="button" onClick={() => handleShow(ad)}>
                                                        <img
                                                            src={ad.main_picture}
                                                            className='w-25 rounded-5 '
                                                            alt={`Image`}
                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                        />
                                                        <span className='ms-2'> {ad.title} </span>
                                                    </Td>
                                                    <Td>
                                                        <small>{ad.city}</small>
                                                    </Td>
                                                    <Td className="text-end">{window.formatPrice(ad.price)}</Td>
                                                    <Td>
                                                        <Link className="text-decoration-none" href={route('admin.propery_leads_index', { ad: ad.id })}>
                                                            {ad.total_leads} 
                                                        </Link>
                                                    </Td>
                                                    <Td>{ad.property_type}</Td>
                                                    <Td>{ad.ad_purpose}</Td>
                                                    <Td>{ad.seller.firstname} {ad.seller.lastname}</Td>
                                                    {/* <Td>{window.formatDate(ad.created_at)}<br />{window.formatTime(ad.created_at)}</Td> */}
                                                    <Td>
                                                        <span onClick={() => handleShow(ad)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
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
);

export default Index;
