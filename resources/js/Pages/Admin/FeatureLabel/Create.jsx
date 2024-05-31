// Create.jsx

import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import PermissionAllow from '@/Components/PermissionAllow';

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        color: '',
        name: '',
        status: '1', // Default status to '1' (Published)
        priority: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Data to be submitted:', data);
        post(route('admin.feature-label.store'))
    };


    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Feature Label/Create</h2>}
        >
            <Head title="Feature Label Create" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Create Feature Label</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Feature Label Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.feature-label.index')}>Feature Label</Link></li>
                                                </PermissionAllow>
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
                                    <PermissionAllow permission={'Feature Label Create'} message={true}>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Name</InputLabel>
                                                                    <TextInput
                                                                        id="name"
                                                                        type="text"
                                                                        name="name"
                                                                        className="form-control"
                                                                        value={data.name}
                                                                        onChange={(e) => handleChange("name", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.name} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Color</InputLabel>
                                                                    <TextInput
                                                                        id="color"
                                                                        type="color"
                                                                        name="color"
                                                                        className="form-control"
                                                                        value={data.color}
                                                                        onChange={(e) => handleChange("color", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.color} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Priority</InputLabel>
                                                                    <SelectOption
                                                                        onChange={(value) => handleChange("priority", value)}
                                                                        value={data.priority}
                                                                    />
                                                                    <InputError message={errors.priority} className="mt-2 col-12" />

                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <label className="fw-700 fs-16 form-label">Status</label>
                                                                    <div className="radio-list">
                                                                        <RadioButtonLabel
                                                                            name="status"
                                                                            onChange={(value) => handleChange("status", value)}
                                                                            value="1"
                                                                            checked={data.status === "1"}
                                                                            label="Published"
                                                                        />
                                                                        <RadioButtonLabel
                                                                            name="status"
                                                                            onChange={(value) => handleChange("status", value)}
                                                                            value="0"
                                                                            checked={data.status === "0"}
                                                                            label="Draft"
                                                                        />
                                                                        <InputError message={errors.status} className="mt-2 col-12" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="form-actions mt-10">
                                                <button type="submit" className="btn btn-primary"> <i className="bi bi-check"></i> Save Data</button>
                                            </div>
                                        </form>
                                    </PermissionAllow>
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
