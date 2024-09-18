
// ViewSeller.jsx
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";
import SlickSlider from '@/Components/SlickSlider';
import TabView from '@/Components/TabView';
import StatusBtn from '@/Components/StatusBtn';
import DynamicSelect from '@/Components/DynamicSelect';

const ViewSeller = ({ collection, handleClose, onSubmit }) => {

    const [editingStatus, setEditingStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(collection.status);
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

                <div className='col-lg-12 mx-auto'>
                    <div className=' p-4'>
                        <h4 className='fw-bold'><u>Contact Person Details</u></h4>
                        <table className='border-0 '>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <img src={collection.picture} className='me-3 rounded-circle avatar-xxxl' onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} />
                                    </td>
                                    <td colSpan={10}>
                                        <table className='border-0 '>
                                            <tr>
                                                <td className="p-2">
                                                    <strong>Full Name</strong>
                                                </td>
                                                <td className="p-2">
                                                    <p className="mb-0">{collection.full_name}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">
                                                    <strong>Email</strong>
                                                </td>
                                                <td className="p-2">
                                                    <p className="mb-0">{collection.email}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">
                                                    <strong>Mobile No:</strong>
                                                </td>
                                                <td className="p-2">
                                                    <p className="mb-0">{collection.phone}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">
                                                    <strong>Address</strong>
                                                </td>
                                                <td className="p-2">
                                                    <p className="mb-0">{collection.address}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className='mt-20'>
                            <h4 className='fw-bold'><u>Company Details</u></h4>
                            <table className='border-0 '>
                                <tbody>
                                    <tr>

                                        <td colSpan={10}>
                                            <table className='border-0 '>
                                                <tr>
                                                    <td className="p-2">
                                                        <strong>Company Name</strong>
                                                    </td>
                                                    <td className="p-2">
                                                        <p className="mb-0">{collection.company_name}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2">
                                                        <strong>Company Address</strong>
                                                    </td>
                                                    <td className="p-2">
                                                        <p className="mb-0">{collection.full_address}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2">
                                                        <strong>Website</strong>
                                                    </td>
                                                    <td className="p-2">
                                                        <p className="mb-0">{collection.website}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2">
                                                        <strong>Business Type</strong>
                                                    </td>
                                                    <td className="p-2">
                                                        <p className="mb-0">{collection.business_type}</p>
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
                                                <tr>
                                                    <td className="p-2">
                                                        <strong>Status</strong>
                                                    </td>
                                                    <td className="p-2">
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
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
