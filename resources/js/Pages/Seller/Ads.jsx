import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, router } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import AdsTable from './AdsTable';

export default function Ads({ auth, ads }) {
    const deleteAd = function(ad){
        if (!window.confirm("Are you sure you want to delete the ad?")) {
            return;
        }
        router.delete(route("seller.ads.destroy", ad))
    }
    return (
        <>
            <Head title="Ads" />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-xl vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Ads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name, location etc' className='text-overflow form-control' />
                                            </div>
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary text-overflow" href={route('seller.ads.create')}><i className="bi bi-plus text-md"></i> 
                                                <span className="d-none d-md-inline">New ad</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <AdsTable deleteAd={deleteAd} ads={ads.data}></AdsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
