import Link from 'next/link';
import React from 'react';

const products = [
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
        id: 6,
        image: 'https://www.ikea.com/images/68/d4/68d4c7ae276281f65758ff0ebe03f0fc.jpg?f=xs',
    },
    {
        id: 7,
        image: 'https://www.ikea.com/ext/ingkadam/m/15a5a81646cf68e/original/PH178022-crop001.jpg?f=xs',
    },
    {
        id: 8,
        image: 'https://www.ikea.com/images/88/9c/889c4dadb6df980b80db8c6003d06b39.jpg?f=xs',
    },
]

const FollowUs = () => {
    return (
        <section className="products container">
            <div className="products_content flex flex-col gap-[50px] p-10">
                <h4 className="product-header text-center font-semibold text-2xl">Follow Us </h4>

                <div className="products-grid flex flex-wrap justify-center gap-5">
                    {products.map((product) => (
                        <Link key={product.id} href="https://www.instagram.com/" className="product-card cursor-pointer">
                            <img src={product.image} alt="product-image" className="product-img w-[100px] h-[100px] object-cover" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FollowUs