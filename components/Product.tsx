import { AiOutlineStar } from 'react-icons/ai'
import Link from 'next/link';
import React from 'react';

export const products = [
  {
    id: 1,
    name: 'Birds Nest Fern Lowes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$153.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-8.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '3/2/2078',
    rating: '6',
  },
  {
    id: 2,
    name: 'Chinese Money Plant',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$174.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-5.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '11/8/2106',
    rating: '3',
  },
  {
    id: 3,
    name: 'Swiss cheese plant',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$145.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-14.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '4/27/2081',
    rating: '3',
  },
  {
    id: 4,
    name: 'Zamioculcas zamiifolia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$141.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-16.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '8/23/2025',
    rating: '4',
  },
  {
    id: 5,
    name: 'Strelitzia nicolai',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$147.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-4.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '3/14/2071',
    rating: '3',
    popularity: '8'
  },
  {
    id: 6,
    name: 'Polyscias fruticosa',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$120.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-19.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '3/30/2059',
    rating: '5',
    popularity: '8'
  },
  {
    id: 7,
    name: 'Rubber fig',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$155.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-7.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '6/30/2030',
    rating: '5',
    popularity: '7'
  },
  {
    id: 8,
    name: 'Goeppertia louisae',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.',
    price: '$114.00',
    image: 'https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-ecommerce-product-featured-img-18.jpg',
    contact: '+91 123-456-7890',
    information: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?',
    date: '7/26/2111',
    rating: '2',
    popularity: '4'
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