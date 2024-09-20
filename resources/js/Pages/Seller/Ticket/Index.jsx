import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import { Link, useForm } from '@inertiajs/react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/Components/Spinner';
import PermissionAllow from '@/Components/PermissionAllow';
import Tickets from './Tickets';
export default function Index({ auth, tickets }) {
    const [loading, setLoading] = useState(false);

    const [ticketData, setTicketData] = useState(tickets.data);

    const { data, setData } = useForm({
        q: "",
    });

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("account.tickets.search", data));
        setTicketData(response.data);
        setLoading(false);
    }
    return (
        <>
            {loading && <Spinner />}
            <Head title="Support tickets" />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Support tickets</div>
                            <div className="">
                                Stay informed and in control of your support requests. Easily create new tickets, track their status, search for past cases, and prioritize urgent issues. Our user-friendly interface makes it simple to communicate with our support team and receive timely assistance.
                            </div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by subject' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-2">
                                                <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral me-2"><i className="bi bi-search"></i></button>
                                            </div>
                                            <PermissionAllow permission="Support Ticket Create">
                                                <div className="ms-auto">
                                                    <Link className="btn btn-primary text-overflow" href={route('account.tickets.create')}><i className="bi bi-plus text-md"></i>
                                                        <span className="d-none d-md-inline">Open ticket</span>
                                                    </Link>
                                                </div>
                                            </PermissionAllow>
                                        </div>
                                    </div>
                                    <Tickets ticketData={ticketData}></Tickets>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
