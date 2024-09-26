import { Head, Link, useForm } from "@inertiajs/react";
const Footer = function() {
    return (
        <>
            <div className="not-embed">
                
                <footer className='bg-white border-top border-light border-bottom-0'>
                <div className="w-100 bg-white pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-3 mb-md-0 m-auto text-center">
                                <div className='mb-4 mw-200 text-center d-flex w-100 m-auto'>
                                    <img src="/logo.png"
                                        className='w-100 m-auto' alt=""/>
                                </div>
                                <div className='fw-semibold fs-4'>
                                    <div className="d-flex m-auto align-items-center fs-3 text-muted">
                                        <div className="col-auto ms-auto me-2" role="button">
                                            <div className="btn btn-light border border-1 bg-white">
                                                <i className="bi bi-instagram"></i>
                                            </div>
                                        </div>
                                        <div className="col-auto mx-2" role="button">
                                            <div className="btn btn-light border border-1 bg-white">
                                                <i className="bi bi-twitter-x"></i>
                                            </div>
                                        </div>
                                        <div className="col-auto mx-2" role="button">
                                            <div className="btn btn-light border border-1 bg-white">
                                                <i className="bi bi-facebook"></i>
                                            </div>
                                        </div>
                                        <div className="col-auto mx-2" role="button">
                                            <div className="btn btn-light border border-1 bg-white">
                                                <i className="bi bi-youtube"></i>
                                            </div>
                                        </div>
                                        <div className="col-auto me-auto ms-2" role="button">
                                            <div className="btn btn-light border border-1 bg-white">
                                                <i className="bi bi-linkedin"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="container py-3">
                        <p className="m-auto text-center">© 2024 Designed and developed by <Link
                            className="text-primary text-decoration-none fw-medium" href="https://indigitalgroup.ca"
                            target="_blank">INDigital Group</Link>, All Rights Reserved</p>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer;