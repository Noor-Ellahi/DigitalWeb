
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



const ecommerceSite = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="7" />
            <PageDefiner numbering="7" reverse={"true"} />
            <Programs numbering="7" />
            {/* <Contact/> */}
            <NeedHelp />
            <MoreServices type={2} />
            {/* <FAQ type={1}/> */}
            <Footer />
        </div>
    )
}


export default ecommerceSite;