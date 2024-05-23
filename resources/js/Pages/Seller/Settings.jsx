import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';

export default function Settings() {
    return (
        <>
            <Head title="Settings" />
            <Wrapper>

                <main className="py-6 bg-surface-secondary">
                    <div className="container">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your business settings</div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <a href="#" className="avatar avatar-lg border-2 border-gray rounded-circle text-white"><img alt="..." src="https://res.cloudinary.com/rr6/image/upload/v1716213343/1042239_407_vaviwn.png" /></a>
                                                <div className="ms-4"><span className="h4 d-block mb-0">Able Reatly</span></div>
                                            </div>
                                        </div>
                                        <div className="ms-auto"><button type="button" className="btn btn-sm btn-neutral">Upload</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-5">
                                        <h4>Business Information</h4>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <div><label>First name</label> <input type="text" placeholder="Your first name" className="form-control" id="first_name" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Last name</label> <input type="text" placeholder="Your last name" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label htmlFor="email">Email</label> <input placeholder="Your email address" type="email" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Phone number</label> <input type="tel" placeholder="Your phone number" className="form-control" /></div>
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-5">
                                        <h4>Change password</h4>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-md-6">
                                            <div><label>New password</label> <input placeholder="Your new secret password" type="text" className="form-control" id="first_name" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Conform new password</label> <input placeholder="Confirm your secret password" type="text" className="form-control" /></div>
                                        </div>
                                        <div className="col-12 text-end">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </main>
            </Wrapper>
        </>
    );
}
