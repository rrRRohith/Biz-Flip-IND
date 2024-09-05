// import SideBar from "./SideBar";
import { default as CustomerSideBar } from "@/Pages/Customer/layout/SideBar";
import { default as SellerSideBar } from "@/Pages/Seller/layout/SideBar";
import Header from "@/Pages/Seller/layout/Header";
import ToastNotification from '@/Components/ToastNotification';

const Wrapper = ({ success, error, children, user }) => {
    return (
        <>
            <ToastNotification success={success} error={error} />
            <Header user={user}></Header>
            <div className="">
                <div className="d-flex flex-column flex-lg-row h-lg-full bg-white">
                    {user.type == 'customer' ? (
                        <CustomerSideBar user={user}></CustomerSideBar>
                    ) : (
                        <SellerSideBar user={user}></SellerSideBar>
                    )}

                    <div className="mt-0 mt-lg-5 py-0 pt-lg-5 flex-grow-1">
                        <div className="mt-0 mt-lg-5 py-0 pt-lg-5 pb-lg-5 position-relative">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wrapper;