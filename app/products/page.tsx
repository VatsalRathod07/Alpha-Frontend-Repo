/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { categories } from "@/database/updatedDB";
import { useSearchParams } from "next/navigation";
import { newProducts } from "../../database/updatedDB";
import { FiFilter } from "react-icons/fi";
import Image from "next/image";

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false); // State to track filter options visibility

  const search: any = useSearchParams();
  const category = search.get("category");

  useEffect(() => {
    if (category) {
      setSelectedCategory(Number(category));
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (!!selectedCategory) {
      const data = newProducts.filter(
        (data) => data.categoryId === Number(selectedCategory)
      );
      return data;
    } else {
      return newProducts;
    }
  }, [selectedCategory]);

  const onHandleChange = (isChecked: boolean, id: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isChecked) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(id);
    }
    if (showFilterOptions) {
      setShowFilterOptions(false);
    }
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <div className="flex w-full">
      <section className="products py-10 sm:py-5 px-2 sm:px-5 bg-light flex gap-5 sm:flex-row flex-col">
        <div className="w-full md:w-[30%] h-[300px] bg-white py-10 md:sticky md:top-4 hidden lg:block">
          <div className="ml-[40px]">
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
                      onChange={() => onHandleChange(isChecked, data.id)}
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

        <div className="container flex flex-col gap-[30px] py-5 px-4 sm:px-8  bg-white relative">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center">
            <h4 className="font-semibold text-lg text-primary">
              Our Latest Product
            </h4>
          </div>
          <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center">
            {(filteredProducts || []).map((product: any) => {
              return (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="product-link"
                >
                  <div className="product-card cursor-pointer hover:scale-105 transition duration-300 hover:rounded-md hover:shadow-md">
                    <div>
                      <Image
                        src={product?.media[0]?.url}
                        alt={product.name}
                        className="w-full "
                      />
                    </div>
                    <div className="product-details py-1 flex flex-col gap-[2px] p-2">
                      <p className="product-name font-signature text-secondary font-normal text-base min-h-[50px]">
                        {product.name}
                      </p>
                      <div className="flex justify-between items-center gap-[1px] text-primary text-sm mt-2">
                        <p className="product-price text-sm text-primary font-bold">
                          ₹ {product.price}
                        </p>
                        <div className="flex items-center gap-1">
                          <AiFillStar className="text-yellow-300" />
                          <p>4.5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {showFilterOptions && (
            <div className="rounded-md border-[.5px_whitesmoke] h-10 py-4 px-6 flex justify-center items-center lg:hidden right-2 bottom-52 fixed">
              <div className="flex bg-white flex-col gap-2 mt-44 h-[calc(100vh - 500px)] px-10 py-10 rounded-md">
                {categories.map((data) => (
                  <div className="flex items-center" key={data.id}>
                    <input
                      type="checkbox"
                      checked={selectedCategory === data.id}
                      className="h-5 w-5 cursor-pointer"
                      onChange={() =>
                        onHandleChange(selectedCategory === data.id, data.id)
                      }
                    />
                    <div className="text-start ml-4 font-medium text-lg">
                      {data.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!showFilterOptions && (
            <div className="bg-secondary rounded-full py-4 px-4 flex justify-center items-center lg:hidden left-[30px] bottom-[90px] fixed">
              <FiFilter
                size={30}
                onClick={toggleFilterOptions}
                className="text-white"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
