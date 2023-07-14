import React from 'react';

const NewsLetter = () => {
  return (
    <section className="newsletter container">
      <div className="home_content flex flex-col gap-5 p-14 text-center mb-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#353535]">Sign up to our newsletter?</h3>
          <p className="home_description text-[#353535] text-center font-signature font-medium">
            Be kept up to date on new ALPHA products and inspiration.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <input
            type="email"
            placeholder="Enter your email address"
            className="focus:outline-none border-b-[1px] border-[#353535]  w-full sm:w-auto bg-transparent"
          />
          <button className="bg-[#353535] text-white px-5 py-1">Sign up</button>
        </div>
      </div>
    </section>
  );  
};

export default NewsLetter;
