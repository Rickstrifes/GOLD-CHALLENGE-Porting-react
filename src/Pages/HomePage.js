import React from 'react'
import Hero from "../Components/Hero";
import Ourservices from "../Components/Ourservices";
import Whyus from "../Components/Whyus";
import Testimoni from "../Components/Testimoni";
import CTABaner from "../Components/CTABaner";
import Faqaccordion from "../Components/Faqaccordion";

const HomePage = () => {
  return (
    <div className='home-page'>
        <Hero />
        <Ourservices />
        <Whyus />
        <Testimoni />
        <CTABaner />
        <Faqaccordion />
    </div>
  )
}

export default HomePage