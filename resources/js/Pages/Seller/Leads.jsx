import AuthenticatedLayout from '@/Layouts/Authenticated';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';
import Select from 'react-select';
import { Head, Link, useForm, router } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/Components/Spinner';
import Delete from './Components/Delete';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/DateRangePicker/styles/index.css';

export default function Leads({ auth, leads, ads, categories }) {
    const status = [
        {
            'label': 'Pending',
            'value': 0,
        }, {
            'label': 'Responsed',
            'value': 1,
        }, {
            'label': 'Sold',
            'value': 2,
        }
    ]
    const [loading, setLoading] = useState(false);

    const [leadData, setLeadData] = useState(leads.data);

    const { data, setData } = useForm({
        ad: "",
        ad_title: 'All ads',
        q: "",
        status: "",
        status_title: 'All status',
        category: '',
        category_title: 'All categories',
        start : '',
        end : '',
    });

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
        router.delete(route("seller.leads.destroy", id));
        searchResult();
    }

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowDelete(true);
    }
    const handleClose = () => setShowDelete(false);
    const dateRangeChange = () => {

    }
    const formatDate = (date) => date ? date.toISOString().split('T')[0] : '';
    const dateChange = (range) => {
        setData('date_range', {
            start : range ? formatDate(range[0]) : '',
            end : range ? formatDate(range[1]) : '',
        });
    }

    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            {loading && <Spinner />}
            <Head title="Leads" />
            <Delete showDelete={showDelete} handleClose={handleClose} deleteAction={deleteAction} deleteId={deleteId} setShowDelete={setShowDelete}></Delete>
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Leads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                    <div className="d-flex d-lg-none align-items-center">
                                            <div onClick={(e) => setShowFilters(!showFilters)} className="d-lg-none btn btn-secondary text-overflow">Filters {showFilters ? (<i class="bi bi-chevron-compact-up"></i>) : (<i class="bi bi-chevron-compact-down"></i>)}</div>
                                        </div>
                                        <div className={showFilters ? 'd-lg-block' : 'd-none d-lg-block'}>
                                            <div className='row align-items-center mt-4 mt-lg-0'>
                                            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name, phone etc' className='text-overflow form-control' />
                                            </div>
                                            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                <Select defaultValue={{ value: data.category, label: data.category_title }} onChange={(e) => setData('category', e.value)} options={[{ label: "All categories", value: "" }, ...categories]}></Select>
                                            </div>
                                            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                <Select defaultValue={{ value: data.ad, label: data.ad_title }} onChange={(e) => setData('ad', e.value)} options={[{ label: "All ads", value: "" }, ...ads]}></Select>
                                            </div>
                                            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                <Select defaultValue={{ value: data.status, label: data.status_title }} onChange={(e) => setData('status', e.value)} options={[{ label: "All status", value: "" }, ...status]}></Select>
                                            </div>
                                            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                            <DateRangePicker className='w-full' onChange={dateChange} />
                                            </div>
                                            <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                            <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral w-full"><span className='d-inline d-lg-none me-2'>Search</span><i className="bi bi-search"></i></button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <LeadsTable searchResult={searchResult} confirmDelete={confirmDelete} leads={leadData}></LeadsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
