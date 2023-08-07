/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { categories } from "@/database/updatedDB";
import { useSearchParams } from "next/navigation";
import { newProducts } from "../../database/updatedDB";

const ProductDetails = () => {
  const [selectedCategory, setSelectedCatgory] = useState<any>(null);

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
      return newProducts;
    }
  }, [selectedCategory]);

  const onHandleChange = (isChecked: boolean, id: number) => {
    window.scrollTo({top: 0, behavior: "smooth"})
    if (isChecked) {
      setSelectedCatgory(null);
    } else {
      setSelectedCatgory(id);
    }
  };
  return (
    <div className="flex w-full">
      <section className="products py-10 sm:py-5 px-2 sm:px-5 bg-light flex gap-5 sm:flex-row flex-col">

        <div className="w-full md:w-[30%] h-[300px] bg-white py-10  md:sticky md:top-4">
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

        <div className="container flex flex-col gap-[30px] py-5 px-8 bg-white">
          <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center">
            <h4 className="font-semibold text-lg text-primary">
              Our Latest Product
            </h4>
          </div>
          <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center">
            {(filteredProducts || []).map((product: any) => {
              console.log(product, "product");
              return (
                <Link
                  href={`/products/${product.name}`}
                  key={product.id}
                  className="product-link"
                >
                  <div className="product-card cursor-pointer border-gray border-2 rounded-lg hover:scale-105">
                    <div>
                      <img
                        src={product?.media[0]?.url?.src}
                        alt={product.name}
                        className="w-full  rounded-t-md"
                      />
                    </div>
                    <div className="product-details py-1 flex flex-col gap-[2px] p-2">
                      <p className="product-name font-signature text-secondary font-normal text-base">
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
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
