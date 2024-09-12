import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';
import Spinner from '@/Components/Spinner';
import Modal from 'react-bootstrap/Modal';
import Invoice from './Invoice';
import PermissionAllow from '@/Components/PermissionAllow';

export default function Index({ auth, invoices, current_invoice, newInvoice }) {

    const [invoiceData, setinvoiceData] = useState(invoices.data);

    const { data, setData } = useForm({
        q: "",
    });

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("seller.invoices.search", data));
        setinvoiceData(response.data);
        setLoading(false);
    }

    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const [mdata, setmData] = useState(null);
    const [title, setTitle] = useState("Invoice");

    const handleClose = () => setShow(false);

    const showInvoice = async (invoice) => {
        setmData(invoice);
        setTitle('Invoice #' + invoice.invoice_no)
        setShow(true);
    }

    useEffect(() => {
        if (newInvoice) {
            console.log('newInvoice detected:', newInvoice);
            showInvoice(newInvoice);
        }
    }, [newInvoice]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <Head title="Invoices" />
            <PermissionAllow permission="Invoice View">
                <Modal size="lg" show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Invoice invoice={mdata}></Invoice>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handlePrint} className='btn btn-primary btn-sm text-overflow'>Print invoice</button>
                    </Modal.Footer>
                </Modal>
            </PermissionAllow>
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Invoices</div>
                            <div>
                            View and manage your invoices easily. See your subscription details, track your billing history, and download invoices for record-keeping.
                            </div>
                            <div>
                                {current_invoice && (
                                    <>
                                        <div className="alert alert-success mb-5">
                                            You currently have active subscription <strong>{current_invoice.name}</strong> with remaining <strong>{current_invoice.remaining_ads}</strong> ads till <strong>{current_invoice.expire_date}</strong>
                                        </div>
                                    </>
                                )}
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-2">
                                                <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral me-2"><i className="bi bi-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-hover table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col">Plan</th>
                                                    <th scope="col">Date purchased</th>
                                                    <th scope="col">Expires at</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {invoiceData.length ? (
                                                    <>
                                                        {invoiceData.map((invoice) => (
                                                            <tr onClick={(e) => showInvoice(invoice)} key={invoice.id}>
                                                                <td>
                                                                    #{invoice.invoice_no}
                                                                </td>
                                                                <td>
                                                                    <div>{invoice.name}</div>
                                                                    <div className="small">
                                                                        ${invoice.price} <small>/ {invoice.duration} month</small>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div>{invoice.invoice_date}</div>
                                                                </td>
                                                                <td>
                                                                    <div>{invoice.expire_date}</div>
                                                                </td>
                                                                <td>
                                                                    <div>${invoice.total_amount}</div>
                                                                </td>
                                                                <td>
                                                                    <PermissionAllow permission="Invoice View">
                                                                        <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-search"></i></button>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {loading && <Spinner />}
            </Wrapper>
        </>
    );
}
