import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/react';
import PropertiesSlider from '@/Components/SlickSlider';
import LeadsChart from '@/Components/LeadsChart';
import CustomCircularProgress from '@/Components/CustomCircularProgress';


export default function Dashboard({ auth }) {

const images = [];

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper me-4">
                <div className="container-full">
                    {/* <!-- Main content --> */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xxxl-12 col-12">
                                <div className="row">
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Menu</h5>
                                                    <h3 className="mb-0 fw-500">350</h3>
                                                </div>
                                                <div>
                                                    
                                                <CustomCircularProgress />
                                                    {/* <div id="progressbar1" className="mx-auto w-100 position-relative"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Revenue</h5>
                                                    <h3 className="mb-0 fw-500">$425k</h3>
                                                </div>
                                                <div>
                                                <CustomCircularProgress />
                                                    {/* <div id="progressbar2" className="mx-auto w-100 position-relative"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Orders</h5>
                                                    <h3 className="mb-0 fw-500">415</h3>
                                                </div>
                                                <div>
                                                <CustomCircularProgress  />
                                                    {/* <div id="progressbar3" className="mx-auto w-100 position-relative"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Customers</h5>
                                                    <h3 className="mb-0 fw-500">985</h3>
                                                </div>
                                                <div>
                                                <CustomCircularProgress />
                                                    {/* <div id="progressbar4" className="mx-auto w-100 position-relative"></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxxl-12 col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h4 className="box-title mb-0">Daily Leads</h4>
                                                <p className="mb-0 text-mute">Lorem ipsum dolor</p>
                                            </div>
                                            <div className="text-end">
                                                <h3 className="box-title mb-0 fw-500">$ 154K</h3>
                                                <p className="mb-0"><span className="text-success">+ 1.5%</span> than last week</p>
                                            </div>
                                        </div>
                                        <LeadsChart className="mt-20" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Favourite Items</h4>
                                    </div>
                                    <div className="box-body">
                                        <PropertiesSlider  images={images} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <h4 className="box-title">Customer Flow</h4>
                                        <LeadsChart className="mt-20" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <h4 className="box-title">Order Overview</h4>
                                        <LeadsChart className="mt-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </div>
            {/* <!-- /.content-wrapper --> */}
        </Authenticated>
    );
}
