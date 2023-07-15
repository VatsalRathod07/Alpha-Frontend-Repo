import React from 'react'
import { BsInstagram, BsPinterest, BsFacebook } from 'react-icons/bs'
import { BiLogoGmail, BiMap } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5'

const Contact = () => {
    return (
        <section className="container pt-20 pb-6">
            <div className="flex flex-col-reverse items-center sm:flex-row justify-around gap-5 p-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-signature font-semibold text-center sm:text-start">Get In Touch</h2>
                    <p className="max-w-[480px] text-base text-center sm:text-start">Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam mollis ut montes, dui scelerisque ornare.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row gap-2 items-center">
                            <BiMap size={20} className="text-primary"/>
                            {/* <p className="font-signature font-bold text-primary text-lg">VISIT US</p> */}
                        <p className="text-base text-center sm:text-start font-semibold text-primary">123 Demo St, San Francisco, CA 45678, United States</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row gap-2 items-center">
                            <IoCall size={20} className="text-primary"/>
                            {/* <p className="font-signature font-bold text-primary text-lg">CALL US</p> */}
                        <p className="text-base text-center sm:text-start font-semibold text-primary">+91 123-456-7890</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col sm:flex-row gap-2 items-center">
                            <BiLogoGmail size={20} className="text-primary"/>
                            {/* <p className="font-signature font-bold text-primary text-lg">EMAIL US</p> */}
                        <p className="text-base text-center sm:text-start font-semibold text-primary">alpha@gmail.com</p>
                        </div>
                    </div>

                    <div className="visible sm:hidden border-primary border-t-[.3px] opacity-30"></div>

                    <div className="flex flex-col gap-2 items-center sm:items-start mb-3">
                        <p className="font-signature font-bold text-primary text-center sm:text-start">FOLLOW US</p>
                        <div className="flex gap-5 text-primary">
                            <BsInstagram size={25} className="text-primary hover:text-secondary cursor-pointer"/>
                            <BsPinterest size={25} className="text-primary hover:text-secondary cursor-pointer"/>
                            <BsFacebook size={25} className="text-primary hover:text-secondary cursor-pointer"/>
                        </div>
                    </div>

                    <div className="visible sm:hidden border-primary border-b-[.3px] opacity-30"></div>
                </div>
                
                <div>
                    <img src="https://i.pinimg.com/736x/b9/b1/88/b9b18859a4ad4702ba076b2b0f118b92.jpg" alt="" className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </section>
    )
}

export default Contact