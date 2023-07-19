import Link from 'next/link';
import React from 'react';
import ProductsCard from './ProductsCard';

const Product = () => {

  return (
    <section className="products container px-5 sm:px-10 py-20">
      <div className="products_content flex flex-col justify-between gap-[50px]">
        <div className="sm:flex-row items-center flex sm:gap-0 gap-5 flex-col justify-between">
          <h4 className="product-header text-center font-medium font-signature text-2xl sm:text-3xl">New Plants</h4>
          <Link href="/products/" className="load-more_btn text-center bg-green px-3 py-2 w-32 border-none text-white font-medium cursor-pointer">  
            Shop Now
          </Link>
        </div>
        <ProductsCard/>
      </div>
    </section>
  );
};

export default Product;