import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import Contacts from './Chat/Contacts';
import Chat from './Chat/Chat';

export default function Dashboard({ auth, chats }) {
    return (
        <>
            <Head title="Messages" />
            <Wrapper className="position-relative" user={auth.user}>
                <Chat chats={chats}></Chat>
            </Wrapper>  
        </>
    );
}
