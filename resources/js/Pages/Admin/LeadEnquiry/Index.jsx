import React, { useState } from 'react';

import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import ModalPopup from '@/Components/ModalPopup';
import axios from 'axios';


export default function Index({ Leads, auth, success = null, error = null }) {
   

    const deletelead = (lead) => {
        if (!window.confirm("Are you sure you want to delete this Leads?")) {
          return;
        }
        router.delete(route("admin.propery_lead_delete", lead.id))
      }

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = async (lead) => {
        try {
            const response = await axios.get(route("admin.propery_lead_show", lead.id));
        
            const dataVal = `   <table class="table fw-700">
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
                                        <h4 className="page-title">Ad Leads Listing</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                </div>
                            </div>
                        </div>

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
                                                        <th>Property</th>
                                                        <th>Agent</th>
                                                        <th>Full Name</th>
                                                        <th>Email</th>
                                                        <th>Mobile</th>
                                                        <th>Status</th>
                                                        <th>Created At</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                {Leads.data.map((lead) => (
                                                
                                                    <tr key={lead.id} className="hover-primary">
                                                        <td>{lead.id}</td>
                                                        <td>{lead.ad != null ? lead.ad.title : 'Unknown ad'}</td>
                                                        <td>{lead.seller.firstname} {lead.seller.lastname}</td>
                                                        <td>{lead.firstname} {lead.lastname}</td>
                                                        <td>{lead.email}</td>
                                                        <td>{lead.phone}</td>
                                                        <td>{lead.status}</td>
                                                        <td>{lead.created_at}</td>
                                                        <td>
                                                            <button onClick={(e) => handleShow(lead)} className="btn btn-transparent border-0">
                                                                <i className="bi bi-eye"></i>
                                                            </button>
                                                            <button onClick={(e) => deletelead(lead)} className="btn btn-transparent border-0">
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}

                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}

            <ModalPopup show={show} handleClose={handleClose} data={data}  title="Lead Details" />

        </Authenticated>

    )
}