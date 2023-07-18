import React from 'react';
import Home from '@/components/Home';
import Product from '@/components/Product';
import { products } from '@/components/Products';
import About from '@/components/About';

const Page = () => {
  return (
    <>
    <Home/>
    <Product products={products}/>
    <About/>
    </>
  );
};

export default Page;
