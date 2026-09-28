import Image from "next/image"
import bg from "../../../public/image/portimg1.jpg"


const Porfolio = () => {


    return (
        <div className="my-20">
            <div className="mb-12 px-20 max-lg:px-10 max-md:px-5">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                    Portfolio
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Projects we've built for various industries.
                </h2>
            </div>


            <div className="mx-20 max-lg:mx-10 max-md:mx-5 overflow-hidden ">
                <div className="relative min-h-[420px]">

                    {/* Background image */}
                    <Image
                        className=" w-full h-full object-cover z-[-1] absolute"
                        alt="bgImg"
                        width={1920}
                        height={1080}
                        src={bg}
                    />


                    <div className="absolute z-[-1] inset-0 bg-black/20" />

                    {/* dark overlay */}

                    <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 text-center text-white">
                        <div className="max-w-2xl">
                            <h3 className="text-4xl font-semibold">
                                Take a Look at Our Work
                            </h3>

                            <p className="mt-4 text-white/75">
                                From websites and ecommerce platforms to creative digital experiences,
                                explore the projects we've built and see how we turn ideas into solutions
                                that help businesses grow and stand out online.
                            </p>


                            <button className="mt-7 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                                View Our Work →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Porfolio