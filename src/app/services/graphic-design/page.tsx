
// Comps
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import PageDefiner from "@/components/pagesComponents/pageDefiner";
import Programs from "@/components/pagesComponents/programs";



const graphicDesign = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="4" />
            <PageDefiner numbering="4" />
            <Programs numbering="4" />
            <Contact/>
            <Footer/>
        </div>
    )
}


export default graphicDesign;