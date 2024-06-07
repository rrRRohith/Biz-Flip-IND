import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Head, Link, useForm } from "@inertiajs/react";
import SlickSlider from '@/Components/SlickSlider';
import TabView from '@/Components/TabView';
import StatusBtn from '@/Components/StatusBtn';
import DynamicSelect from '@/Components/DynamicSelect';

const AdView = ({ data }) => {
    const { data: formData, setData, post, errors, reset } = useForm({
        'status': data.status || '0',
        '_method' : "PUT"
    });

    const images = data.images || [];
    const options = [
        { title: 'Details', content: 'test' },
        { title: 'Address', content: 'test' },
        { title: 'Additional Info', content: 'test' },
        { title: 'SEO Details', content: 'test' },
        { title: 'Leads', content: 'test' },
    ];
    const statusOptions = [
        { value: '0', label: 'Pending' },
        { value: '1', label: 'Publish' },
        { value: '-1', label: 'Suspend' },
        { value: '3', label: 'Inactive' },
    ];

    const [editingStatus, setEditingStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(data.status);
    const defaultStatus = statusOptions.find(option => option.value === data.status);

    const handleStatusEdit = () => {
        setEditingStatus(true);
    };

    const handleStatusSubmit = (e) => {
        e.preventDefault();
        post(route("admin.ads.update", data.id), {
            preserveScroll: true,
            onSuccess: () => setEditingStatus(false),
        });
        // setIsEditing(false);
    };

    const handleStatusCancel = () => {
        setEditingStatus(false);
        setSelectedStatus(data.status);
    };

    const handleChange = (selectedOption) => {
        setData('status', selectedOption.value);
        setSelectedStatus(selectedOption.value);
    };

    return (
        <>
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <SlickSlider images={images} slidesToShow={1} dots={true} />
                    </div>
                    <div className='col-lg-8'>
                        <h2>{data.title}</h2>
                        <table className='border-0 '>
                            <tbody>
                                <tr>
                                    <td className="p-2">
                                        <strong>Price</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{window.formatPrice(data.price)}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <strong>Type/Purpose</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{data.property_type} / {data.ad_purpose}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <strong>Seller</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{data.seller.firstname} {data.seller.lastname}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">
                                        <strong>Created Date</strong>
                                    </td>
                                    <td className="p-2">
                                        <p className="mb-0">{window.formatDateTime(data.created_at)}</p>
                                    </td>
                                </tr>
                                {data.updated_at && (
                                    <tr>
                                        <td className="p-2">
                                            <strong>Last Modified</strong>
                                        </td>
                                        <td className="p-2">
                                            <p className="mb-0">{window.formatDateTime(data.updated_at)}</p>
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
                                                <StatusBtn status={data.status} />
                                                <i className='bi bi-pencil-fill ms-2 text-primary' role='button' onClick={handleStatusEdit}></i>
                                            </>
                                        ) : (
                                            <form onSubmit={handleStatusSubmit}>
                                                <div className='text-center'>
                                                    <DynamicSelect
                                                        onChange={handleChange}
                                                        value={statusOptions.find(option => option.value === selectedStatus)}
                                                        defaultValue={defaultStatus}
                                                        options={statusOptions}
                                                     
                                                    />
                                                    <div className='mt-2'>
                                                        <button className="btn btn-link p-0">
                                                            <i  className='bi bi-x-circle-fill fs-3 text-danger ms-2' role='button' onClick={handleStatusCancel}></i>
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
        </>
    );
};

AdView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AdView;
