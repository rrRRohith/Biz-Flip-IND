import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';

export default function Dashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />
            <Wrapper>
                <main className="py-6 bg-surface-secondary">
                    <div className="container">


                    </div>
                </main>
            </Wrapper>
        </>
    );
}
