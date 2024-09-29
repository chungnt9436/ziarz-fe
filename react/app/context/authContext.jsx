import { createContext, useContext, useEffect, useState } from 'react';
import  AuthService  from '@/services/authService';
import  { TokenService }  from '@/services/tokenService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isClient, setIsClient] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setIsClient(true);

    }, []);

    return (
        <AuthContext.Provider value={
            {
                user
                }
        }>
            {isClient && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
