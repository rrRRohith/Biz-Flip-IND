import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";

const employees_options = [
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
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' }
];

export default function Settings({ seller, auth, success, error }) {
    const [checkedDays, setCheckedDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    });

    const { data, setData, post, errors, reset } = useForm({
        logo: '',
        company_name: seller.company_name,
        email: seller.email,
        phone: seller.phone,
        employees: seller.employees,
        address: seller.address,
        firstname: seller.firstname,
        lastname: seller.lastname,
        short_description: seller.short_description,
        description: seller.description,
        website: seller.website,
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

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("seller.settings.store"));
    };

    const handleCheckboxChange = (day) => {
        setCheckedDays((prevCheckedDays) => ({
            ...prevCheckedDays,
            [day]: !prevCheckedDays[day]
        }));
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
                                            <label>Short bio</label>
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
                                            <Select value={data.employees} onChange={(e) => { handleChange('employees', e.target.value) }} name="employees" options={employees_options}></Select>
                                            <InputError message={errors.employees} />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Contact person</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>First name</label>
                                                <input value={data.firstname} onChange={(e) => { handleChange('firstname', e.target.value) }} type="text" placeholder="Your first name" className="form-control" id="first_name" />
                                            </div>
                                            <InputError message={errors.firstname} />
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Last name</label>
                                                <input value={data.lastname} onChange={(e) => { handleChange('lastname', e.target.value) }} type="text" placeholder="Your last name" className="form-control" />
                                            </div>
                                            <InputError message={errors.lastname} />
                                        </div>
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
                                        <h4>Socials media & website</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>Facebook</label> <input type="text" placeholder="Your facebook page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Instagram</label> <input type="text" placeholder="Your instagram page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Youtube</label> <input type="text" placeholder="Your youtube page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Linkedin</label> <input type="text" placeholder="Your linkedin page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Twitter</label> <input type="text" placeholder="Your twitter page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Website</label>
                                                <input value={data.website} onChange={(e) => { handleChange('website', e.target.value) }} type="text" placeholder="Your website url" className="form-control" />
                                            </div>
                                            <InputError message={errors.website} />
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
