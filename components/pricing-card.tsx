import React from "react";

interface categories {
  name: string;
  price: string;
  features: string[];
  onClick: any;
}
const PricingCard = ({ name, price, features, onClick }: categories) => {
  return (
    <div
      className="flex items-center  cursor-pointer hover:-translate-y-1 hover:scale-105 transition duration-300 transform py-5"
      onClick={onClick}
    >
      <div
        className=" shadow-2xl min-w-[350px] transition duration-300 ease-in-out rounded-lg hover:shadow-3xl p-6 w-full sm:w-[300px]"
        style={{
          background: "1 !important",
          backgroundColor: "white !important",
        }}
      >
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/6/315338395/RD/QN/UV/4100636/14-inch-regular-flour-mill.jpg"
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
          className="block bg-[#E8E2FD] hover:bg-light-purple hover:text-white font-medium transition duration-300 px-4 py-2 mt-6 rounded-lg text-center"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
