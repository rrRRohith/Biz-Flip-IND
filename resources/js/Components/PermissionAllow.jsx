import React,{useEffect } from 'react';
import { usePage } from '@inertiajs/react'
import PermissionDenied from '@/Components/PermissionDenied';

const PermissionAllow = ({ permission, children, message }) => {
    
    const { auth } = usePage().props
   
    if (!auth.permissions.includes(permission)) {
        if(message){
            return(
                <>
                    <h6 className='text-muted'>{permission} is not permitted.</h6>
                </>
            );
        }
        else{
            return ;
        }
      
    }

    return <>{children}</>;
   
};

export default PermissionAllow;
