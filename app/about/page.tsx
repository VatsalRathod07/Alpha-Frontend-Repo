import Link from 'next/link';
import React from 'react';
import { products } from '@/components/Product';


// const products = [
//   {
//     id: 1,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8.jpg',
//   },
//   {
//     id: 2,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-5.jpg',
//   },
//   {
//     id: 3,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-14.jpg',
//   },
//   {
//     id: 4,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-16.jpg',
//   },
//   {
//     id: 5,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-4.jpg',
//   },
//   {
//     id: 6,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-19.jpg',
//   },
//   {
//     id: 7,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-7.jpg',
//   },
//   {
//     id: 8,
//     image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-18.jpg',
//   },
// ]

const AboutUs = () => {
  return (
    <section className="products container py-16">
      <div className="products_content flex flex-col gap-[50px] p-10">
          <div className="flex flex-col gap-4">
            <h4 className="product-header font-signature font-medium text-5xl">About Us</h4>
            <p>Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.</p>
            <p>Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo, et, pellentesque pellentesque sapien faucibus in adipiscing risus adipiscing bibendum in nec eget tincidunt in in sed magna arcu molestie nec mauris quisque.</p>
          </div>
          <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
            {products.map((product) => (
              <Link href="https://www.instagram.com/" className="product-card cursor-pointer">
                <img src={product.image} alt="product-image" className="product-img w-[300px] h-full object-cover" />
              </Link>
            ))}
          </div>
      </div>
    </section>
  )
}

export default AboutUs