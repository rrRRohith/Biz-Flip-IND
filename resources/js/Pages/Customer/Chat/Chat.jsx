import { Link } from "@inertiajs/react";
import Contacts from "./Contacts";
import Message from "./Message";

export default function Chat({ chats, chat, messages }) {
    return (
        <>
            <div className='d-flex flex-column flex-lg-row h-lg-full bg-white'>
                <Contacts chats={chats}></Contacts>
                <div className="w-full position-relative">
                    {chat ? (
                        <>
                            <Message chat={chat} messages={messages}></Message>
                        </>
                    ) : (
                        <>
                            <div className="noresults position-absolute font-light text-xl">
                                <div className="text-center text-xl">
                                <i class="bi bi-chat-left-dots"></i>
                                </div>
                                Select a contact to view and send messages.
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}