import React from 'react';
import { BsFacebook, BsPinterest, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer container flex flex-col gap-5 bg-[#f5f5f5] p-5 mt-10" id="contact">
        <div className="footer_content flex justify-between items-center">
            {/* <div className="footer_grid grid grid-cols-3 justify-center gap-5">
                <div className="footer_contact text-center border-b-[1px] border-[#e0e0e0] p-[10px] flex flex-col gap-[5px]">
                    <p className="footer_icon font-semibold text-[#353535]">Email</p>
                    <p>alpha@gmail.com</p>
                </div>

                <div className="footer_contact text-center border-b-[1px] border-[#e0e0e0] p-[10px] flex flex-col gap-[5px]">
                    <p className="footer_icon font-semibold text-[#353535]">Call</p>
                    <p>+1 123-456-7890</p>
                </div>

                <div className="footer_contact text-center border-b-[1px] border-[#e0e0e0] p-[10px] flex flex-col gap-[5px]">
                    <p className="footer_icon font-semibold text-[#353535]">Location</p>
                    <p>132, My Street, Kingston, New York 12401</p>
                </div>
            </div> */}
        <div>
            <p className="footer_copyright text-base text-[#353535] font-bold font-signature">© 2023 Alpha Frontend</p>
        </div>
        
        <div className="footer_social flex justify-center gap-[30px]">
            <div className="footer_icon font-semibold text-[#353535]"><BsInstagram size={20}/></div>
            <div className="footer_icon font-semibold text-[#353535]"><BsPinterest size={20}/></div>
            <div className="footer_icon font-semibold text-[#353535]"><BsFacebook size={20}/></div>
        </div>

        </div>

    </footer>
  )
}

export default Footer