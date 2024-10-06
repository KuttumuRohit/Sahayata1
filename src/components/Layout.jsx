import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <Header />
            <main className="p-4">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}
