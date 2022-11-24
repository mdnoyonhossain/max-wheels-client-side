import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import OurService from '../OurService/OurService';
import ProductCategory from '../ProductCategory/ProductCategory';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div className='w-11/12 m-auto'>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <Contactus></Contactus>
            <OurService></OurService>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;