import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io"

const ImageViewer = ({ onClose }: any) => {
    const productsImages = [
        {
            id: 1,
            image: "/img/2.jpeg",
        },
        {
            id: 2,
            image: "/img/3.jpeg",
        },
        {
            id: 3,
            image: "/img/6.jpeg",
        },
    ];
    return (
        <div className="relative pl-40 py-14">
            <IoIosCloseCircleOutline className="absolute right-10 cursor-pointer" onClick={onClose} size={30}/>
            <div className="flex flex-col gap-4 ">
                {productsImages.map((data) => {
                    return (
                        <div key={data.id}>
                            <img src={data.image} alt="Product Image" className="" />
                        </div>
                    )
                })} 
            </div>
        </div>
    );
};

export default ImageViewer;
