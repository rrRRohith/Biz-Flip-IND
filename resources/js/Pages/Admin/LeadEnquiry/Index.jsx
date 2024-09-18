import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import ModalPopup from '@/Components/ModalPopup';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Pagination } from '@mui/material';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import PermissionAllow from '@/Components/PermissionAllow';
export default function Index({ contactLeads, adLeads, auth, success = null, error = null }) {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filtereContactLeads, setFilteredContactLeads] = useState(contactLeads.data);
    const [filteredadLeads, setFilteredadLeads] = useState(adLeads.data);
    const [key, setKey] = useState('ContactLeads');

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        let filtered;
        if (key === 'ContactLeads') {
            filtered = contactLeads.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredContactLeads(filtered);
        } else if (key === 'AdLeads') {
            filtered = pendingAdsList.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredadLeads(filtered);
        }
        setCurrentPage(1);
    };

    const getDisplayList = () => {
        if (searchQuery.length > 0) {
            if (key === 'ContactLeads') {
                return filtereContactLeads;
            } else if (key === 'AdLeads') {
                return filteredadLeads;
            }

        } else {
            if (key === 'ContactLeads') {
                return contactLeads.data;
            } else if (key === 'AdLeads') {
                return pendingAdsList.data;
            }
        }
    };

    const displayList = getDisplayList();
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;

    const deletelead = (lead) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Leads?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {

            if (result.isConfirmed) {
                router.delete(route("admin.propery_lead_delete", lead.id))
            }
        })
    }

    const deleteInquiry = (inquiry) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Inquiry?',
            text: ' Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {

            if (result.isConfirmed) {
                router.delete(route("admin.contact_delete", inquiry.id))
            }
        })
      }

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const handleClose = () => setShow(false);
    const handleShowContact = async (lead) => {
        try {
            const response = await axios.get(route("admin.propery_lead_show", lead.id));

            const dataVal = `   <table className="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${response.data.firstname} ${response.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${response.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${response.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${response.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${response.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;


            setData(dataVal);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };


    const handleAdShow = async (inquiry) => {
        try {
            const response = await axios.get(route("admin.contact_show", inquiry.id));
        
            const dataVal = `   <table className="table fw-700">
                                    <tbody>
                                    <tr>
                                        <td><strong>Name</strong></td>
                                        <td>:</td>
                                        <td>${response.data.firstname} ${response.data.lastname}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>:</td>
                                        <td>${response.data.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone</strong></td>
                                        <td>:</td>
                                        <td>${response.data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Subject</strong></td>
                                        <td>:</td>
                                        <td>${response.data.subject}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Message</strong></td>
                                        <td>:</td>
                                        <td>${response.data.message}</td>
                                    </tr>
                                    </tbody>
                                </table>`;

           
            setData(dataVal);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };


    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Leads Listing</h2>}
        >
            <Head title="Ad Leads Listing" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Leads Listing</h4>
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
                        <Tab eventKey="ContactLeads" title="Contact Ads">
                            <LeadTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShowContact}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                deletelead={deletelead}
                            />
                        </Tab>
                    
                        <Tab eventKey="AdLeads" title="Ad Ads">
                            <LeadTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleAdShow}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                deletelead={deleteInquiry}
                            />
                        </Tab>
                    </Tabs>
                   


                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}

            <ModalPopup show={show} handleClose={handleClose} data={data} title="Lead Details" />

        </Authenticated>

    )

}

    const LeadTable = ({ displayList, startIdx, endIdx, handlePageChange, currentPage, itemsPerPage, handleShow, searchQuery, handleSearch, deletelead }) => (
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
                                        placeholder="Search by name..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="table-responsive rounded card-table">
                                    <Table className="table border-no" id="example1">
                                        <Thead>
                                            <Tr>
                                                <Th>#</Th>
                                                <Th>Property</Th>
                                                <Th>Agent</Th>
                                                <Th>Full Name</Th>
                                                <Th>Email</Th>
                                                <Th>Mobile</Th>
                                                <Th>Status</Th>
                                                <Th>Created At</Th>
                                                <Th></Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {displayList.slice(startIdx, endIdx).map((lead) => (
                                                <Tr key={lead.id} className="hover-primary">
                                                    <Td>{lead.id}</Td>
                                                    <Td>{lead.ad != null ? lead.ad.title : 'Unknown ad'}</Td>
                                                    <Td>{lead.seller.firstname} {lead.seller.lastname}</Td>
                                                    <Td>{lead.firstname} {lead.lastname}</Td>
                                                    <Td>{lead.email}</Td>
                                                    <Td>{lead.phone}</Td>
                                                    <Td>{lead.status}</Td>
                                                    <Td>{lead.created_at}</Td>
                                                    <Td>
                                                        <button onClick={(e) => handleShow(lead)} className="btn btn-transparent border-0">
                                                            <i className="bi bi-eye"></i>
                                                        </button>
                                                        <button onClick={(e) => deletelead(lead)} className="btn btn-transparent border-0">
                                                            <i className="bi bi-trash"></i>
                                                        </button>
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
