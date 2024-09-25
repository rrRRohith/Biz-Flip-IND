
import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import ModalPopup from '@/Components/ModalPopup';
import AdView from '@/Pages/Admin/Ads/AdView';
import StatusBtn from '@/Components/StatusBtn';
import axios from 'axios';
import Badge from '@/Components/Badge';

const PendingApprovel = ({ ads, auth, success = null, error = null }) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);

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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ads Pending Approvel</h2>}
            success={success}
            error={error}
        >
            <Head title="Ads Pending Approvel List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Ads Pending Approvel</h4>
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
                                                            <th>User</th>
                                                            <th>Status</th>
                                                            {/* <th>Last Modified</th> */}
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {ads.data.length ? (
                                                            ads.data.map((ad) => (
                                                                <tr key={ad.id}>
                                                                    <td>
                                                                        <Badge value={`#${ad.unique_code}`} bg="bg-dark" color='text-white' />
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            src={ad.main_picture}
                                                                            className='w-50 rounded-5 '
                                                                            alt={`Image`}
                                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                        />
                                                                    </td>
                                                                    <td>{ad.title}</td>
                                                                    <td>
                                                                        {ad.address}
                                                                        <div className="small">
                                                                            <small>{ad.city}</small>
                                                                        </div>
                                                                    </td>
                                                                    <td>{window.formatPrice(ad.price)}</td>
                                                                    <td>
                                                                        <Link className="text-decoration-none" href={route('admin.propery_leads_index', { ad: ad.id })}>
                                                                            {ad.total_leads} leads
                                                                        </Link>
                                                                    </td>
                                                                    <td>{ad.property_type}</td>
                                                                    <td>{ad.ad_purpose}</td>
                                                                    <td>{ad.seller.firstname} {ad.seller.lastname}</td>
                                                                    {/* <td>{ad.date_text}</td> */}
                                                                    <td>
                                                                        <StatusBtn status={ad.status}></StatusBtn>
                                                                    </td>
                                                                    <td>
                                                                        <span onClick={() => handleShow(ad)} className="btn btn-transparent p-2 px-3"><i className="bi bi-eye"></i></span>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td className="text-center" colSpan="100">
                                                                    No records found..
                                                                </td>
                                                            </tr>
                                                        )}
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

            {/* Display modal for ad details */}
            <ModalPopup show={show} handleClose={handleClose} size="lg" title="Ad Details">
                {data ? (
                    <AdView
                        collection={data}
                        handleClose={handleClose}
                        onSubmit={handleSubmit} // Pass handleSubmit function to AdView
                    />
                ) : (
                    'Failed fetching data...'
                )}
            </ModalPopup>
        </Authenticated>
    );
};

export default PendingApprovel;
