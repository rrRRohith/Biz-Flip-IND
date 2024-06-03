import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from '../layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";


export default function Form({ staff, permissions, auth, success, error, roles }) {


    const { data, setData, post, errors, reset } = useForm({
        firstname: staff ? staff.firstname : null,
        lastname: staff ? staff.lastname : null,
        email: staff ? staff.email : null,
        phone: staff ? staff.phone : null,
        role_id: staff? staff.role_id : null,
        role_name : staff?staff.role_name:"Select an option",
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
        await post(route(staff ? "seller.staffs.update" : "seller.staffs.store", {
            staff: staff ? staff.id : null
        }), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title={staff ? 'Edit staff' : 'Create new staff'} />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="d-flex align-items-center">
                                <div className="text-xl font-bold">{staff ? 'Edit staff' : 'Create new staff'}</div>
                                <div className="ms-auto">
                                    <Link href={route('seller.staffs.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <h4>Contact Information</h4>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <div><label>First name</label> <input value={data.firstname} onChange={(e) => handleChange("firstname", e.target.value)} type="text" placeholder="Your first name" className="form-control" id="first_name" /></div>
                                            <InputError message={errors.firstname} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Last name</label><input value={data.lastname} onChange={(e) => handleChange("lastname", e.target.value)} type="text" placeholder="Your last name" className="form-control" /></div>
                                            <InputError message={errors.lastname} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label htmlFor="email">Email</label> <input value={data.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Your email address" type="email" className="form-control" /></div>
                                            <InputError message={errors.email} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Phone number</label> <input value={data.phone} type="tel" onChange={(e) => handleChange("phone", e.target.value)} placeholder="Your phone number" className="form-control" /></div>
                                            <InputError message={errors.phone} />
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-5">
                                        <h4>Roles and responsibility</h4>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <label>Role</label>
                                            <Select defaultValue={{value:data.role_id, label:data.role_name}} onChange={(e) => { handleSelect('role_id', e) }} name="role_id" options={roles}></Select>
                                            <InputError message={errors.role_id} />
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-5">
                                        <h4>{staff ? (
                                            <>
                                                Change password
                                            </>
                                        ) : (<>
                                            Set password
                                        </>)}</h4>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <div><label>New password</label> <input type="password" value={data.password} onChange={(e) => handleChange("password", e.target.value)} name="password" id="password" placeholder="Your new secret password" className="form-control" /></div>
                                            <InputError message={errors.password} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Conform new password</label> <input type="password" value={data.confirm_password} onChange={(e) => handleChange("confirm_password", e.target.value)} name="confirm_password" id="confirm_password" placeholder="Confirm your secret password" className="form-control" /></div>
                                            <InputError message={errors.confirm_password} />
                                        </div>
                                        <div className="col-12 text-end">
                                            <Link href={route('seller.staffs.index')} className="btn btn-neutral me-2">Cancel</Link>
                                            <button type="submit" className="btn btn-primary">Save changes</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
