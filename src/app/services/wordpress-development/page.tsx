
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



const wordpressDevelopment = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="5" />
            <PageDefiner numbering="5" reverse={"true"} />
            <Programs numbering="5"  />
            {/* <Contact/> */}
            <NeedHelp/>
            <MoreServices type={3}/>
            {/* <FAQ type={1}/> */}
            <Footer/>
        </div>
    )
}


export default wordpressDevelopment;