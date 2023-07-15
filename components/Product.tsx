import { AiOutlineStar } from 'react-icons/ai'
import Link from 'next/link';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Gambia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 2,
    name: 'Ascension Island',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-5.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 3,
    name: 'Somalia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-14.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 4,
    name: 'United Arab Emirates',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-16.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 5,
    name: 'Tanzania',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-4.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 6,
    name: 'Myanmar (Burma)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-19.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 7,
    name: 'Antarctica',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-7.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 8,
    name: 'British Virgin Islands',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-18.jpg',
    contact: '+91 123-456-7890'
  },
];

const Product = () => {

  return (
    <section className="products container pl-[20px] pr-[20px] py-20">
      <div className="products_content flex flex-col justify-between gap-[50px]">
        <div className="sm:flex-row items-center flex sm:gap-0 gap-5 flex-col justify-between">
          <h4 className="product-header text-center font-medium font-signature text-2xl sm:text-3xl">New Plants</h4>
          <Link href="/products/" className="load-more_btn text-center bg-green px-3 py-2 w-32 border-none text-white font-medium cursor-pointer">
            Shop Now
          </Link>
        </div>

        <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
          {products.map((product) => (
            <Link href={`/products/${product.name}`} key={product.name} className="product-link">
              <div className="product-card cursor-pointer">
                <div>
                  <img src={product.image} alt={product.name} className="product-img w-full object-cover" />
                </div>
                <div className="product-details py-1 flex flex-col gap-[2px]">
                  <div className="flex gap-[1px] text-primary text-sm">
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                  </div>
                  <p className="product-name font-signature text-secondary font-normal text-base">{product.name}</p>
                  <p className="product-price text-sm text-primary font-bold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;