import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";

export default function Password({ user, queryParams = null, auth, success, error }) {
    const { data, setData, post, errors, reset } = useForm({
        password: '',
        confirm_password: '',
    });

    const [imagePreview, setImagePreview] = useState();

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("account.password.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset('confirm_password', 'password', 'old_password');
            },
        });
    };

    return (
        <>
            <Head title="Security" />
            <Wrapper success={success} error={error} user={auth.user}>

                <main className="py-6">
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Change your password</div>
                            <div>Update your password for enhanced security.</div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5 mt-5">
                                        <h4>Change password</h4>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <div><label>Old password</label> <input type="password" value={data.old_password} onChange={(e) => handleChange("old_password", e.target.value)} name="old_password" id="password" placeholder="Your current secret password" className="form-control" /></div>
                                            <InputError message={errors.old_password} />
                                        </div>
                                        <div className="col-md-6">

                                        </div>
                                        <div className="col-md-6">
                                            <div><label>New password</label> <input type="password" value={data.password} onChange={(e) => handleChange("password", e.target.value)} name="password" id="password" placeholder="Your new secret password" className="form-control" /></div>
                                            <InputError message={errors.password} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Conform new password</label> <input type="password" value={data.confirm_password} onChange={(e) => handleChange("confirm_password", e.target.value)} name="confirm_password" id="confirm_password" placeholder="Confirm your secret password" className="form-control" /></div>
                                            <InputError message={errors.confirm_password} />
                                        </div>
                                        <div className="col-12 mt-0">
                                            <div className="small">Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.</div>
                                        </div>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-12 text-end mt-10">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save</button>
                                        </div>
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
