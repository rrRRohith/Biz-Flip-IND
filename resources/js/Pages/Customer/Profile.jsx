import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";

export default function Profile({ user, queryParams = null, auth, success, error }) {
    const { data, setData, post, errors, reset } = useForm({
        picture: '',
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        password: '',
        confirm_password: '',
    });

    const [imagePreview, setImagePreview] = useState();

    useEffect(() => {
        if (user.picture) {
            setImagePreview(user.picture_url);
        }
    }, [user.picture]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('picture', file);
            setImagePreview(URL.createObjectURL(file));
        }

    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("customer.profile.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset('confirm_password', 'password');
            },
        });
    };

    return (
        <>
            <Head title="Profile" />
            <Wrapper success={success} error={error} user={auth.user}>

                <main className="py-6">
                    <div className="container px-3 px-lg-6">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your profile settings</div>
                            <div className="card rounded-input">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <label role='button' htmlFor='avatar' href="#" className="avatar avatar-lg border-2 border-gray rounded-circle text-white"><img onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} alt="..." src={imagePreview} /></label>
                                                <div className="ms-4"><span className="h4 d-block mb-0">{data.firstname} {data.lastname}</span>
                                                <label htmlFor='avatar' type="button" className="text-primary font-semibold mt-1">Change image</label>
                                                </div>
                                            </div>
                                            <InputError message={errors.picture} />
                                        </div>
                                        <input onChange={handleImageChange} type="file" id="avatar" className='d-none' hidden accept='image/*' />
                                        {/* <div className="ms-auto"><label htmlFor='avatar' type="button" className="btn btn-sm btn-neutral">Upload</label></div> */}
                                    </div>
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
                                    {/* <div className="mb-5 mt-5">
                                        <h4>Change password</h4>
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

                                    </div> */}
                                    <div className="row g-5">
                                        <div className="col-12 text-end mt-10">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
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
