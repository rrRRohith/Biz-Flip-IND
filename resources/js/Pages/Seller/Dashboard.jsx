import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';
import PermissionAllow from '@/Components/PermissionAllow';
import Tickets from './Ticket/Tickets';
import AdsTable from './AdsTable';
import Graphs from './Graphs';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import SettingsFormMininal from './SettingsFormMininal';
import PlanError from './PlanError';
import PlanForm from './PlanForm';

export default function Dashboard({plans, showPlanForm, showAgentForm, auth, data, leads, tickets, ads, current_invoice, seller, province_options }) {
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    return (
        <>
            {showAgentForm && (
                <Modal size="lg" backdrop="static" keyboard={false} show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Update company settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SettingsFormMininal handleClose={handleClose} seller={seller} province_options={province_options}></SettingsFormMininal>
                    </Modal.Body>
                </Modal>
            )}

            {showPlanForm && (
                <Modal size="xl" backdrop="static" keyboard={false} show={show2} onHide={handleClose2} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Purchase advertising plans</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PlanForm current_invoice={current_invoice} handleClose={handleClose2} plans={plans}></PlanForm>
                    </Modal.Body>
                </Modal>
            )}

            <Head title="Dashboard" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3">
                        <div className="mb-10">
                            Track the performance of your ads, including daily views and leads, and view detailed metrics like lead-to-view ratios. Manage your active subscriptions and monitor your most viewed ads and recent leads.
                        </div>
                        <PlanError current_invoice={current_invoice}></PlanError>
                        <div className="row g-6">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link href={route('account.ads.index')}>
                                    <div className="card rounded-input">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">My ads</span>
                                                    <span className="h3 font-bold mb-0">{data.ads}</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                        <i className="bi bi-building-fill-check"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link href={route('account.leads.index')}>
                                    <div className="card rounded-input">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Leads</span>
                                                    <span className="h3 font-bold mb-0">{data.leads}</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                        <i className="bi bi-send-check-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link href={route('account.leads.index')}>
                                    <div className="card rounded-input">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2">Views</span>
                                                    <span className="h3 font-bold mb-0">{data.views}</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                        <i className="bi bi-eye"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <Link href={route('account.leads.index')}>
                                    <div className="card rounded-input">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col text-overflow">
                                                    <span className="h6 font-semibold text-muted text-sm d-block mb-2 text-overflow">Views to lead ratio</span>
                                                    <span className="h3 font-bold mb-0">{data.view_lead_ratio}%</span>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                        <i className="bi bi-percent"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* <PermissionAllow permission="Ad Create">
                            <div className="ms-auto text-center mt-10">
                                <Link className="btn btn-primary btn-lg text-overflow" href={route('account.ads.create')}><i className="bi bi-plus text-md"></i>
                                    <span className="d-none d-md-inline">Create new ad</span>
                                </Link>
                            </div>
                        </PermissionAllow> */}
                        <div>
                            <Graphs></Graphs>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <PermissionAllow permission="Ads Leads Listing">
                                    <div className="text-xl font-bold mt-5">Latest leads</div>
                                    <div>
                                        <div className="card">
                                            <LeadsTable minimal={true} leads={leads.data}></LeadsTable>
                                        </div>
                                    </div>
                                </PermissionAllow>
                            </div>
                            <div className="col-md-6">
                                <PermissionAllow permission="Ads Leads Listing">
                                    <div className="text-xl font-bold mt-5">Most viewd ads</div>
                                    <div>
                                        <div className="card">
                                            <AdsTable minimal={true} ads={ads.data}></AdsTable>
                                        </div>
                                    </div>
                                </PermissionAllow>
                            </div>
                            <div className="col-md-12">
                                <PermissionAllow permission="Support Ticket Listing">
                                    <div className="text-xl font-bold mt-5">Recent tickets</div>
                                    <div>
                                        <div className="card">
                                            <Tickets minimal={true} ticketData={tickets.data}></Tickets>
                                        </div>
                                    </div>
                                </PermissionAllow>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
