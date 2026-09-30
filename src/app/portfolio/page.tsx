

// Comps
import Navbar from "@/components/Navbar/Navbar"
import Porfolio from "@/components/Portfolio/Portfolio"
import Hero from "@/components/Hero/Hero"



// Imgs
import bg from "../../../public/image/portimg1.jpg"
import Image from "next/image"

const portfolio = () => {

    return (
        <div>
            <Navbar />
            <Hero/>
            <Porfolio/>
            
        </div>
    )
}

export default portfolio


