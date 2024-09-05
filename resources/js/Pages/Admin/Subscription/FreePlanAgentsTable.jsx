import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export default function FreePlanAgentsTable({ users, auth }) {
    return (
        <>
            <div className="container">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Created At</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.data.map(user => (
                            <Tr key={user.id}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.created_at}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </>
    );
}
