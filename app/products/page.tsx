"use client";
import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { products as sortedProducts } from "@/components/ProductsCard";
import Link from "next/link";

const ProductDetails = () => {
  const [sortingOption, setSortingOption] = useState("");

  const handleSortingChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortingOption(event.target.value);
  };

  // Sorting logic
  // let sortedProducts = [...products];
  // if (sortingOption === 'popularity') {
  //   sortedProducts.sort((a, b) => b.popularity - a.popularity);
  // } else if (sortingOption === 'rating') {
  //   sortedProducts.sort((a, b) => b.rating - a.rating);
  // } else if (sortingOption === 'latest') {
  //   sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
  // } else if (sortingOption === 'lowToHigh') {
  //   sortedProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  // } else if (sortingOption === 'highToLow') {
  //   sortedProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
  // } else {
  //   sortedProducts = [...products]; // Reset to default order
  // }

  // console.log(sortedProducts, "sortedProducts.....")

  return (
    <section className="products pt-5 sm:pt-16 pb-5 sm:pb-12 px-2 sm:px-5 bg-light">
      <div className="products_content container flex flex-col gap-[30px] p-5 sm:p-16 bg-white">
        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center">
          <h4 className="product-header text-primary">Our Latest Product</h4>

          <div className="">
            <select
              name="sort-products"
              id="sort-products"
              className="bg-transparent focus:outline-none overflow-hidden text-sm"
              value={sortingOption}
              onChange={handleSortingChange}
            >
              <option value="" className="text-primary">
                Default sorting
              </option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="lowToHigh">Sort by price: low to high</option>
              <option value="highToLow">Sort by price: high to low</option>
            </select>
          </div>
        </div>
        <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center">
          {sortedProducts.map((product) => (
            <Link
              href={`/products/${product.name}`}
              key={product.id}
              className="product-link"
            >
              <div className="product-card cursor-pointer">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img w-full object-cover"
                  />
                </div>
                <div className="product-details py-1 flex flex-col gap-[2px]">
                  <div className="flex gap-[1px] text-primary text-sm">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                  <p className="product-name font-signature text-secondary font-normal text-base">
                    {product.name}
                  </p>
                  <p className="product-price text-sm text-primary font-bold">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
