import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import AboutTheProgram from "../components/sections/AboutTheProgram";
import WhoAreWe from "../components/sections/WhoAreWe";
import Testimonial from "../components/sections/Testimonial";
import TargetAudience from "../components/sections/TargetAudience";
import TimeLine from "../components/sections/Timeline";
import Payment from "../components/sections/Payment";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <AboutTheProgram />
      <WhoAreWe/>
      <TargetAudience />
      <TimeLine />
      <Payment topDivider />
      <Testimonial topDivider />
    </>
  );
};

export default Home;
