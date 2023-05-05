import haircutzImage from '../public/haircutz.png'
import outdoorImage from '../public/outdoor.png'
import Head from 'next/head'
import Image from 'next/image'
const Projects = () => {
    return (
        <div className='flex flex-col justify-around items-start w-full h-5/6 '>
              <Head>
          <title>Projects</title>
        </Head>
            <div className='flex flex-row '>
            <Image alt='haircutz' src={haircutzImage} className='shrink w-6/12 h-6/12 pl-10' />

                <div className='px-10'>
                    <h3 className='font-semibold'>Haircutz</h3>
                    <p>A 1v1 online real time strategy game.</p>
                    <p>Built using the phaser framework along with WebSocket technology.</p>
                </div>
            </div>
            <div className='flex flex-row '>
                <Image alt='outdoor' src={outdoorImage} className='shrink w-6/12 h-6/12 pl-10' />
                <div className='px-10'>
                    <h3 className='font-semibold'>Outdoor Equiment Inc. (OEI)</h3>
                    <p>An ecommerce website, i.e. a recreation of REI, a well known retailer for outdoors enthusiasts. </p>
                    <p>Built using a React frontend and Node.js backend.</p>
                </div>
            </div>
        </div>
    );
}
export default Projects;
//TODO: potentially turn this into a grid to compare the differences between the flexbox and grid layouts
//TODO: provide a link to the github repo for each project