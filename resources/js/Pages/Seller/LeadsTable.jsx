import { Head, Link, router } from '@inertiajs/react';
import LeadStatusBtn from "./Components/LeadStatusBtn";
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import Spinner from '@/Components/Spinner';
import React, { useState } from 'react';
import ModalPopup from '@/Components/ModalPopup';
import Lead from './Lead';
import Modal from 'react-bootstrap/Modal';
import PermissionAllow from '@/Components/PermissionAllow';

export default function ({ leads, confirmDelete, minimal = false }) {
    const [show, setShow] = useState(false);
    const [mdata, setmData] = useState(null);
    const [title, setTitle] = useState("Lead details");

    const handleClose = () => setShow(false);

    const showLead = async (lead) => {
        setmData(lead);
        setShow(true);
    }

    const attendLead = (lead) => {
        setShow(false);
        router.put(route("seller.leads.update", lead.id), {
            status: 'responded',
        })
    }

    const sold = (lead) => {
        setShow(false);
        router.put(route("seller.leads.update", lead.id), {
            status: 'sold',
        })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Lead Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Lead lead={mdata} attendLead={attendLead} sold={sold} />
                </Modal.Body>
            </Modal>
            <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                    <thead className="table-light">
                        <tr>
                            {!minimal && (
                                <>
                                <th scope="col">Client</th>
                                <th>
                                    <PermissionAllow permission="Ad Lead Show">
                                        <th scope="col">Message</th>
                                    </PermissionAllow>
                                </th>
                                </>
                            )}
                            <th scope="col">Ad</th>
                            <th scope="col">Date time</th>
                            {!minimal && (
                                <>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </>
                            )}

                            <th scope="col">Status</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {leads.length ? (
                            <>
                                {leads.map((lead) => (
                                    <tr key={lead.id} >
                                        {!minimal && (
                                        <>
                                        <td onClick={(e) => showLead(lead)}>
                                            <div>
                                                {lead.firstname} {lead.lastname}
                                            </div>
                                        </td>
                                        <PermissionAllow permission="Ad Lead Show">
                                        <td className='text-overflow mw-200' onClick={(e) => showLead(lead)}>
                                            {lead.message}
                                        </td>
                                    </PermissionAllow>
                                        </>
                                        )}
                                        <td onClick={(e) => showLead(lead)}>
                                            <div>
                                                {lead.ad.title}
                                            </div>
                                            {!minimal && (
                                            <div className="small text-muted">
                                                {lead.ad.city}
                                            </div>
                                            )}
                                        </td>
                                        <td onClick={(e) => showLead(lead)}>
                                            {lead.date_text}
                                        </td>
                                        {!minimal && (
                                            <>
                                                <td onClick={(e) => showLead(lead)}>
                                                        {lead.email}
                                                </td>
                                                <td onClick={(e) => showLead(lead)}>
                                                        {lead.phone}
                                                </td>
                                            </>
                                        )}
                                        <td>
                                            <LeadStatusBtn attendLead={attendLead} sold={sold} lead={lead}></LeadStatusBtn>
                                        </td>
                                        <td>
                                            <PermissionAllow permission="Ad Lead Show">
                                                <button onClick={(e) => showLead(lead)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-search"></i></button>
                                            </PermissionAllow>
                                            {!minimal && (
                                            <PermissionAllow permission="Ad Lead Edit">
                                                <button onClick={(e) => confirmDelete(lead.id)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                            </PermissionAllow>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ) : (<>
                            <tr>
                                <td className="text-center" colSpan="100">
                                    No records found..
                                </td>
                            </tr>
                        </>)}
                    </tbody>
                </table>
            </div>
        </>
    );
}