import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from '../layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import PermissionAllow from '@/Components/PermissionAllow';

export default function Ticket({ ticket, messages, auth, success, error }) {

    const { data, setData, post, errors, reset } = useForm({
        message: '',
        _method: 'PUT'
    });

    const [imagePreview, setImagePreview] = useState('');

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("account.tickets.update", ticket.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset('message');
            },
        });
    };

    return (
        <>
            <Head title={`Support Ticket#${ticket.id}`} />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            {ticket.status == 'solved' && (
                                <div className="alert alert-warning rounded-input border-0">
                                    This ticket has been closed and is no longer active, if you need any further assitance please open another ticket and mention your ticket <strong>ID#{ticket.id}</strong>
                                </div>
                            )}
                            <div className="d-flex align-items-center">
                                <div className="text-xl font-bold">Support Ticket#{ticket.id}</div>
                                <div className="ms-auto">
                                    <Link href={route('account.tickets.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-row-reverse">
                                    <div className="alert-primary alert p-0 text-primary ms-2 rounded-circle d-flex align-items-center message-avatar">
                                        <div className="m-auto fond-bold text-md">
                                            {ticket.sender_name.substring(0, 1)}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="small">{ticket.date_text}</div>
                                        <div className='message alert alert-primary rounded-input mb-3'>
                                            You opened ticket at with {ticket.priority}.
                                            <div>
                                                Subject.{ticket.subject}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {messages.data.map((message) => (
                                    <>
                                        <div className={`d-flex ${message.is_sender ? 'flex-row-reverse' : ''}`}>
                                            <div className={`d-flex rounded-circle align-items-center message-avatar alert p-0 ${message.is_sender ? 'ms-2 alert-primary' : 'me-2 alert-secondary'}`}>
                                                <div className="m-auto font-bold text-md">
                                                    {message.sender_name.substring(0, 1)}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={`${message.is_sender ? 'text-end' : 'text-start'} small`}>
                                                    {!message.is_sender ? message.sender_name : ''} {message.date_text}
                                                </div>
                                                <div className={`${message.is_sender ? 'alert-primary text-end ms-auto' : 'me-auto text-start text-dark alert-secondary'} alert rounded-input message w-auto alert rounded-input mb-3`}>
                                                    {message.message}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <PermissionAllow permission="Support Ticket Edit">
                            {ticket.status == 'open' ? (
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-5">
                                        <div className="col-md-12">
                                            <label>Your message</label>
                                            <textarea value={data.message} name="message" id="message" onChange={(e) => { handleChange('message', e.target.value) }} placeholder="Tell us about how can we help you!" className="form-control"></textarea>
                                            <InputError message={errors.message} />
                                            <div className="text-muted small">
                                                Describe how we can help you. You can also attach images, docuements etc.
                                            </div>
                                        </div>
                                        <div className="col-12 text-end">
                                            <Link href={route('account.tickets.index')} role="button" className="btn btn-neutral me-2">Cancel</Link>
                                            <button type="submit" className="btn btn-primary">Send message</button></div>
                                    </div>
                                </form>
                            ) : (
                                <div className="alert alert-warning rounded-input border-0">
                                    This ticket has been closed and is no longer active, if you need any further assitance please open another ticket and mention your ticket <strong>ID#{ticket.id}</strong>
                                </div>
                            )}
                            </PermissionAllow>
                        </div>

                    </div>
                </main>
            </Wrapper>
        </>
    );
}
