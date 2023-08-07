import Link from "next/link";
import React from "react";
import { BsFacebook, BsPinterest, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiPhoneCall, BiLogoGmail } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-5 p-10 bg-light-purple">
      <div className="flex flex-col sm:flex-row w-full gap-10 items-center">
        <div className="flex flex-col w-full sm:w-[60%]">
          <div className="text-white text-3xl font-medium mb-6">Alpha Atta Maker & Co.</div>
          <p className="text-white text-base">Welcome to the Alpha Atta Flour Maker website, your ultimate destination for all things related to high-quality flour production and milling. As a dedicated flour mill company, we take immense pride in providing top-notch solutions for both domestic and commercial flour milling needs.</p>
        </div>

        <div className="w-full sm:w-[40%]">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold text-white">Get in Touch</h1>

            <div className="flex gap-2 text-white items-center">
              <FiMapPin size={30} className="text-white" />
              <p>A-21, ABC avenue, near Bapa-sitaram chowk, Odhav, Ahmedabad 382350</p>
            </div>

            <div className="flex gap-2 text-white items-center">
              <BiPhoneCall size={25} className="text-white" />
              <p>1234567890</p>
            </div>

            <div className="flex gap-2 text-white items-center">
              <BiLogoGmail size={25} className="text-white" />
              <p>alpha@gamil.com</p>
            </div>

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

      <div className="flex justify-around">
        <p className="text-white pt-4">
          ©2023 Alpha Shop. All Rights Reserved
        </p>

        <p className="text-white">
          <p className="text-center">Made with ❤ by</p>
          Jay Bhingradiya ,Vatsal Rathdod & Darshan Vaghela
        </p>
      </div>
    </footer>
  );
};

export default Footer;
