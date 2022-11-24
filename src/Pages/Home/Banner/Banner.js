import React from 'react';
import '../../../assets/css/style.css'
import homeBanner from '../../../assets/image/home-img.png'

const Banner = () => {
    return (
        <section className="home" id="home">
            <h3 data-speed="-2" className="home-parallax">find your car</h3>
            <img data-speed="5" className="home-parallax" src={homeBanner} alt="" />
            
        </section>

    );
};

export default Banner;