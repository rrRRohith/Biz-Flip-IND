import { Link } from "@inertiajs/react";

export default function Contacts({ chats, user }) {
    const urlMatches = (currentUrl, pattern) => {
        const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
        return regex.test(currentUrl);
    };
    const path = window.location.pathname;
    return (
        <>
            <nav className="navbar contacts show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0" id="navbarVertical">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#contactCollapse" aria-controls="contactCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="px-lg-4 px-0 font-bold text-md mb-0 mb-lg-3">
                        Messages
                    </div>
                    <div className="collapse navbar-collapse position-relative" id="contactCollapse">
                        <ul className="navbar-nav p-0">
                            {chats.length ? (
                                <>
                                    {chats.map((chat) => (
                                        <li className={`nav-item rounded-0 mb-2 ${urlMatches(path, user.type == 'customer' ? '/customer/chats/' : '/seller/chats/' +chat.id) ? 'bg-gray-100' : ''}`}>
                                            <Link href={route(user.type == 'customer' ? 'customer.chats.show' : 'seller.chats.show', chat.id)} className="nav-link text-md rounded-0">
                                                <div className="d-flex align-items-center w-full">
                                                    <div className="me-2">
                                                        <img alt="Image Placeholder" src={chat.contact_image} class="avatar avatar- rounded-circle" />
                                                    </div>
                                                    <div className="w-full text-overflow">
                                                        <div className="w-full text-overflow">
                                                            <div className="d-flex align-items-center w-full text-overflow">
                                                                <div className="fw-bold font-bold me-3 flex-1 text-overflow">
                                                                    {chat.contact_name}
                                                                </div>
                                                                <div className="small ms-auto text-overflow">
                                                                    {chat.last_message_time}
                                                                </div>
                                                            </div>
                                                            <div className="small text-overflow">
                                                                {chat.last_message}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <div className="noresults position-absolute font-bold">
                                        No contacts
                                    </div>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}