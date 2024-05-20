import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "ZeusChain's blockchain solutions have transformed our operations. Their smart contracts and cross-chain integration are top-notch.",
      imgSrc:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112",
      imgAlt: "Photo by Radu Florin",
      name: "Sam Bankman F.",
      title: "CEO / XTX",
    },
    {
      text: "ZeusChain's platform is incredibly efficient and secure. Their team made the integration process seamless. We're thrilled with the results!",
      imgSrc:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
      imgAlt: "Photo by christian ferrer",
      name: "Kate Berg",
      title: "CFO / Dashdash",
    },
    {
      text: "ZeusChain has exceeded our expectations with their robust blockchain solutions. Their support and expertise are unmatched. Highly impressed!",
      imgSrc:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=112",
      imgAlt: "Photo by Ayo Ogunseinde",
      name: "Greg Jackson",
      title: "CTO / Uptime",
    },
  ];

  return (
    <div className="bg-background py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold -800 md:mb-12 lg:text-3xl">
          What others say about us
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8"
            >
              <div className="text-center ">{testimonial.text}</div>
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <Image
                    src={testimonial.imgSrc}
                    loading="lazy"
                    width="500"
                    height="500"
                    alt={testimonial.imgAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    {testimonial.name}
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
