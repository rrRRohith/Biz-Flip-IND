
import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import Form from 'react-bootstrap/Form';


export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        'short_bio': '',
        'description': '',
        'logo': '',
        'company_name': '',
        'address': '',
        'map_code': '',
        'lat': '',
        'long': '',
        'no_employee': '',
        'no_locations': '',
        'website': '',
        'type_person': '',
        'feature_label': '',
        'business_type': '',
        'public_profile_on': '',
        'facebook_link': '',
        'instagram_link': '',
        'linkedin_link': '',
        'youtube_link': '',
        'twitter_link': '',
        'company_email': '',
        'company_phone': '',
        'alt_email': '',
        'alt_phone': '',
        'mon': '',
        'tue': '',
        'wed': '',
        'thu': '',
        'fri': '',
        'sat': '',
        'sun': '',
        'position': '',
        'firstname': '',
        'lastname': '',
        'email': '',
        'alt_emails': '',
        'phone': '',
        'alt_phone': '',
        'address': '',
        'postal_code': '',
        'city': '',
        'province': '',
        'country': '',
        'dob': '',
        'avatar': '',
        'status': '1'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Data to be submitted:', data);
        post(route('admin.testimonial.store'))
    };

    const [imagePreview, setImagePreview] = useState('');
    const [imagePreviewLogo, setImagePreviewLogo] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('avatar', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setData('avatar', '');
        setImagePreview('');
    };

    const handleImageChangeLogo = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('logo', file);
            setImagePreviewLogo(URL.createObjectURL(file));
        }
    };

    const handleRemoveImageLogo = () => {
        setData('logo', '');
        setImagePreviewLogo('');
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Seller/Create</h2>}
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
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.sellers.index')}>Sellers</Link></li>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="row">
                                                                <h2 className="col-lg-12 pb-5"><u>Personal Information</u></h2>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">First Name</InputLabel>
                                                                        <TextInput
                                                                            id="firstname"
                                                                            type="text"
                                                                            name="firstname"
                                                                            className="form-control"
                                                                            value={data.firstname}
                                                                            onChange={(e) => handleChange("firstname", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.firstname} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Last Name</InputLabel>
                                                                        <TextInput
                                                                            id="lastname"
                                                                            type="text"
                                                                            name="lastname"
                                                                            className="form-control"
                                                                            value={data.lastname}
                                                                            onChange={(e) => handleChange("lastname", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.lastname} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                   
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Email</InputLabel>
                                                                        <TextInput
                                                                            id="email"
                                                                            type="text"
                                                                            name="email"
                                                                            className="form-control"
                                                                            value={data.email}
                                                                            onChange={(e) => handleChange("email", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.email} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Phone No</InputLabel>
                                                                        <TextInput
                                                                            id="phone"
                                                                            type="text"
                                                                            name="phone"
                                                                            className="form-control"
                                                                            value={data.phone}
                                                                            onChange={(e) => handleChange("phone", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.phone} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Alterative Emails</InputLabel>
                                                                        <TextInput
                                                                            id="alt_emails"
                                                                            type="text"
                                                                            name="alt_emails"
                                                                            className="form-control"
                                                                            value={data.alt_emails}
                                                                            onChange={(e) => handleChange("alt_emails", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.alt_emails} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Alternative Phone No`s</InputLabel>
                                                                        <TextInput
                                                                            id="alt_phone"
                                                                            type="text"
                                                                            name="alt_phone"
                                                                            className="form-control"
                                                                            value={data.alt_phone}
                                                                            onChange={(e) => handleChange("alt_phone", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.alt_phone} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Date of Birth</InputLabel>
                                                                        <TextInput
                                                                            id="dob"
                                                                            type="text"
                                                                            name="dob"
                                                                            className="form-control"
                                                                            value={data.dob}
                                                                            onChange={(e) => handleChange("dob", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.dob} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Address</InputLabel>
                                                                        <TextInput
                                                                            id="address"
                                                                            type="text"
                                                                            name="address"
                                                                            className="form-control"
                                                                            value={data.address}
                                                                            onChange={(e) => handleChange("address", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.address} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Postal Code</InputLabel>
                                                                        <TextInput
                                                                            id="postal_code"
                                                                            type="text"
                                                                            name="postal_code"
                                                                            className="form-control"
                                                                            value={data.postal_code}
                                                                            onChange={(e) => handleChange("postal_code", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.postal_code} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Counrty</InputLabel>
                                                                        <TextInput
                                                                            id="country"
                                                                            type="text"
                                                                            name="country"
                                                                            className="form-control"
                                                                            value={data.country}
                                                                            onChange={(e) => handleChange("country", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.country} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Province</InputLabel>
                                                                        <TextInput
                                                                            id="province"
                                                                            type="text"
                                                                            name="province"
                                                                            className="form-control"
                                                                            value={data.province}
                                                                            onChange={(e) => handleChange("province", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.province} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">City</InputLabel>
                                                                        <TextInput
                                                                            id="city"
                                                                            type="text"
                                                                            name="city"
                                                                            className="form-control"
                                                                            value={data.city}
                                                                            onChange={(e) => handleChange("city", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.city} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="border rounded-4 p-3  text-center">
                                                                        <h4 className="box-title text-center">Image</h4>
                                                                        <div className="product-img">
                                                                            {imagePreview ? (
                                                                                <div className="mb-15 text-center position-relative">
                                                                                    <img src={imagePreview} alt="Selected" className="w-100 rounded-5" />
                                                                                    <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImage}></i>

                                                                                </div>
                                                                            ) : (
                                                                                <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                            )}
                                                                            <div className="btn mb-20">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-primary btn-sm"
                                                                                    onClick={() => document.getElementById('project_image_path').click()}
                                                                                >
                                                                                    Choose Image
                                                                                </button>
                                                                                <TextInput
                                                                                    id="project_image_path"
                                                                                    type="file"
                                                                                    name="image"
                                                                                    className="d-none mt-1 block w-full upload"
                                                                                    onChange={handleImageChange}
                                                                                />

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="row">
                                                                <h2 className="col-lg-12 pb-5"><u>Company Information</u></h2>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Company Name</InputLabel>
                                                                        <TextInput
                                                                            id="company_name"
                                                                            type="text"
                                                                            name="company_name"
                                                                            className="form-control"
                                                                            value={data.company_name}
                                                                            onChange={(e) => handleChange("company_name", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.company_name} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Short Bio</InputLabel>
                                                                        <TextInput
                                                                            id="short_bio"
                                                                            type="text"
                                                                            name="short_bio"
                                                                            className="form-control"
                                                                            value={data.short_bio}
                                                                            onChange={(e) => handleChange("short_bio", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.short_bio} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Description</InputLabel>
                                                                        <TextInput
                                                                            id="description"
                                                                            type="text"
                                                                            name="description"
                                                                            className="form-control"
                                                                            value={data.description}
                                                                            onChange={(e) => handleChange("description", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.description} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Address</InputLabel>
                                                                        <TextInput
                                                                            id="address"
                                                                            type="text"
                                                                            name="address"
                                                                            className="form-control"
                                                                            value={data.address}
                                                                            onChange={(e) => handleChange("address", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.address} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Contact Person Designation</InputLabel>
                                                                        <TextInput
                                                                            id="type_person"
                                                                            type="text"
                                                                            name="type_person"
                                                                            className="form-control"
                                                                            value={data.type_person}
                                                                            onChange={(e) => handleChange("type_person", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.type_person} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Map Code</InputLabel>
                                                                        <TextInput
                                                                            id="map_code"
                                                                            type="text"
                                                                            name="map_code"
                                                                            className="form-control"
                                                                            value={data.map_code}
                                                                            onChange={(e) => handleChange("map_code", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.map_code} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Latitude</InputLabel>
                                                                        <TextInput
                                                                            id="lat"
                                                                            type="text"
                                                                            name="lat"
                                                                            className="form-control"
                                                                            value={data.lat}
                                                                            onChange={(e) => handleChange("lat", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.lat} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Longtitude</InputLabel>
                                                                        <TextInput
                                                                            id="long"
                                                                            type="text"
                                                                            name="long"
                                                                            className="form-control"
                                                                            value={data.long}
                                                                            onChange={(e) => handleChange("long", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.long} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">No Employees</InputLabel>
                                                                        <TextInput
                                                                            id="no_employee"
                                                                            type="text"
                                                                            name="no_employee"
                                                                            className="form-control"
                                                                            value={data.no_employee}
                                                                            onChange={(e) => handleChange("no_employee", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.no_employee} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">No of Office locations</InputLabel>
                                                                        <TextInput
                                                                            id="no_locations"
                                                                            type="text"
                                                                            name="no_locations"
                                                                            className="form-control"
                                                                            value={data.no_locations}
                                                                            onChange={(e) => handleChange("no_locations", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.no_locations} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Website</InputLabel>
                                                                        <TextInput
                                                                            id="website"
                                                                            type="text"
                                                                            name="website"
                                                                            className="form-control"
                                                                            value={data.website}
                                                                            onChange={(e) => handleChange("website", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.website} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>



                                                                <div className="col-md-3 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Feature Label</InputLabel>
                                                                        <TextInput
                                                                            id="feature_label"
                                                                            type="text"
                                                                            name="feature_label"
                                                                            className="form-control"
                                                                            value={data.feature_label}
                                                                            onChange={(e) => handleChange("feature_label", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.feature_label} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Business Type</InputLabel>
                                                                        <TextInput
                                                                            id="business_type"
                                                                            type="text"
                                                                            name="business_type"
                                                                            className="form-control"
                                                                            value={data.business_type}
                                                                            onChange={(e) => handleChange("business_type", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.business_type} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Facebook Link</InputLabel>
                                                                        <TextInput
                                                                            id="facebook_link"
                                                                            type="text"
                                                                            name="facebook_link"
                                                                            className="form-control"
                                                                            value={data.facebook_link}
                                                                            onChange={(e) => handleChange("facebook_link", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.facebook_link} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Instagram Link</InputLabel>
                                                                        <TextInput
                                                                            id="instagram_link"
                                                                            type="text"
                                                                            name="instagram_link"
                                                                            className="form-control"
                                                                            value={data.instagram_link}
                                                                            onChange={(e) => handleChange("instagram_link", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.instagram_link} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Linkedin Link</InputLabel>
                                                                        <TextInput
                                                                            id="linkedin_link"
                                                                            type="text"
                                                                            name="linkedin_link"
                                                                            className="form-control"
                                                                            value={data.linkedin_link}
                                                                            onChange={(e) => handleChange("linkedin_link", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.linkedin_link} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Twitter Link</InputLabel>
                                                                        <TextInput
                                                                            id="twitter_link"
                                                                            type="text"
                                                                            name="twitter_link"
                                                                            className="form-control"
                                                                            value={data.twitter_link}
                                                                            onChange={(e) => handleChange("twitter_link", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.twitter_link} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Company Email</InputLabel>
                                                                        <TextInput
                                                                            id="company_email"
                                                                            type="text"
                                                                            name="company_email"
                                                                            className="form-control"
                                                                            value={data.company_email}
                                                                            onChange={(e) => handleChange("company_email", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.company_email} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Company Phone No</InputLabel>
                                                                        <TextInput
                                                                            id="company_phone"
                                                                            type="text"
                                                                            name="company_phone"
                                                                            className="form-control"
                                                                            value={data.company_phone}
                                                                            onChange={(e) => handleChange("company_phone", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.company_phone} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Alternative Emails</InputLabel>
                                                                        <TextInput
                                                                            id="alt_email"
                                                                            type="text"
                                                                            name="alt_email"
                                                                            className="form-control"
                                                                            value={data.alt_email}
                                                                            onChange={(e) => handleChange("alt_email", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.alt_email} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Alternative Phone No`s</InputLabel>
                                                                        <TextInput
                                                                            id="alt_phone"
                                                                            type="text"
                                                                            name="alt_phone"
                                                                            className="form-control"
                                                                            value={data.alt_phone}
                                                                            onChange={(e) => handleChange("alt_phone", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.alt_phone} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700  form-label small">Available Days</InputLabel>
                                                                        <div className="d-flex gap-3 pt-5 ">
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-mon`}
                                                                                name="mon"
                                                                                label='Monday'
                                                                            />
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-tue`}
                                                                                label='Tuesday'
                                                                                name="tue"
                                                                            />
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-wed`}
                                                                                label='Wednesday'
                                                                                name="wed"
                                                                            />
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-thu`}
                                                                                label='Thusday'
                                                                                name="thu"
                                                                            />
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-fri`}
                                                                                label='Friday'
                                                                                name="fri"
                                                                            />
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-sat`}
                                                                                label='Saturday'
                                                                                name="sat"
                                                                            />
                                                                            <Form.Check
                                                                                type='checkbox'
                                                                                id={`default-checkbox-sun`}
                                                                                label='Sunday'
                                                                                name="sun"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="border rounded-4 p-3  text-center">
                                                                        <h4 className="box-title text-center">Logo</h4>
                                                                        <div className="product-img">
                                                                            {imagePreviewLogo ? (
                                                                                <div className="mb-15 text-center position-relative">
                                                                                    <img src={imagePreviewLogo} alt="Selected" className="w-100 rounded-5" />
                                                                                    <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImageLogo}></i>

                                                                                </div>
                                                                            ) : (
                                                                                <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                            )}


                                                                            <div className="btn mb-20">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-primary btn-sm"
                                                                                    onClick={() => document.getElementById('project_image_path2').click()}
                                                                                >
                                                                                    Choose Image
                                                                                </button>
                                                                                <TextInput
                                                                                    id="project_image_path2"
                                                                                    type="file"
                                                                                    name="logo"
                                                                                    className="d-none mt-1 block w-full upload"
                                                                                    onChange={handleImageChangeLogo}
                                                                                />

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-9 mb-3">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <InputLabel className="fw-700 fs-16 form-label form-group__label">Position</InputLabel>
                                                            <SelectOption
                                                                onChange={(value) => handleChange("position", value)}
                                                                value={data.position}
                                                            />
                                                            <InputError message={errors.position} className="mt-2 col-12" />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                name="public_profile_on"
                                                                label="Public Profile"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
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

                                            <div className="form-actions mt-10">
                                                <button type="submit" className="btn btn-primary"> <i className="bi bi-check"></i> Save Data</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </Authenticated >
    );
}
