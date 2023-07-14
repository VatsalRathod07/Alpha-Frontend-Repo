"use client"
  import Link from 'next/link';
  import React, { useState } from 'react';
  import { HiMenu } from 'react-icons/hi'
  import { GrFormClose } from 'react-icons/gr'

  const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    return (
      <nav className={`nav container p-3 absolute top-0 z-10 ${isSidebarOpen ? 'sm:bg-white' : 'sm:bg-transparent'}`}>
        <div className="navbar_content w-full flex justify-between p-1 items-center">
          <h2 className="navbar_logo text-3xl font-medium text-black font-signature tracking-[.5px]">
            Alpha
          </h2>
          <div className="flex justify-between gap-5 list-none sm:hidden">
            <button
              className="text-white font-extrabold"
              onClick={toggleSidebar}
            >
              <HiMenu size={20} className="text-black"/>
            </button>
          </div>
          <ul className={`hidden sm:flex sm:gap-5 sm:list-none ${isSidebarOpen ? 'bg-white bg-opacity-60' : 'bg-transparent'}`}>
            <li>
              <Link href="/" className="text-base font-normal text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-base font-normal text-black">
                Products
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-normal text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-normal text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } sm:hidden sm:flex sm:gap-5 sm:list-none bg-white bg-opacity-60 p-4 absolute top-0 right-0 h-[250px] w-screen backdrop-blur-lg`}
        >
          <li className="flex justify-end">
            <button
              className="text-black text-base font-extrabold mb-4"
              onClick={closeSidebar}
            >
              <GrFormClose size={20}/>
            </button>
          </li>
          <div className="flex flex-col justify-center gap-5">
            <li>
              <Link href="/" className="text-base font-normal text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-base font-normal text-black">
                Products
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-normal text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-normal text-black">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    );
  };

  export default Navbar;