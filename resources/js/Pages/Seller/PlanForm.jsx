import Plans from "./Plan/Plans";

export default function PlanForm({ plans, handleClose }) {
    return (
        <>
            <div>
                <h3>Choose the Perfect Ad Subscription Plan for Your Needs</h3>
            </div>
            <div>
                Maximize your reach with our tailored ad subscription plans designed to suit businesses of all sizes. Whether you're looking to promote occasionally or need a consistent presence, our plans offer the flexibility and value to ensure your ads make an impact.
            </div>
            <Plans plans={plans} can_purchase={true}></Plans>
            <div className="row g-5">

                <div className="col-12 text-end">
                    <button onClick={handleClose} type="button" className="btn btn-neutral me-2">No thanks, i will choose later</button>
                </div>
            </div>
        </>
    );
}