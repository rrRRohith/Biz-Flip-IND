import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import {Link} from '@inertiajs/react';
import PropertiesTable from './PropertiesTable';

export default function Properties({ auth }) {
    return (
        <>
            <Head title="Ads" />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Ads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name, location etc' className='form-control' />
                                            </div>
                                            <div className="ms-auto">
                                                <Link className="btn btn-primary" href={route('seller.properties.create')}><i className="bi bi-plus text-md"></i> New ad</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <PropertiesTable></PropertiesTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
