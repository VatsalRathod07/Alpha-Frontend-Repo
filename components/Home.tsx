"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="relative">
      <div className="home_content flex flex-col gap-10">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/172401912/photo/grinding-wheat-into-flour.jpg?s=170667a&w=0&k=20&c=qVyvY5LV5KxfrRPW4TtFpW0vC3FJJjeZ1lHfJobr2fQ="
            alt="background_img"
            className="home_background w-full h-[calc(100vh_-_84px)] object-cover bg-no-repeat"
          />
          <div className="home_overlay absolute inset-0 bg-gradient-to-b from-secondary opacity-40 to-black"></div>
          <div className="home_text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
            <p
              className="home_description w-[300px] text-lg font-normal font-signature uppercase text-white [word-spacing:2px]"
              data-aos="fade-left"
            >
              Welcome To The Alpha Store
            </p>
            <p
              className="text-white font-signature text-4xl sm:text-6xl font-normal sm:leading-[60px] w-[350px] sm:w-[700px]"
              data-aos="fade-right"
            >
              Nature’s Bounty, perfected in every grain.
            </p>

            <Link
              href="/products"
              className="text-secondary bg-white font-semibold text-lg rounded px-8 py-3 transition ease-in-out duration-300 hover:bg-[#362596] hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
