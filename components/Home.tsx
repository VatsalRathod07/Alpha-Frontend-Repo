import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <section className="home relative">
      <div className="home_content flex flex-col gap-10">
        <div className="relative">
          <img
            // src="https://www.madlilies.co.uk/cdn/shop/collections/184-plants-Header_16x9_67f3d8e9-9f68-4dd9-b756-6e7bf357e288.jpg?v=1674488875"
            // src="https://images.augustman.com/wp-content/uploads/sites/2/2022/07/12121021/untitled-design-2022-07-06t112123-753.jpeg"
            src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/09/hero-section-bg.jpg"
            alt="background_img"
            className="home_background w-full h-screen sm:h-screen object-cover bg-no-repeat"
          />
          <div className="home_overlay absolute inset-0 bg-gradient-to-b from-secondary opacity-40 to-black"></div>
          <div className="home_text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
            <p className="home_description w-[300px] text-lg font-normal font-signature uppercase text-white [word-spacing:2px]">
              Welcome To The Alpha Store
            </p>
            {/* <p className="text-white font-signature text-4xl sm:text-6xl font-normal sm:leading-[60px] w-[650px] sm:max-w-none md:w-[700px]">Let’s Bring the Spring to Your Home</p> */}
            <p className="text-white font-signature text-4xl sm:text-6xl font-normal sm:leading-[60px] w-[350px] sm:w-[700px]">Let’s Bring the Spring to Your Home</p>

            <Link href="/products" className="text-secondary bg-white font-medium px-5 py-2">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
