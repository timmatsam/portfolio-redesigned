import Head from "next/head";
import  HeroSection  from "../components/HeroSection";
import mbpro from "../public/mb-pro.png";
import Image from "next/image";
const Home = () => (
        <div className='grid grid-rows-1fr-7fr grid-cols-[40%,60%] justify-items-center items-center'>
        <Head>
          <title>Home</title>
        </Head>
            <HeroSection />
            <Image src={mbpro} alt="mb-pro-with-rain" />
        </div>
       
);
export default Home;