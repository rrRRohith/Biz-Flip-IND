
import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import Select from 'react-select';
import DynamicSelect from '@/Components/DynamicSelect';
import Form from 'react-bootstrap/Form';
import PermissionAllow from '@/Components/PermissionAllow';


export default function Create({ auth, cities, provinces,featureLabel }) {
    const { data, setData, post, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        postalcode: '',
        city: '',
        province: '',
        picture: '',
        short_description: '',
        description: '',
        logo: '',
        company_name: '',
        full_address: '',
        alt_email: '',
        alt_phone: '',
        lat: '',
        long: '',
        employee: '',
        website: '',
        designation: '',
        business_type: '',
        public_profile_on: '',
        company_email: '',
        company_phone: '',
        position: '',
        featureLabel : '',
        status: '1'
    });

    const days = [
        { id: 'mon', label: 'Monday' },
        { id: 'tue', label: 'Tuesday' },
        { id: 'wed', label: 'Wednesday' },
        { id: 'thu', label: 'Thursday' },
        { id: 'fri', label: 'Friday' },
        { id: 'sat', label: 'Saturday' },
        { id: 'sun', label: 'Sunday' }
    ];

    const [checkedDays, setCheckedDays] = useState({
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
    });

    const handleCheckboxChange = (day) => {
        setCheckedDays((prevCheckedDays) => ({
            ...prevCheckedDays,
            [day]: !prevCheckedDays[day]
        }));

        setData('days', checkedDays);
    };


    const businessTypes = [
        { id: 'Agency', label: 'Agency' },
        { id: 'Mortgage Brokerage', label: 'Mortgage Brokerage' },
        { id: 'Residential Real Estate Agent', label: 'Residential Real Estate Agent' },
        { id: 'Commercial Property Broker', label: 'Commercial Property Broker' },
        { id: 'Other', label: 'Other' },
    ];

    const employee_options = [
        {
            'label': 'Select an option',
            'value': 'Select an option',
        },
        {
            'label': 'Less than 10',
            'value': 'Less than 10',
        },
        {
            'label': '10 to 25',
            'value': '10 to 25',
        },
        {
            'label': '25 to 50',
            'value': '25 to 50',
        },
        {
            'label': '50 to 100',
            'value': '50 to 100',
        },
        {
            'label': 'More than 100',
            'value': 'More than 100',
        }
    ];


    const [imagePreview, setImagePreview] = useState('');
    const [imagePreviewLogo, setImagePreviewLogo] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('picture', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setData('picture', '');
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

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        await post(route("admin.sellers.store"), {
            preserveScroll: true,
            onSuccess: () => {

            },
        });
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

                                                            <h4 className="col-lg-12 pb-30"><u>Contact Person Information</u></h4>
                                                            <div className="row">
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
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Password</InputLabel>
                                                                        <TextInput
                                                                            id="password"
                                                                            type="text"
                                                                            name="password"
                                                                            className="form-control"
                                                                            value={data.password}
                                                                            onChange={(e) => handleChange("password", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.password} className="mt-2 col-12" />
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
                                                                            id="postalcode"
                                                                            type="text"
                                                                            name="postalcode"
                                                                            className="form-control"
                                                                            value={data.postalcode}
                                                                            onChange={(e) => handleChange("postalcode", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.postalcode} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">City</InputLabel>
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">City</InputLabel>
                                                                        <DynamicSelect
                                                                            onChange={(value) => handleChange("city", value)}
                                                                            value={data.city}
                                                                            options={cities}
                                                                            name="city"
                                                                            defaultValue={data.city}
                                                                        />
                                                                        <InputError message={errors.city} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Province</InputLabel>
                                                                        <DynamicSelect
                                                                            onChange={(value) => handleChange("province", value)}
                                                                            value={data.province}
                                                                            options={provinces}
                                                                            name="province"
                                                                            defaultValue={data.province}
                                                                        />
                                                                        <InputError message={errors.province} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 d-flex align-items-center">
                                                            <div className="col-md-12">
                                                                <div className="border   p-3 bg-gray-100 rounded10  text-center">
                                                                    <h4 className="box-title text-center">Image</h4>
                                                                    <div className="product-img">
                                                                        {imagePreview ? (
                                                                            <div className="mb-15 text-center position-relative">
                                                                                <img src={imagePreview} alt="Selected" className="w-100 h-100 rounded-circle" />
                                                                                <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImage}></i>

                                                                            </div>
                                                                        ) : (
                                                                            <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 w-100 h-100 text-center rounded-circle " />
                                                                        )}
                                                                        <div className=" mb-20">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-natural  btn-sm"
                                                                                onClick={() => document.getElementById('project_image_path').click()}
                                                                            >
                                                                                Choose Image
                                                                            </button>
                                                                            <TextInput
                                                                                id="project_image_path"
                                                                                type="file"
                                                                                name="picture"
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
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="row">
                                                                <h4 className="col-lg-12 pb-30"><u>Company Information</u></h4>
                                                                <div className="col-md-6 mb-3">
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
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Contact Person Designation</InputLabel>
                                                                        <TextInput
                                                                            id="designation"
                                                                            type="text"
                                                                            name="designation"
                                                                            className="form-control"
                                                                            value={data.designation}
                                                                            onChange={(e) => handleChange("designation", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.designation} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Short Bio</InputLabel>
                                                                        <TextInput
                                                                            id="short_description"
                                                                            type="text"
                                                                            name="short_description"
                                                                            className="form-control"
                                                                            value={data.short_description}
                                                                            onChange={(e) => handleChange("short_description", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.short_description} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Description</InputLabel>
                                                                        <textarea
                                                                            id="description"
                                                                            type="text"
                                                                            name="description"
                                                                            className="form-control"
                                                                            rows={5}
                                                                            value={data.description}
                                                                            onChange={(e) => handleChange("description", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.description} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Company Address</InputLabel>
                                                                        <TextInput
                                                                            id="full_address"
                                                                            type="text"
                                                                            name="full_address"
                                                                            className="form-control"
                                                                            value={data.full_address}
                                                                            onChange={(e) => handleChange("full_address", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.full_address} className="mt-2 col-12" />
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
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">No Employees</InputLabel>
                                                                        <DynamicSelect onChange={(e) => { handleChange('employee', e) }} name="employee" options={employee_options}></DynamicSelect>
                                                                        <InputError message={errors.employee} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Business Type</InputLabel>
                                                                        <Select
                                                                            onChange={(e) => { handleChange('business_type', e.value) }}
                                                                            name="business_type"
                                                                            options={businessTypes.map(type => ({ value: type.id, label: type.label }))}
                                                                        />
                                                                        <InputError message={errors.business_type} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Feature Label</InputLabel>
                                                                        <DynamicSelect
                                                                            onChange={(value) => handleChange("featureLabel", value)}
                                                                            value={data.featureLabel}
                                                                            options={featureLabel}
                                                                            name="featureLabel"
                                                                            defaultValue={data.featureLabel}
                                                                        />

                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <div className="row">
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="border  p-3 bg-gray-100 rounded10  text-center">
                                                                        <h4 className="box-title text-center">Logo</h4>
                                                                        <div className="product-img">
                                                                            {imagePreviewLogo ? (
                                                                                <div className="mb-15 text-center position-relative">
                                                                                    <img src={imagePreviewLogo} alt="Selected" className="w-100 h-100 text-center rounded-circle" />
                                                                                    <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImageLogo}></i>

                                                                                </div>
                                                                            ) : (
                                                                                <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center w-100 h-100 rounded-circle" />
                                                                            )}


                                                                            <div className=" mb-20">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-natural  btn-sm"
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
                                                                <div className="col-md-12 mb-3">

                                                                    <div className="form-group px-20">
                                                                        <InputLabel className="fw-700  form-label small">Available Days</InputLabel>
                                                                        <div className="row pt-5">
                                                                            {days.map((day) => (
                                                                                <div key={day.id} className="col-12">
                                                                                    <Form.Check
                                                                                        type="checkbox"
                                                                                        id={`default-checkbox-${day.id}`}
                                                                                        name={day.id}
                                                                                        label={
                                                                                            <>
                                                                                                {day.label}
                                                                                                {checkedDays[day.id] ? (
                                                                                                    <span className="text-success"> (opened)</span>
                                                                                                ) : (
                                                                                                    <span className="text-danger"> (closed)</span>
                                                                                                )}
                                                                                            </>
                                                                                        }
                                                                                        checked={checkedDays[day.id]}
                                                                                        onChange={() => handleCheckboxChange(day.id)}
                                                                                    />
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 mb-3">
                                                                        <div className="form-group px-30">
                                                                            <Form.Check
                                                                                type="switch"
                                                                                id="custom-switch"
                                                                                name="public_profile_on"
                                                                                label="Show Public Profile"
                                                                                role="button"
                                                                                onChange={(e) => handleChange('public_profile_on', e.target.checked ? 1 : 0)}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group px-10">
                                                            <label className=" fs-14 form-label">Status</label>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch-status"
                                                                name="status"
                                                                label="Active"
                                                                role="button"
                                                                onChange={(e) => handleChange('status', e.target.checked ? 1 : 0)}
                                                            />
                                                            
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-actions mt-10 col-lg-12 text-center">
                                                    <button type="submit" className="btn btn-success"> <i className="bi bi-check"></i> Save Data</button>
                                                </div>
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
