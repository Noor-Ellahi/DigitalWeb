
// Comps
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import FAQ from "@/components/pagesComponents/FAQs";
import NeedHelp from "@/components/pagesComponents/needHelp";
import PageDefiner from "@/components/pagesComponents/pageDefiner";
import Programs from "@/components/pagesComponents/programs";



const logoDesign = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="3" />
            <PageDefiner numbering="3" />
            <Programs numbering="3" />
            {/* <Contact/> */}
            <NeedHelp/>
            <FAQ type={3}/>
            <Footer/>
        </div>
    )
}


export default logoDesign;