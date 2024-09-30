
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import Invoice from './Invoice';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export default function Plans({ plans, subscribedAgents, freePlanAgents, invoices, auth }) {
    const [key, setKey] = useState('SubscriptionPlans');
    // State management
    const [show, setShow] = useState(false);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [modalType, setModalType] = useState(""); // "view", "edit", or "create"

    const [mdata, setmData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("Invoice");


    const handleClose = () => setShow(false);

    const showInvoice = async (invoice) => {
        setmData(invoice);
        setTitle('Invoice #' + invoice.invoice_no)
        setShow(true);
    }


    const handlePrint = () => {
        window.print();
    };




    return (
        <>

            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Invoice invoice={mdata}></Invoice>
                </Modal.Body>
                <Modal.Footer className='col-lg-12 text-end'>
                    <button onClick={handlePrint} className='btn btn-linkedin btn-sm  text-end'> <i class="bi bi-print"></i> Print invoice</button>
                </Modal.Footer>
            </Modal>


            <Head title="Subscription Plans" />
            <Authenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Subscription Plans</h2>}
            >
                <div className="content-wrapper me-4">
                    <div className="container-full">
                        <div className="content-header">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="d-flex flex-column">
                                        <h4 className="page-title">Subscription Plans</h4>
                                        <div className="d-inline-block align-items-center mt-2">
                                            <nav>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link href={route('admin.index')}>
                                                            <i className="bi bi-house"></i> Dashboard
                                                        </Link>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">Subscription Plans</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    
                                </div>
                            </div>
                        </div>

                        <section className="content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="max-w-screen-md vstack gap-6 m-auto">
                                                <div className="container">

                                                    <div className="table-responsive rounded card-table">
                                                        <Table className="table border-no" id="example1">
                                                            <Thead>
                                                                <Tr>
                                                                    <Th>#</Th>
                                                                    <Th>Inv No</Th>
                                                                    <Th>User Name</Th>
                                                                    <Th>Plan</Th>
                                                                    <Th>Price</Th>
                                                                    <Th>Payment Id</Th>
                                                                    <Th>Payment Method</Th>
                                                                    <Th>Created At</Th>
                                                                    <Th>Actions</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                {invoices.data.map(invoice => (
                                                                    <Tr onClick={(e) => showInvoice(invoice)} key={invoice.id}>
                                                                        <Td>{invoice.id}</Td>
                                                                        <Td>{invoice.invoice_no}</Td>
                                                                        <Td>{invoice.seller.firstname} {invoice.seller.lastname}</Td>
                                                                        <Td>{invoice.name}</Td>
                                                                        <Td>{invoice.price}</Td>
                                                                        <Td>{invoice.payment_id}</Td>
                                                                        <Td>{invoice.payment_method}</Td>
                                                                        <Td>{invoice.created_at}</Td>
                                                                        <Td>
                                                                            <button className="btn btn-transparent p-2 px-3" onClick={() => showInvoice(invoice)}>
                                                                                <i className="bi bi-eye"></i>
                                                                            </button>
                                                                        </Td>
                                                                    </Tr>
                                                                ))}
                                                            </Tbody>
                                                        </Table>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}