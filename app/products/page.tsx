import Link from 'next/link';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Finnala Sofa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/in/en/images/products/vimle-4-seat-sofa-with-chaise-longue-saxemara-light-blue__0949541_pe799799_s5.jpg?f=xxs',
    contact: '+91 123-456-7890'
  },
  {
    id: 2,
    name: 'Upholstered bed',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/in/en/images/products/hauga-upholstered-bed-frame-vissle-grey__1101334_pe866598_s5.jpg?f=m',
    contact: '+91 123-456-7890'
  },
  {
    id: 3,
    name: 'Drawers',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/ext/ingkadam/m/15a5a81646cf68e/original/PH178022-crop001.jpg?f=xs',
    contact: '+91 123-456-7890'
  },
  {
    id: 4,
    name: ' BJÖRKÅSEN Laptop stand',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/in/en/images/products/bjoerkasen-laptop-stand-beige__0982353_ph176079_s5.jpg?f=xl',
    contact: '+91 123-456-7890'
  },
  {
    id: 5,
    name: 'KALKNÄS Cabinet',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/in/en/images/products/kalknaes-cabinet-with-sliding-doors-white__0985328_pe816598_s5.jpg?f=s',
    contact: '+91 123-456-7890'
  },
  {
    id: 6,
    name: 'UTESPELARE Gaming chair',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/ext/ingkadam/m/27297d75d106222c/original/PH183443-crop001.jpg?f=xs',
    contact: '+91 123-456-7890'
  },
  {
    id: 7,
    name: 'GODMORGON Wash-stand',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/ext/ingkadam/m/4436a02e74fb856d/original/PH182911-crop001.jpg?f=s',
    contact: '+91 123-456-7890'
  },
  {
    id: 8,
    name: 'SKUBB Storage case',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '₹10,000.00',
    image: 'https://www.ikea.com/ext/ingkadam/m/3c41f5557dbb29b/original/PE737475-crop001.jpg?f=s',
    contact: '+91 123-456-7890'
  },
];


const ProductDetails = ({  }) => {
  return (
    <section className="products container">
      <div className="products_content flex flex-col gap-[30px] p-10">
        <h4 className="product-header text-center font-semibold text-2xl">Our Latest Product</h4>

        <div className="products-grid flex flex-wrap justify-center gap-5">
          {products.map((product) => (
            <Link href={`/products/${product.name}`} key={product.name} className="product-link">
              <div className="product-card cursor-pointer">
                <img src={product.image} alt={product.name} className="product-img w-[250px] h-[250px]" />
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