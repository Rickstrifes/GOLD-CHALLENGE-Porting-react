import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Ourservices from "../Components/Ourservices";
import Whyus from "../Components/Whyus";
import Testimoni from "../Components/Testimoni";
import Calltoaction from "../Components/Calltoaction";
import Faqaccordion from "../Components/Faqaccordion";
import Footer from "../Components/Footer";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Rental Mobil Terbaik di Seluruh Indonesia ";
  }, []);
  return (
    <div className="landing-page">
      <Navigation />
      <Hero />
      <Ourservices />
      <Whyus />
      <Testimoni />
      <Calltoaction />
      <Faqaccordion />
      <Footer />
    </div>
  );
};
export default LandingPage;
