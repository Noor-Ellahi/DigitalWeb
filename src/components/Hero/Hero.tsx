'use client'

// Imgs
import Image from "next/image"
import bg from "../../../public/image/background.avif"
import bg1 from "../../../public/image/portImg.jpg"


// Func
import { usePathname } from "next/navigation"


const Hero = () => {

    const pathName = usePathname()
    console.log(pathName)


    return (












        <div className="  overflow-hidden relative h-screen max-md:h-[110vh] max-[450px]:h-[120vh]! max-[400px]:h-[130vh]!  bg-black/55 flex justify-center items-center">
            <Image
                className=" w-full h-full  z-[-1] absolute"
                alt="bgImg"
                width={1920}
                height={1080}
                src={pathName === '/portfolio' ? bg1 : bg}
            />


            <div className="absolute z-[-1] inset-0 bg-black/20" />



            <div className="relative pt-10 max-sm:pt-30 mx-auto max-w-4xl px-6 text-center text-white">

                {
                    pathName === '/' ? <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                        Digital Solutions For Modern Businesses
                    </p> : null
                }

                {
                    pathName === '/' ? <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                    We Build Digital Experiences <br /> That Move Businesses Forward
                </h1> : <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                   Where clean code meets  high-converting content and design.
                </h1>
                }
                <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                    {pathName === '/portfolio' ? "Full-stack code, organic SEO, high-impact copywriting, and visual branding. Built to scale your digital presence without the friction." : "From websites and SEO to content and digital strategy, we help businesses build a stronger presence online."}
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    {
                        pathName === '/' ? <button className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 sm:w-auto">
                            Start a Project →
                        </button> : null
                    }

                    <button  className="w-full rounded-full bg-[#337DDC] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#286bc2] sm:w-auto">
                        {pathName === "/" ? "View Our Work →" : "Explore Portfolio"}
                    </button>
                </div>

            </div>
        </div>
    )

}

export default Hero




