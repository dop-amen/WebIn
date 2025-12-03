import React from "react";
import Hero from "../layouts/Hero.jsx";
import Services from "../layouts/Services.jsx";
import Packages from "../layouts/Packages.jsx";
import Contact from "../layouts/Contact.jsx";
import Faq from "../layouts/Faq.jsx";
import Testimonials from "@/layouts/Testimonials.jsx";



const Home = () => {
  return (
    <>
      <div className="relative">
        
        <Hero />
        <Services />
        <Packages />
        <Faq/>
        <Testimonials/>
        <Contact />
        
      </div>
    </>
  );
};

export default Home;
