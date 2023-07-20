import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
// import Image1 from '../assets/1.jpeg'
// import Image2 from '../assets/2.jpeg'
// import Image3 from '../assets/3.jpeg'
// import Image4 from '../assets/4.jpeg'
// import Image5 from '../assets/5.jpeg'
import Image6 from "../assets/6.jpeg";
import Image7 from "../assets/7.jpeg";
import Image8 from "../assets/8.jpeg";
import Image9 from "../assets/9.jpeg";
import Image10 from "../assets/10.jpeg";
import Image11 from "../assets/11.jpeg";
import Image12 from "../assets/12.jpeg";
import Image13 from "../assets/13.jpeg";
import Image14 from "../assets/14.jpeg";
import Image15 from "../assets/15.jpeg";
import Image16 from "../assets/16.jpeg";
import Image17 from "../assets/17.jpeg";
import Image18 from "../assets/18.jpeg";
import Image19 from "../assets/19.jpeg";
import Image20 from "../assets/19.jpeg";
import Image21 from "../assets/21.jpeg";
import Image22 from "../assets/22.jpeg";
import Image23 from "../assets/23.jpeg";
import Image24 from "../assets/24.jpeg";
import Image25 from "../assets/25.jpeg";
import Image26 from "../assets/26.jpeg";
import Image27 from "../assets/27.jpeg";
import Image28 from "../assets/28.jpeg";

export const products = [
  {
    id: 1,
    name: "Birds Nest Fern Lowes",
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
    name: "Chinese Money Plant",
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
    name: "Swiss cheese plant",
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
    name: "Zamioculcas zamiifolia",
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
    id: 6,
    name: "Polyscias fruticosa",
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
    id: 7,
    name: "Rubber fig",
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
    id: 8,
    name: "Goeppertia louisae",
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
    id: 9,
    name: "Birds Nest Fern Lowes",
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
    id: 10,
    name: "Chinese Money Plant",
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
    id: 11,
    name: "Swiss cheese plant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$145.00",
    image: "/img/11.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "4/27/2081",
    rating: "3",
  },
  {
    id: 12,
    name: "Zamioculcas zamiifolia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum.",
    price: "$141.00",
    image: "/img/12.jpeg",
    contact: "+91 123-456-7890",
    information:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?",
    date: "8/23/2025",
    rating: "4",
  },
  {
    id: 13,
    name: "Strelitzia nicolai",
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
    id: 14,
    name: "Polyscias fruticosa",
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
    id: 15,
    name: "Rubber fig",
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
    id: 16,
    name: "Goeppertia louisae",
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
    id: 17,
    name: "Swiss cheese plant",
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
    id: 18,
    name: "Zamioculcas zamiifolia",
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
    id: 19,
    name: "Strelitzia nicolai",
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
    id: 20,
    name: "Polyscias fruticosa",
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
    id: 21,
    name: "Rubber fig",
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
    id: 22,
    name: "Goeppertia louisae",
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
    id: 23,
    name: "Zamioculcas zamiifolia",
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
    id: 24,
    name: "Strelitzia nicolai",
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
    id: 25,
    name: "Polyscias fruticosa",
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
    id: 26,
    name: "Rubber fig",
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
    id: 27,
    name: "Goeppertia louisae",
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
    id: 28,
    name: "Goeppertia louisae",
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
    <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
      {products
        .filter((data) => data.id <= 6)
        .map((product) => (
          <Link
            href={`/products/${product.name}`}
            key={product.name}
            className="product-link"
          >
            <div className="product-card cursor-pointer">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img w-full object-cover"
                />
              </div>
              <div className="product-details py-1 flex flex-col gap-[2px]">
                <div className="flex gap-[1px] text-primary text-sm">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <p className="product-name font-signature text-secondary font-normal text-base">
                  {product.name}
                </p>
                <p className="product-price text-sm text-primary font-bold">
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
