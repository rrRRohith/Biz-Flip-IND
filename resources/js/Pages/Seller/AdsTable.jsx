import { Head, Link, router } from '@inertiajs/react';
import AdStatusBtn from "./Components/AdStatusBtn";
import PermissionAllow from '@/Components/PermissionAllow';
import AdAction from "./Components/AdAction";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

export default function ({ ads, confirmDelete, minimal = false, searchResult }) {
    const adStatus = (ad, status) => {
        router.put(route("account.ads.status", ad.id), {
            status: status,
        });
        searchResult();
    }
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [adsource, setSource] = useState('');
    const showAd = (ad) => {
        setSource(route('ads.show', ad.slug) + '?embed=true');
        setTitle(ad.title);
        setShow(true);

    }
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <iframe className='rounded-3 listframe' src={adsource} frameborder="0"></iframe>
                </Modal.Body>
            </Modal>
            <div className="table-responsive">
                <table className="table table-hover table-nowrap">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Title</th>
                            {!minimal && (
                                <>
                                    <th scope="col">Industry</th>
                                    <th scope="col">Category</th>
                                    {/* <th scope="col">Address</th> */}
                                    <th scope="col">Price</th>
                                </>
                            )}
                            <th scope="col">Leads</th>
                            <th scope="col">Views</th>
                            {!minimal && (
                                <>
                                    {/* <th scope="col">Date listed</th> */}
                                    <th scope="col">Status</th>
                                    <th scope="col" />
                                </>
                            )}

                            {minimal && (
                                <th></th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {ads.length ? (
                            <>
                                {ads.map((ad) => (
                                    <tr>
                                        <td onClick={(e) => showAd(ad)}>
                                            <div className="text-overflow w-40">
                                                {ad.title}
                                            </div>
                                            {!minimal && (
                                                <div className="text-overflow w-40">
                                                    <small>{ad.city}</small>
                                                    {ad.ad_type == 'sale' ? (
                                                        <small className='btn btn-sm small p-0 bg-primary text-white py-0 px-1 text-capitalize ms-2 text-xs'>{ad.ad_type}</small>
                                                    ) : (
                                                        <small className='btn btn-sm small p-0 bg-info text-white py-0 px-1 text-capitalize ms-2 text-xs'>{ad.ad_type}</small>
                                                    )}
                                                    
                                                </div>
                                            )}
                                        </td>
                                        {!minimal && (
                                            <>
                                                {/* <td>
                                                    {ad.address}
                                                    <div className="small">
                                                        <small>{ad.city}</small>
                                                    </div>
                                                </td> */}
                                                <td onClick={(e) => showAd(ad)}>
                                                    <div className="text-overflow w-24">
                                                        {ad.category.label}
                                                    </div>

                                                </td>
                                                <td onClick={(e) => showAd(ad)}>
                                                    <div className="text-overflow w-24">
                                                        {ad.business_category.label}
                                                    </div>
                                                </td>
                                                <td className="text-overflow w-24 text-end" onClick={(e) => showAd(ad)}>
                                                    {ad.ad_type == 'sale' ?  (
                                                        <>${ad.price_text}</>
                                                    ) : (
                                                        <> <span className="small">from.</span> ${ad.price_text}</>
                                                    )}
                                                    
                                                </td>
                                            </>
                                        )}
                                        <td>
                                            <div><Link className="text-decoration-none" href={route('account.leads.index', { ad: ad.id })}>{ad.total_leads} leads</Link></div>
                                        </td>
                                        <td onClick={(e) => showAd(ad)}>
                                            {ad.total_views} views
                                        </td>
                                        {!minimal && (
                                            <>
                                                {/* <td>
                                                    {ad.date_text}
                                                </td> */}
                                                <td>
                                                    <AdStatusBtn status={ad.status}></AdStatusBtn>
                                                </td>
                                                <td>
                                                    <PermissionAllow permission="Ad Create">
                                                        <span className='position-absolute'>
                                                        <AdAction status={adStatus} ad={ad}></AdAction>
                                                        </span>
                                                        <Link type="button" className="btn btn-sm btn-square btn-neutral me-2"><i className="bi bi-pen"></i></Link>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission="Ad Edit">
                                                        <Link type="button" href={route('account.ads.edit', ad.id)} className="btn btn-sm btn-square btn-neutral me-2"><i className="bi bi-pen"></i></Link>
                                                    </PermissionAllow>
                                                    <PermissionAllow permission="Ad Delete">
                                                        <button onClick={(e) => confirmDelete(ad.id)} className="btn btn-sm btn-square btn-neutral text-danger-hover"><i className="bi bi-trash"></i></button>
                                                    </PermissionAllow>
                                                </td>
                                            </>
                                        )}
                                        {minimal && (
                                            <td>
                                                <a target="_blank" href={route('ads.show', ad.slug)} className="btn btn-sm btn-square btn-neutral text-danger-hover me-2"><i className="bi bi-search"></i></a>
                                            </td>
                                        )}
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