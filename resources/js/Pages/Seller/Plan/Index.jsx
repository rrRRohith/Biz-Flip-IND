import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import React, { useState } from 'react';
import Spinner from '@/Components/Spinner';

export default function Index({ auth, plans, can_purchase }) {


    return (
        <>
            <Head title="Plans" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">

                            <div className="container p-0">
                                <div className="text-xl font-bold">Choose the Perfect Ad Subscription Plan for Your Needs</div>
                                <div className='mb-3'>
                                    Maximize your reach with our tailored ad subscription plans designed to suit businesses of all sizes. Whether you're looking to promote occasionally or need a consistent presence, our plans offer the flexibility and value to ensure your ads make an impact.
                                </div>
                                
                                <div className='alert alert-warning'>
                                    You can only purchase a new plan once the usage of your current plan has been fully exhausted.
                                </div>
                                <div className="row mt-10 justify-content-center">
                                    {plans.data.length ? (
                                        <>
                                            {plans.data.map((plan) => (
                                                <>
                                                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                                        <div className={plan.current_plan ? 'card position-relative rounded-3 h-full py-4 border-primary' : 'card position-relative rounded-3 py-4'}>
                                                            {plan.current_plan && (
                                                                <span className="position-absolute top-0 end-0 p-1">
                                                                    <span className='bg-secondary p-1 text-white rounded-sm small'>Current plan <i class="bi bi-exclamation-circle"></i></span></span>
                                                            )}
                                                            <div className="card-body text-center">
                                                                <h5 className="card-title font-bolder">{plan.name}</h5>
                                                                <div className="text-primary mb-3">
                                                                    <h4 className="card-title text-primary">${plan.price} <small>/ {plan.duration} month</small> </h4>
                                                                </div>

                                                                <p className="card-text mb-3">{plan.description}</p>
                                                                <div>{plan.features}</div>
                                                                {plan.default != '1' && (
                                                                    <>
                                                                        {can_purchase ? (
                                                                            <Link className="btn btn-primary mt-5 btn-sm text-overflow" href={route('account.plans.show', plan.id)}>
                                                                                Purchase {plan.name} <i className="bi bi-arrow-right"></i>
                                                                            </Link>
                                                                        ) : (
                                                                            <button className="btn btn-primary mt-5 btn-sm text-overflow" disabled>
                                                                                Purchase {plan.name} <i className="bi bi-arrow-right"></i>
                                                                            </button>
                                                                        )}

                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </>
                                    ) : (<>
                                        <div className="alert alert-warning rounded-1 border-0 w-auto">
                                            Opps, no plans found at this moment.
                                        </div>
                                    </>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}