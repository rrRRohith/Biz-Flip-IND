import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Head, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import ModalPopup from '@/Components/ModalPopup';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Pagination } from '@mui/material';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PermissionAllow from '@/Components/PermissionAllow';

const LeadTable = ({ displayList, startIdx, endIdx, handlePageChange, currentPage, itemsPerPage, handleShow, searchQuery, handleSearch, deleteLead }) => (
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
                                                <Td onClick={() => handleShow(lead)}>{lead.ad ? lead.ad.title : 'Unknown ad'}</Td>
                                                <Td onClick={() => handleShow(lead)}>{lead.seller && `${lead.seller.firstname} ${lead.seller.lastname}`}</Td>
                                                <Td onClick={() => handleShow(lead)}>{lead.firstname} {lead.lastname}</Td>
                                                <Td onClick={() => handleShow(lead)}>{lead.email}</Td>
                                                <Td onClick={() => handleShow(lead)}>{lead.phone}</Td>
                                                <Td onClick={() => handleShow(lead)}>{lead.status}</Td>
                                                <Td onClick={() => handleShow(lead)}>{lead.created_at}</Td>
                                                <Td>
                                                    <button onClick={() => handleShow(lead)} className="btn btn-transparent border-0">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                    <button onClick={() => deleteLead(lead)} className="btn btn-transparent border-0">
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

const ContactLeadTable = ({ displayList, startIdx, endIdx, handlePageChange, currentPage, itemsPerPage, handleShow, searchQuery, handleSearch, deleteLead }) => (
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
                                            <Th>Full Name</Th>
                                            <Th>Email</Th>
                                            <Th>Mobile</Th>
                                            <Th>Subject</Th>
                                            <Th>Created At</Th>
                                            <Th></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {displayList.slice(startIdx, endIdx).map((inquiry) => (
                                            <Tr key={inquiry.id} className="hover-primary">
                                                <Td>{inquiry.id}</Td>
                                                <Td  onClick={() => handleShow(inquiry)}>{inquiry.firstname} {inquiry.lastname}</Td>
                                                <Td  onClick={() => handleShow(inquiry)}>{inquiry.email}</Td>
                                                <Td  onClick={() => handleShow(inquiry)}>{inquiry.phone}</Td>
                                                <Td  onClick={() => handleShow(inquiry)}>{inquiry.subject}</Td>
                                                <Td  onClick={() => handleShow(inquiry)}>{inquiry.created_at}</Td>
                                                <Td>
                                                    <button onClick={() => handleShow(inquiry)} className="btn btn-transparent border-0">
                                                        <i className="bi bi-eye"></i>
                                                    </button>
                                                    <button onClick={() => deleteLead(inquiry)} className="btn btn-transparent border-0">
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

export default function Index({ contactLeads, adLeads, auth, success = null, error = null }) {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredContactLeads, setFilteredContactLeads] = useState(contactLeads.data);
    const [filteredAdLeads, setFilteredAdLeads] = useState(adLeads.data);
    const [key, setKey] = useState('ContactLeads');
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

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
            filtered = adLeads.data.filter(ad =>
                ad.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredAdLeads(filtered);
        }
        setCurrentPage(1);
    };

    const getDisplayList = () => {
        if (searchQuery.length > 0) {
            return key === 'ContactLeads' ? filteredContactLeads : filteredAdLeads;
        } else {
            return key === 'ContactLeads' ? contactLeads.data : adLeads.data;
        }
    };

    const displayList = getDisplayList();
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;

    const deleteLead = (lead) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Lead?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.propery_lead_delete", lead.id));
            }
        });
    };

    const deleteInquiry = (inquiry) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Inquiry?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("admin.contact_delete", inquiry.id));
            }
        });
    };

    const handleClose = () => setShow(false);

    const handleShowContact = async (lead) => {
        try {
            const response = await axios.get(route("admin.contact_show", lead.id));
           
            const dataVal = `
                <table class="table fw-700">
                    <tbody>
                        <tr><td><strong>Name</strong></td><td>:</td><td>${response.data.firstname} ${response.data.lastname}</td></tr>
                        <tr><td><strong>Email</strong></td><td>:</td><td>${response.data.email}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>:</td><td>${response.data.phone}</td></tr>
                        <tr><td><strong>Subject</strong></td><td>:</td><td>${response.data.subject}</td></tr>
                        <tr><td><strong>Message</strong></td><td>:</td><td>${response.data.message}</td></tr>
                    </tbody>
                </table>`;
            setData(dataVal);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleShowAd = async (inquiry) => {
        try {
            const response = await axios.get(route("admin.propery_lead_show", inquiry.id));
            const dataVal = `
                <table class="table fw-700">
                    <tbody>
                        <tr><td><strong>Name</strong></td><td>:</td><td>${response.data.firstname} ${response.data.lastname}</td></tr>
                        <tr><td><strong>Email</strong></td><td>:</td><td>${response.data.email}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>:</td><td>${response.data.phone}</td></tr>
                        <tr><td><strong>Subject</strong></td><td>:</td><td>${response.data.subject}</td></tr>
                        <tr><td><strong>Message</strong></td><td>:</td><td>${response.data.message}</td></tr>
                    </tbody>
                </table>`;
            setData(dataVal);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <Authenticated user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Leads Listing</h2>}>
            <Head title="Ad Leads Listing" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Leads Listing</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs id="uncontrolled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                        <Tab eventKey="ContactLeads" title="Contact Leads">
                            <ContactLeadTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShowContact}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                deleteLead={deleteInquiry}
                            />
                        </Tab>
                        <Tab eventKey="AdLeads" title="Ad Leads">
                            <LeadTable
                                displayList={displayList}
                                startIdx={startIdx}
                                endIdx={endIdx}
                                handlePageChange={handlePageChange}
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                handleShow={handleShowAd}
                                searchQuery={searchQuery}
                                handleSearch={handleSearch}
                                deleteLead={deleteLead}
                            />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <ModalPopup show={show} handleClose={handleClose} data={data} title="Lead Details" />
        </Authenticated>
    );
}
