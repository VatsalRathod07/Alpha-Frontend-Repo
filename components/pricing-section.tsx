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
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 mx-4">
        {categories.map((data) => {
          return (
            <div key={data?.id} data-aos="flip-up">
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
