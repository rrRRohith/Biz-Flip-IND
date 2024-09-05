
import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import Form from 'react-bootstrap/Form';
import PermissionAllow from '@/Components/PermissionAllow';


export default function Edit({ role, permissionsList, queryParams = null, auth }) {

    const initialPermissions = role.permissions ? Object.keys(role.permissions).map(id => parseInt(id)) : [];

    const { data, setData, post, errors, reset } = useForm({
        permissions: initialPermissions || [],
        name: role.name || '',
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("admin.role-responsibilities.update", role.id));
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const isReadOnly = role.name === 'admin' || role.name === 'seller' || role.name === 'customer';

    const handleCheckboxChange = (permissionId) => {
        let updatedPermissions;
        if (data.permissions.includes(permissionId)) {
            updatedPermissions = data.permissions.filter(id => id !== permissionId);
        } else {
            updatedPermissions = [...data.permissions, permissionId];
        }
        setData('permissions', updatedPermissions);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Role & Responsibilities/Edit</h2>}
        >
            <Head title="Role & Responsibilities Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit Role & Responsibilities</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.role-responsibilities.index')}>Role & Responsibilities</Link></li>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Name</InputLabel>
                                                                    <TextInput
                                                                        id="name"
                                                                        type="text"
                                                                        name="name"
                                                                        className="form-control"
                                                                        value={data.name}
                                                                        onChange={isReadOnly ? null : (e) => handleChange("name", e.target.value)}
                                                                        readOnly={isReadOnly}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.name} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <h5 className="mb-25"><u>Allow Permissions</u></h5>
                                                        <InputError message={errors.permissions} className="mt-2 col-12" />
                                                        {Object.keys(permissionsList).map((sectionKey) => (
                                                            <div key={sectionKey}>
                                                                <h6 className="fw-bold">{sectionKey}</h6>
                                                                <div className="row my-3">
                                                                    {permissionsList[sectionKey].map((permission) => (
                                                                        <div className="col-lg-2 col-6" key={permission.id}>
                                                                            <Form.Check
                                                                                type="checkbox"
                                                                                id={`default-checkbox-${permission.id}`}
                                                                                label={permission.name}
                                                                                name="permissions[]"
                                                                                checked={data.permissions.includes(permission.id)}
                                                                                onChange={() => handleCheckboxChange(permission.id)}
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
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
