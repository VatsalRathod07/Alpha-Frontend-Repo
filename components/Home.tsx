import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <section className="home container relative">
      <div className="home_content flex flex-col gap-10">
        <div className="relative">
          <img
            // src="https://www.madlilies.co.uk/cdn/shop/collections/184-plants-Header_16x9_67f3d8e9-9f68-4dd9-b756-6e7bf357e288.jpg?v=1674488875"
            // src="https://images.augustman.com/wp-content/uploads/sites/2/2022/07/12121021/untitled-design-2022-07-06t112123-753.jpeg"
            src="https://images.ctfassets.net/i3kf1olze1gn/7fa8e648-4bb5-458f-9402-46a70ee03c30/3fa8c8bf40d7c398df2b3444a63ec8e3/12-homes-filled-with-plants.jpg"
            alt="background_img"
            className="home_background w-full h-screen object-cover bg-no-repeat"
          />
          <div className="home_overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          <div className="home_text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-5 items-center">
            <p className="home_description text-lg font-normal font-signature uppercase text-white">
              Welcome To The Alpha Store
            </p>
            <p className="text-white text-4xl sm:text-6xl font-normal sm:leading-[60px] w-[350px] sm:max-w-none md:w-[600px]">Let’s Bring the Spring to Your Home</p>

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