
import Link from 'next/link';
import React from 'react';

export const products = [
  {
    id: 1,
    name: 'Finnala Sofa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/ef/45/38/ef45387351176cfb696d4aa990fad126.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 2,
    name: 'Upholstered bed',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/90/08/96/9008966be390880944a9a0d7089a56b3.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 3,
    name: 'Drawers',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/da/20/1c/da201cd219e81dc874640e8e783c568e.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 4,
    name: ' BJÖRKÅSEN Laptop stand',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/0b/06/bf/0b06bf3acf7c6a0ae6262fa2dee68345.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 5,
    name: 'KALKNÄS Cabinet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/736x/fb/6b/38/fb6b38010f79100e0fb712ad4b9e562d.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 6,
    name: 'UTESPELARE Gaming chair',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/e7/3e/4a/e73e4a8f0bff527be64a50d7883916ce.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 7,
    name: 'GODMORGON Wash-stand',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/d4/24/76/d42476769ec6570fb4f2b07064019d5d.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 8,
    name: 'SKUBB Storage case',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/53/52/6d/53526dc14dd5f2850292cfe509a1e880.jpg',
    contact: '+91 123-456-7890'
  },
];

const Product = () => {

  return (
    <section className="products container p-[80px] ">
      <div className="products_content flex flex-col justify-between gap-[50px]">
        <div className="sm:flex-row items-center flex sm:gap-0 gap-5 flex-col justify-between">
          <h4 className="product-header text-center font-medium font-signature text-2xl sm:text-3xl">Latest Product</h4>
          <Link href="/products/" className="load-more_btn text-center bg-secondary px-3 py-2 w-32 border-none text-white font-medium cursor-pointer">
            Browse More
          </Link>
        </div>

        <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
          {products.map((product) => (
            <Link href={`/products/${product.name}`} key={product.name} className="product-link">
              <div className="product-card cursor-pointer">
                <div>
                  <img src={product.image} alt={product.name} className="product-img w-[250px] h-[300px] object-cover" />
                </div>
                <div className="product-details py-1 flex flex-col gap-[2px]">

                  <p className="product-name font-signature text-secondary font-semibold text-base">{product.name}</p>
                  <p className="product-price text-sm text-primary font-medium">{product.price}</p>
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