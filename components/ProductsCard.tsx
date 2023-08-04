import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

export const products = [
  {
    id: 1,
    name: "tune",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$153.00",
    image: "/img/1.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/2/2078",
    rating: "6",
  },
  {
    id: 2,
    name: "perfect",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$174.00",
    image: "/img/2.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "11/8/2106",
    rating: "3",
  },
  {
    id: 3,
    name: "electricity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$145.00",
    image: "/img/3.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "4/27/2081",
    rating: "3",
  },
  {
    id: 4,
    name: "torn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$141.00",
    image: "/img/4.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "8/23/2025",
    rating: "4",
  },
  {
    id: 5,
    name: "package",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$120.00",
    image: "/img/6.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/30/2059",
    rating: "5",
    popularity: "8",
  },
  {
    id: 6,
    name: "labor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$155.00",
    image: "/img/7.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "6/30/2030",
    rating: "5",
    popularity: "7",
  },
  {
    id: 7,
    name: "compound",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$114.00",
    image: "/img/8.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "7/26/2111",
    rating: "2",
    popularity: "4",
  },
  {
    id: 8,
    name: "anyway",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$153.00",
    image: "/img/9.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/2/2078",
    rating: "6",
  },
  {
    id: 9,
    name: "fall",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$174.00",
    image: "/img/10.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "11/8/2106",
    rating: "3",
  },
  {
    id: 10,
    name: "hair",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$147.00",
    image: "/img/13.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/14/2071",
    rating: "3",
    popularity: "8",
  },
  {
    id: 11,
    name: "wall",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$120.00",
    image: "/img/14.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/30/2059",
    rating: "5",
    popularity: "8",
  },
  {
    id: 12,
    name: "mistake",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$155.00",
    image: "/img/15.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "6/30/2030",
    rating: "5",
    popularity: "7",
  },
  {
    id: 13,
    name: "rice",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$114.00",
    image: "/img/16.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "7/26/2111",
    rating: "2",
    popularity: "4",
  },
  {
    id: 14,
    name: "success",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$145.00",
    image: "/img/17.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "4/27/2081",
    rating: "3",
  },
  {
    id: 15,
    name: "general",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$141.00",
    image: "/img/18.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "8/23/2025",
    rating: "4",
  },
  {
    id: 16,
    name: "highest",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$147.00",
    image: "/img/19.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/14/2071",
    rating: "3",
    popularity: "8",
  },
  {
    id: 17,
    name: "growth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$120.00",
    image: "/img/20.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/30/2059",
    rating: "5",
    popularity: "8",
  },
  {
    id: 18,
    name: "answer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$155.00",
    image: "/img/21.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "6/30/2030",
    rating: "5",
    popularity: "7",
  },
  {
    id: 19,
    name: "paint",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$114.00",
    image: "/img/22.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "7/26/2111",
    rating: "2",
    popularity: "4",
  },
  {
    id: 20,
    name: "carried",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$141.00",
    image: "/img/23.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "8/23/2025",
    rating: "4",
  },
  {
    id: 21,
    name: "final",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$147.00",
    image: "/img/24.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/14/2071",
    rating: "3",
    popularity: "8",
  },
  {
    id: 22,
    name: "area",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$120.00",
    image: "/img/25.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "3/30/2059",
    rating: "5",
    popularity: "8",
  },
  {
    id: 23,
    name: "ship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$155.00",
    image: "/img/26.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "6/30/2030",
    rating: "5",
    popularity: "7",
  },
  {
    id: 24,
    name: "barn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$114.00",
    image: "/img/27.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "7/26/2111",
    rating: "2",
    popularity: "4",
  },
  {
    id: 25,
    name: "nervous",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$114.00",
    image: "/img/28.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "7/26/2111",
    rating: "2",
    popularity: "4",
  },
];

const ProductsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products
        .filter((data) => data.id <= 6)
        .map((product) => (
          <Link
            href={`/products/${product.name}`}
            key={product.name}
            className="product-link"
          >
            <div className="product-card cursor-pointer bg-white rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg" 
              />
              <div className="px-4 py-2">
                <div className="flex gap-[1px] text-yellow-300 text-sm">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="font-signature text-secondary text-lg capitalize">
                  {product.name}
                </p>
                <p className="text-primary font-bold text-sm">
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>

  );
};

export default ProductsCard;
