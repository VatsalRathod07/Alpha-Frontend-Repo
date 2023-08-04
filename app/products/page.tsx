/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { products as sortedProducts } from "@/components/ProductsCard";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { categories } from "@/database/updatedDB";
import { useParams, useSearchParams } from "next/navigation";
import { newProducts } from "../../database/updatedDB";

const ProductDetails = () => {
  const [sortingOption, setSortingOption] = useState("");

  const handleSortingChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSortingOption(event.target.value);
  };

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCatgory] = useState<any>(null);
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const search: any = useSearchParams();
  const category = search.get("category");

  useEffect(() => {
    if (category) {
      setSelectedCatgory(Number(category));
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (!!selectedCategory) {
      const data = newProducts.filter(
        (data) => data.categoryId === Number(selectedCategory)
      );
      return data;
    } else {
      return;
    }
  }, [selectedCategory]);

  return (
    <div className="flex w-full">
      <div className="w-[25%] border-t-2 border-r-2 border-solid border-[#E4E7E7]">
        <div className="mt-32 ml-[72px]">
          <div className="font-medium text-xl text-manual-gray">
            Filter By Categories
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {categories.map((data) => {
              const isChecked = selectedCategory === data.id;
              return (
                <div className="flex items-center" key={data.id}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    className="h-5 w-5 cursor-pointer"
                    onChange={() => {
                      setSelectedCatgory(data.id);
                    }}
                  />
                  <div className="text-start ml-4 font-medium text-lg">
                    {data.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className="w-[75%] products pt-5 pb-5 sm:pb-12 px-2 sm:px-5 bg-light">
        <div className="container flex flex-col gap-[30px] py-5 px-8 bg-white">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center">
            <h4 className="font-semibold text-lg text-primary">
              Our Latest Product
            </h4>

            <div className="">
              {/* <select
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
              </select> */}
            </div>
          </div>
          <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center">
            {(filteredProducts || []).map((product: any) => {
              console.log(product, "product");
              return (
                <Link
                  href={`/products/${product.name}`}
                  key={product.id}
                  className="product-link"
                >
                  <div className="product-card cursor-pointer">
                    <div>
                      <img
                        src={product?.media[0]?.url?.src}
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
