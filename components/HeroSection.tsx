
const HeroSection = () => {
    return (
        <div id='hero-section' className='flex flex-col items-center '>
            <h1>Tim Samuel</h1>
            <h3>Software Developer</h3>
            <p>A minimalist typesafe website, </p>
            <div className="flex flex row">
                <p className="mr-1">with designs inspired by</p>
                <p className="underline">Midjourney</p>
            </div>
            <div className='flex flex-row'>
                <p className="mr-1">Developed with </p>
                <p className='underline mr-1'> Next.js </p>
                <p className="mr-1">and Deployed through </p>
                <p className='underline'>Vercel</p>
            </div>


            
        </div>
    )
}

export default HeroSection;