import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="footer flex flex-col gap-5 p-10 bg-secondary">
            <div className="footer_content flex justify-center gap-10 items-center text-white">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>

            <div className="home_content flex flex-col gap-2 p-5 text-center">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-normal text-white font-signature">Subscribe to our newsletter</h3>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="focus:outline-none p-[5px] border-[1px] border-primary  w-full sm:w-[300px] bg-white"
                    />
                    <button className="bg-green text-white px-5 py-1">Sign up</button>
                </div>
            </div>

            <div className="flex gap-5 text-primary justify-center">
                <BsInstagram size={20} className="text-primary hover:text-white cursor-pointer" />
                <BsPinterest size={20} className="text-primary hover:text-white cursor-pointer" />
                <BsFacebook size={20} className="text-primary hover:text-white cursor-pointer" />
            </div>

            <span className="border-pale border-t-[.1px] opacity-25"></span>

            <p className="text-center text-white opacity-60 text-base">©2023 Alpha Shop. All Rights Reserved</p>


        </footer>
    )
}

export default Footer