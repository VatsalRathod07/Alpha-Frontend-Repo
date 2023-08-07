"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import NavLogo from "@/public/img/nav-logo.png";
import Icon1 from "@/public/img/about-icon-1.png";
import Icon2 from "@/public/img/about-icon-2.png";
import Icon3 from "@/public/img/about-icon-3.png";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex w-full flex-col-reverse md:flex-row px-5 sm:px-12 py-10 gap-10 max-w-[1440px]">
      <div
        className="left-side w-full md:w-[50%] bg-white shadow-2xl px-6 md:px-16 py-16 rounded-xl"
        data-aos="flip-right"
      >
        <div className="text-[24px] md:text-[30px] lg:text-[36px] text-dark-blue font-semibold ">
          About Alpha Atta Maker
        </div>
        <div
          className="text-dark-gray font-semibold tracking-[0.4px] pt-4"
          data-aos="fade-down"
        >
          Welcome to the Alpha Atta Flour Maker website, your ultimate
          destination for all things related to high-quality flour production
          and milling. As a dedicated flour mill company, we take immense pride
          in providing top-notch solutions for both domestic and commercial
          flour milling needs.
        </div>
        <div className="flex flex-col gap-5 pt-5">
          <div
            className="flex flex-col md:flex-row gap-5 items-center"
            data-aos="fade-up"
          >
            <Image
              className="h-16 w-16 object-contain"
              src={Icon1}
              alt="icon"
            />
            <div className="text-dark-gray font-semibold">
              Discover our state-of-the-art Alpha Atta flour maker machines,
              thoughtfully designed to cater to various flour milling
              requirements. From compact home mills to industrial-scale units,
              we offer a range of options to suit diverse needs.
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-5 items-center"
            data-aos="fade-up"
          >
            <Image
              className="h-16 w-16 object-contain"
              src={Icon2}
              alt="icon"
            />
            <div className="text-dark-gray font-semibold">
              Our website is a treasure trove of information for both beginners
              and flour milling enthusiasts. Explore articles, guides, and
              videos about the art and science of flour milling, helping you
              understand the nuances of the process.
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row items-center"
            data-aos="fade-up"
          >
            <Image
              className="h-16 w-16 object-contain"
              src={Icon3}
              alt="icon"
            />
            <div className="text-dark-gray font-semibold">
              Reach out to our responsive customer support team for inquiries,
              technical assistance, or to place an order. We are here to ensure
              a seamless experience from exploration to post-purchase support.
            </div>
          </div>
        </div>
      </div>
      <div
        className="right-side w-full md:w-[50%] flex items-center justify-center bg-white opacity-80 rounded-xl"
        data-aos="flip-left"
      >
        <Image alt="Image" className="" src={NavLogo} />
      </div>
    </div>
  );
};

export default About;
