import React from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import PricingSection from "@/components/pricing-section";
import Product from "@/components/Product";

const Page = () => {
  return (
    <>
      <Home />
      <div
        style={{
          backgroundImage:
            "url(https://images03.nicepage.com/c461c07a441a5d220e8feb1a/b1cd8fb3b06f582495fdc897/-min.jpg)",
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
