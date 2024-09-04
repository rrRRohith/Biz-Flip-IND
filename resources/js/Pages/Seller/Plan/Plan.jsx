import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import { Inertia } from '@inertiajs/inertia';

export default function Plan({ auth, plan, error, success, province_options, address }) {

    // const [cardNumber, setCardNumber] = useState('');
    // const [nameOnCard, setNameOnCard] = useState('');
    // const [expirationDate, setExpirationDate] = useState('');

    const validateCardNo = (value) => {
        // Remove non-digit characters
        let sanitizedValue = value.replace(/\D/g, '');

        // Restrict to a maximum of 16 digits
        if (sanitizedValue.length > 16) {
            sanitizedValue = sanitizedValue.slice(0, 16);
        }

        return sanitizedValue;
    };

    const validateCardName = (value) => {
        // Remove special characters
        return value.replace(/[^A-Za-z\s]/g, '');
    };

    const validateExpiryDate = (value) => {
        // Remove non-digit characters
        let sanitizedValue = value.replace(/\D/g, '');

        // Get the first two digits (month)
        let firstTwoDigits = sanitizedValue.slice(0, 2);

        // Ensure the month is valid
        if (parseInt(firstTwoDigits) > 12) {
            firstTwoDigits = '12';
        }

        // Get the last two digits (year)
        let lastTwoDigits = sanitizedValue.slice(2, 4);

        // Format the value with a slash
        if (sanitizedValue.length > 2) {
            sanitizedValue = firstTwoDigits + '/' + lastTwoDigits;
        }

        return sanitizedValue;
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = validateCardNo(value);
        setData('card_number', sanitizedValue);
    };

    const handleNameOnCardChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = validateCardName(value);
        setData('card_name', sanitizedValue);
    };

    const handleExpirationDateChange = (e) => {
        const value = e.target.value;
        const sanitizedValue = validateExpiryDate(value);
        setData('card_date', sanitizedValue);
    };
    
    const { data, setData, post, errors, reset } = useForm({
        firstname: address.firstname,
        lastname: address.lastname,
        email: address.email,
        phone: address.phone,
        address: address.address,
        city: address.city,
        province: address.province,
        postalcode: address.postalcode,
        card_name: '',
        card_date: '',
        card_cvv: '',
        card_number: '',
        _method: 'PUT'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route('seller.plans.update', plan.id), {
            preserveScroll: true,
        });
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSelect = (key, e) => {
        setData(key, e.value);
    };

    return (
        <>
            <Head title={plan.name} />
            <Wrapper user={auth.user} success={success} error={error}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">
                            {/* <div className="text-xl font-bold">Purchase {plan.name}</div> */}
                            <div className="container max-w-screen-lg vstack gap-6 m-auto">
                                <div className="d-flex align-items-center">
                                    <div className="text-xl font-bold">Purchase new plan</div>
                                    <div className="ms-auto">
                                        <Link href={route('seller.plans.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row justify-content-center">
                                        <div className='col-sm-7 col-12'>
                                            <div className="mb-5">
                                                <h4>Billing information</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-12">
                                                    <div className='mb-3'><label>First name</label>
                                                        <input value={data.firstname} onChange={(e) => handleChange("firstname", e.target.value)} type="text" placeholder="First name" className="form-control" />
                                                        <InputError message={errors.firstname} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className='mb-3'><label>Last name</label>
                                                        <input value={data.lastname} onChange={(e) => handleChange("lastname", e.target.value)} type="text" placeholder="Last name" className="form-control" />
                                                        <InputError message={errors.lastname} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className='mb-3'><label>Phone</label>
                                                        <input value={data.phone} onChange={(e) => handleChange("phone", e.target.value)} type="text" placeholder="Phone" className="form-control" />
                                                        <InputError message={errors.phone} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className='mb-3'><label>Email</label>
                                                        <input value={data.email} onChange={(e) => handleChange("email", e.target.value)} type="email" placeholder="Email" className="form-control" />
                                                        <InputError message={errors.email} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className='mb-3'><label>Address</label>
                                                        <input value={data.address} onChange={(e) => handleChange("address", e.target.value)} placeholder="Address" className="form-control" />
                                                        <InputError message={errors.address} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className='mb-3'><label>City</label>
                                                        <input value={data.city} onChange={(e) => handleChange("city", e.target.value)} placeholder="City" className="form-control" />
                                                        <InputError message={errors.city} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div><label>Province</label>
                                                        <Select defaultValue={{ value: data.province, label: data.province ? data.province : 'Select...' }} onChange={(e) => { handleChange('province', e.value) }} options={province_options}></Select>
                                                        <InputError message={errors.province} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className='mb-3'><label>Postalcode</label>
                                                        <input value={data.postalcode} onChange={(e) => handleChange("postalcode", e.target.value)} placeholder="Postalcode" className="form-control" />
                                                        <InputError message={errors.postalcode} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-muted text-gray-500'>
                                                Note: Buying a new plan will invalidate all your existing plans and any unused ad listing benefits. Please make sure to utilize any remaining listings or benefits from your current plan before you purchase a new one.
                                            </div>
                                        </div>
                                        <div className='col-sm-5 col-12'>
                                            <div className="card rounded-3 py-4 mb-5">
                                                <div className="card-body text-center">
                                                    <h5 className="card-title font-bolder">{plan.name}</h5>
                                                    <div className="text-primary mb-3">
                                                        <h4 className="card-title text-primary">${plan.price} <small>/ {plan.duration} month</small> </h4>
                                                    </div>

                                                    <p className="card-text mb-3">{plan.description}</p>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <div className="text-end">
                                                    <div>Sub total. <span className="font-bolder">${plan.price}</span></div>
                                                    <div>Tax. <span className="font-bolder">${plan.tax_amount}</span></div>
                                                    <div>Grand total. <span className="font-bolder">${plan.total_amount}</span></div>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <div className='mb-3'>
                                                    <img className='w-full' src="https://res.cloudinary.com/rr6/image/upload/v1725361095/cards_jokpdn.png" alt="" />
                                                </div>
                                                <div className='mb-3'><label>Name on card</label>
                                                    <input value={data.card_name} onChange={handleNameOnCardChange} type="text" placeholder="Name on card" className="form-control" />
                                                    <InputError message={errors.card_name} />
                                                </div>
                                                <div className='mb-3'><label>Card number</label>
                                                    <input value={data.card_number} onChange={handleCardNumberChange} type="text" placeholder="Card number" className="form-control" />
                                                    <InputError message={errors.card_number} />
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 ">
                                                        <div><label>Exp date</label>
                                                            <input value={data.card_date} onChange={handleExpirationDateChange} type="text" placeholder="Exp date" className="form-control" />
                                                            <InputError message={errors.card_date} />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div><label>CVV</label>
                                                            <input value={data.card_cvv} maxLength={4} onChange={(e) => handleChange("card_cvv", e.target.value)} type="text" placeholder="CVV" className="form-control" />
                                                            <InputError message={errors.card_cvv} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn d-block btn-primary w-full">Pay <span className="font-bolder">${plan.total_amount}</span> </button>
                                        </div>
                                        <div className='col-sm-6 col-12'>

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
