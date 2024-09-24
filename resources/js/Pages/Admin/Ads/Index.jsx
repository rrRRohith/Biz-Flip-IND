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


const Index = ({ ads, pendingAdsList, suspendedAdsList, soldAdsList, onHoldAdsList, categories, auth }) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQuery2, setSearchQuery2] = useState('');
    
    const [filteredAds, setFilteredAds] = useState(ads.data);
    const [filteredPendingAds, setFilteredPendingAds] = useState(pendingAdsList.data);
    const [filteredSuspendedAds, setFilteredSuspendedAds] = useState(suspendedAdsList.data);
    const [filteredSoldAds, setFilteredSoldAds] = useState(soldAdsList.data);
    const [filteredHoldAds, setFilteredHoldAds] = useState(onHoldAdsList.data);
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
                ad.title.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.firstname?.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.city?.toLowerCase().includes(value.toLowerCase()) 
            );
            setFilteredAds(filtered);
        } else if (key === 'PendingApproval') {
            filtered = pendingAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.firstname?.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.city?.toLowerCase().includes(value.toLowerCase()) 
            );
            setFilteredPendingAds(filtered);
        } else if (key === 'SuspendedAds') {
            filtered = suspendedAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.firstname?.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.city?.toLowerCase().includes(value.toLowerCase()) 
            );
            setFilteredSuspendedAds(filtered);
        } else if (key === 'HoldAds') {
            filtered = onHoldAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.firstname?.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.city?.toLowerCase().includes(value.toLowerCase()) 
            );
            setFilteredHoldAds(filtered);
        } else if (key === 'SoldAds') {
            filtered = soldAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.firstname?.toLowerCase().includes(value.toLowerCase()) ||  
                ad.seller.city?.toLowerCase().includes(value.toLowerCase()) 
            );
            setFilteredSoldAds(filtered);
        }
        setCurrentPage(1);
    };

    
    const handleSearchType = (e) => {
        const value2 = e.target.value;
        setSearchQuery2(value2);

        let filtered;
        if (key === 'ApprovedAds') {
            filtered = ads.data.filter(ad =>
                ad.ad_purpose.toLowerCase().includes(value2.toLowerCase()) ||  
                ad.business_category.label?.toLowerCase().includes(value2.toLowerCase())
            );
            setFilteredAds(filtered);
        } else if (key === 'PendingApproval') {
            filtered = pendingAdsList.data.filter(ad =>
                ad.ad_purpose.toLowerCase().includes(value2.toLowerCase()) ||  
                ad.business_category.label?.toLowerCase().includes(value2.toLowerCase()) 
            );
            setFilteredPendingAds(filtered);
        } else if (key === 'SuspendedAds') {
            filtered = suspendedAdsList.data.filter(ad =>
                ad.ad_purpose.toLowerCase().includes(value2.toLowerCase()) ||  
                ad.business_category.label?.toLowerCase().includes(value2.toLowerCase()) 
            );
            setFilteredSuspendedAds(filtered);
        } else if (key === 'HoldAds') {
            filtered = onHoldAdsList.data.filter(ad =>
                ad.ad_purpose.toLowerCase().includes(value2.toLowerCase()) ||  
                ad.business_category.label?.toLowerCase().includes(value2.toLowerCase()) 
            );
            setFilteredHoldAds(filtered);
        } else if (key === 'SoldAds') {
            filtered = soldAdsList.data.filter(ad =>
                ad.ad_purpose.toLowerCase().includes(value2.toLowerCase()) ||  
                ad.business_category.label?.toLowerCase().includes(value2.toLowerCase()) 
            );
            setFilteredSoldAds(filtered);
        }
        setCurrentPage(1);
    };


    const getDisplayList = () => {
        if (searchQuery.length > 0 || searchQuery2.length > 0) {
            if (key === 'ApprovedAds') {
                return filteredAds;
            } else if (key === 'PendingApproval') {
                return filteredPendingAds;
            } else if (key === 'SuspendedAds') {
                return filteredSuspendedAds;
            } else if (key === 'SoldAds') {
                return filteredSoldAds;
            } else if (key === 'HoldAds') {
                return filteredHoldAds;
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
            } else if (key === 'HoldAds') {
                return onHoldAdsList.data;
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
                                        <div className="d-flex flex-column">
                                            <h4 className="page-title">Ads Listing</h4>
                                            <div className="d-inline-block align-items-center mt-2">
                                                <nav>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                        <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.ads.index')}>Ads</Link></li>

                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
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
                                categories={categories}
                                handleSearchType={handleSearchType}
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
                                categories={categories}
                                handleSearchType={handleSearchType}
                            />
                        </Tab>


                        <Tab eventKey="HoldAds" title="On Hold">
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
                                categories={categories}
                                handleSearchType={handleSearchType}
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
                                categories={categories}
                                handleSearchType={handleSearchType}
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
                                categories={categories}
                                handleSearchType={handleSearchType}
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


const AdTable = ({ displayList, startIdx, endIdx, handlePageChange, currentPage, itemsPerPage, handleShow, searchQuery, handleSearch, categories, handleSearchType }) => (


    <section className="content2">
        <div className="row">
            <div className="col-12">
                <div className="box">
                    <div className="box-body">
                        <PermissionAllow permission={'Ad Show'} message={'true'}>
                            <div className='row'>
                                <div className="mb-3 col-lg-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by ad name, city or user name"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="mb-3 col-lg-2 form-group">
                                    <label className='fw-700 fs-16 form-label form-group__label'>Purpose</label>
                                    <select onChange={handleSearchType} name="type" className='form-control select-option' style={{ WebkitAppearance: "auto !important" }}>
                                        <option value={'all'}>All</option>
                                        <option value={'sale'}>Sale</option>
                                        <option value={'buy'}>Buy</option>
                                    </select>
                                </div>

                                {/* <div className="mb-3 col-lg-2 form-group">
                                    <label className='fw-700 fs-16 form-label form-group__label'>Category</label>
                                    <select name="type" className='form-control select-option'>
                                        <option value="all">All</option>
                                        {categories && categories.data.length > 0 &&
                                            categories.data.map((category) => (

                                                <option key={category.id} value={category.slug}>

                                                    {category.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div> */}
                            </div>

                            <div className="table-responsive rounded card-table">
                                {displayList.length > 0 ?
                                    <>
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
                                                    <Th>Created at</Th>
                                                    <Th></Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {displayList.slice(startIdx, endIdx).map((ad) => (
                                                    <Tr key={ad.id}>
                                                        <Td>
                                                            <Badge value={`#${1000+ad.id}`} bg="bg-dark" color='text-white' />
                                                        </Td>
                                                        <Td role="button" onClick={() => handleShow(ad)}>
                                                            <div className='d-flex'>
                                                                <img
                                                                    src={ad.main_picture}
                                                                    className='w-30 rounded-5 '
                                                                    alt={`Image`}
                                                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                />
                                                                <span className='ms-2'> {ad.title} </span>
                                                            </div>
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
                                                        <Td>{window.formatDate(ad.created_at)}<br />{window.formatTime(ad.created_at)}</Td>
                                                        <Td>
                                                            <span onClick={() => handleShow(ad)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
                                                        </Td>
                                                    </Tr>
                                                ))}
                                            </Tbody>
                                        </Table>
                                    </>
                                    :
                                    <>
                                        <div id='content' className='h-100 text-center'>
                                            <h5 className='fw-bold fs-4'>No ads found!</h5>
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

export default Index;
