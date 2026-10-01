
// Comps
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import PageDefiner from "@/components/pagesComponents/pageDefiner";



const websiteDevelopment = () => {


    return (
        <div>
            <Navbar />
            <Hero numbering="0" />
            <PageDefiner/>
        </div>
    )
}


export default websiteDevelopment;