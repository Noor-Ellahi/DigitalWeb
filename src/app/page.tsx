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
      <Hero/>
      <Services/>
      <HowWeWork/>
      <Pricing/>
      <Porfolio/>
      <Testimonials/>
    </div>

  );
}
