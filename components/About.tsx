import React from 'react';

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about_contnet flex justify-between items-center pt-[60px] pb-[60px] pl-[40px] pr-[40px] gap-5">
        <div className="about_details flex flex-col gap-5">
          <h3 className="about-header text-2xl text-[#353535] font-bold">About Us</h3>
          <p className="about-description max-w-[550px] font-signature text-justify text-base font-normal">For us, the worlds of work and home are delicately intertwined -
            balanced in equilibrium with a good few years of practice under
            our belts. A truly personal dance we do and ongoing labour of
            love, we wanted the film to capture an insight into our creative
            vision and the ever-so-slight madness to our method.</p>
        </div>

        <div>
          <img src="https://www.home-designing.com/wp-content/uploads/2018/06/minimalist-home-office-setup.jpg" alt="about_img" className="about-image w-[605px] h-72 object-cover"/>
        </div>
      </div>
  </section>
  )
}

export default About