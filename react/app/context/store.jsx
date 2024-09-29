'use client';
import { SessionProvider } from './sessionContext';
import { AuthProvider } from './authContext';

export function Store({ children }) {
    return (
        <AuthProvider>
            <SessionProvider>{children}</SessionProvider>
        </AuthProvider>
    );
}