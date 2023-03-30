import * as React from 'react';
import image from '../mb-pro.png'
import HeroSection from '../HeroSection';
export const LandingPage = () => {
    return (
        <div className='grid grid-rows-1fr-7fr grid-cols-[40%,60%] justify-items-center items-center'>
            <HeroSection />
            <img alt='mb-pro-with-rain' src={image} />
        </div>
    );
}

