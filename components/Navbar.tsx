"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useRouter, usePathname } from "next/navigation";
import NavLogo from "../public/img/nav-logo.png";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const browserPathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarScroll, setIsNavbarScroll] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // useEffect(() => {
  //   let isScrollingTimer: any;

  //   const handleScroll = () => {
  //     if (isScrollingTimer) {
  //       clearTimeout(isScrollingTimer);
  //     }
  //     setIsNavbarScroll(true);
  //     isScrollingTimer = setTimeout(() => {
  //       setIsNavbarScroll(false);
  //     }, 700);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const linkStyle =
    "text-base font-medium text-secondary hover:text-light-purple hover:font-semibold";
  return (
    <nav
      className={`p-3 py-2 z-10 w-full bg-white text-secondary sticky ${
        isSidebarOpen ? "sm:bg-white" : "sm:bg-white"
      } 
      ${isNavbarScroll ? "top-[-100]" : "top-0 shadow-lg"}`}
    >
      <div className="w-full flex justify-between p-1 items-center">
        <Link
          href="/"
          className="navbar_logo text-3xl font-medium text-secondary font-signature tracking-[.5px]"
        >
          <Image
            className="h-16 w-32 object-cover"
            src={NavLogo}
            alt="NavLogo"
          />
        </Link>
        <div className="flex justify-between gap-5 list-none sm:hidden">
          <button
            className="text-secondary font-extrabold"
            onClick={toggleSidebar}
          >
            <HiMenu size={20} className="text-secondary" />
          </button>
        </div>
        <ul
          className={`hidden sm:flex sm:gap-5 sm:list-none ${
            isSidebarOpen ? "bg-white bg-opacity-60" : "bg-white"
          }`}
        >
          <li>
            <Link
              href="/"
              className={` ${
                browserPathName === "/"
                  ? "!text-light-purple font-semibold"
                  : ""
              } ${linkStyle} `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`${
                browserPathName === "/products"
                  ? "!text-light-purple font-semibold"
                  : ""
              }  ${linkStyle}  `}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                browserPathName === "/about"
                  ? "!text-light-purple font-semibold"
                  : ""
              } ${linkStyle} `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                browserPathName === "/contact"
                  ? "!text-light-purple font-semibold"
                  : ""
              } ${linkStyle}
             
            `}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="px-6 py-3 font-medium hover:shadow-xl hidden sm:block bg-light-purple border-solid border-2 transition ease-in-out duration-300 text-white"
          style={{ borderRadius: "29px 0px 29px 0px" }}
          onClick={() => router.push("/about")}
        >
          Get Started
        </button>
      </div>
      <ul
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:hidden sm:gap-5 sm:list-none bg-white bg-opacity-60 p-4 absolute top-0 right-0 h-[250px] w-screen backdrop-blur-lg z-10`}
      >
        <li className="flex justify-end">
          <button
            className="text-black text-base font-extrabold mb-4"
            onClick={closeSidebar}
          >
            <GrFormClose size={20} />
          </button>
        </li>
        <div className="flex flex-col justify-center gap-5">
          <li>
            <Link
              href="/"
              className="text-base font-normal text-black"
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-base font-normal text-black"
              onClick={closeSidebar}
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-base font-normal text-black" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base font-normal text-black"
              onClick={closeSidebar}
            >
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
