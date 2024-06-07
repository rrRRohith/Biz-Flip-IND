import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import StatusBtn from '@/Components/StatusBtn';
import ModalPopup from '@/Components/ModalPopup';
import axios from 'axios';

import { Dropdown } from '@mui/joy';


export default function Index({ ads, auth, success = null, error = null }) {
 
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async (ads) => {
        try {
            const response = await axios.get(route("admin.ads.show", ads.id));
        
        //     // const dataVal = `   <table class="table fw-700">
        //     //                         <tbody>
        //     //                         <tr>
        //     //                             <td><strong>Name</strong></td>
        //     //                             <td>:</td>
        //     //                             <td>${response.data.firstname} ${response.data.lastname}</td>
        //     //                         </tr>
        //     //                         <tr>
        //     //                             <td><strong>Email</strong></td>
        //     //                             <td>:</td>
        //     //                             <td>${response.data.email}</td>
        //     //                         </tr>
        //     //                         <tr>
        //     //                             <td><strong>Phone</strong></td>
        //     //                             <td>:</td>
        //     //                             <td>${response.data.phone}</td>
        //     //                         </tr>
        //     //                         <tr>
        //     //                             <td><strong>Subject</strong></td>
        //     //                             <td>:</td>
        //     //                             <td>${response.data.subject}</td>
        //     //                         </tr>
        //     //                         <tr>
        //     //                             <td><strong>Message</strong></td>
        //     //                             <td>:</td>
        //     //                             <td>${response.data.message}</td>
        //     //                         </tr>
        //     //                         </tbody>
        //     //                     </table>`;

           
        //     // setData(dataVal);
            setShow(true);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ads</h2>}
            success={success}
            error={error}
        >
            <Head title="Ads List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Ads</h4>
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
                                        <PermissionAllow permission={'Support Ticket Listing'} message={'true'}>
                                            <div className="table-responsive rounded card-table">
                                                <table className="table border-no" id="example1">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Image</th>
                                                            <th>Title</th>
                                                            <th>Address</th>
                                                            <th>Price</th>
                                                            <th>Leads</th>
                                                            <th>Type</th>
                                                            <th>Purpose</th>
                                                            <th>Seller</th>
                                                            <th>Status</th>
                                                            <th>Last Modified</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                           
                                                        {ads.data.length ? (
                                                            <>  
                                                             {ads.data.map((ad) => (
                                                                    <React.Fragment key={ad.id}>
                                                                        <tr>
                                                                            <td>
                                                                                {ad.id}
                                                                            </td>
                                                                            <td>
                                                                            <img
                                                                                src={ad.main_picture}
                                                                                className='w-50 rounded-5 '
                                                                                alt={`Image`}
                                                                                onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                            />
                                                                            </td>
                                                                            <td>
                                                                                {ad.title}
                                                                            </td>
                                                                            <td>
                                                                                {ad.address}
                                                                                <div className="small">
                                                                                    <small>{ad.city}</small>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                $ {ad.price}
                                                                            </td>
                                                                            <td>
                                                                                <Link className="text-decoration-none" href={route('admin.propery_leads_index', { ad: ad.id })}>{ad.total_leads} leads</Link>
                                                                            </td>
                                                                            <td>
                                                                            {ad.property_type}
                                                                            </td>
                                                                            <td>
                                                                            {ad.ad_purpose}
                                                                            </td>
                                                                            <td>
                                                                                {ad.seller.firstname} {ad.seller.lastname}
                                                                            </td>
                                                                            <td>
                                                                                {ad.date_text}
                                                                            </td>
                                                                            <td>
                                                                                <StatusBtn status={ad.status}></StatusBtn>
                                                                            </td>
                                                                            <td>
                                                                                <span onClick={(e) => handleShow(ad)} className="btn btn-transparent"><i className="bi bi-eye"></i></span>
                                                                            </td>
                                                                        </tr>
                                                                    </React.Fragment>
                                                                ))}
                                                            </>
                                                        ) : (<>
                                                            <tr>
                                                                <td className="text-center" colSpan="100">
                                                                    No records found..
                                                                </td>
                                                            </tr>
                                                        </>)}


                                                    </tbody>
                                                </table>
                                            </div>
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

            

            <ModalPopup show={show} handleClose={handleClose} size="lg"  title="Ad Details" />
        </Authenticated>

    )
}