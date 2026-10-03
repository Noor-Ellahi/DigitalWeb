
// Comps
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import FAQ from "@/components/pagesComponents/FAQs";
import NeedHelp from "@/components/pagesComponents/needHelp";
import PageDefiner from "@/components/pagesComponents/pageDefiner";
import Programs from "@/components/pagesComponents/programs";



const seoManagement = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="1" />
            <PageDefiner numbering="1" reverse={"true"} />
            <Programs numbering="1"  />
            {/* <Contact/> */}
            <NeedHelp/>
            <FAQ type={1}/>
            <Footer/>
        </div>
    )
}


export default seoManagement;