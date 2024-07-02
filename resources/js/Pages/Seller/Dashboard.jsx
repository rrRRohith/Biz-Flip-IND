import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';
import PermissionAllow from '@/Components/PermissionAllow';
import Tickets from './Ticket/Tickets';
import AdsTable from './AdsTable';
import Graphs from './Graphs';

export default function Dashboard({ auth, data, leads, tickets, ads }) {
    return (
        <>
            <Head title="Dashboard" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid">
                        <div className="row g-6">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card rounded-input">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">My ads</span>
                                                <span className="h3 font-bold mb-0">{data.ads}</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-building-fill-check"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card rounded-input">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Leads</span>
                                                <span className="h3 font-bold mb-0">{data.leads}</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                    <i class="bi bi-send-check-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card rounded-input">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Views</span>
                                                <span className="h3 font-bold mb-0">{data.views}</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i class="bi bi-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card rounded-input">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col text-overflow">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2 text-overflow">Views to lead ratio</span>
                                                <span className="h3 font-bold mb-0">{data.view_lead_ratio}%</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                    <i class="bi bi-percent"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <PermissionAllow permission="Ad Create">
                            <div className="ms-auto text-center mt-10">
                                <Link className="btn btn-primary btn-lg text-overflow" href={route('seller.ads.create')}><i className="bi bi-plus text-md"></i>
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
