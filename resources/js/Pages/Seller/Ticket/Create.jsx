import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from '../layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";

const priority_options = [
    {
        'label': 'Low',
        'value': 'low',
        'description': 'Product questions',
    },
    {
        'label': 'Medium',
        'value': 'medium',
        'description': 'General support',
    },
    {
        'label': 'High',
        'value': 'high',
        'description': 'Application errors',
    },
];


export default function Create({ auth, success, error }) {

    const { data, setData, post, errors, reset } = useForm({
        subject: '',
        message: '',
        priority: 'low',
    });

    const [imagePreview, setImagePreview] = useState('');

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("account.tickets.store"));
    };

    return (
        <>
            <Head title="Open new ticket" />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="d-flex align-items-center">
                                <div className="text-xl font-bold">Open new ticket</div>
                                <div className="ms-auto">
                                    <Link href={route('account.tickets.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-5">
                                        <div className="mb-0">
                                            <h4>Subject and message</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <label>Subject</label>
                                            <input value={data.subject} onChange={(e) => { handleChange('subject', e.target.value) }} placeholder="Enter your subject" className="form-control" />
                                            <InputError message={errors.subject} />
                                            <div className="small text-muted">Right subject will help us assign right team member to your ticket.</div>
                                        </div>
                                        <div className="col-md-12">
                                            <label>Your message</label>
                                            <textarea onChange={(e) => { handleChange('message', e.target.value) }} placeholder="Tell us about how can we help you!" className="form-control">{data.message}</textarea>
                                            <InputError message={errors.message} />
                                            <div className="text-muted small">
                                                Describe how we can help you. You can also attach images, docuements etc.
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-5">
                                                <h4>Priority</h4>
                                            </div>
                                            <div className="">
                                                {priority_options.map((option) => (
                                                    <>
                                                        <div className="form-check form-check-lg">
                                                            <input
                                                                role="button"
                                                                className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                                type="radio"
                                                                id={`priority_${option.value}`}
                                                                checked={data.priority == option.value}
                                                                value={option.value}
                                                                onChange={(e) => { handleChange('priority', e.target.value) }}
                                                            />
                                                            <label role="button" className="mt-1 font-bold" htmlFor={`priority_${option.value}`}>
                                                                {option.label}
                                                            </label>

                                                        </div>
                                                        <div className='mb-3'>{option.description}</div>
                                                    </>
                                                ))}
                                            </div>
                                            <InputError message={errors.priority} />
                                        </div>
                                        <div className="col-12 text-end">
                                            <Link href={route('account.tickets.index')} className="btn btn-neutral me-2">Cancel</Link>
                                            <button type="submit" className="btn btn-primary">Open new ticket</button></div>
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
