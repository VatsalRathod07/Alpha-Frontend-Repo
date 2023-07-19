"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai'


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
]

const productsImages = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/90/08/96/9008966be390880944a9a0d7089a56b3.jpg',
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/fb/6b/38/fb6b38010f79100e0fb712ad4b9e562d.jpg',
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/e7/3e/4a/e73e4a8f0bff527be64a50d7883916ce.jpg',
    },
]


const ProductDetails = () => {

    const [mainImage, setMainImage] = useState(productsImages[0].image);

    const handleImageChange = (newImage: React.SetStateAction<string>) => {
        setMainImage(newImage);
    };

    return (
        <section className="products_detail pt-5 sm:pt-10 pb-5z sm:pb-12 px-2 sm:px-5 bg-light">
            <div className="product_content container p-5 sm:p-20 bg-white">
                <div className="products-details flex flex-col gap-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-[48%_48%] gap-[4%]">
                        <div className="product-bg-img flex flex-col gap-[10px]">
                            <img src={mainImage} alt="Product Image" className="products_images w-full max-h-[500px] h-full object-cover" />

                            <div className="products-small-images flex overflow-auto sm:overflow-hidden gap-2 cursor-pointer object-cover">
                                {productsImages.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.image}
                                        alt="Product Image"
                                        className="products_images w-[100px] h-[100px] object-cover p-1 hover:border-pale hover:border-[2px]"
                                        onClick={() => handleImageChange(product.image)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <p className="font-medium text-2xl font-signature">Maecenas efficitur ornare massa</p>
                            <h4 className="text-xl font-semibold text-primary">$120.00</h4>
                            <p className="max-w-[400px] text-sm text-[#353535] font-normal">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto culpa enim exercitationem! Laborum sequi dolorum alias expedita? Quo doloribus exercitationem minus iste velit molestiae aut saepe placeat fugit porro!.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="text-xl text-primary font-semibold">Product Information</p>

                        <div className="flex flex-col gap-7 mt-5">
                            <p className="text-xl sm:text-3xl text-secondary font-signature">Maecenas efficitur ornare massa.</p>
                            <div className="font-signature text-primary">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?</p>
                            </div>

                            <div>
                                <img src="https://blog-blossom.s3.appcnt.com/image/22/09/01/631073fe0a1ce/_orig/AMDU-9986_Blossom_cover_1180x504_1.jpg" alt="" className="w-full h-[400px] h-full object-cover" />
                            </div>

                            <div className="flex flex-col justify-start md:flex-row gap-4 sm:gap-0 w-full">
                                <p className="text-3xl text-secondary font-signature sm:w-[50%]">Product Highlight</p>

                                <div className="flex flex-col gap-3">
                                    <li className="text-primary text-sm pb-2">Duis vel ipsum vitae est semper varius in id</li>
                                    <li className="text-primary text-sm pb-2">Class aptent taciti sociosqu</li>
                                    <li className="text-primary text-sm pb-2">Litora torquent per conubia nostra per</li>
                                    <li className="text-primary text-sm pb-2">Inceptos himenaeos praesent</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-pale  border-t-[.1px] opacity-25 mt-5"></div>


                <div className="mt-12">
                    <p className="text-3xl sm:text-4xl text-secondary font-signature font-medium mb-5 capitalize">Related products</p>

                    <div className="products-grid grid justify-items-center grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm gap-5 justify-center">
                        {products.map((product) => (
                            <Link href={`/products/${product.name}`} key={product.name} className="product-link">
                                <div className="product-card cursor-pointer">
                                    <div>
                                        <img src={product.image} alt={product.name} className="product-img w-full object-cover" />
                                    </div>
                                    <div className="product-details py-1 flex flex-col gap-[2px]">
                                        <div className="flex gap-[1px] text-primary text-sm">
                                            <AiOutlineStar />
                                            <AiOutlineStar />
                                            <AiOutlineStar />
                                            <AiOutlineStar />
                                        </div>
                                        <p className="product-name font-signature text-secondary font-normal text-base">{product.name}</p>
                                        <p className="product-price text-sm text-primary font-bold">{product.price}</p>
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