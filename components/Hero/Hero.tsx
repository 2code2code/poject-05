import React from "react";
import Image from "next/image";
import { Snippet } from "@nextui-org/snippet";
import PriceStat from "../PriceStat/PriceStat";

const HomePage: React.FC = () => {
  return (
    <section className="mx-auto w-2/3 px-4  md:w-[900px] lg:w-2/3 px-8">
      {/* <section className="mx-auto max-w-screen-2xl px-4 md:px-8"> */}
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold  sm:text-5xl md:mb-8 md:text-6xl text-yellow-500">
            Zeus
            <br />
            Chain
          </h1>
          <p className="max-w-md leading-relaxed  xl:text-lg">
            Zeus Chain is a revolutionary blockchain platform designed to enable
            the creation and execution of smart contracts and decentralized
            applications (dApps). Our mission is to provide a scalable, secure,
            and efficient blockchain infrastructure that empowers developers and
            businesses to innovate and transform industries.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src="https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?auto=format&q=75&fit=crop&w=550&h=550"
              loading="lazy"
              alt="Photo by Kaung Htet"
              height="1000"
              width="1000"
              className=" h-full w-full object-cover object-center"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?auto=format&q=75&fit=crop&w=550&h=550"
              loading="lazy"
              alt="Photo by Manny Moreno"
              height="1000"
              width="1000"
              className=" h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <Snippet hideCopyButton color="warning" variant="solid">
            ZTK
          </Snippet>
          <span className="h-px w-12 bg-gray-200"></span>

          <div className="flex gap-4">
            <PriceStat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
