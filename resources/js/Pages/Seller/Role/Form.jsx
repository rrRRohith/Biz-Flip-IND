import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from '../layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";


export default function Form({ role, permissions, auth, success, error }) {

    const initialPermissions = role ? Object.keys(role.permissions).map(id => parseInt(id)) : [];
    console.log(initialPermissions);
    const [checkedPermissions, setCheckedPermissions] = useState({});

    const handleCheckboxChange = (permissionId) => {
        let updatedPermissions;
        if (data.permissions.includes(permissionId)) {
            updatedPermissions = data.permissions.filter(id => id !== permissionId);
        } else {
            updatedPermissions = [...data.permissions, permissionId];
        }
        setData('permissions', updatedPermissions);
    };

    const { data, setData, post, errors, reset } = useForm({
        permissions: initialPermissions || [],
        name: role ? role.name : null,
        _method: role ? "PUT" : 'POST',
    });

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route(role ? "account.roles.update" : "account.roles.store", {
            role: role ? role.id : null
        }), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title={role ? 'Edit role' : 'Create new role'} />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="d-flex align-items-center">
                                <div className="text-xl font-bold">{role ? 'Edit role' : 'Create new role'}</div>
                                <div className="ms-auto">
                                    <Link href={route('account.roles.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-5">
                                        <div className="mb-0">
                                            <h4>Role name</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <label>Name</label>
                                            <input value={data.name} onChange={(e) => { handleChange('name', e.target.value) }} placeholder="Enter name" className="form-control" />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-5">
                                                <h4>Permissions</h4>
                                            </div>
                                            {Object.keys(permissions).map((key) => (
                                                <>
                                                    <div key={key}>
                                                        <div className="font-bold text-md text-primary">{key}</div>
                                                        <div>
                                                            {permissions[key].map((permission) => (
                                                                <>
                                                                    <div key={permission.id} className="form-check form-check-lg">
                                                                        <input
                                                                            role="button"
                                                                            className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                                            type="checkbox"
                                                                            id={`permission_${permission.id}`}
                                                                            checked={data.permissions.includes(permission.id)}
                                                                            onChange={() => handleCheckboxChange(permission.id)}
                                                                        />
                                                                        <label role="button" className="mt-1" htmlFor={`permission_${permission.id}`}>
                                                                            {permission.name}
                                                                        </label>
                                                                    </div>
                                                                </>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </>
                                            ))}
                                            <InputError message={errors.permissions} />
                                        </div>
                                        <div className="col-12 text-end">
                                            <Link href={route('account.roles.index')} className="btn btn-neutral me-2">Cancel</Link>
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
