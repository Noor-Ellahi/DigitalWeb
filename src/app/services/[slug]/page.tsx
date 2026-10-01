
// type pageProps = {
//     params: Promise<{
//         slug: string
//     }>
// }

// const services = async ({ params }: pageProps) => {


//     const services = {
//         "web-development": {
//             title: "Web Development",
//             description:
//                 "We build fast, modern websites designed around your business.",
//         },

//         "seo-management": {
//             title: "SEO Management",
//             description:
//                 "We help businesses improve their visibility and reach the right audience.",
//         },

//         "content-writing": {
//             title: "Content Writing",
//             description:
//                 "Clear and engaging content created for your audience.",
//         },
//     };

//     const { slug } = await params;

//     const service = services[slug as keyof typeof services];


//     return (
//         <div>
//             <h1>{service.title}</h1>

//             <p>{service.description}</p>
//         </div>
//     )
// }

// export default services;