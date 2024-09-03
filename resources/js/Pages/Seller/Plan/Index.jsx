import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import React, { useState } from 'react';
import Spinner from '@/Components/Spinner';

export default function Index({ auth, plans }) {


    return (
        <>
            <Head title="Plans" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        <div className="vstack gap-6 m-auto">
                            
                            <div className="container">
                            <div className="text-xl font-bold">Plans</div>
                                <div className="row justify-content-center">
                                    {plans.length ? (
                                        <>
                                            {plans.map((plan) => (
                                                <>
                                                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                                        <div class="card rounded-3 py-4">
                                                            <div class="card-body text-center">
                                                                <h5 class="card-title font-bolder">{plan.name}</h5>
                                                                <div class="text-primary mb-3">
                                                                    <h4 class="card-title text-primary">${plan.price} <small>/ {plan.duration} month</small> </h4>
                                                                </div>

                                                                <p class="card-text mb-3">{plan.description}</p>
                                                                <div>{plan.features}</div>
                                                                <Link className="btn btn-primary mt-5 btn-sm text-overflow" href={route('seller.plans.show', plan.id)}>
                                                                    Purchase {plan.name} <i class="bi bi-arrow-right"></i>
                                                                </Link>
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
