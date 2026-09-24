
// Img
import Image from "next/image"
import test from "../../../public/image/img.jpg"
import { Bs2Square } from "react-icons/bs"


const HowWeWork = () => {

    const section = [
        {
            number: '01',
            img: "/image/section2.avif",
            description: 'Explore our services and find the solution that fits your needs.',
            title: 'Choose Your Service'
        },
        {
            number: '02',
            img: "/image/section6.jpg",
            description: 'Contact us through the provided details and tell us what you\'re looking for.',
            title: 'Get in Touch'
        },
        {
            number: '03',
            img: "/image/section1.avif",
            description: 'We\'ll understand your requirements, discuss the details, and agree on a suitable timeline.',
            title: 'Discuss & Set the Timeline'
        },
        {
            number: '04',
            img: "/image/section4.webp",
            description: 'Once everything is clear, we get to work and deliver your project as promised.',
            title: 'We Get It Done'
        }
    ]

    return (
        <div>
            {/* <h1 className=" text-5xl">How We Work!</h1> */}
            <div className="mb-12 flex items-start flex-col pl-20 max-xl:pl-12 max-md:pl-8">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                    HOW WE WORK
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Everything you need to Know.
                </h2>
            </div>
            <div className="flex max-lg:flex-col max-md:px-0  max-lg:h-auto max-lg:px-[clamp(1rem,5vw,3rem)] max-xl:h-100 max-xl:px-10 px-20 my-20 h-120 ">
                {
                    section.map((it, ind) => {
                        return (
                            // <div key={ind} className={`flex flex-col max-lg:flex-row ${ind === 1 || ind === 3 ? "flex-col-reverse max-lg:flex-row-reverse" : ""} `}>
                            //     <div className=" h-[50%] max-lg:h-full  max-lg:w-[50%]">
                            //         <Image
                            //             src={it.img}
                            //             className="h-full object-cover"
                            //             alt="howWeWorkImgSection"
                            //         />
                            //     </div>
                            //     <div className="py-5   max-lg:w-[50%] px-3 max-sm:pt-2 max-sm:px-2 max-xl:py-4 max-sm:gap-1 text-start max-md:pl-3 max-md:pt-4 flex flex-col gap-1 max-lg:gap-2 max-lg:pt-7 max-lg:pb-0 max-lg:pl-7 h-[50%] ">
                            //         <div className="flex max-[500px]:hidden  max-md:w-10 max-md:h-10 h-12 w-12 max-lg:w-15 max-lg:h-15 items-center justify-center rounded-lg bg-[#337DDC]/10 text-[#337DDC] transition-colors duration-300 group-hover:bg-[#337DDC] group-hover:text-white">
                            //             <h3 className="text-2xl max-md:text-xl max-lg:text-3xl max-lg:font-bold font-semibold">{it.number}</h3>
                            //         </div>
                            //         <h1 className="text-xl max-lg:text-2xl max-sm:text-lg max-sm:leading-5 max-[490px]:text-[15px]! max-md:text-xl font-semibold text-gray-900">
                            //             {it.title}
                            //         </h1>
                            //         <p className="mt-2 max-sm:mt-0 max-w-[260px] w-auto max-md:text-sm max-lg:max-w-[300px] max-lg:text-[16px] text-sm leading-6 max-sm:leading-4 text-gray-500">{it.description}</p>
                            //     </div>
                            // </div>
                            <div key={ind} className={`flex flex-col max-[500px]:p-3 max-lg:flex-row max-[500px]:flex-col! ${ind === 1 || ind === 3 ? "flex-col-reverse max-lg:flex-row-reverse" : ""} `}>
                                <div className=" h-[50%] max-lg:h-full  max-lg:w-[50%] max-[500px]:w-full!">
                                    <Image
                                        src={it.img}
                                        width={1920}
                                        height={1080}
                                        className="h-full object-cover"
                                        alt="howWeWorkImgSection"
                                    />
                                </div>
                                <div className="py-5   max-lg:w-[50%] max-[500px]:w-full! max-[500px]:gap-3! px-3  max-sm:px-2 max-xl:py-4 max-sm:gap-1 text-start max-md:pl-3 max-md:pt-4 flex flex-col gap-1 max-lg:gap-2 max-lg:pt-7 max-lg:pb-0 max-lg:pl-7 h-[50%] ">
                                    <div className="flex  max-md:w-10 max-md:h-10 h-12 w-12 max-lg:w-15 max-lg:h-15 items-center justify-center rounded-lg bg-[#337DDC]/10 text-[#337DDC] transition-colors duration-300 group-hover:bg-[#337DDC] group-hover:text-white">
                                        <h3 className="text-2xl max-md:text-xl max-lg:text-3xl max-lg:font-bold font-semibold">{it.number}</h3>
                                    </div>
                                    <h1 className="text-xl max-[500px]:text-2xl! max-lg:text-2xl max-sm:text-lg   max-md:text-xl font-semibold text-gray-900">
                                        {it.title}
                                    </h1>
                                    <p className="mt-2 max-[500px]:text-[15px]! max-sm:mt-0 max-w-[260px] w-auto max-md:text-sm max-lg:max-w-[300px] max-lg:text-[16px] text-sm leading-6  text-gray-500">{it.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}


export default HowWeWork