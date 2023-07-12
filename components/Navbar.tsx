import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav container sticky top-0 left-0 right-0">
      {/* <div className="navbar_content w-full flex justify-between p-5 items-center bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl"> */}
      <div className="navbar_content w-full flex justify-between p-5 items-center bg-[#f5f5f5]">
        <Link href="/">
          <h2 className="navbar_logo uppercase text-3xl font-bold">Alpha</h2>
        </Link>
        <Link href="/">
          <p className="navbar_list font-medium cursor-pointer">Language</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
