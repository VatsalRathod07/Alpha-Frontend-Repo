import Link from "next/link";
import React from "react";
import { products } from "@/components/ProductsCard";
import About from "@/components/About";

const AboutUs = () => {
  return (
    <>
      <div
        className="py-[100px] w-full text-center bg-light-blue"
        style={{
          background: `url("https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "-350px",
        }}
      >
        <div className="font-semibold text-[44px] text-white">About US</div>
      </div>
      <div className="py-12 bg-light">
        <About />
      </div>
    </>
  );
};

export default AboutUs;
