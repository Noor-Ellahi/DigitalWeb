
// Comps
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import FAQ from "@/components/pagesComponents/FAQs";
import MoreServices from "@/components/pagesComponents/moreServices";
import NeedHelp from "@/components/pagesComponents/needHelp";
import PageDefiner from "@/components/pagesComponents/pageDefiner";
import Programs from "@/components/pagesComponents/programs";



const webDesigning = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="8" />
            <PageDefiner numbering="8" reverse={"true"} />
            <Programs numbering="8" />
            {/* <Contact/> */}
            <NeedHelp />
            <MoreServices type={1} />
            {/* <FAQ type={1}/> */}
            <Footer />
        </div>
    )
}


export default webDesigning;