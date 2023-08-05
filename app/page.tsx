import React from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import PricingSection from "@/components/pricing-section";

const Page = () => {
  return (
    <>
      <Home />
      <div
        style={{
          backgroundImage:
            "url(https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a10af2816a175fdcb1d9e3a3/ftyy-min.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <PricingSection />
        <About />
      </div>
    </>
  );
};

export default Page;
