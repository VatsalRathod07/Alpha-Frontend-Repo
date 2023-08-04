import React from "react";

interface categories {
  name: string;
  price: string;
  features: string[];
  onClick: any;
}
const PricingCard = ({ name, price, features, onClick }: categories) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <div
        className=" shadow-2xl hover:bg-[#402E86] hover:text-white transition duration-300 ease-in-out rounded-lg hover:shadow-3xl p-6 max-w-sm w-full"
        style={{ background: "linear-gradient(45deg,#ffbc00,#ff0058)" }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VQEBjCgG4pvYgf01DF84YNSb2N2biill7Q&usqp=CAU"
          alt="Product Image"
          className="w-full h-36 mx-auto rounded-md mb-4 object-cover"
        />
        <h2 className="text-3xl font-semibold mb-4">{name}</h2>
        <div className="border-b-2 border-gray-200 mb-4"></div>
        <div className="text-4xl font-semibold mb-4">₹ {price}</div>
        {features.map((feature, index) => {
          return (
            <div className="flex flex-col !gap-3" key={index}>
              <div className="text-gray-600">{feature}</div>
            </div>
          );
        })}
        <a
          href="#"
          className="block bg-[#E8E2FD] hover:bg-[#907BEA] font-medium transition duration-300 ease-in-out px-4 py-2 mt-6 rounded-lg text-center"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
