"use client"
import Link from 'next/link';
import React, { useState } from 'react';

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
]

const productsImages = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/fb/6b/38/fb6b38010f79100e0fb712ad4b9e562d.jpg',
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/564x/e7/3e/4a/e73e4a8f0bff527be64a50d7883916ce.jpg',
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/d4/24/76/d42476769ec6570fb4f2b07064019d5d.jpg',
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/90/08/96/9008966be390880944a9a0d7089a56b3.jpg',
    },
]


const ProductDetails = () => {

    const [mainImage, setMainImage] = useState(products[0].image);

    const handleImageChange = (newImage: React.SetStateAction<string>) => {
        setMainImage(newImage);
    };

    return (
        <section className="products_detail container py-16">
            <div className="product_content p-10">
                <div className="products-details flex flex-col gap-[50px]">
                    <div className="flex sm:flex-row-reverse flex-col-reverse gap-[60px] items-center justify-around flex-small-device">
                        <div className="flex flex-col gap-5">
                            <p className="font-extrabold text-3xl font-signature">Maecenas efficitur ornare massa</p>
                            <h4 className="text-xl font-semibold text-primary">$120.00</h4>
                            <p className="max-w-[400px] text-sm text-[#353535] font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto culpa enim exercitationem! Laborum sequi dolorum alias expedita? Quo doloribus exercitationem minus iste velit molestiae aut saepe placeat fugit porro!.
                            </p>
                        </div>

                        <div className="product-bg-img flex flex-col gap-[10px]">
                            <img src={mainImage} alt="Product Image" className="products_images w-[500px] h-auto sm:h-[500px] object-cover" />

                            <div className="products-small-images flex overflow-auto cursor-pointer object-cover">
                                {productsImages.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.image}
                                        alt="Product Image"
                                        className="products_images w-[100px] h-[100px] object-cover p-1"
                                        onClick={() => handleImageChange(product.image)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 bg-[#f5f5f5] p-5 py-10">
                        <p className="text-xl text-[#353535] font-semibold">Product Information</p>


                        <div className="flex flex-col gap-5 mt-5">
                            <p className="text-2xl text-[#353535] font-semibold">Maecenas efficitur ornare massa.</p>
                            <div className="font-signature">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <p className="text-xl text-[#353535] font-semibold mb-5 capitalize recommended_products">You might be interested in these products</p>

                    <div className="products-grid flex flex-wrap gap-5">
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
            </div>
        </section >
    );
};

export default ProductDetails;