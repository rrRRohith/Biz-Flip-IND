import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import React, { useState, useEffect } from "react";
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from "@/Components/InputError";
import PermissionAllow from "@/Components/PermissionAllow";

export default function Profile({ user, queryParams = null, auth, success, error }) {
    console.log(auth)
    const { data, setData, post, errors, reset } = useForm({
        picture: '',
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        password: '',
        confirm_password: '',
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (user.picture) {
            setImagePreview(user.picture);
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
        await post(route("admin.profile.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset('confirm_password', 'password');
            },
        });
    };

    return (
        <>
            <Head title="Profile" />
            <Authenticated
                success={success} error={error} user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
            >
                <PermissionAllow permission={'Profile Edit'}>
                    <div className="content-wrapper me-4">
                        <div className="container-full">
                            <div className="content-header">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="d-flex flex-column">
                                            <h4 className="page-title">Your profile settings</h4>
                                            <div className="d-inline-block align-items-center mt-2">
                                                <nav>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
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
                                                <div className="max-w-screen-md vstack gap-6 m-auto">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className='row'>
                                                            <div className='col-lg-9'>
                                                                <div className="mb-30">
                                                                    <h4>Contact Information</h4>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <div><label>First name</label> <input value={data.firstname} onChange={(e) => handleChange("firstname", e.target.value)} type="text" placeholder="Your first name" className="form-control" id="first_name" /></div>
                                                                        <InputError message={errors.firstname} />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <div><label>Last name</label><input value={data.lastname} onChange={(e) => handleChange("lastname", e.target.value)} type="text" placeholder="Your last name" className="form-control" /></div>
                                                                        <InputError message={errors.lastname} />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <div><label htmlFor="email">Email</label> <input value={data.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Your email address" type="email" className="form-control" /></div>
                                                                        <InputError message={errors.email} />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <div><label>Phone number</label> <input value={data.phone} type="tel" onChange={(e) => handleChange("phone", e.target.value)} placeholder="Your phone number" className="form-control" /></div>
                                                                        <InputError message={errors.phone} />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-30 mt-30">
                                                                    <h4>Change password</h4>
                                                                </div>
                                                                <div className="row g-5">
                                                                    <div className="col-md-6 mb-3">
                                                                        <div><label>New password</label> <input type="password" value={data.password} onChange={(e) => handleChange("password", e.target.value)} name="password" id="password" placeholder="Your new secret password" className="form-control" /></div>
                                                                        <InputError message={errors.password} />
                                                                    </div>
                                                                    <div className="col-md-6 mb-3">
                                                                        <div><label>Conform new password</label> <input type="password" value={data.confirm_password} onChange={(e) => handleChange("confirm_password", e.target.value)} name="confirm_password" id="confirm_password" placeholder="Confirm your secret password" className="form-control" /></div>
                                                                        <InputError message={errors.confirm_password} />
                                                                    </div>
                                                                    <div className="col-12 text-end">
                                                                        <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                                                        <button type="submit" className="btn btn-primary">Save changes</button></div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-3'>
                                                                <div className="card rounded-input">
                                                                    <div className="card-body">
                                                                        <div className=" text-center">
                                                                            <div>
                                                                                <div className="d-flex align-items-center">
                                                                                    <a href="#" className=" border-2 border-gray rounded-circle text-white">
                                                                                        <img alt="..." src={imagePreview} className='rounded30' onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} /></a>

                                                                                </div>
                                                                                <InputError message={errors.picture} />
                                                                            </div>
                                                                            <input onChange={handleImageChange} type="file" id="avatar" className='d-none' hidden accept='image/*' />
                                                                            <div className="ms-auto"><label htmlFor='avatar' type="button" className="btn btn-sm btn-neutral">Upload</label></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </PermissionAllow>
            </Authenticated>
        </>
    );
}
