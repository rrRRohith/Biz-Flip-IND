
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link } from '@inertiajs/react';
import Invoice from './Invoice';

export default function InvoicesTable({ invoices }) {
    const [mdata, setmData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("Invoice");
    const [show, setShow] = useState(false);
    
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
        </>
    );
}
