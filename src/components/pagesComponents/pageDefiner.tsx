



import Image from "next/image";


type serviceSectionType = {
    numbering : string
}


const PageDefiner = ({numbering} : serviceSectionType) => {

    const serviceSection = [
        {
            ultimateTitle : " Web-Development",
            title: "Custom Website Design for Every Business Type",
            description:
                "Your website is often the first interaction customers have with your business. That is why our focus is on modern website design that combines creativity with functionality. We use the latest design trends, clean layouts, and engaging visuals to ensure your website not only looks great but also performs effectively. A modern website helps you capture user attention within seconds and encourages them to explore your services further.",
            img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
        },
        {
            ultimateTitle : " SEO",
            title: "SEO Strategies That Help Your Business Get Found",
            description:
                "Getting your business in front of the right audience starts with a strong search presence. We use practical SEO strategies, keyword research, technical improvements, and content optimization to help your website become more visible in search results. Our approach focuses on building sustainable organic traffic and making it easier for potential customers to discover your business when they are actively searching for your services.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        },
        {
            ultimateTitle : " Content Writing",
            title: "Content Writing That Gives Your Business a Voice",
            description:
                "Good content helps businesses communicate clearly, build trust, and keep their audience engaged. We create informative and purposeful content for websites, blogs, product pages, and digital platforms while keeping your brand and audience in mind. Every piece is written to communicate your message effectively, provide value to readers, and encourage visitors to take the next step with your business.",
            img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        },
        {
            ultimateTitle : " Logo Design",
            title: "Logo Design That Builds a Memorable Brand",
            description:
                "A strong logo gives your business a recognizable identity and creates the foundation for your visual branding. We create clean, distinctive, and meaningful logo concepts designed around your business, audience, and industry. From the initial concept to the final design, our goal is to create an identity that looks professional, feels consistent, and can grow alongside your business.",
            img: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        },
        {
            ultimateTitle : " Graphic Design",
            title: "Graphic Design That Brings Your Ideas to Life",
            description:
                "Visual communication plays an important role in how customers understand and remember your business. We create graphics for digital platforms, social media, marketing materials, presentations, and other business needs. Our designs combine clear communication with strong visual direction to help your brand maintain a professional and consistent appearance across every platform.",
            img: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        },
        {
            ultimateTitle : " WordPress-Development",
            title: "WordPress Websites Built for Easy Management",
            description:
                "WordPress gives businesses the flexibility to build and manage a professional online presence without unnecessary complexity. We create customized WordPress websites with clean layouts, responsive designs, useful functionality, and an easy-to-manage structure. Whether you need a business website, blog, service platform, or another type of website, we build it around your specific requirements.",
            img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
        },
        {
            ultimateTitle : " Website Management",
            title: "Reliable Website Management for Growing Businesses",
            description:
                "Keeping a website running smoothly requires regular updates, maintenance, monitoring, and improvements. We help businesses manage their websites by keeping content updated, maintaining functionality, addressing issues, and making necessary changes over time. This allows you to focus on your business while your website continues to provide a reliable experience for your customers.",
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
        },
        {
            ultimateTitle : " Ecommerce Websites",
            title: "Ecommerce Websites Designed for Better Shopping",
            description:
                "A successful online store needs more than attractive product pages. We build ecommerce experiences that make it simple for customers to browse products, understand what you offer, and complete their purchases. From product presentation and responsive layouts to useful store functionality, we focus on creating an online shopping experience that supports your business and its customers.",
            img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
        },
        {
            ultimateTitle : " Website Design",
            title: "Website Design Focused on Users and Business Goals",
            description:
                "Good website design is about more than making a page look attractive. We focus on creating clear layouts, intuitive navigation, strong visual hierarchy, and responsive experiences that make websites easier to use. By combining your brand identity with the needs of your audience, we create designs that help visitors understand your business and move naturally through your website.",
            img: "https://images.unsplash.com/photo-1547658719-da2b51169166",
        },
        {
            ultimateTitle : " Portfolio Websites",
            title: "Professional Portfolio Websites That Showcase Your Work",
            description:
                "Your portfolio should make your skills, experience, and work easy to understand at a glance. We create professional portfolio websites that organize your work into a clear and engaging experience while reflecting your personal or professional identity. Whether you are a freelancer, designer, developer, photographer, or professional, we build a portfolio that puts your work in focus.",
            img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
        },
    ];



    return (
        <section className="px-6 pt-20 pb-20 sm:px-10 lg:px-16">
            <div className="mx-auto w-full grid items-center gap-12 max-md:gap-5 lg:grid-cols-2 lg:gap-20">

                {/* Image */}
                <div className="relative h-100 max-md:h-[clamp(200px,70vh,60vw)] overflow-hidden ">
                    <Image
                        src={serviceSection[Number(numbering)]?.img}
                        alt="Our services"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="lg:max-w-xl pt-5  h-full max-lg:w-full">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#337DDC]">
                        {serviceSection[Number(numbering)]?.ultimateTitle}
                    </p>

                    <h1 className="text-4xl font-semibold  tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
                        {/* Digital solutions built for your business. */}
                        {serviceSection[Number(numbering)]?.title}
                    </h1>

                    <p className="mt-6 text-sm leading-7 text-gray-500 sm:text-base">
                        {/* From websites and ecommerce platforms to SEO, content,
                        and creative design, we help businesses build a
                        stronger digital presence with solutions made around
                        their goals. From websites and ecommerce platforms to SEO, content,
                        and creative design, we help businesses build a
                        stronger digital presence with solutions made around
                        their goals. */}
                        {serviceSection[Number(numbering)]?.description}
                    </p>

                    {/* Buttons */}
                    {/* <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button className="group inline-flex items-center gap-3 rounded-full bg-[#337DDC] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#286bc2]">
                            Get Started
                            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <button className="rounded-full border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-50">
                            See Programs
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default PageDefiner;