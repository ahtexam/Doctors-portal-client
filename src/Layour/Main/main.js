import React from 'react';
import Navber from '../../Pages/Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default main;