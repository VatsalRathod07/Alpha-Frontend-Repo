import React from "react";

const About = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-between items-center pt-[60px] pb-[60px] pl-[20px] pr-[20px] gap-5">
        <div className="flex flex-col gap-5">
          <p className="max-w-[550px] font-signature text-justify text-base font-normal">
            Facilisis eu faucibus diam cursus pulvinar consectetur purus sem
            felis, mauris consectetur nisl vitae gravida ultricies sem
            condimentum aliquet ut sed gravida amet vitae euismod pulvinar
            volutpat laoreet pharetra.
          </p>
        </div>

        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5a206c4bdc2b4affa2b76f82/1598482922991-L3KWD5D725XJ8ZTHJ6BX/howtoarrangeindoorplants1.jpg"
            alt="about_img"
            className="about-image w-[605px] h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
