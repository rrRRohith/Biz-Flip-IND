import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export default function SubscribedAgentsTable({ users }) {
    return (
        <>
            <div className="container">
                <div className="table-responsive rounded card-table">


                    {/* <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name..."
                       
                        />
                    </div> */}
                    <Table className="table border-no" id="example1">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>User</Th>
                                <Th>Plan</Th>
                                <Th>Price</Th>
                                <Th>Duration</Th>
                                <Th>Expires At</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.data.map(user => (



                                <Tr key={user.id}>
                                    <Td>{user.id}</Td>
                                    <Td>{user.seller.firstname} {user.seller.lastname}</Td>
                                    <Td>{user.name}</Td>
                                    <Td>{user.price}</Td>
                                    <Td>{user.duration}</Td>
                                    <Td>{user.expires_at}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}
