import Link from "next/link";
import haircutzImage from "../public/haircutz.png";
import outdoorImage from "../public/outdoor.png";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { ReactElement } from "react";
const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="flex flex-col justify-around items-start w-full lg:h-full overflow-y-auto space-y-5">
        <div className="flex flex-col lg:flex-row">
          <Link
            href="https://github.com/2009-FSA-CS-Lucians-Lightbringers/haircutzGame"
            className="shrink h-full  lg:h-6/12 lg:pl-10 hover:opacity-50"
          >
            <Image alt="haircutz" src={haircutzImage} width={600} />
          </Link>

          <div className="lg:px-10">
            <h3 className="font-semibold">Haircutz</h3>
            <p>A 1v1 online real time strategy game.</p>
            <p>
              Built using the phaser framework along with WebSocket technology.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <Link
            href="https://github.com/The-Shopper-Awakens/graceshopper"
            className="shrink lg:w-8/12  lg:pl-10 hover:opacity-50"
          >
            <Image alt="outdoor" src={outdoorImage} width={600} />
          </Link>
          <div className="lg:px-10">
            <h3 className="font-semibold">Outdoor Equipment Inc. (OEI)</h3>
            <p>
              An ecommerce website, i.e. a recreation of REI, a well known
              retailer for outdoors enthusiasts.{" "}
            </p>
            <p>Built using a React frontend and Node.js backend.</p>
          </div>
        </div>
      </div>
    </>
  );
};
Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Projects;
