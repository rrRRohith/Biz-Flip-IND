// Create.jsx

import React, {useState,useEffect} from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import PermissionAllow from '@/Components/PermissionAllow';
import Form from 'react-bootstrap/Form';


export default function Create({ label_item ,queryParams = null, auth}) {
   
    const { data, setData, post, errors, reset } = useForm({
        color: label_item.color || '',
        name: label_item.name || '',
        status: label_item.status = 'published' ? 1 : 0 || 1,
        priority: label_item.priority || '', 
        _method: "PUT",
    });
   

        const handleSubmit = (e) => {
            e.preventDefault();
      
            post(route("admin.feature-label.update", label_item.id));
          };

         
    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Feature Label/Edit</h2>}
        >
            <Head title="Feature Label Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit Feature Label</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Feature Label Listing'}>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.feature-label.index')}>Feature Label</Link></li>
                                                </PermissionAllow>
                                                <li className="breadcrumb-item active" aria-current="page">Edit</li>
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
                                    <PermissionAllow permission={'Feature Label Edit'} message={true}>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                <div className="col-lg-9">
                                                        <div className="row1">
                                                            <div className="col-md-6 mb-4">
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
                                                            <div className="col-md-6 mb-4">
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
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Priority</InputLabel>
                                                                    <SelectOption
                                                                        onChange={(value) => handleChange("priority", value)}
                                                                        value={data.priority}
                                                                        defaultValue={data.priority}
                                                                    />
                                                                    <InputError message={errors.priority} className="mt-2 col-12" />

                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-4">
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
