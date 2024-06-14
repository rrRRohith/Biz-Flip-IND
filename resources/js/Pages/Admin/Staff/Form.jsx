
import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import Select from 'react-select';
import DynamicSelect from '@/Components/DynamicSelect';



export default function Form({ staff, permissions, auth, success, error, roles }) {


    const { data, setData, post, errors, reset } = useForm({
        firstname: staff ? staff.firstname : null,
        lastname: staff ? staff.lastname : null,
        email: staff ? staff.email : null,
        phone: staff ? staff.phone : null,
        role_id: staff ? staff.role_id : null,
        role_name: staff ? staff.role_name : "Select an option",
        _method: staff ? "PUT" : 'POST',
    });



    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSelect = (key, e) => {
        setData(key, e.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route(staff ? "admin.staff.update" : "admin.staff.store", {
            staff: staff ? staff.id : null
        }), {
            preserveScroll: true,
        });
    };

    return (

        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> staff ? 'Staff/Edit' : 'Staff/Create'</h2>}
        >
            <Head title="Seller Create" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Create Seller</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.staff.index')}>Staffs</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">{staff ? 'Edit' : 'Create'}</li>
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
                                            <div className="mb-35">
                                                <h4>Contact Information</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">First Name</InputLabel>
                                                        <input value={data.firstname} onChange={(e) => handleChange("firstname", e.target.value)} type="text" placeholder="Your first name" className="form-control" id="first_name" />
                                                    </div>
                                                    <InputError message={errors.firstname} />
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Last name</InputLabel>
                                                        <input value={data.lastname} onChange={(e) => handleChange("lastname", e.target.value)} type="text" placeholder="Your last name" className="form-control" /></div>
                                                    <InputError message={errors.lastname} />
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel htmlFor="email" className="fw-700 fs-16 form-label form-group__label">
                                                            Email
                                                        </InputLabel>
                                                        <input value={data.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Your email address" type="email" className="form-control" /></div>
                                                    <InputError message={errors.email} />
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Phone Number</InputLabel>
                                                        <input value={data.phone} type="tel" onChange={(e) => handleChange("phone", e.target.value)} placeholder="Your phone number" className="form-control" /></div>
                                                    <InputError message={errors.phone} />
                                                </div>
                                            </div>
                                            <div className="mb-35 mt-5">
                                                <h4>Roles and responsibility</h4>
                                            </div>
                                            <div className="row g-5">
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Role</InputLabel>
                                                        <Select autocomplete="off" defaultValue={{ value: data.role_id, label: data.role_name }} onChange={(e) => { handleSelect('role_id', e) }} name="role_id" options={roles}></Select>
                                                        <InputError message={errors.role_id} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-35 mt-5">
                                                <h4>{staff ? (
                                                    <>
                                                        Change password
                                                    </>
                                                ) : (<>
                                                    Set password
                                                </>)}</h4>
                                            </div>
                                            <div className="row ">
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">New Password</InputLabel>
                                                        <input type="password" autoComplete="new-password" value={data.password} onChange={(e) => handleChange("password", e.target.value)} name="password" id="password" placeholder="Your new secret password" className="form-control" /></div>
                                                    <InputError message={errors.password} />
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="form-group">
                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Conform New Password</InputLabel>
                                                        <input type="password" value={data.confirm_password} onChange={(e) => handleChange("confirm_password", e.target.value)} name="confirm_password" id="confirm_password" placeholder="Confirm your secret password" className="form-control" /></div>
                                                    <InputError message={errors.confirm_password} />
                                                </div>
                                                <div className="col-12 text-end">
                                                    <Link href={route('seller.staffs.index')} className="btn btn-neutral me-2">Cancel</Link>
                                                    <button type="submit" className="btn btn-sm btn-neutral">Save changes</button></div>
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
