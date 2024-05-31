import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';

export default function Leads({ auth }) {
    return (
        <>
            <Head title="Leads" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-lg vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Leads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name, phone etc' className='form-control' />
                                            </div>
                                            <div className="me-auto">
                                                <select className="form-control form-select" id="">
                                                    <option value="">All properties</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <LeadsTable></LeadsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
