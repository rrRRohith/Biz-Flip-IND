import AuthenticatedLayout from '@/Layouts/Authenticated';
import Wrapper from './layout/Wrapper';
import AdsTable from './AdsTable';
import { Head, Link, useForm, router } from "@inertiajs/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '@/Components/Spinner';
import PermissionAllow from '@/Components/PermissionAllow';
import Delete from './Components/Delete';
import Select from 'react-select';

export default function Ads({ auth, ads, categories, industries }) {
    const [loading, setLoading] = useState(false);

    const [adData, setadData] = useState(ads.data);

    const { data, setData } = useForm({
        q: "",
        status: "",
        status_title: 'All status',
        category: '',
        category_title: 'All categories',
        industry: '',
        industry_title: 'All industries',
    });

    // useEffect(() => {
    //     searchResult();
    // }, [data]);

    const searchResult = async () => {
        setLoading(true);
        const response = await axios.get(route("seller.ads.search", data));
        setadData(response.data);
        setLoading(false);
    }

    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const deleteAction = function (id) {
        setShowDelete(false);
        router.delete(route("seller.ads.destroy", id));
        searchResult();
    }

    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowDelete(true);
    }
    const handleClose = () => setShowDelete(false);

    const status = [
        {
            'label': 'Pending',
            'value': -1,
        }, {
            'label': 'Active',
            'value': 1,
        }, {
            'label': 'Inactive',
            'value': 0,
        }, {
            'label': 'Sold',
            'value': 2,
        }
    ]
    const [ad_categories, setAdcategories] = useState(industries);
    const changeAdCategories = (value) => {
        const category = categories.find(item => item.value === value);
        setAdcategories(category ? category.ad_category_collection : industries);
    }

    const [showFilters, setShowFilters] = useState(false);

    return (
        <>
            {loading && <Spinner />}
            <Head title="Ads" />
            <Delete showDelete={showDelete} handleClose={handleClose} deleteAction={deleteAction} deleteId={deleteId} setShowDelete={setShowDelete}></Delete>
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Ads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex d-lg-none align-items-center">
                                            <div onClick={(e) => setShowFilters(!showFilters)} className="d-lg-none btn btn-secondary text-overflow">Filters {showFilters ? (<i className="bi bi-chevron-compact-up"></i>) : (<i className="bi bi-chevron-compact-down"></i>)}</div>

                                            <PermissionAllow permission="Ad Create">
                                                <div className="ms-auto">
                                                    <Link className="btn btn-primary text-overflow" href={route('seller.ads.create')}><i className="bi bi-plus text-md"></i>
                                                        New ad
                                                    </Link>
                                                </div>
                                            </PermissionAllow>
                                        </div>
                                        <div className={showFilters ? 'd-lg-block' : 'd-none d-lg-block'}>
                                            <div className='row align-items-center mt-4 mt-lg-0'>
                                                <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                    <input defaultValue={data.q} onChange={(e) => setData('q', e.target.value)} type="search" placeholder='Search by name, location etc' className='text-overflow form-control' />
                                                </div>
                                                <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                    <Select defaultValue={{ value: data.category, label: data.category_title }} onChange={(e) => { setData('category', e.value); changeAdCategories(e.value) }} options={[{ label: "All categories", value: "" }, ...categories]}></Select>
                                                </div>
                                                <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                    <Select defaultValue={{ value: data.industry, label: data.industry_title }} onChange={(e) => { setData('industry', e.value) }} options={[{ label: "All industries", value: "" }, ...ad_categories]}></Select>
                                                </div>
                                                <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                    <Select defaultValue={{ value: data.status, label: data.status_title }} onChange={(e) => setData('status', e.value)} options={[{ label: "All status", value: "" }, ...status]}></Select>
                                                </div>
                                                <div className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                    <button onClick={(e) => searchResult()} type="button" className="btn btn-neutral w-full"><span className='d-inline d-lg-none me-2'>Search</span><i className="bi bi-search"></i></button>
                                                </div>
                                                <PermissionAllow permission="Ad Create">
                                                    <div className="ms-auto d-none d-lg-block col-lg-auto">
                                                        <Link className="btn btn-primary text-overflow" href={route('seller.ads.create')}><i className="bi bi-plus text-md"></i>
                                                            New ad
                                                        </Link>
                                                    </div>
                                                </PermissionAllow>
                                            </div>
                                        </div>
                                    </div>
                                    <AdsTable searchResult={searchResult} confirmDelete={confirmDelete} ads={adData}></AdsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
