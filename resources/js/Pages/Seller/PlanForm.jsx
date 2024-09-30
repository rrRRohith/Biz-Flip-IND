import Plans from "./Plan/Plans";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

export default function PlanForm({ plans, handleClose }) {
    const [planLink, setPlanLink] = useState('');
    const [selectedPlan, setSelectedPlan] = useState('');
    const setPlan = (plan) => {
        setSelectedPlan(plan.id);
        if(plan.default == '1'){
            setPlanLink(route('account.plans.subscribe', plan.id));
        }else{
            setPlanLink(route('account.plans.show', plan.id));
        }
    }

    useEffect(() => {
        // Find the plan that has plan.default == '1'
        const defaultPlan = plans.data.find(plan => plan.default == '1');
        // If a default plan is found, call setPlan
        if (defaultPlan) {
            setPlan(defaultPlan);
        }
    }, [plans]);

    return (
        <>
            <div className="text-center">
                <h3>Choose a perfect plan for you</h3>
            </div>
            <div className="row mt-10 justify-content-center">
                {plans.data.length ? (
                    <>
                        {plans.data.map((plan) => (
                            <>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                                    <div onClick={(e) => setPlan(plan)} role="button" className={selectedPlan == plan.id ? 'card position-relative rounded-3 h-full py-4 border-primary' : 'card position-relative rounded-3 py-4'}>
                                        <div className="card-body text-center">
                                            <h5 className="card-title font-bolder">{plan.name}</h5>
                                            <div className="text-primary mb-3">
                                                <h4 className="card-title text-primary">{ plan.price > 0 ? window.formatPrice(plan.price) : 'Free'}</h4>
                                            </div>

                                            <p className="card-text mb-3">{plan.description}</p>
                                            <div>{plan.features}</div>
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
            <div className="row g-5 mt-5">

                <div className="col-12 text-center">
                    <Link href={planLink} className="btn btn-primary me-2 px-20">Continue</Link>
                </div>
            </div>
        </>
    );
}