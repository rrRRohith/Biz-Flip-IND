import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import { Picker } from 'react-gmap-picker';
import { InputMask } from '@react-input/mask';

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

const days = [
    { id: 'mon', label: 'Monday' },
    { id: 'tue', label: 'Tuesday' },
    { id: 'wed', label: 'Wednesday' },
    { id: 'thu', label: 'Thursday' },
    { id: 'fri', label: 'Friday' },
    { id: 'sat', label: 'Saturday' },
    { id: 'sun', label: 'Sunday' }
];

const socials = [
    { id: 'facebook', label: 'Facebook' },
    { id: 'x', label: 'X' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'linkedin', label: 'Linkedin' },
    { id: 'youtube', label: 'Youtube' },
];

import { useMask } from '@react-input/mask';

export default function Settings({ seller, auth, success, error, province_options, API_KEY }) {
    
    const inputPhone = useMask({ mask: '(___) ___-____', replacement: { _: /\d/ } });

    const [checkedDays, setCheckedDays] = useState(seller.days);
    const [checkedSocials, setCheckedSocials] = useState(seller.social_settings);
    const [isMapEnabled, setIsMapEnabled] = useState(seller && seller.lat != '' && seller.lat != '' ? true : false);

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
        logo: '',
        company_name: seller.company_name,
        email: seller.email,
        phone: formatPhone(seller.phone),
        employee: seller.employee,
        short_description: seller.short_description,
        description: seller.description,
        website: seller.website,
        facebook: seller.social_links.facebook,
        x: seller.social_links.x,
        instagram: seller.social_links.instagram,
        linkedin: seller.social_links.linkedin,
        youtube: seller.social_links.youtube,
        address: seller ? seller.address : '',
        city: seller ? seller.city : '',
        postalcode: seller ? seller.postalcode : '',
        province: seller ? seller.province : '',
        lat: seller ? seller.lat : '',
        lng: seller ? seller.lng : '',
        established: seller ? seller.established : '',
        isMapEnabled: seller && seller.lat != '' && seller.lat != '' ? true : false

    });

    const [imagePreview, setImagePreview] = useState('');

    const handleCheckboxChangeMap = (event) => {
        setIsMapEnabled(event.target.checked);
        setData('isMapEnabled', event.target.checked)
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('logo', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSelect = (key, e) => {
        setData(key, e.value);
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("account.settings.store", {
            days: checkedDays,
            socials: checkedSocials,
            location: location
        }), {
            preserveScroll: true,
            onSuccess: () => {

            },
        });
    };

    const handleCheckboxChange = async (day) => {
        await setCheckedDays((prevCheckedDays) => ({
            ...prevCheckedDays,
            [day]: !prevCheckedDays[day]
        }));
        //setData('days', checkedDays);
    };

    const handleSocialCheckboxChange = async (social) => {
        await setCheckedSocials((prevCheckedSocials) => ({
            ...prevCheckedSocials,
            [social]: !prevCheckedSocials[social]
        }));
    }

    const INITIAL_LOCATION = { lat: seller && seller.lat ? seller.lat : 13.4, lng: seller && seller.lng ? seller.lng : 77.0 };
    const INITIAL_ZOOM = 10;

    const [defaultLocation, setDefaultLocation] = useState(INITIAL_LOCATION);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(INITIAL_ZOOM);

    const handleChangeLocation = (lat, lng) => {
        setLocation({ lat, lng });
    };

    useState(() => {
        if (seller.logo) {
            setImagePreview(seller.logo);
        }
    }, [seller.logo]);

    return (
        <>
            <Head title="Settings" />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your business settings</div>
                            <div>Manage your business information easily. Update your profile, contact details, and company description.</div>
                            <div className="card rounded-input">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <label role='button' htmlFor='avatar' href="#" className="avatar avatar-lg border-2 border-gray rounded-circle text-white"><img alt="..." src={imagePreview} /></label>
                                                <div className="ms-4"><span className="h4 d-block mb-0">{data.company_name}</span>
                                                    <label htmlFor='avatar' type="button" className="text-primary font-semibold mt-1">Upload logo</label></div>

                                            </div>
                                            <InputError message={errors.logo} />
                                        </div>
                                        <input onChange={handleImageChange} type="file" id="avatar" className='d-none' hidden accept='image/*' />
                                        {/* <div className="ms-auto"><label htmlFor='avatar' type="button" className="btn btn-sm btn-neutral">Upload</label></div> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <h4>About your business</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-12">
                                            <label>Business name</label><span class="text-danger"> *</span>
                                            <input value={data.company_name} onChange={(e) => { handleChange('company_name', e.target.value) }} placeholder="Your business name" className="form-control" />
                                            <InputError message={errors.company_name} />
                                        </div>

                                        {/* <div className="col-md-12">
                                            <label>Short description</label>
                                            <input value={data.short_description} onChange={(e) => { handleChange('short_description', e.target.value) }} placeholder="Tell us about your business briefly" className="form-control" />
                                            <InputError message={errors.short_description} />
                                        </div> */}
                                        <div className="col-md-12">
                                            <label>Description</label><span class="text-danger"> *</span>
                                            <textarea rows={10} onChange={(e) => { handleChange('description', e.target.value) }} placeholder="Tell us about your business in detail" className="form-control" defaultValue={data.description}></textarea>
                                            <InputError message={errors.description} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>No of employees</label><small> (optional)</small>
                                            <Select defaultValue={{ value: data.employee, label: data.employee }} onChange={(e) => { handleSelect('employee', e) }} name="employee" options={employee_options}></Select>
                                            <InputError message={errors.employee} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Website</label><small> (optional)</small>
                                                <input value={data.website} onChange={(e) => { handleChange('website', e.target.value) }} type="text" placeholder="Your website url" className="form-control" />
                                            </div>
                                            <InputError message={errors.website} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Established</label><span class="text-danger"> *</span>

                                                <input maxLength={4} value={data.established} onChange={(e) => { handleChange('established', e.target.value) }} type="text" placeholder="Established year" className="form-control" />
                                            </div>
                                            <InputError message={errors.established} />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Business Address</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>Address</label> <small>(optional)</small>
                                                <input value={data.address} onChange={(e) => { handleChange('address', e.target.value) }} type="text" placeholder="Address" className="form-control" />
                                                <InputError message={errors.address} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>City</label> <small>(optional)</small>
                                                <input value={data.city} onChange={(e) => { handleChange('city', e.target.value) }} type="text" placeholder="City" className="form-control" />
                                                <InputError message={errors.city} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Postcode</label> <small>(optional)</small>
                                                <input maxLength={7} value={data.postalcode} onChange={(e) => { handleChange('postalcode', e.target.value) }} type="text" placeholder="Postcode" className="form-control" />
                                                <InputError message={errors.postalcode} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Province</label> <small>(optional)</small>
                                                <Select defaultValue={{ value: data.province, label: data.province ? data.province : 'Select...' }} onChange={(e) => { handleChange('province', e.value) }} options={province_options}></Select>
                                                <InputError message={errors.province} />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div><label>Map link</label>
                                                <input value={data.map_link} onChange={(e) => { handleChange('map_link', e.target.value) }} type="text" placeholder="Map link" className="form-control" />
                                                <InputError message={errors.map_link} />
                                            </div>
                                        </div> */}
                                        {/* <div className="col-md-6">
                                            <div><label>Latitude</label>
                                                <input value={data.lat} onChange={(e) => { handleChange('lat', e.target.value) }} type="text" placeholder="Latitude" className="form-control" />
                                                <InputError message={errors.lat} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Longitude</label>
                                                <input value={data.lng} onChange={(e) => { handleChange('lng', e.target.value) }} type="text" placeholder="Longitude" className="form-control" />
                                                <InputError message={errors.lng} />
                                            </div>
                                        </div> */}
                                        <div className="col-12 mb-5">
                                            <div className='mb-0 form-check form-check-lg'>
                                                <input
                                                    id="map"
                                                    className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                    type="checkbox"
                                                    name="map_enable"
                                                    defaultChecked={isMapEnabled}
                                                    onChange={handleCheckboxChangeMap}
                                                />
                                                <label
                                                    role="button" className='mt-1' for="map"> Enable Map</label>

                                            </div>
                                            <p className="small">Select map location to show in front end</p>
                                            {isMapEnabled && (
                                                <div>
                                                    <Picker
                                                        defaultLocation={defaultLocation}
                                                        zoom={zoom}
                                                        mapTypeId="roadmap"
                                                        style={{ height: '300px' }}
                                                        onChangeLocation={handleChangeLocation}
                                                        apiKey={API_KEY}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Business Communication</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label htmlFor="email">Email</label> <span class="text-danger">*</span>
                                                <input value={data.email} onChange={(e) => { handleChange('email', e.target.value) }} placeholder="Your email address" type="email" className="form-control" />
                                            </div>
                                            <InputError message={errors.email} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Phone number</label> <span class="text-danger"> *</span>
                                                <input ref={inputPhone} value={data.phone} onChange={(e) => { handleChange('phone', e.target.value) }} type="tel" placeholder="Your phone number" className="form-control" />
                                            </div>
                                            <InputError message={errors.phone} />
                                        </div>
                                    </div>
                                    {/* <div className="mb-5">
                                        <h4>Office working days</h4>
                                    </div>
                                    <div className="card mb-5 rounded-input">
                                        <div className="card-body">
                                            <div className="">
                                                {days.map((day) => (
                                                    <div key={day.id} className="form-check form-check-lg">
                                                        <input
                                                            role="button"
                                                            className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                            type="checkbox"
                                                            id={`office_${day.id}`}
                                                            checked={checkedDays[day.id]}
                                                            onChange={() => handleCheckboxChange(day.id)}
                                                        />
                                                        <label role="button" className="mt-1" htmlFor={`office_${day.id}`}>
                                                            {day.label} {checkedDays[day.id] ? <span className="text-success">(opened)</span> : <span className="text-danger">(closed)</span>}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="mb-5">
                                        <h4>Social media</h4>
                                    </div>
                                    <div>
                                        <table className='w-100 w-full mb-10'>
                                            <tbody>
                                                {socials.map((social) => (
                                                    <tr key={social.id}>
                                                        <td>
                                                            <div className="me-2">
                                                                <div className="form-check form-check-lg">
                                                                    <input
                                                                        role="button"
                                                                        className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                                        type="checkbox"
                                                                        id={`social_${social.id}`}
                                                                        checked={checkedSocials[social.id]}
                                                                        onChange={() => handleSocialCheckboxChange(social.id)}
                                                                    />
                                                                    <label role="button" className="mt-1" htmlFor={`social_${social.id}`}>
                                                                        {social.label}

                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <small>Set your {social.label} page link</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {checkedSocials[social.id] && (
                                                                <div>
                                                                    <input value={data[social.id] ?? ''} onChange={(e) => { handleChange(social.id, e.target.value) }} type="text" placeholder={`${social.label} page`} className="form-control" />
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row g-5">

                                        <div className="col-12 text-end">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save</button></div>
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
