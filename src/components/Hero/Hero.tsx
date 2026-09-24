

// Imgs
import Image from "next/image"
import bg from "../../../public/image/background.avif"

const Hero = () => {

    return (












        <div className="  overflow-hidden h-screen bg-black/55 flex justify-center items-center">
            <Image
                className=" w-full h-full absolute z-[-1] "
                alt="bgImg"
                width={1920}
                height={1080}
                src={bg}
            />


            <div className="absolute z-[-1] inset-0 bg-black/20" />
            {/* <div>
                                <h1 className="uppercase text-[#fff]/90 text-xl">Boundless technologies</h1>
                            </div> */}


            <div className="relative pt-10 max-sm:pt-30 mx-auto max-w-4xl px-6 text-center text-white">

                <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                    Digital Solutions For Modern Businesses
                </p>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                    We Build Digital Experiences
                    <br />
                    That Move Businesses Forward
                </h1>
                <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                    From websites and SEO to content and digital strategy,
                    we help businesses build a stronger presence online.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 sm:w-auto">
                        Start a Project →
                    </button>

                    <button className="w-full rounded-full bg-[#337DDC] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#286bc2] sm:w-auto">
                        View Our Work →
                    </button>
                </div>

            </div>
        </div>
    )

}

export default Hero




