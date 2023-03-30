import * as React from 'react';
import image from '../headshot.png'
export const About = () => {
    return (
        <div className='flex flex-row flex-auto w-full h-3/4 px-10 items-center'>
            <p className='w-1/2'>I have a kindle. My spotify playlist is fairly diverse in terms of language but mainly Japanese (I love jpop). I can't fathom a world without Chopin. I enjoy traveling - domestically and internationally. I NEVER pay for a checked bag. Here's a tip: always bring a duffel bag and backpack instead of paying $50 - $100 each way for luggage. That's theft. My current passions involve watching/reading thing after thing in regards to urban planning and design. America has poor infrastructure; our public transporation and our inability to provide high/mid-density housing instead of detached, single family homes is not prudent. Trust me, you'll be much happier if you could walk/bike to your local grocery store to pick up that A5 miyazaki wagyu. Trains are cool. A Super Conducting Maglev train that travels at 600km/hr is WICKED COOL. Also, I think I'm kind of funny. Alright, I'm done.</p>
            <img alt="headshot" src={image} className=' w-5/12 shrink-0 pl-10' />
        </div>
    )
}
