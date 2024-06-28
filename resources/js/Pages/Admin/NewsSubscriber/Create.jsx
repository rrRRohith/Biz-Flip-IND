// Create.jsx

import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import DynamicMultiSelect from '@/Components/DynamicMultiSelect';
import Form from 'react-bootstrap/Form';

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        firstname : '',
        lastname : '',
        email_id : '',
        type_of_needed: [],
        status: 1,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Data to be submitted:', data);
        post(route('admin.subscribers.store'))
    };


    const handleChange = (key, value) => {
        setData(key, value);
              console.log('Data to be submitted:', data);
    };

    const options = [
        { value: 'Business', label: 'Business' },
        { value: 'Franchise', label: 'Franchise' },
        { value: 'Commrecial Real Estate', label: 'Commrecial Real Estate' },
        { value: 'Preconstruction', label: 'Preconstruction' },
        { value: 'Business Services', label: 'Business Services' },
      ]

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">News Subscriber/Create</h2>}
        >
            <Head title="News Subscriber Create" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Create News Subscriber</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.subscribers.index')}>News Subscriber</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Create</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'></div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">First Name</InputLabel>
                                                                    
                                                                    <TextInput
                                                                        id="firstname"
                                                                        type="text"
                                                                        name="firstname"
                                                                        className="form-control"
                                                                        value={data.firstname}
                                                                        onChange={(e) => handleChange("firstname", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.firstname} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Last Name</InputLabel>
                                                                    <TextInput
                                                                        id="lastname"
                                                                        type="text"
                                                                        name="lastname"
                                                                        className="form-control"
                                                                        value={data.lastname}
                                                                        onChange={(e) => handleChange("lastname", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.lastname} className="mt-2 col-12" />
                                                                </div>
                                                            </div>  
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Id</InputLabel>
                                                                    <TextInput
                                                                        id="email_id"
                                                                        type="email"
                                                                        name="email_id"
                                                                        className="form-control"
                                                                        value={data.email_id}
                                                                        onChange={(e) => handleChange("email_id", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.email_id} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Type of Needed</InputLabel>
                                                                    <DynamicMultiSelect
                                                                        onChange={(value) => handleChange("type_of_needed", value)}
                                                                        value={data.type_of_needed}
                                                                        options={options}
                                                                        name="type_of_needed"
                                                                    />
                                                                    <InputError message={errors.type_of_needed} className="mt-2 col-12" />

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group ps-3 ">
                                                                    <label className="fw-700  form-label">Status</label>
                                                                    <Form.Check
                                                                        type="switch"
                                                                        id="custom-switch"
                                                                        name="status"
                                                                        label="Publish"
                                                                        role="button"
                                                                        checked={data.status === 1}
                                                                        onChange={(e) => handleChange('status', e.target.checked ? 1 : 0)}

                                                                    />
                                                                    <InputError message={errors.status} className="mt-2 col-12" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="form-actions mt-10">
                                                <button type="submit" className="btn btn-success"> <i className="bi bi-check"></i> Save Data</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
