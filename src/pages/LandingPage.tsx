import * as React from 'react';
import image from '../mb-pro.png'
import HeroSection from '../HeroSection';
export const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <img alt='mb-pro-with-rain' src={image} />
        </>
    );
}
