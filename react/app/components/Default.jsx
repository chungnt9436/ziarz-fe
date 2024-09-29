"use client";

import '@/globals.scss';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Store } from '@/context/store';
export default function RootLayoutClient({ children }) {
    const [navStatus, setNavStatus] = useState(false);

    const toggleNav = () => {
        setNavStatus(!navStatus);
    };
    useEffect(() => {
        if (navStatus) {
            document.body.classList.add('open');
        } else {
            document.body.classList.remove('open');
        }
    }, [navStatus]);
    return (
        <Store>
            {navStatus && <div onClick={() => setNavStatus(false)} className="over_lay"></div>}
            <Header toggleNav={toggleNav} />
            {children}
            <Footer />
        </Store>
    );
}
