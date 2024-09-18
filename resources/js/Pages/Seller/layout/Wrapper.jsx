import SideBar from "./SideBar";
import Header from "./Header";
import ToastNotification from '@/Components/ToastNotification';
import { usePage } from '@inertiajs/react'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import SettingsForm from "../SettingsForm";

const Wrapper = ({ success, error, children, user}) => {
    // const { showAgentForm } = usePage().props;
    const { showAgentForm } = true;
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <>
            {showAgentForm && (
                <Modal size="lg" show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Hello</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='p-0'>
                        <SettingsForm seller={seller} province_options={province_options}></SettingsForm>
                    </Modal.Body>
                </Modal>
            )}

            <ToastNotification success={success} error={error} />
            <Header user={user}></Header>
            <div className="">
                <div className="d-flex flex-column flex-lg-row h-lg-full bg-white">
                    {/* <SideBar user={user}></SideBar> */}
                    <div className="container my-10 p-0">
                        <div className="flex-grow-1">
                            <div className="my-10">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wrapper;