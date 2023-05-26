const HeroSection = () => {
  return (
    <div id="hero-section" className="flex flex-col items-center ">
      <h1>Tim Samuel</h1>
      <h3>Software Developer</h3>
      <p>A minimalist typesafe website, </p>
      <div className="flex flex-row">
        <p className="mr-1">with designs inspired by</p>
        <p>Midjourney.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="">Developed with Next.js and deployed </p>
        <p>through Vercel.</p>
      </div>
    </div>
  );
};

export default HeroSection;
