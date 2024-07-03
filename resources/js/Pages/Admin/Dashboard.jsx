import Authenticated from '@/Layouts/AdminAuthenticated';
import { Head } from '@inertiajs/react';
import DashboardSlider from '@/Components/DashboardSlider';
import LeadsChart from '@/Components/LeadsChart';
import CustomCircularProgress from '@/Components/CustomCircularProgress';



export default function Dashboard({ auth, data, adsListing, leadLast7Days, sellerLeads, adCompletedBySeller }) {



    const leadCategory = JSON.parse(leadLast7Days['leadCategoryArray']);
    const leadData = JSON.parse(leadLast7Days['leadDataArray']);

    const sellerLeadsCategory = sellerLeads.map(item => item.seller);
    const sellerLeadsData = sellerLeads.map(item => item.lead_count);

    const adCompletedBySellerCategory = adCompletedBySeller.map(item => item.seller);
    const adCompletedBySellerData = adCompletedBySeller.map(item => item.lead_count);

    // Calculate percentage change in leads compared to the previous week
    const currentWeekLeads = leadData.reduce((acc, val) => acc + val, 0);
    const previousWeekLeads = leadData.slice(0, 7).reduce((acc, val) => acc + val, 0);
    var percentageChange = 0;
    if(previousWeekLeads > 0){
         percentageChange = ((currentWeekLeads - previousWeekLeads) / previousWeekLeads) * 100;
    }
    else{
         percentageChange = currentWeekLeads * 100;
    }

    // Determine the color based on the percentage change
    let changeColor = '';
    if (percentageChange > 0) {
        changeColor = 'text-success'; // Green color
    } else if (percentageChange < 0) {
        changeColor = 'text-danger'; // Red color
    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="content-wrapper me-4">
                <div className="container-full">
                    <section className="content">
                        <div className="row">
                            <div className="col-xxxl-12 col-12">
                                <div className="row">
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Sellers</h5>
                                                    <h3 className="mb-0 fw-500">{data['sellers']}</h3>
                                                </div>
                                                <div>
                                                    <CustomCircularProgress value={data['sellers']} icon="bi-person-check" color="#0F5257" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Ads</h5>
                                                    <h3 className="mb-0 fw-500">{data['ads']}</h3>
                                                </div>
                                                <div>
                                                    <CustomCircularProgress value={data['ads']} icon="bi-badge-ad" color="#6499E9" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Total Leads</h5>
                                                    <h3 className="mb-0 fw-500">{data['leads']}</h3>
                                                </div>
                                                <div>
                                                    <CustomCircularProgress value={data['leads']} icon="bi-at" color="#3ABEF9" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-12">
                                        <div className="box box-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="text-start">
                                                    <h5>Completed Ads</h5>
                                                    <h3 className="mb-0 fw-500">{data['ads_completed']}</h3>
                                                </div>
                                                <div>
                                                    <CustomCircularProgress value={data['ads_completed']} icon="bi-check2-circle" color="#059212" />
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
                                                <p className="mb-0 text-mute">Last 7 Days Leads</p>
                                            </div>
                                            <div className="text-end">
                                                <h3 className={`box-title mb-0 fw-500 ${changeColor}`}>{currentWeekLeads}</h3>
                                                <p className="mb-0">
                                                    <span className={changeColor}>{percentageChange.toFixed(1) > 0 ?  percentageChange.toFixed(1) : '0'}%</span>
                                                    {percentageChange > 0 ? ' increase' : ' decrease'} than last week
                                                </p>
                                            </div>
                                        </div>
                                        <LeadsChart category={leadCategory} title={'Leads'} data={leadData} className="mt-20" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h4 className="box-title">Ads Listing</h4>
                                    </div>
                                    <div className="box-body">
                                        <DashboardSlider adsListing={adsListing} slidesToShow={4} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <h4 className="box-title"> Lead by Sellers</h4>
                                        <LeadsChart category={sellerLeadsCategory} title={'Lead'} data={sellerLeadsData} className="mt-20" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <h4 className="box-title">Ad Completed by Sellers</h4>
                                        <LeadsChart category={adCompletedBySellerCategory} title={'Lead'} data={adCompletedBySellerData} className="mt-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

           
        </Authenticated>
    );
}
