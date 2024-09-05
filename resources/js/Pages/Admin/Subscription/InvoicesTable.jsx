import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link } from '@inertiajs/react';

export default function InvoicesTable({ invoices, auth }) {
    return (
        <>
            <div className="container">
                <div className="table-responsive rounded card-table">
                    <Table className="table border-no" id="example1">
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Inv No</Th>
                                <Th>Seller Name</Th>
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
                                <Tr key={invoice.id}>
                                    <Td>{invoice.id}</Td>
                                    <Td>{invoice.invoice_no}</Td>
                                    <Td>{invoice.seller.firstname} {invoice.seller.lastname}</Td>
                                    <Td>{invoice.name}</Td>
                                    <Td>{invoice.price}</Td>
                                    <Td>{invoice.payment_id}</Td>
                                    <Td>{invoice.payment_method}</Td>
                                    <Td>{invoice.created_at}</Td>
                                    <Td>
                                        <button className="btn btn-transparent" onClick={() => handleModelShowInvoice(invoice)}>
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
