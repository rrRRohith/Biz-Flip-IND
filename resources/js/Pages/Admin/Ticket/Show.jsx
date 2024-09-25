import React, { useEffect, useRef } from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from "@/Components/InputError";

export default function Show({ ticket, messages, auth, success = null, error = null }) {
    const { data, setData, post, errors, reset } = useForm({
        message: '',
        _method: 'PUT'
    });
    const boxBodyRef = useRef(null); // Reference for box-body div


    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route("admin.support-tickets.update", ticket.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset('message');
            },
        });
    };


    const closeTicket = (id) => {
        if (!window.confirm("Are you sure you want to close the ticket?")) {
            return;
        }
        router.post(route("admin.support-tickets.close-ticket", id))
    }





    useEffect(() => {
        // Scroll to the bottom of the box-body div whenever messages change
        if (boxBodyRef.current) {
            boxBodyRef.current.scrollTop = boxBodyRef.current.scrollHeight;
        }
    }, [messages]); // Trigger effect whenever messages change


    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Support Tickets</h2>}
            success={success}
            error={error}
        >
            <Head title="Support Tickets List" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex align-items-center">
                                    <div className="me-auto">
                                        <h4 className="page-title">Support Tickets #{ticket.ticket_no}</h4><br />
                                        <div className="d-inline-block align-items-center mt-2">
                                            <nav>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <a href="/">
                                                            <i className="bi bi-house"></i> Dashboard
                                                        </a>
                                                    </li>
                                                    <li className="breadcrumb-item" aria-current="page">
                                                        <a href="{route('admin.support-tickets.index')}">Support Tickets</a>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">#{ticket.ticket_no}</li>
                                                </ol>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <Link href={route('admin.support-tickets.index')} className="btn btn-danger"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main content --> */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">

                                <div className="col-12">
                                    {ticket.status === 'solved' && (
                                        <div className="alert alert-warning rounded-input border-0">
                                            This ticket has been closed and is no longer active. If you need any further assistance, please open another ticket and mention your ticket <strong>ID#{ticket.id}</strong>.
                                        </div>
                                    )}

                                    <div className='message alert text-white bg-bitbucket rounded-input mb-3'>
                                        <div className="small float-end pb-2">{ticket.date_text}</div>
                                        <i>
                                            You opened ticket at with {ticket.priority}.
                                            <div>Subject: {ticket.subject}</div>
                                        </i>
                                    </div>
                                </div>
                                <div className="box mt-3">
                                    <div className="box-body" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                                        {messages && messages.data && messages.data.length > 0 ? (
                                            messages.data.map((message) => (
                                                <React.Fragment key={message.id}>
                                                    <div key={message.id} className={`d-flex ${message.is_sender ? '' : 'flex-row-reverse'}`}>
                                                        <>
                                                            <div className={`d-flex rounded-circle align-items-center message-avatar alert p-0 ${message.is_sender ? 'me-2 alert-secondary' : 'ms-2 alert-primary'}`}>
                                                                <div className="m-auto font-bold text-md">
                                                                    {message.sender_name.substring(0, 1)}
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className={`${message.is_sender ? 'text-start' : 'text-end'} small`}>
                                                                    {!message.is_sender ? '' : message.sender_name} {message.date_text}
                                                                </div>
                                                                <div className={`${message.is_sender ? 'me-auto text-start text-dark alert-secondary' : 'alert-primary text-end ms-auto'} alert rounded-input message w-auto alert rounded-input mb-3`}>
                                                                    {message.message}
                                                                </div>
                                                            </div>
                                                        </>
                                                    </div>
                                                </React.Fragment>
                                            ))
                                        ) : (
                                            <div>No messages available.</div>
                                        )}
                                    </div>
                                </div>

                                {ticket.status == 'open' ? (
                                    <form onSubmit={handleSubmit} >
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <div className="form-group">
                                                    <label className='fw-700 fs-16 form-label form-group__label'>Your message</label>
                                                    <textarea value={data.message} name="message" id="message" onChange={(e) => { handleChange('message', e.target.value) }} placeholder="Tell us about how can we help you!" className="form-control"></textarea>
                                                    <InputError message={errors.message} />
                                                </div>
                                            </div>

                                            <div className="col-lg-2  align-content-center">
                                                <div className='d-flex gap-2'>
                                                    <button type="submit" className="btn btn-success">
                                                        <i className="bi bi-send"></i>
                                                        Send message
                                                    </button>
                                                    <span onClick={(e) => closeTicket(ticket.id)} className="btn btn-warning">
                                                        <i className="bi bi-x"></i>
                                                        Close Ticket
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                ) : (
                                    <div className="">
                                        <div className="alert alert-warning rounded-input border-0">
                                            This ticket has been closed and is no longer active, if you need any further assitance please open another ticket and mention your ticket <strong>ID#{ticket.id}</strong>
                                        </div>
                                        <div className="ms-auto text-end mt-3">
                                           <Link href={route('admin.support-tickets.reopen', ticket.id)} className='btn btn-success'>Reopen Ticket</Link>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}
        </Authenticated>
    );
}
