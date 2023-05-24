import Layout from "@/components/Layout";
import headshot from "../public/headshot.png";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
const About = () => {
  return (
    <div className="flex flex-row flex-auto w-full h-3/4 px-10 items-center">
      <Head>
        <title>About</title>
      </Head>
      <p className="w-1/2">
        I have a kindle. My spotify playlist is a combination of French,
        Japanese, Koream, Hindi, and yeah English. I can't fathom a world
        without Chopin. I enjoy traveling - AND I NEVER pay for a checked bag.
        Here's a tip: replace that backpack with a duffel bag (or carry-on if
        your ticket includes it) instead of paying each way for luggage. That's
        theft. My current passions involve watching/reading thing after thing in
        regards to urban planning and design. America has poor infrastructure;
        our public transit and our inability to provide high/mid-density housing
        instead of detached, single family homes is not prudent. Trust me,
        you'll be much happier if you could walk/bike to your local grocery
        store to pick up that A5 miyazaki wagyu. Trains are cool. A Super
        Conducting Maglev train that travels at 600km/hr is WICKED COOL. Also, I
        think I'm kind of funny. Alright, I'm done.
      </p>
      <Image src={headshot} alt="headshot" className=" w-5/12 shrink-0 pl-10" />
    </div>
  );
};
export default About;
About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
//TODO: Add an about section for my current programming interests.
