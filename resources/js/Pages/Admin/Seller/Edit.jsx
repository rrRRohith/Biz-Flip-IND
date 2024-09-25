
import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import DynamicSelect from '@/Components/DynamicSelect';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import PermissionAllow from '@/Components/PermissionAllow';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Edit({ auth, seller, cities, provinces, featureLabel }) {

    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        firstname: seller.firstname || '',
        lastname: seller.lastname || '',
        email: seller.email || '',
        phone: seller.phone || '',
        address: seller.address || '',
        postalcode: seller.postalcode || '',
        password: '',
        city: seller.city || '',
        province: seller.province || '',
        featureLabel: seller.feature_label_id || '',
        featureLabelName: seller.featureLabelName || '',
        picture: '',
        short_description: seller.short_description || '',
        description: seller.description || '',
        logo: '',
        company_name: seller.company_name || '',
        full_address: seller.full_address || '',
        alt_emails: seller.alt_emails || '',
        alt_phone: seller.alt_phone || '',
        lat: seller.lat || '',
        long: seller.long || '',
        employee: seller.employee || '',
        website: seller.website || '',
        designation: seller.designation || '',
        public_profile_on: seller.public_profile_on == 1 ? 1 : 0 || 0,
        company_email: seller.company_email || '',
        company_phone: seller.company_phone || '',
        position: seller.position || '',
        business_type: '',
        status: seller.status == 'active' ? 1 : (seller.status == 'suspended' ? -1 : 0) || 1,
        days: seller.availableDays || {},
        _method: "PUT",
        remove_picture: false,
        remove_logo: false,
    });

    const [imagePreview, setImagePreview] = useState('');
    const [imagePreviewLogo, setImagePreviewLogo] = useState('');

    useEffect(() => {
        if (seller.picture) {
            setImagePreview(seller.picture);
        }
    }, [seller.picture]);

    useEffect(() => {
        if (seller.logo) {
            setImagePreviewLogo(seller.logo);
        }
    }, [seller.logo]);

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
        mon: seller.availableDays ? seller.availableDays.mon || false : false,
        tue: seller.availableDays ? seller.availableDays.tue || false : false,
        wed: seller.availableDays ? seller.availableDays.wed || false : false,
        thu: seller.availableDays ? seller.availableDays.thu || false : false,
        fri: seller.availableDays ? seller.availableDays.fri || false : false,
        sat: seller.availableDays ? seller.availableDays.sat || false : false,
        sun: seller.availableDays ? seller.availableDays.sun || false : false,
    });


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleCheckboxChange = (day) => {
        const updatedCheckedDays = {
            ...checkedDays,
            [day]: !checkedDays[day]
        };
        setCheckedDays(updatedCheckedDays);
        setData('days', updatedCheckedDays);
    };


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


    const businessTypes = [
        { id: 'Agency', label: 'Agency' },
        { id: 'Mortgage Brokerage', label: 'Mortgage Brokerage' },
        { id: 'Residential Real Estate Agent', label: 'Residential Real Estate Agent' },
        { id: 'Commercial Property Broker', label: 'Commercial Property Broker' },
        { id: 'Other', label: 'Other' },
    ];

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

        setData('remove_picture', true);
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

        setData('remove_logo', true);
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        await post(route("admin.sellers.update", seller.user_id), {
            preserveScroll: true,
            onSuccess: () => {

            },
        });
    };



    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User/Edit</h2>}
        >
            <Head title="User Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit User</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.sellers.index')}>Users</Link></li>
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
                                                <div className="col-lg-12">
                                                    <div className="row">
                                                        <div className="col-lg-9">

                                                            {/* <h4 className="col-lg-12 pb-30"><u>Contact Person </u></h4> */}
                                                            <div className="row">
                                                                {seller.is_agent &&
                                                                    <>
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
                                                                                <InputLabel className="fw-700 fs-16 form-label form-group__label">Designation</InputLabel>
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
                                                                    </>
                                                                }


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
                                                                        <TextInput disabled
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
                                                                        <TextInput disabled
                                                                            id="phone"
                                                                            type="text"
                                                                            maxlength="10"
                                                                            name="phone"
                                                                            className="form-control"
                                                                            value={data.phone}
                                                                            onChange={(e) => handleChange("phone", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.phone} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>


                                                                {/* <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Password</InputLabel>
                                                                        <InputGroup className="mb-3">
                                                                            <TextInput
                                                                                id="password"
                                                                                type={showPassword ? 'text' : 'password'}
                                                                                name="password"
                                                                                className="form-control"
                                                                                autoComplete="new-password"
                                                                                value={data.password}
                                                                                onChange={(e) => handleChange("password", e.target.value)}
                                                                            />
                                                                            <InputGroup.Text id="inputGroup-sizing-sm">
                                                                                <i role="button" className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`} onClick={togglePasswordVisibility}></i>
                                                                            </InputGroup.Text>
                                                                        </InputGroup>

                                                                        <InputError message={errors.password} className="mt-2 col-12" />
                                                                    </div>
                                                                </div> */}
                                                                {seller.is_agent &&
                                                                    <>
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
                                                                                    maxlength="8"
                                                                                    className="form-control"
                                                                                    value={data.postalcode}
                                                                                    onChange={(e) => handleChange("postalcode", e.target.value)}
                                                                                    autoComplete="off"
                                                                                />
                                                                                <InputError message={errors.postalcode} className="mt-2 col-12" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 mb-3">
                                                                            <div className="form-group">
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

                                                                        <div className="col-md-3 mb-3">
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
                                                                                <InputLabel className="fw-700 fs-16 form-label form-group__label">Business Type</InputLabel>
                                                                                <Select
                                                                                    onChange={(e) => { handleChange('business_type', e.value) }}
                                                                                    defaultValue={{ value: data.business_type, label: data.business_type }}
                                                                                    name="business_type"
                                                                                    options={businessTypes.map(type => ({ value: type.id, label: type.label }))}
                                                                                />
                                                                                <InputError message={errors.business_type} className="mt-2 col-12" />
                                                                            </div>
                                                                        </div>

                                                                    </>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 d-flex align-items-center">
                                                            <div className="col-md-12">
                                                                <div className="border  bg-gray-100 rounded10 p-3  text-center">
                                                                    <h4 className="box-title text-center">Image</h4>
                                                                    <div className="product-img">
                                                                        {imagePreview ? (
                                                                            <div className="mb-15 text-center position-relative">
                                                                                <img src={imagePreview} alt="Selected" className="avatar-xxxl rounded-circle" />
                                                                                <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImage}></i>

                                                                            </div>
                                                                        ) : (
                                                                            <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 avatar-xxxl text-center rounded-circle " />
                                                                        )}
                                                                        <div className=" mb-20">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-nature btn-sm"
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
                                                                {seller.is_agent &&
                                                                    <>
                                                                        <div className="border bg-gray-100 rounded10 p-3 mt-10 text-center">
                                                                            <h4 className="box-title text-center">Logo</h4>
                                                                            <div className="product-img">
                                                                                {imagePreviewLogo ? (
                                                                                    <div className="mb-15 text-center position-relative">
                                                                                        <img src={imagePreviewLogo} alt="Selected" className="avatar-xxxl text-center rounded-circle" />
                                                                                        <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImageLogo}></i>

                                                                                    </div>
                                                                                ) : (
                                                                                    <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center avatar-xxxl rounded-circle" />
                                                                                )}


                                                                                <div className=" mb-20">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-nature btn-sm"
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
                                                                    </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="row d-none">
                                                        <div className="col-lg-9">
                                                            <div className="row">
                                                                <h4 className="col-lg-12 pb-30"><u>Company Information</u></h4>


                                                                <div className="col-md-12 mb-3 d-none">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Full Address</InputLabel>
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


                                                                <div className="col-md-6 mb-3 d-none">
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
                                                                <div className="col-md-6 mb-3 d-none">
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

                                                                <div className="col-md-6 mb-3 d-none">
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
                                                                <div className="col-md-6 mb-3 d-none">
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
                                                                <div className="col-md-6 mb-3 d-none">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">No Employees</InputLabel>
                                                                        <Select onChange={(e) => { handleChange('employee', e) }} defaultValue={{ value: data.employee, label: data.employee }} name="employee" options={employee_options}></Select>
                                                                        <InputError message={errors.employee} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3 d-none">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Feature Label</InputLabel>
                                                                        <DynamicSelect
                                                                            onChange={(value) => handleChange("featureLabel", value)}
                                                                            value={data.featureLabel}
                                                                            options={featureLabel}
                                                                            name="featureLabel"
                                                                            defaultValue={data.featureLabelName}
                                                                        />
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 ">
                                                            <div className="row">
                                                                <div className="col-md-12 mb-3">

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
                                                                                checked={data.public_profile_on === 1}
                                                                                onChange={(e) => handleChange('public_profile_on', e.target.checked ? 1 : 0)}
                                                                                label="Public Profile Show"

                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group px-10">
                                                            <label className="fw-700 fs-16 form-label">Status</label>
                                                            <div className="radio-list">

                                                                <Form.Check
                                                                    type="switch"
                                                                    id="custom-switch-status"
                                                                    name="status"
                                                                    label="Active"
                                                                    checked={data.status === 1}
                                                                    role="button"
                                                                    onChange={(e) => handleChange('status', e.target.checked ? 1 : 0)}
                                                                />
                                                                <InputError message={errors.status} className="mt-2 col-12" />

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="form-actions mt-10 col-lg-12 text-left">
                                                    <button type="submit" className="btn btn-success"> <i className="bi bi-check"></i> Save</button>
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
