'use client'

import AppLogin from '@/components/modals/Login';
import AppRegister from '@/components/modals/Register';
import { useAuth } from '@/context/authContext';

function AppModal() {
    return (
        <>
            <AppLogin/>
            <AppRegister/>
        </>
    );
}

export default AppModal;
