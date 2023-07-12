"use client"
import Link from 'next/link';
import React, { useState } from 'react';

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
]

const productsImages = [
    {
        id: 1,
        image: 'https://www.ikea.com/images/9d/e3/9de3d03eea95f18ebd530256dc3149a5.jpg?f=xs ',
    },
    {
        id: 2,
        image: 'https://www.ikea.com/images/66/90/66907646786c8b9980cb3e2c63b5b488.jpg?f=xs',
    },
    {
        id: 3,
        image: 'https://www.ikea.com/ext/ingkadam/m/22ece05f8a39fe9b/original/UGC100002803.jpg?f=s',
    },
    {
        id: 4,
        image: 'https://www.ikea.com/ext/ingkadam/m/4ba71812d1e3a8b4/original/UGC100004063.jpg?f=s',
    },
    {
        id: 5,
        image: 'https://www.ikea.com/images/ad/83/ad83c53c98983fd968677b26cb1e34ff.jpg?f=xs',
    },
    {
        id: 4,
        image: 'https://www.ikea.com/ext/ingkadam/m/4ba71812d1e3a8b4/original/UGC100004063.jpg?f=s',
    },
    
]


const ProductDetails = () => {
    
    const [mainImage, setMainImage] = useState(products[0].image);

    const handleImageChange = (newImage: React.SetStateAction<string>) => {
      setMainImage(newImage);
    };

    return (
        <section className="products_detail container">
            <div className="product_content p-10">
                <div className="products-details flex flex-col gap-[50px]">
                    <div className="flex gap-[60px] items-center justify-around flex-small-device">
                        <div className="flex flex-col gap-5">
                            <p className="font-extrabold text-3xl font-signature">Finnala Sofa</p>
                            <p className="max-w-[400px] text-sm text-[#353535] font-signature font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto culpa enim exercitationem! Laborum sequi dolorum alias expedita? Quo doloribus exercitationem minus iste velit molestiae aut saepe placeat fugit porro!.
                            </p>
                            <h4 className="text-xl font-medium bg-[#353535] text-white w-28 px-4 py-1">₹10,000</h4>

                        </div>

                        <div className="product-bg-img flex flex-col gap-[10px]">
                            <img src={mainImage} alt="Product Image" className="products_images w-[600px] h-[400px] sm:h-auto object-cover" />

                            <div className="products-small-images flex overflow-auto cursor-pointer object-cover">
                                {productsImages.map((product) => (
                                    <img
                                        key={product.id}
                                        src={product.image}
                                        alt="Product Image"
                                        className="products_images w-[100px] object-cover p-1"
                                        onClick={() => handleImageChange(product.image)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[30px] mt-5 bg-[#f5f5f5] p-5 py-10">
                        <p className="text-xl text-[#353535] font-semibold">Product Information</p>


                        <div className="flex flex-col gap-5">
                            <p className="text-2xl text-[#353535] font-semibold">Overview</p>
                            <div className="font-signature">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam libero quasi vitae assumenda. Ratione ducimus commodi aperiam doloribus eum. Soluta impedit alias praesentium, perferendis officia quasi facere adipisci commodi unde nulla temporibus dolores, aspernatur iusto assumenda similique veritatis omnis?</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl text-[#353535] font-semibold ">Highlight</p>
                            <div className="font-signature">
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <p className="text-xl text-[#353535] font-semibold mb-5 capitalize recommended_products">You might be interested in these products</p>

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
            </div>
        </section >
    );
};

export default ProductDetails;