import AuthenticatedLayout from '@/Layouts/Authenticated';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';
import Select from 'react-select';
import { Head, Link, useForm, router } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/Components/Spinner';
import Delete from './Components/Delete';

export default function Leads({ auth, leads, ads }) {
    const [loading, setLoading] = useState(false);

    const [leadData, setLeadData] = useState(leads.data);

    const { data, setData } = useForm({
        ad: "",
        ad_title: 'All ads',
        q: "",
    });

    // useEffect(() => {
    //     searchResult();
    // }, [data]);

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("seller.leads.search", data));
        setLeadData(response.data);
        setLoading(false);
    }

    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const deleteAction = function (id) {
        setShowDelete(false);
        router.delete(route("seller.leads.destroy", id))
    }

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowDelete(true);
    }
    const handleClose = () => setShowDelete(false);

    return (
        <>
            {loading && <Spinner />}
            <Head title="Leads" />
            <Delete showDelete={showDelete} handleClose={handleClose} deleteAction={deleteAction} deleteId={deleteId} setShowDelete={setShowDelete}></Delete>
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-xl vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Leads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name, phone etc' className='text-overflow form-control' />
                                            </div>
                                            <div className="">
                                                <Select defaultValue={{ value: data.ad, label: data.ad_title }} onChange={(e) => setData('ad', e.value)} options={[{ label: "All ads", value: "" }, ...ads]}></Select>
                                            </div>
                                            <div className="ms-2">
                                                <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral me-2"><i className="bi bi-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <LeadsTable confirmDelete={confirmDelete} leads={leadData}></LeadsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
