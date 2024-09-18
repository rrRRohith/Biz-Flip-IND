import SideBar from "./SideBar";
import Header from "./Header";
import ToastNotification from '@/Components/ToastNotification';

const Wrapper = ({ success, error, children, user }) => {
    return (
        <>
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