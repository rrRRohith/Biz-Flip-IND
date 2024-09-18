import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/react';
import Wrapper from '@/Pages/Seller/layout/Wrapper';
import Chat from './Chat';


export default function Dashboard({ auth, chats, chat, messages }) {
    return (
        <>
            <Head title="Messages" />
            <Wrapper className="position-relative" user={auth.user}>
                <Chat chats={chats} chat={chat} messages={messages} user={auth.user}></Chat>
            </Wrapper>  
        </>
    );
}
