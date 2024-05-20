import Image from "next/image";
import React from "react";

const Descrip: React.FC = () => {
  return (
    <div className="bg-base py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              {/* <Image
                width="500"
                height="500"
                src="https://res.cloudinary.com/dma4fosaj/image/upload/v1716189718/service.svg"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              /> */}
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-yellow-500 md:text-left">
              Service Overview
            </p>

            <h1 className="mb-4 text-center text-2xl font-bold text-base-800 sm:text-3xl md:mb-6 md:text-left">
              Our competitive advantage
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              ZeusChain offers a comprehensive suite of blockchain services
              designed to meet the diverse needs of businesses and developers.
              Our offerings include custom blockchain development, smart
              contract design and auditing, and full-cycle decentralized
              application (dApp) development. We provide tailored enterprise
              blockchain solutions for industries such as supply chain
              management, finance, and healthcare, with options for private and
              consortium blockchains to ensure privacy and control
            </p>

            <h2 className="mb-2 text-center text-xl font-semibold text-base-800 sm:text-2xl md:mb-4 md:text-left">
              Why use our service ?
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Our interoperability solutions enable seamless cross-chain
              interactions, while our DeFi services include the development of
              lending platforms, decentralized exchanges, and yield farming
              protocols. Additionally, we offer expert consulting and advisory
              services, as well as training and educational programs to promote
              blockchain literacy and skills development. At ZeusChain, we are
              committed to delivering innovative, secure, and scalable
              blockchain solutions that drive industry transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descrip;
