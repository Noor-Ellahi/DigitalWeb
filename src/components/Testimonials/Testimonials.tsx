

// const Testimonials = () => {


//     return (
//         <div>
//             <div className="mb-14 flex items-start flex-col pl-20 max-xl:pl-12 max-md:pl-8 max-sm:pl-4">
//                 <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
//                     Pricing
//                 </p>

//                 <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                     Everything you need to Know.
//                 </h2>
//             </div>

//             <div>

//             </div>
//         </div>
//     )
// }

// export default Testimonials


// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//     {
//         name: "Ahmed Khan",
//         role: "Business Owner",
//         review:
//             "The team understood exactly what we needed and turned our idea into a website that looks professional and works beautifully.",
//     },
//     {
//         name: "Sarah Ahmed",
//         role: "Founder",
//         review:
//             "Working with them was simple from start to finish. Communication was clear, and the final result was better than we expected.",
//     },
//     {
//         name: "Hassan Ali",
//         role: "Entrepreneur",
//         review:
//             "They delivered a clean and modern website for our business and were very helpful throughout the entire process.",
//     },
// ];

// const Testimonials = () => {
//     return (
//         <div className="mt-24">

//             {/* Heading */}
//             <div className="mb-14 flex flex-col items-start pl-20 max-xl:pl-12 max-md:pl-8 max-sm:pl-4">
//                 <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
//                     Testimonials
//                 </p>

//                 <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                     What our clients have to say.
//                 </h2>
//             </div>

//             {/* Cards */}
//             <div className="grid grid-cols-1 gap-4 px-20 md:grid-cols-3 max-xl:px-12 max-md:px-8 max-sm:px-4">
//                 {testimonials.map((testimonial, index) => (
//                     <div
//                         key={index}
//                         className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#337DDC]/40 hover:shadow-lg"
//                     >
//                         {/* Quote Icon */}
//                         <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#337DDC] text-white transition-transform duration-300 group-hover:rotate-6">
//                             <FaQuoteLeft className="h-4 w-4" />
//                         </div>

//                         {/* Review */}
//                         <p className="min-h-[120px] text-[15px] leading-7 text-gray-600">
//                             “{testimonial.review}”
//                         </p>

//                         {/* Divider */}
//                         <div className="my-6 h-px bg-gray-100" />

//                         {/* Client */}
//                         <div>
//                             <p className="font-semibold text-gray-900">
//                                 {testimonial.name}
//                             </p>

//                             <p className="mt-1 text-sm text-gray-400">
//                                 {testimonial.role}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Testimonials;



import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "Business Owner",
        review:
            "The team understood exactly what we needed and turned our idea into a website that looks professional and works beautifully.",
    },
    {
        name: "Sarah Ahmed",
        role: "Founder",
        review:
            "Working with them was simple from start to finish. Communication was clear, and the final result was better than we expected.",
    },
    {
        name: "Hassan Ali",
        role: "Entrepreneur",
        review:
            "They delivered a clean and modern website for our business and were very helpful throughout the entire process.",
    },
];

const Testimonials = () => {
    return (
        <div className="mt-24">

            {/* Heading */}
            <div className="mb-14 flex flex-col items-start pl-20 max-xl:pl-12 max-md:pl-8 max-sm:pl-4">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                    Testimonials
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    What our clients have to say.
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 px-20 md:grid-cols-3 max-xl:px-12 max-md:px-8 max-sm:px-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#337DDC]/40 hover:shadow-lg"
                    >
                        {/* Quote Icon */}
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#337DDC] text-white transition-transform duration-300 group-hover:rotate-6">
                            <FaQuoteLeft className="h-4 w-4" />
                        </div>

                        {/* Stars */}
                        <div className="mb-5 flex gap-1 text-[#337DDC]">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="h-3.5 w-3.5" />
                            ))}
                        </div>

                        {/* Review */}
                        <p className="min-h-[120px] text-[15px] leading-7 text-gray-600">
                            “{testimonial.review}”
                        </p>

                        {/* Divider */}
                        <div className="my-6 h-px bg-gray-100" />

                        {/* Client */}
                        <div>
                            <p className="font-semibold text-gray-900">
                                {testimonial.name}
                            </p>

                            <p className="mt-1 text-sm text-gray-400">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;