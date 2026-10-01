'use client'

// Imgs
import Image from "next/image"
import bg from "../../../public/image/background.avif"
import bg1 from "../../../public/image/portImg.jpg"


// Func
import { usePathname } from "next/navigation"


type serviceHero = {
    numbering: string,
}

const Hero = ({ numbering }: serviceHero) => {

    const pathName = usePathname()
    // console.log(pathName)



    const serviceHero = [
        {
            title: "Web Development That Builds Your Business Online",
            description:
                "Fast, modern, and responsive websites built around your business, your audience, and your goals, with a strong focus on performance and user experience.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            title: "SEO Management That Gets You Found Online",
            description:
                "Improve your search visibility, reach the right audience, and build a stronger presence in search with practical strategies focused on long-term organic growth.",
            img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
        },
        {
            title: "Content Writing That Connects With Your Audience",
            description:
                "Clear, engaging, and purposeful content created to communicate your ideas, strengthen your brand, attract your audience, and keep visitors interested in your business.",
            img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        },
        {
            title: "Logo Design That Defines Your Brand Identity",
            description:
                "Distinctive and memorable logos designed to represent your business, communicate your identity, and create a consistent visual foundation for your growing brand.",
            img: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        },
        {
            title: "Graphic Design That Makes Your Brand Stand Out",
            description:
                "Thoughtful and engaging graphic designs created to communicate your message clearly across social media, marketing materials, websites, and other digital platforms.",
            img: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        },
        {
            title: "WordPress Development Built Around Your Needs",
            description:
                "Professional and flexible WordPress websites that are easy to manage, update, customize, and grow as your business needs change over time.",
            img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
        },
        {
            title: "Website Management That Keeps Your Site Running",
            description:
                "Reliable website management that keeps your site updated, secure, maintained, optimized, and running smoothly while you focus on managing your business.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        },
        {
            title: "Ecommerce Sites Built Ready For Business Growth",
            description:
                "Modern ecommerce websites designed to showcase your products, simplify the buying experience, build customer trust, and help your online store grow.",
            img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
        },
        {
            title: "Website Designing For Better Digital Experiences",
            description:
                "Clean, intuitive, and engaging interfaces designed around your users, your brand, and the way people interact with your website across different devices.",
            img: "https://images.unsplash.com/photo-1547658719-da2b51169166",
        },
        {
            title: "Portfolio Development That Showcases Your Work",
            description:
                "Professional portfolio websites designed to showcase your work, experience, skills, and achievements while giving potential clients or employers a clear view of your capabilities.",
            img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
        },
    ];















    return (

        numbering && numbering.length > 0 ?
            (
                < div className="  overflow-hidden relative h-screen max-md:h-[110vh] max-[450px]:h-[120vh]! max-[400px]:h-[130vh]!  bg-black/55 flex justify-center items-center" >
                    <Image
                        className=" w-full h-full  z-[-1] absolute"
                        alt="bgImg"
                        width={1920}
                        height={1080}
                        src={serviceHero[Number(numbering)].img}
                    />


                    <div className="absolute z-[-1] inset-0 bg-black/20" />



                    <div className="relative pt-10 max-sm:pt-30 mx-auto max-w-4xl px-6 text-center text-white">

                        {
                            pathName !== '/portfolio' ? <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                                Digital Solutions For Modern Businesses
                            </p> : null
                        }

                        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                            {serviceHero[Number(numbering)].title}
                        </h1>



                        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                            {serviceHero[Number(numbering)].description}
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <button className="w-full rounded-full bg-[#337DDC] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#286bc2] sm:w-auto">
                                Start a Project →
                            </button>
                        </div>

                    </div>
                </div >
            ) :
            (
                < div className="  overflow-hidden relative h-screen max-md:h-[110vh] max-[450px]:h-[120vh]! max-[400px]:h-[130vh]!  bg-black/55 flex justify-center items-center" >
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

                            <button className="w-full rounded-full bg-[#337DDC] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#286bc2] sm:w-auto">
                                {pathName === "/" ? "View Our Work →" : "Explore Portfolio"}
                            </button>
                        </div>

                    </div>
                </div >
            )


    )

}

export default Hero




