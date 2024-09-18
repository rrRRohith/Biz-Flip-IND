import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Custom Table Components
import SubscriptionPlansTable from './SubscriptionPlansTable';
import SubscribedAgentsTable from './SubscribedAgentsTable';
import FreePlanAgentsTable from './FreePlanAgentsTable';
import InvoicesTable from './InvoicesTable';

export default function Plans({ plans, subscribedAgents, freePlanAgents, invoices, auth }) {
    const [key, setKey] = useState('SubscriptionPlans');
    return (
        <>
            <Head title="Subscription Plans" />
            <Authenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Subscription Plans</h2>}
            >
                <div className="content-wrapper me-4">
                    <div className="container-full">
                        <div className="content-header">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="d-flex flex-column">
                                        <h4 className="page-title">Subscription Plans</h4>
                                        <div className="d-inline-block align-items-center mt-2">
                                            <nav>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link href={route('admin.index')}>
                                                            <i className="bi bi-house"></i> Dashboard
                                                        </Link>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">Subscription Plans</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                <button onClick={() => handleModelShow("create")} className="btn btn-info btn-sm float-end mb-4">
                                    Create New Plan
                                </button>
                                </div>
                            </div>
                        </div>

                        <section className="content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="max-w-screen-md vstack gap-6 m-auto">
                                                 <Tabs
                                                    id="subscription-plans-tabs"
                                                    activeKey={key}
                                                    onSelect={(k) => setKey(k)}
                                                    className="mb-3"
                                                >
                                                    <Tab eventKey="SubscriptionPlans" title={`Subscription Plans (${plans.data.length})`}>
                                                        <SubscriptionPlansTable plans={plans} />
                                                    </Tab>
                                                    <Tab eventKey="SubscribedAgents" title={`Subscribed Agents (${subscribedAgents.data.length})`}>
                                                        <SubscribedAgentsTable users={subscribedAgents} />
                                                    </Tab>
                                                    {/* 
                                                    <Tab eventKey="FreePlanAgents" title={`Free Plan Agents (${freePlanAgents.data.length})`}>
                                                        <FreePlanAgentsTable users={freePlanAgents} />
                                                    </Tab> */}

                                                    <Tab eventKey="Invoices" title={`Invoices (${invoices.data.length})`}>
                                                        <InvoicesTable invoices={invoices} />
                                                    </Tab>
                                                </Tabs> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
