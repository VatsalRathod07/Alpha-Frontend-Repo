import React from 'react';
import Home from '@/components/Home';
import Product from '@/components/Product';
import About from '@/components/About';
import PricingSection from '@/components/pricing-section';

const Page = () => {
  return (
    <>
      <Home />
      <PricingSection/>
      <Product />
      <About />
    </>
  );
};

export default Page;
