import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import mbpro from "../public/mb-pro.png";
import Image from "next/image";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <RoughNotationGroup show={true}>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-[40%,60%] justify-items-center items-center">
          <HeroSection />
          <Image src={mbpro} alt="mb-pro-with-rain" />
        </div>
        <div className="self-end mx-5">
          <RoughNotation type="highlight" color="#448EE4">
            <Link href={"/blog"}>
              <span className="flex flex-row space-x-1">
                <p>{`===>`}</p>
                <p className="hover:text-blue-200">Check out the blog!</p>
              </span>
            </Link>
          </RoughNotation>
        </div>
      </div>
    </RoughNotationGroup>
  </>
);
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
//TODO: update the preview link to match the landing page of the website, also update the title that shows (from Tim Samuel to Portfolio)
//TODO: add a new favicon icon with my face on it
