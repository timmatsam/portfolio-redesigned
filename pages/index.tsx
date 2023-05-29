import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import sdev from "@/public/anime_sdev.png";
import Image from "next/image";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className="flex flex-col items-center h-full space-y">
      <div className="grid grid-flow-row w-3/4 h-3/5 lg:w-auto lg:h-auto  lg:grid-flow-col justify-items-center items-center flex-auto lg:gap-x-48">
        <HeroSection />
        <Image src={sdev} alt="mb-pro-with-rain" width={350} />
      </div>
      <div className="self-end mx-5 flex-auto">
        <RoughNotation
          type="box"
          color="rgb(6 182 212)"
          show={true}
          strokeWidth={4}
        >
          <Link href={"/blog"}>
            <span className="flex flex-row space-x-1">
              <p className="hover:text-gray-400">{`Check out the blog here!`}</p>
            </span>
          </Link>
        </RoughNotation>
      </div>
    </div>
  </>
);
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
//TODO: update the preview link to match the landing page of the website, also update the title that shows (from Tim Samuel to Portfolio)
//TODO: add a new favicon icon
