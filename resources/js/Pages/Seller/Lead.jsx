import LeadStatusBtn from "./Components/LeadStatusBtn";
import { Head, Link, useForm } from "@inertiajs/react";
import PermissionAllow from '@/Components/PermissionAllow';
import React, { useState, useEffect } from 'react';
import InputError from "@/Components/InputError";

export default function ({ lead, attendLead, sold }) {
    const [showMessageForm, setShowMessageForm] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        message: '',
        _method: 'PUT'
    });

    const handleResponseChange = (key, value) => {
        setData(key, value);
    };

    const handleResponseSubmit = async (e) => {
        e.preventDefault();
        await post(route("seller.leads.respond", lead.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset('message');
                attendLead(lead);
            },
        });
    };

    return (
        <>
            <table className="table table-hover table-nowrap mb-5">
                <tbody>
                    <tr>
                        <td>
                            Ad.
                        </td>
                        <td className="font-bold whitespace-wrap">
                            {lead.ad.title} <small>{lead.ad.city}</small>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name.
                        </td>
                        <td className="font-bold whitespace-wrap">
                            {lead.firstname} {lead.lastname}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email.
                        </td>
                        <td className="font-bold whitespace-wrap">
                            {lead.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone.
                        </td>
                        <td className="font-bold whitespace-wrap">
                            {lead.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Date.
                        </td>
                        <td className="font-bold whitespace-wrap">
                            {lead.date_text}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Message.
                        </td>
                        <td className="font-bold whitespace-wrap">
                            {lead.message}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Status.
                        </td>
                        <td>
                            <LeadStatusBtn sold={sold} lead={lead}></LeadStatusBtn>
                        </td>
                    </tr>
                    {lead.attender && (
                        <tr>
                            <td>
                                Attended by.
                            </td>
                            <td className="font-bold whitespace-wrap">
                                {lead.attender}
                            </td>
                        </tr>
                    )}
                    {lead.response && (
                        <tr>
                            <td>
                                Response.
                            </td>
                            <td className="font-bold whitespace-wrap">
                                {lead.response}
                            </td>
                        </tr>
                    )}
                    {lead.chat_id && (
                        <tr>
                            <td colSpan={2}>
                                <Link href={route('seller.chats.show', lead.chat_id)} className="text-primary">View chat</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {lead.status == 0 && (
                <PermissionAllow permission="Ad Lead Edit">
                    <div className="row g-5">
                        <div className="col-12 text-end">
                            <button onClick={(e) => attendLead(lead)} type="submit" className="btn btn-primary">Mark as responded</button>
                            <button onClick={(e) => setShowMessageForm(!showMessageForm)} type="submit" className="btn ms-2 btn-secondary">Send response</button>
                        </div>
                    </div>
                </PermissionAllow>
            )}
            {lead.status == 1 && (
                <PermissionAllow permission="Ad Lead Edit">
                    <div className="row g-5">
                        <div className="col-12 text-end">
                            <button onClick={(e) => sold(lead)} type="submit" className="btn btn-primary">Mark as sold</button>
                        </div>
                    </div>
                </PermissionAllow>
            )}
            {showMessageForm && (
                <div className="mt-10">
                    <form action="" onSubmit={handleResponseSubmit}>
                        <div className="row g-5">
                            <div className="col-12">
                                <div className="col-md-12">
                                    <label>Your message</label>
                                    <textarea value={data.message} name="message" id="message" onChange={(e) => { handleResponseChange('message', e.target.value) }} placeholder="Tell us about how can we help you!" className="form-control"></textarea>
                                    <InputError message={errors.message} />
                                </div>
                            </div>
                            <div className="col-12 text-end">
                                <button onClick={(e) => setShowMessageForm(!showMessageForm)} type="button" className="btn btn-secondary">Cancel</button>
                                <button type="submit" className="btn ms-2 btn-primary">Send message</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

        </>
    );
}