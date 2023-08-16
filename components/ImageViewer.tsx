import Image from "next/image";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io"

const ImageViewer = ({ onClose , product}: any) => {
    return (
        <div className="relative p-20 py-14">
            <IoIosCloseCircleOutline className="absolute right-10 cursor-pointer" onClick={onClose} size={30}/>
            <div className="flex flex-col gap-4 p-20">
                {product?.media?.map((data :{url:any}, index:number) => {
                    return (
                        <div key={index}>
                            <Image src={data?.url} alt="Product Image" className="" />
                        </div>
                    )
                })} 
            </div>
        </div>
    );
};

export default ImageViewer;
