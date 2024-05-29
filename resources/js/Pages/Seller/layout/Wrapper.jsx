import SideBar from "./SideBar";
import Header from "./Header";
import ToastNotification from '@/Components/ToastNotification';

const Wrapper = ({ success, error, children, user }) => {
    return (
        <>
            <ToastNotification success={success} error={error} />
            <Header></Header>
            <div className="">
                <div className="d-flex flex-column flex-lg-row h-lg-full bg-white">
                    <SideBar user={user}></SideBar>
                    <div className="mt-0 mt-lg-5 py-0 pt-lg-5 flex-grow-1">
                        <div className="mt-0 mt-lg-5 py-0 pt-lg-5 pb-lg-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wrapper;