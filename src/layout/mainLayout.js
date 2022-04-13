import React from 'react'
import EndCarousel from '../components/end-carousel';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Warranty from '../components/warranty';
import { Loading } from './../components/loading/index';

const MainLayout = ({ children, isLoading }) => {
    return (
        <div>
            <Header />
            {/* <div className="all-title-box"> 
             <div className="main-pic"></div>
            </div> */}
            {children}
            {isLoading && <Loading />}
            <Warranty />
            <EndCarousel />
            <Footer />
        </div>

    );
}

export default MainLayout;