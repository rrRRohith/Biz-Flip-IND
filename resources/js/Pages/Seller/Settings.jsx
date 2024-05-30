import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";

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

export default function Settings({ seller, auth, success, error }) {
    const [checkedDays, setCheckedDays] = useState(seller.days);

    const { data, setData, post, errors, reset } = useForm({
        logo: '',
        company_name: seller.company_name,
        email: seller.email,
        phone: seller.phone,
        employee: seller.employee,
        address: seller.address,
        short_description: seller.short_description,
        description: seller.description,
        website: seller.website,
        //days: checkedDays
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (seller.logo) {
            setImagePreview(seller.logo);
        }
    }, [seller.logo]);

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
        await post(route("seller.settings.store", {
            days : checkedDays
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
    return (
        <>
            <Head title="Settings" />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your business settings</div>
                            <div className="card rounded-input">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <a href="#" className="avatar avatar-lg border-2 border-gray rounded-circle text-white"><img alt="..." src={imagePreview} /></a>
                                                <div className="ms-4"><span className="h4 d-block mb-0">{data.company_name}</span></div>
                                            </div>
                                            <InputError message={errors.logo} />
                                        </div>
                                        <input onChange={handleImageChange} type="file" id="avatar" className='d-none' hidden accept='image/*' />
                                        <div className="ms-auto"><label htmlFor='avatar' type="button" className="btn btn-sm btn-neutral">Upload</label></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <h4>About your business</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <label>Business name</label>
                                            <input value={data.company_name} onChange={(e) => { handleChange('company_name', e.target.value) }} placeholder="Your business name" className="form-control" />
                                            <InputError message={errors.company_name} />
                                        </div>

                                        <div className="col-md-12">
                                            <label>Short description</label>
                                            <input value={data.short_description} onChange={(e) => { handleChange('short_description', e.target.value) }} placeholder="Tell us about your business briefly" className="form-control" />
                                            <InputError message={errors.short_description} />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Description</label>
                                            <textarea onChange={(e) => { handleChange('description', e.target.value) }} placeholder="Tell us about your business in detail" className="form-control">{data.description}</textarea>
                                            <InputError message={errors.description} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Address</label>
                                            <input value={data.address} onChange={(e) => { handleChange('address', e.target.value) }} type="text" placeholder="Where is your office located at?" className="form-control" />
                                            <InputError message={errors.address} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>No of employees</label>
                                            <Select defaultValue={{ value: data.employee, label: data.employee }} onChange={(e) => { handleSelect('employee', e) }} name="employee" options={employee_options}></Select>
                                            <InputError message={errors.employee} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Website</label>
                                                <input value={data.website} onChange={(e) => { handleChange('website', e.target.value) }} type="text" placeholder="Your website url" className="form-control" />
                                            </div>
                                            <InputError message={errors.website} />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Contact Information</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label htmlFor="email">Email</label>
                                                <input value={data.email} onChange={(e) => { handleChange('email', e.target.value) }} placeholder="Your email address" type="email" className="form-control" />
                                            </div>
                                            <InputError message={errors.email} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Phone number</label>
                                                <input value={data.phone} onChange={(e) => { handleChange('phone', e.target.value) }} type="tel" placeholder="Your phone number" className="form-control" />
                                            </div>
                                            <InputError message={errors.phone} />
                                        </div>
                                    </div>
                                    <div className="mb-5">
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
                                    </div>
                                    <div className="row g-5">

                                        <div className="col-12 text-end">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
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
