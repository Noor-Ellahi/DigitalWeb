
// Comps
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import PageDefiner from "@/components/pagesComponents/pageDefiner";
import Programs from "@/components/pagesComponents/programs";
import WhyChooseUs from "@/components/pagesComponents/whyUs";



const contentWriting = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="2" />
            <PageDefiner numbering="2" />
            <Programs numbering="2" />
            <WhyChooseUs />
            <Contact />
            <Footer />
        </div>
    )
}


export default contentWriting;