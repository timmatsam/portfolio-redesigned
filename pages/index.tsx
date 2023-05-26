import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import sdev from "@/public/anime_sdev_1.png";
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
    <div className="flex flex-col items-center h-full">
      <div className="grid grid-cols-[40%,60%] justify-items-center items-center">
        <HeroSection />
        <Image src={sdev} alt="mb-pro-with-rain" width={350} />
      </div>
      <div className="self-end mx-5">
        <RoughNotation type="highlight" color="#448EE4">
          <Link href={"/blog"}>
            <span className="flex flex-row space-x-1">
              <p className="hover:text-blue-200">Check out the blog!</p>
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
//TODO: add a new favicon icon with my face on it

/**
 * Arrange the elements so that the check out blog section, is in an aesthetic position
 * Get rid of the rough notations for next.js
 */
