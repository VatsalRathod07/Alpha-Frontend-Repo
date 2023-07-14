import Link from 'next/link';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Gambia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/ef/45/38/ef45387351176cfb696d4aa990fad126.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 2,
    name: 'Ascension Island',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/90/08/96/9008966be390880944a9a0d7089a56b3.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 3,
    name: 'Somalia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/da/20/1c/da201cd219e81dc874640e8e783c568e.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 4,
    name: 'United Arab Emirates',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/0b/06/bf/0b06bf3acf7c6a0ae6262fa2dee68345.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 5,
    name: 'Tanzania',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/736x/fb/6b/38/fb6b38010f79100e0fb712ad4b9e562d.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 6,
    name: 'Myanmar (Burma)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/e7/3e/4a/e73e4a8f0bff527be64a50d7883916ce.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 7,
    name: 'Antarctica',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/d4/24/76/d42476769ec6570fb4f2b07064019d5d.jpg',
    contact: '+91 123-456-7890'
  },
  {
    id: 8,
    name: 'British Virgin Islands',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://i.pinimg.com/564x/53/52/6d/53526dc14dd5f2850292cfe509a1e880.jpg',
    contact: '+91 123-456-7890'
  },
];


const ProductDetails = ({ }) => {
  return (
    <section className="products container py-16">
      <div className="products_content flex flex-col gap-[30px] p-10">
        <h4 className="product-header text-center font-semibold text-2xl">Our Latest Product</h4>

        <div className="products-grid flex flex-wrap justify-center gap-5">
          {products.map((product) => (
            <Link href={`/products/${product.name}`} key={product.name} className="product-link">
              <div className="product-card cursor-pointer">
                <img src={product.image} alt={product.name} className="product-img w-[250px] h-[300px] object-cover" />

                <div className="product-details p-2 flex flex-col gap-[5px]">
                  <p className="product-name font-signature font font-semibold text-lg">{product.name}</p>
                  <p className="product-price text-sm font-medium">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductDetails