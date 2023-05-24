import { RoughNotation } from "react-rough-notation";

const HeroSection = () => {
  return (
    <div id="hero-section" className="flex flex-col items-center ">
      <h1>Tim Samuel</h1>
      <h3>Software Developer</h3>
      <p>A minimalist typesafe website, </p>
      <div className="flex flex-row">
        <p className="mr-1">with designs inspired by</p>
        <RoughNotation type="underline" color="#448EE4">
          <p>Midjourney</p>
        </RoughNotation>
      </div>
      <div className="flex flex-row">
        <p className="mr-1">Developed with </p>

        <RoughNotation strokeWidth={2} type="circle" color="#448EE4">
          <p className="mr-1"> Next.js </p>
        </RoughNotation>
        <p className="mr-1">and Deployed through </p>
        <RoughNotation strokeWidth={2} type="circle" color="#448EE4">
          <p>Vercel</p>
        </RoughNotation>
      </div>
    </div>
  );
};

export default HeroSection;
