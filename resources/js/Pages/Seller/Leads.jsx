import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import LeadsTable from './LeadsTable';
import Select from 'react-select';
export default function Leads({ auth, leads }) {
    return (
        <>
            <Head title="Leads" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container">
                        <div className="max-w-screen-xl vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Leads</div>
                            <div>
                                <div className="card">
                                    <div className="card-header border-bottom">
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <input type="search" placeholder='Search by name, phone etc' className='text-overflow form-control' />
                                            </div>
                                            <div className="me-auto">
                                                <Select></Select>
                                            </div>
                                        </div>
                                    </div>
                                    <LeadsTable leads={leads.data}></LeadsTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
