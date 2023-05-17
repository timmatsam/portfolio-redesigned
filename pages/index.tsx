import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import mbpro from "../public/mb-pro.png";
import Image from "next/image";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
const Home = () => (
  <div className="grid grid-rows-1fr-7fr grid-cols-[40%,60%] justify-items-center items-center">
    <Head>
      <title>Home</title>
    </Head>
    <HeroSection />
    <Image src={mbpro} alt="mb-pro-with-rain" />
  </div>
);
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
//TODO: update the preview link to match the landing page of the website, also update the title that shows (from Tim Samuel to Portfolio)
//TODO: add a new favicon icon with my face on it
