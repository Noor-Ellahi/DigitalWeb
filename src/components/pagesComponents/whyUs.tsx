const reasons = [
  {
    number: "01",
    title: "All-in-One Services",
    description:
      "From websites and ecommerce to SEO, content and design, we bring the digital services your business needs together.",
  },
  {
    number: "02",
    title: "Experienced Team",
    description:
      "Different specialists, different skills, one team working toward the same goal.",
  },
  {
    number: "03",
    title: "Built Around You",
    description:
      "We focus on understanding your business first, then creating solutions that actually fit your needs.",
  },
  {
    number: "04",
    title: "Reliable Delivery",
    description:
      "Clear communication, practical timelines and a straightforward process from start to finish.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-24 pt-5 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium tracking-wide text-[#337DDC]">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#242425] md:text-5xl">
            Almost everything your business needs,
            <span className="text-[#337DDC]"> in one place.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#242425]/60">
            From building your website to growing your online presence,
            our team brings different digital skills together under one roof.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid border-t  border-[#242425]/15 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className={`group py-8 ${
                index % 2 === 0
                  ? "md:border-r  border-[#242425]/15 md:pr-10"
                  : "md:pl-10"
              } ${
                index < 2 ? "border-b border-[#242425]/15" : ""
              }`}
            >
              <div className="flex gap-6">

                {/* Number */}
                <span className="text-sm font-medium text-[#337DDC]">
                  {reason.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-[#242425] transition-colors duration-300 group-hover:text-[#337DDC]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#242425]/60">
                    {reason.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}