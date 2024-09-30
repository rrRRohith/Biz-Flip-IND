import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Wrapper from '../layout/Wrapper';
import React, { useState } from 'react';
import Spinner from '@/Components/Spinner';
import Plans from './Plans';
export default function Index({ auth, plans, can_purchase, current_invoice }) {
    return (
        <>
            <Head title="Plans" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3">
                        <div className="vstack gap-6 m-auto">

                            <div className="container p-0">
                                <div className="text-xl font-bold">Choose the Perfect Ad Subscription Plan for Your Needs</div>
                                <div className='mb-3'>
                                    Maximize your reach with our tailored ad subscription plans designed to suit businesses of all sizes. Whether you're looking to promote occasionally or need a consistent presence, our plans offer the flexibility and value to ensure your ads make an impact.
                                </div>
                                
                                <div className='alert alert-warning'>
                                    You can only purchase a new plan once the usage of your current plan has been fully exhausted.
                                </div>
                                <Plans current_invoice={current_invoice} plans={plans} can_purchase={can_purchase}></Plans>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}