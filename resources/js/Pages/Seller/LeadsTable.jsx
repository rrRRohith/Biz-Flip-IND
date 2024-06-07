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

export default function ({ leads }) {
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
        router.put(route("seller.leads.update", lead.id))
    }

    const deleteLead = (lead) => {
        if (!window.confirm("Are you sure you want to delete the lead?")) {
            return;
        }
        router.delete(route("seller.leads.destroy", lead.id))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Lead Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Lead lead={mdata} attendLead={attendLead}/>
                </Modal.Body>
            </Modal>
            <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Client</th>
                            <th scope="col">Ad</th>
                            <th scope="col">Date</th>
                            <PermissionAllow permission="Ad Lead Show">
                            <th scope="col">Message</th>
                            </PermissionAllow>
                            <th scope="col">Contact details</th>
                            <th scope="col">Status</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {leads.length ? (
                            <>
                                {leads.map((lead) => (
                                    <tr key={lead.id}>
                                        <td>
                                            <div>
                                                {lead.firstname} {lead.lastname}
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                {lead.ad.title}
                                            </div>
                                            <div className="small text-muted">
                                                {lead.ad.city}
                                            </div>
                                        </td>
                                        <td>
                                            {lead.date_text}
                                        </td>
                                        <PermissionAllow permission="Ad Lead Show">
                                        <td>
                                            <div onClick={(e) => showLead(lead)} role='button' className="text-primary text-decoration-underline">Read message</div>
                                        </td>
                                        </PermissionAllow>
                                        <td>
                                            <div>
                                                {lead.email}
                                            </div>
                                            <div className="small text-muted">
                                                {lead.phone}
                                            </div>
                                        </td>
                                        <td>
                                            <LeadStatusBtn status={lead.status}></LeadStatusBtn>
                                        </td>
                                        <td>
                                            <PermissionAllow permission="Ad Lead Show">
                                            <button onClick={(e) => showLead(lead)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-search"></i></button>
                                            </PermissionAllow>
                                            <PermissionAllow permission="Ad Lead Edit">
                                            <button onClick={(e) => deleteLead(lead)} type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                            </PermissionAllow>
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