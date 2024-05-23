import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
     
           <div className="hold-transition theme-primary bg-img loginPage">

                <div className="container h-p100">
                    <div className="row align-items-center justify-content-md-center h-p100">

                        <div className="col-12">
                            <div className="row justify-content-center g-0">
                                <div className="col-lg-5 col-md-5 col-12">
                                    <div className="bg-white rounded10 shadow-lg">
                                        <div className="content-top-agile p-20 pb-0 text-center">
                                                <Link href="/" className='d-block mb-2'>
                                                    <ApplicationLogo className="" />
                                                </Link>
                                                <p className="mb-0">Sign in to continue to BizFlip.</p>
                                        </div>
                                        <div className="p-40">
                                               
                                            {children}
                                            <div className="text-center">
                                               
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
