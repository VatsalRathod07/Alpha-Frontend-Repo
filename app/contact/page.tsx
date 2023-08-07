import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="w-full py-[100px] text-center"
        style={{
          background: `url("https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?b=1&s=170667a&w=0&k=20&c=O39_wq7HB2oZHV3pyeZDxFAq0Xb_zNvLKrAIEWDVveY=") 0% 0% / cover no-repeat`,
        }}
      >
        <div className="text-white text-[40px] font-semibold">Contact</div>
        <div className="mt-3 font-medium text-dark-gray text-[20px]">
          Contact US
        </div>
      </div>
      <div className="text-center py-16 text-3xl font-semibold">
        Get In Touch
      </div>
      <div className="contact-form max-w-[1000px] mt-0 mb-8 mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-0 rounded outline-0 h-[60px] w-full bg-[#f4f8fc] pl-4"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border-0 rounded outline-0 h-[60px] w-full bg-[#f4f8fc] pl-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border-0 rounded outline-0 h-[60px] w-full bg-[#f4f8fc] pl-4"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border-0 rounded outline-0 h-[60px] w-full bg-[#f4f8fc] pl-4"
          />
        </div>
        <div className="mt-4">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="border-0 rounded outline-0 h-[80px] w-full bg-[#f4f8fc] pl-4 pt-4"
          ></textarea>
        </div>
        <div className="text-center mt-4">
          <button className="h-12 bg-light-purple text-lg text-white px-12 rounded-lg hover:bg-red-600 font-medium transition duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
