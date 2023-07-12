import React from 'react'

const Home = () => {
  return (
    <section className="home container">
      <div className="home_content flex flex-col gap-10 p-10">
        <img src="https://www.ikea.com/images/kallarp-roenninge-bunkeflo-66fe1368c608846b2c1ee300e7ce8497.jpg" alt="background_img" className="home_background w-[100vw] object-cover"/>

        <p className="home_description text-[#353535] font-signature text-center text-xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ullam quisquam? Id, nobis iusto. Culpa
          nisi deserunt saepe sequi eius praesentium eum suscipit, architecto modi facere voluptas quaerat
          veritatis impedit.
        </p>
      </div>
    </section>
  )
}

export default Home