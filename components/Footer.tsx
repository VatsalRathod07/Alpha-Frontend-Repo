import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="footer container flex flex-col gap-5 bg-light p-10">
            {/* <div className="footer_content flex justify-center gap-10 items-center text-white">
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

            <p className="text-center text-white opacity-60 text-base">©2023 Alpha Shop. All Rights Reserved</p> */}

            <div className="grid justify-items-center md:justify-items-start grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-5 justify-center">
                <div className="flex flex-col gap-5 text-center sm:text-start">
                    <h1 className="text-3xl font-signature font-black">Alpha</h1>
                    <p className="text-sm text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio veritatis perspiciatis asperiores minus doloribus veniam dicta reiciendis ad.</p>
                </div>


                <div className="flex flex-col gap-5 text-center sm:text-start">
                    <h1 className="text-3xl font-signature font-black">Quick Links</h1>

                    <div className="flex flex-col gap-2 text-sm">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-5 text-center sm:text-start">
                    <h1 className="text-3xl font-signature font-black">Our Socials</h1>

                    <div className="flex gap-5 justify-center sm:justify-start">
                        <BsInstagram size={20} className="text-secondary cursor-pointer" />
                        <BsPinterest size={20} className="text-secondary cursor-pointer" />
                        <BsFacebook size={20} className="text-secondary cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col gap-5 items-center sm:items-start text-center sm:text-start">
                    <h1 className="text-2xl sm:text-3xl font-signature font-black">Subscribe to Our Newsletter</h1>

                    <input type="text" className="focus:outline-none p-2 w-full sm:w-[260px]" placeholder="Your email address.."/>

                    <button className="bg-secondary text-light px-5 py-1">Subscribe</button>
                </div>
            </div>

            <div className="text-center mt-10 text-sm text-primary">
                <p>Copyright © 2023 Alpha. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer