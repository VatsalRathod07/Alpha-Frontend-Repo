"use client"
import React, { useEffect } from 'react'
import Card from "./pricing-card"
import { categories } from "../database/updatedDB"
import Aos from "aos"
import 'aos/dist/aos.css';


const PricingSection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 m-10'>
                {categories.map((data) => {
                    return (
                        <div key={data?.id} data-aos="flip-up">
                            <Card
                                name={data.name} price={data.price.value} features={data.features} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PricingSection