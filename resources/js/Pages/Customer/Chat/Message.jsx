import InputError from "@/Components/InputError";
import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Message({ chat, messages, user }) {
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
        await post(route(user.type == 'customer' ? "customer.chats.update" : "account.chats.update", chat.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset('message');
                setData('message', '');
            },
        });
    };

    return (
        <>
            <main className="py-6">
                <div className="container px-3 px-lg-6">
                    <div className="max-w-screen-md vstack gap-6 m-auto">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <img alt="Image Placeholder" src={chat.contact_image} class="avatar avatar- rounded-circle" />
                            </div>
                            <div>
                                <div className="text-md font-bold mb-0">{chat.contact_name}</div>
                                <div className="small">Offline</div>
                            </div>
                        </div>
                        <div>
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
                        <form onSubmit={handleSubmit}>
                            <div className="row g-5">
                                <div className="col-md-12">
                                    <label>Your message</label> <span class="text-danger"> *</span>
                                    <textarea value={data.message} name="message" id="message" onChange={(e) => { handleChange('message', e.target.value) }} placeholder="Type your message" className="form-control"></textarea>
                                    <InputError message={errors.message} />
                                </div>
                                <div className="col-12 text-end">
                                    <button type="submit" className="btn btn-primary">Send message</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}