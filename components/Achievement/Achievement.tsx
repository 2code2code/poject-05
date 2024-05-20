import React from "react";
import { Divider } from "@nextui-org/divider";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Banner from "../Banner/Banner";

const Achievement = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col text-center">
        <div className="flex flex-col text-center p-10">
          <h1 className="text-2xl font-bold pb-2">Our Achievement</h1>
          <p>We offer a variety of additional technology services</p>
        </div>
        <div className="flex flex-row justify-center items-center p-10">
          <div className="flex flex-col text-center mx-8">
            <h1 className="text-4xl font-bold pb-2 text-yellow-400">13+</h1>
            <p>Years in Business</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col text-center mx-8">
            <h1 className="text-4xl font-bold pb-2 text-yellow-400">144+</h1>
            <p>Succesfull Project</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col text-center mx-8">
            <h1 className="text-4xl font-bold pb-2 text-yellow-400">420+</h1>
            <p>Years in Business</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col text-center mx-8">
            <h1 className="text-4xl font-bold pb-2 text-yellow-400">99.9%+</h1>
            <p>Costumer Satisfaction Rate</p>
          </div>
        </div>
        {/* <Marquee pauseOnClick={true}>
          <div className="flex flex-row justify-center items-center p-2">
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/boeing.png" alt="Boeing" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/ftx.png" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/yahoo.png" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/wework.png" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/nestle.png" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/aramco.png" alt="ftx" />
            </div>
          </div>
        </Marquee>
        <Marquee direction="right" pauseOnClick={true}>
          <div className="flex flex-row justify-center items-center p-2">
            <div className="flex flex-row text-center mx-8">
              <Image
                width={200}
                height={200}
                src="/blackrock.png"
                alt="Boeing"
              />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/mcafee.png" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/nokia.svg" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={200} height={200} src="/meta.png" alt="ftx" />
            </div>
            <div className="flex flex-row text-center mx-8">
              <Image width={125} height={150} src="/tribun.png" alt="ftx" />
            </div>
          </div>
        </Marquee> */}
        <Banner />
      </div>
    </div>
  );
};

export default Achievement;
