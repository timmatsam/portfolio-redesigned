import * as React from 'react';
import image from '../assets/mb-pro.png'
import HeroSection from '../HeroSection';
export const LandingPage = () => {
    return (
        <div className='grid grid-rows-1fr-7fr grid-cols-[40%,60%] justify-items-center items-center'>
            <HeroSection />
            <img alt='mb-pro-with-rain' src={image} />
        </div>
    );
}
//TODO: potentially change the landing page image to that of a different one.
//!: There seems to be a state issue with the react-pdf library. When switching from the thesis page to the homepage, the landing page hero section moves from the top of the box to the bottom of the box. This is a bug that I will need to fix in the future..