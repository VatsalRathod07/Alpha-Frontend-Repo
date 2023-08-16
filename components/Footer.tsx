import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-5 p-10 bg-light-purple">
      <div className="flex flex-col sm:flex-row w-full gap-10 items-center">
        <div className="flex flex-col w-full sm:w-[60%]">
          <div className="text-white text-3xl font-medium mb-6">
            Alpha Atta Maker & Co.
          </div>
          <p className="text-white text-base">
            Welcome to the Alpha Atta Flour Maker website, your ultimate
            destination for all things related to high-quality flour production
            and milling. As a dedicated flour mill company, we take immense
            pride in providing top-notch solutions for both domestic and
            commercial flour milling needs.
          </p>
        </div>

        <div className="w-full sm:w-[40%]">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-white">Get in Touch</h1>

            <div className="flex gap-5">
              <BsInstagram
                size={30}
                className="text-white hover:text-white cursor-pointer"
              />
              <BsTwitter
                size={30}
                className="text-white hover:text-white cursor-pointer"
              />
              <BsFacebook
                size={30}
                className="text-white hover:text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <span className="border-pale border-t-[.1px] opacity-25"></span>

      <div className="flex flex-col sm:flex-row justify-around gap-5">
        <p className="text-white pt-4">©2023 Alpha Shop. All Rights Reserved</p>

        <div className="text-white">
          <p className="text-strat sm:text-center">Made with ❤ by</p>
          Jay Bhingradiya ,Vatsal Rathdod & Darshan Vaghela
        </div>
      </div>
    </footer>
  );
};

export default Footer;
