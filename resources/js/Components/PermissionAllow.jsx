import React,{useEffect } from 'react';
import { usePage } from '@inertiajs/react'

const PermissionAllow = ({ permission, children, message }) => {
    
    const { auth } = usePage().props
   
    if (!auth.permissions.includes(permission)) {
        return null;
    }

    return <>{children}</>;
   
};

export default PermissionAllow;
