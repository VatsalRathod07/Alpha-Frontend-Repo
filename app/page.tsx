import React from 'react';
import Home from '@/components/Home';
import Product, { products } from '@/components/Product';
import About from '@/components/About';
import NewsLetter from '@/components/NewsLetter';

const Page = () => {
  return (
    <>
    <Home/>
    <Product products={products}/>
    <About/>
    <NewsLetter/>
    </>
  );
};

export default Page;
