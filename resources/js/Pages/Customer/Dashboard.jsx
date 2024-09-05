import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';

export default function Dashboard({ auth}) {
    return (
        <>
            <Head title="Messages" />
            <Wrapper user={auth.user}>
                <main className="py-6">
                    <div className="container-fluid px-3 px-lg-6">
                        
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
