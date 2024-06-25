import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';
import PermissionAllow from '@/Components/PermissionAllow';

export default function Dashboard({ auth, data, leads }) {
    return (
        <>
            <Head title="Dashboard" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container">
                        <div className="row g-6">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card rounded-input">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Ads</span>
                                                <span className="h3 font-bold mb-0">{data.ads}</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i className="bi bi-credit-card" />
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
                                                    <i className="bi bi-people" />
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
                                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">View count</span>
                                                <span className="h3 font-bold mb-0">{data.views}</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i className="bi bi-clock-history" />
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
                                                    <i className="bi bi-minecart-loaded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PermissionAllow permission="Ad Create">
                            <div className="ms-auto text-center mt-10">
                                <Link className="btn btn-primary btn-lg text-overflow" href={route('seller.ads.create')}><i className="bi bi-plus text-md"></i>
                                    <span className="d-none d-md-inline">Create new ad</span>
                                </Link>
                            </div>
                        </PermissionAllow>
                        <PermissionAllow permission="Ads Leads Listing">
                            <div className="text-xl font-bold mt-5">Latest leads</div>
                            <div>
                                <div className="card">
                                    <LeadsTable leads={leads.data}></LeadsTable>
                                </div>
                            </div>
                        </PermissionAllow>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
