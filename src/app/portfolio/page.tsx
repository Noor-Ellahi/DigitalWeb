

// Comps
import Navbar from "@/components/Navbar/Navbar"
import Porfolio from "@/components/Portfolio/Portfolio"
import Hero from "@/components/Hero/Hero"
import Footer from "@/components/Footer/Footer"



// Imgs
import bg from "../../../public/image/portimg1.jpg"
import Image from "next/image"

const portfolio = () => {

    return (
        <div>
            <Navbar />
            <Hero numbering=''/>
            <Porfolio />
            <Footer/>
            
        </div>
    )
}

export default portfolio


