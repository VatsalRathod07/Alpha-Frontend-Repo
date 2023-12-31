"use client";
import React, { useEffect } from "react";
import Card from "./pricing-card";
import { categories } from "../database/updatedDB";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

const PricingSection = () => {
  const router = useRouter();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-10 pt-6">
        {categories.map((data) => {
          return (
            <div key={data?.id} data-aos="flip-right">
              <Card
                name={data.name}
                price={data.price.value}
                features={data.features}
                onClick={() => router.push(`/products?category=${data.id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSection;
