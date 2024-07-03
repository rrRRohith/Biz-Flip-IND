import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import AdminHeader from '@/Components/AdminHeader';
import AdminSidebar from '@/Components/AdminSidebar';
import ToastNotification from '@/Components/ToastNotification';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function AdminAuthenticated({ user, children}) {

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handle = useFullScreenHandle();

    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreenChange = (state) => {
        setIsFullScreen(state);
    };

    const handleSidebarToggle = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };


    return (
        <FullScreen handle={handle} onChange={handleFullScreenChange} className='bg-gray-100'>
            
        <div className={`hold-transition bg-gray-100 light-skin sidebar-mini theme-primary fixed ${isSidebarCollapsed ?  'sidebar-collapse' : '' }`}>
            <AdminHeader user={user}  onSidebarToggle={handleSidebarToggle}  handle={handle} isFullScreen={isFullScreen} />
            <AdminSidebar isCollapsed={isSidebarCollapsed} />
            <main className='bg-gray-100'>{children}</main>
           
            <ToastNotification />
        </div>
        </FullScreen>
        
    );
}
