

// Compomemts
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Navbar from "@/components/Navbar/Navbar";
import Porfolio from "@/components/Portfolio/Portfolio";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import Services from "@/components/WhatWeOffer/WhatWeOffer";

export default function Home() {
  return (

    <div >


      <Navbar />
      <Hero numbering=""/>
      <Services/>
      <HowWeWork/>
      <Pricing/>
      <Porfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>

  );
}
