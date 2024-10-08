import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import Select from 'react-select';
import { useMask } from '@react-input/mask';

export default function Profile({ user, queryParams = null, auth, success, error, province_options }) {
    const inputPhone = useMask({ mask: '(___) ___-____', replacement: { _: /\d/ } });

    const formatPhone = (value) => {
        if (!value) return ''; // Return empty string if no value is passed

        // Ensure the value has at least 10 digits for proper formatting
        const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
        if (cleaned.length < 10) return value; // Return as-is if there aren't enough digits

        // Format as (XXX) XXX-XXXX
        const formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
        return formatted;
    };
    
    const { data, setData, post, errors, reset } = useForm({
        picture: '',
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: formatPhone(user.phone),
        password: '',
        confirm_password: '',
        address: user ? user.address : '',
        city: user ? user.city : '',
        postalcode: user ? user.postalcode : '',
        province: user ? user.province : '',
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
        await post(route("account.profile.store"), {
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
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your profile settings</div>
                            <div>
                            Update your profile information easily. Change your picture and contact details.
                            </div>
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
                                            <div><label>First name</label> <span class="text-danger"> *</span> <input value={data.firstname} onChange={(e) => handleChange("firstname", e.target.value)} type="text" placeholder="Your first name" className="form-control" id="first_name" /></div>
                                            <InputError message={errors.firstname} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Last name</label> <span class="text-danger"> *</span> <input value={data.lastname} onChange={(e) => handleChange("lastname", e.target.value)} type="text" placeholder="Your last name" className="form-control" /></div>
                                            <InputError message={errors.lastname} />
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div><label htmlFor="email">Email</label> <input value={data.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Your email address" type="email" className="form-control" /></div>
                                            <InputError message={errors.email} />
                                        </div> */}
                                        <div className="col-md-6">
                                            <div><label>Phone number</label> <span class="text-danger"> *</span>
                                                <input disabled ref={inputPhone} value={data.phone} onChange={(e) => { handleChange('phone', e.target.value) }} type="tel" placeholder="Your phone number" className="form-control" />
                                            </div>
                                            <InputError message={errors.phone} />
                                        </div>
                                    </div>
                                    {/* <div className="mb-5 mt-5">
                                        <h4>Address</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>Address</label>
                                                <input value={data.address} onChange={(e) => { handleChange('address', e.target.value) }} type="text" placeholder="Address" className="form-control" />
                                                <InputError message={errors.address} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>City</label>
                                                <input value={data.city} onChange={(e) => { handleChange('city', e.target.value) }} type="text" placeholder="City" className="form-control" />
                                                <InputError message={errors.city} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Postcode</label>
                                                <input value={data.postalcode} onChange={(e) => { handleChange('postalcode', e.target.value) }} type="text" placeholder="Postcode" className="form-control" />
                                                <InputError message={errors.postalcode} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Province</label>
                                                <Select defaultValue={{ value: data.province, label: data.province ? data.province : 'Select...' }} onChange={(e) => { handleChange('province', e.value) }} options={province_options}></Select>
                                                <InputError message={errors.province} />
                                            </div>
                                        </div>
                                    </div> */}
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
