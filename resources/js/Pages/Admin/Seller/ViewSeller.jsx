
// ViewSeller.jsx
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import SlickSlider from '@/Components/SlickSlider';
import TabView from '@/Components/TabView';
import StatusBtn from '@/Components/StatusBtn';
import DynamicSelect from '@/Components/DynamicSelect';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Badge from '@/Components/Badge';

const ViewSeller = ({ collection, handleClose, onSubmit }) => {

    const [editingStatus, setEditingStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(collection.status);
    const [key, setKey] = useState('Profile');

    const { data, setData, post, errors, reset } = useForm({
        'status': collection.status || '0',
    });


    const statusOptions = [
        { value: '0', label: 'Pending/Inactive' },
        { value: '1', label: 'Active' },
        { value: '-1', label: 'Suspend' },
    ];

    console.log(collection)

    var defaultStatus = '';

    if (collection.status == 1) {
        defaultStatus = 'Active';
    }
    else if (collection.status == -1) {
        defaultStatus = 'Suspend';
    }
    else {
        defaultStatus = 'Pending/Inactive';
    }

    const handleStatusEdit = () => {
        setEditingStatus(true);
    };

    const handleStatusSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.sellers.status-update", collection.id), {
            preserveScroll: true,
            onSuccess: () => {
                setEditingStatus(false);
                onSubmit(); // Call onSubmit function passed from parent component
            },
        });
    };

    const handleStatusCancel = () => {
        setEditingStatus(false);
        setSelectedStatus(collection.status);
    };

    const handleChange = (selectedOption) => {
        setData('status', selectedOption);
        setSelectedStatus(selectedOption.value);
    };


    return (

        <div className='col-lg-12'>
            <div className='row  border-0'>
                <Tabs
                    id="subscription-plans-tabs"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="Profile" title={`Profile`}>
                        <div className='col-lg-12 mx-auto'>
                            <div className='row p-4 position-relative'>
                                <div className=' float-end me-20 '>
                                    
                                </div>
                                <div className='col-lg-4'>
                                    <div className='col-lg-12'>
                                        <img src={collection.picture} className='me-3 rounded-circle avatar-xxxl' onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} />
                                        <Link href={route('admin.sellers.edit', collection.id)} className='position-absolute' style={{ width:"30px",height:"30px",borderRadius:"25px" }}>
                                        <i className='bi bi-pencil-fill  text-primary' role='button'></i></Link>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <h5><span className='bi bi-person-fill fs-20 me-2'></span>{collection.full_name}</h5>
                                    <h6><span className='bi bi-envelope-fill fs-20 me-2'></span><a href={`tel:${collection.email}`}>{collection.email}</a></h6>
                                    <h6><span className='bi bi-phone-fill fs-20 me-2'></span><a href={`tel:${collection.phone}`}>{collection.phone}</a></h6>
                                    <h6><span className='bi bi-geo-alt-fill fs-20 me-2'></span>{collection.address},
                                        <span className=''> {collection.postalcode} {collection.city} {collection.province}</span></h6>
                                </div>
                                {collection.is_agent && 
                                <>    
                                    <div className='mt-20'>
                                        <h4 className='fw-bold'><u>Company Details</u></h4>
                                        <div className='col-lg-12'>
                                            <div className='row'>
                                                <div className='col-lg-4'>
                                                    <h5><span className='bi bi-buildings-fill fs-20 me-2'></span>{collection.company_name}</h5>
                                                    <h6><span className='bi bi-globe-europe-africa fs-20 me-2'></span>{collection.website}</h6>
                                                </div>
                                                <div className='col-lg-4'>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                }
                                
                                {/* <div className="col-lg-12 ">
                                    {!editingStatus ? (
                                        <>
                                            <StatusBtn status={collection.status} />
                                            <i className='bi bi-pencil-fill ms-2 text-primary' role='button' onClick={handleStatusEdit}></i>
                                        </>
                                    ) : (
                                        <form onSubmit={handleStatusSubmit}>
                                            <div className='text-center'>
                                                <DynamicSelect
                                                    onChange={handleChange}
                                                    value={data.status}
                                                    defaultValue={defaultStatus}
                                                    options={statusOptions}
                                                    isClearable={false}
                                                />
                                                <div className='mt-2'>
                                                    <button type='button' className="btn btn-link p-0" onClick={handleStatusCancel}>
                                                        <i className='bi bi-x-circle-fill fs-3 text-danger ms-2' role='button'></i>
                                                    </button>
                                                    <button type='submit' className='btn btn-link p-0'>
                                                        <i className='bi bi-check-circle-fill fs-3 text-success ms-2'></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div> */}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Ads" title={`Ads`}>
                        <>
                            {console.log(collection.ads)}
                        </>
                        <div className="table-responsive rounded card-table">
                            {collection.ads.length > 0 ?
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
                                                <Th>Created at</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {collection.ads.map((ad) => (
                                                <Tr key={ad.id}>
                                                    <Td>
                                                        <Badge value={`#${1000 + ad.id}`} bg="bg-dark" color='text-white' />
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
                                                            {ad.total_leads ?? 0}
                                                        </Link>
                                                    </Td>
                                                    <Td>{ad.property_type}</Td>
                                                    <Td>{ad.ad_purpose}</Td>
                                                    <Td>{window.formatDate(ad.created_at)}<br />{window.formatTime(ad.created_at)}</Td>
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
                    </Tab>

                    <Tab eventKey="Leads" title={`Leads`}>
                        <div className="table-responsive rounded card-table">
                            {collection.leads.length > 0 ?
                                <>
                                    <Table className="table border-no" id="example1">
                                        <Thead>
                                            <Tr>
                                                <Th>#</Th>
                                                <Th>Property</Th>
                                                <Th>Full Name</Th>
                                                <Th>Email</Th>
                                                <Th>Mobile</Th>
                                                <Th>Created At</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {collection.leads.map((lead) => (
                                                <Tr key={lead.id} className="hover-primary">
                                                    <Td>{lead.id}</Td>
                                                    <Td>{lead.ad != null ? lead.ad.title : 'Unknown ad'}</Td>
                                                    <Td>{lead.firstname} {lead.lastname}</Td>
                                                    <Td>{lead.email}</Td>
                                                    <Td>{lead.phone}</Td>
                                                    <Td> <>
                                                        {window.formatDate(lead.created_at)} <br />{window.formatTime(lead.created_at)}
                                                    </>
                                                    </Td>
                                                </Tr>
                                            ))}

                                        </Tbody>
                                    </Table>
                                </>
                                :
                                <>
                                    <div id='content' className='h-100 text-center'>
                                        <h5 className='fw-bold fs-4'>No leads found!</h5>
                                    </div>
                                </>
                            }
                        </div>

                    </Tab>
                </Tabs>

            </div>
        </div>

    );
};

ViewSeller.propTypes = {
    collection: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default ViewSeller;
