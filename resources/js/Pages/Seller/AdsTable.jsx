import { Link } from "@inertiajs/react";
import AdStatusBtn from "./Components/AdStatusBtn";
import PermissionAllow from '@/Components/PermissionAllow';

export default function ({ ads, deleteAd }) {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Ad</th>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            <th scope="col">Leads|Views</th>
                            <th scope="col">Date listed</th>
                            <th scope="col">Status</th>
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        {ads.length ? (
                            <>
                                {ads.map((ad) => (
                                    <tr>
                                        <td>
                                            {ad.title}
                                            <div>
                                                <Link className='small'>View {ad.title}</Link>
                                            </div>
                                        </td>
                                        <td>
                                            {ad.address}
                                            <div className="small">
                                                <small>{ad.city}</small>
                                            </div>
                                        </td>
                                        <td>
                                            $ {ad.price}
                                        </td>
                                        <td>
                                            <div><Link className="text-decoration-none" href={route('seller.leads.index', { ad: ad.id })}>{ad.total_leads} leads</Link></div>
                                            <div className="small">{ad.total_views} views</div>
                                        </td>
                                        <td>
                                            {ad.date_text}
                                        </td>
                                        <td>
                                            <AdStatusBtn status={ad.status}></AdStatusBtn>
                                        </td>
                                        <td>
                                            <PermissionAllow permission="Ad Create">
                                                <Link type="button" href={route('seller.ads.edit', ad.id)} className="btn btn-sm btn-square btn-neutral me-2"><i className="bi bi-pen"></i></Link>
                                            </PermissionAllow>
                                            <PermissionAllow permission="Ad Delete">
                                                <button onClick={(e) => deleteAd(ad.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                            </PermissionAllow>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ) : (<>
                            <tr>
                                <td className="text-center" colSpan="100">
                                    No records found..
                                </td>
                            </tr>
                        </>)}
                    </tbody>
                </table>
            </div>
        </>
    );
}