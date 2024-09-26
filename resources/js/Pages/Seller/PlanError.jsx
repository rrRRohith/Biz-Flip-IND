import { Link} from "@inertiajs/react";

export default function PlanError({current_invoice}) {
    return (
        <>
            {current_invoice ? (
                <>
                    <div className={`alert ${current_invoice.remaining_ads > 0 ? 'alert-success' : 'alert-danger'} mb-5`}>
                        You currently have active subscription <strong>{current_invoice.name}</strong> with remaining <strong>{current_invoice.remaining_ads}</strong> ads till <strong>{current_invoice.expire_date}</strong>
                        {current_invoice.remaining_ads == 0 && (
                            <>
                                <div>
                                    Please <Link href={route('account.plans.index')}>subscribe</Link> to a plan to post new ads.
                                </div>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <div className='alert alert-danger mb-5'>
                        You currently have no active subscription, please <Link href={route('account.plans.index')}>subscribe</Link> to a plan to post new ads.
                    </div>
                </>
            )}
        </>
    )
}