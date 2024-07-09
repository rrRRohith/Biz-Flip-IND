// AdView.jsx

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";
import SlickSlider from '@/Components/SlickSlider';
import TabView from '@/Components/TabView';
import StatusBtn from '@/Components/StatusBtn';
import DynamicSelect from '@/Components/DynamicSelect';

const AdView = ({ collection, handleClose, onSubmit }) => {
    
    const [editingStatus, setEditingStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(collection.status);
    const { data, setData, post, errors, reset } = useForm({
        'status': collection.status || '0',
        '_method' : "PUT"
    });

    const images = collection.images || [];
    const options = [
        { title: 'Details', content: collection.description+ '<br>'
                                     
         },
         
        { title: 'More Information', content:   `<table class="table">
                                                    <tr>
                                                        <th>
                                                        Addess
                                                        </th>
                                                        <td>
                                                            ${collection.address}, <br>
                                                            ${collection.postalcode}, 
                                                            ${collection.city}, <br>
                                                            ${collection.province}.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Space
                                                        </th>
                                                        <td>
                                                            ${collection.space}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Price
                                                        </th>
                                                        <td>
                                                            ${window.formatPrice(collection.price)}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Ad Viewed
                                                        </th>
                                                        <td>
                                                            ${collection.total_views}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                        Total Leads
                                                        </th>
                                                        <td>
                                                            ${collection.total_leads}
                                                        </td>
                                                    </tr>
                                                </table>`
         },
    ];
    

    const statusOptions = [
        { value: '0', label: 'Pending' },
        { value: '1', label: 'Publish' },
        { value: '-1', label: 'Suspend' }
    ];

    var defaultStatus = '';

    if(collection.status == 1){
        defaultStatus = 'Publish';
    }
    else if(collection.status == -1){
        defaultStatus = 'Suspend';
    }
    else if(collection.status == 3){
        defaultStatus = 'Inactive';
    }
    else{
        defaultStatus = 'Pending';
    }


    const handleStatusEdit = () => {
        setEditingStatus(true);
    };
  <StatusBtn status={collection.status} />
    const handleStatusSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("admin.ads.update", collection.id), {
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
                <div className='row'>
                    <div className='col-lg-4'>
                        <SlickSlider images={images} slidesToShow={1} dots={true} />
                    </div>
                    <div className='col-lg-8'>
                        <h2>{collection.title}</h2>
                        <table className='border-0 '>
                            <tbody>
                                <tr>
                                    <td className="p-2">
                                        <strong>Price</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{window.formatPrice(collection.price)}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <strong>Type/Purpose</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{collection.property_type} / {collection.ad_purpose}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <strong>Seller</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{collection.seller.firstname} {collection.seller.lastname}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <strong>Created Date</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{window.formatDateTime(collection.created_at)}</p>
                                    </td>
                                </tr>
                                {collection.updated_at && (
                                    <tr>
                                        <td className="p-2">
                                            <strong>Last Modified</strong>
                                        </td>
                                        <td className="p-2">
                                            <p className="mb-0">{window.formatDateTime(collection.updated_at)}</p>
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="p-2">
                                        <strong>Status</strong>
                                    </td>
                                    <td className="p-2">
                                        {!editingStatus ? (
                                            <>
                                                <StatusBtn status={collection.status} />
                                                {collection.status !=   2 ? 
                                                <i className='bi bi-pencil-fill ms-2 text-primary' role='button' onClick={handleStatusEdit}></i> :
                                                 ''
                                                }
                                                
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-12 mt-50'>
                       
                        <TabView options={options} />
                    </div>
                </div>
            </div>
    );
};

AdView.propTypes = {
    collection: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default AdView;
