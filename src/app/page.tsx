import Hero from "@/components/Hero/Hero";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/WhatWeOffer/WhatWeOffer";

export default function Home() {
  return (

    <div >




      <Navbar />
      <Hero/>
      <Services/>
      <HowWeWork/>
      <Pricing/>
    </div>

  );
}
