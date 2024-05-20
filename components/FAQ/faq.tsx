"use client";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-background py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl">
            F.A.Q
          </h2>
          <p className="mx-auto max-w-screen-md text-center  md:text-lg">
            Welcome to our Frequently Asked Questions (F.A.Q) section. Here, we
            have compiled a list of the most common questions we receive from
            our users, along with detailed answers to help you find the
            information you need quickly and easily.
          </p>
        </div>
        {/* text - end */}

        <div className="mx-auto flex max-w-screen-sm flex-col border-t">
          {/* question - start */}
          {[
            {
              question: "What is ZeusChain and how does it work?",
              answer:
                "ZeusChain is a blockchain platform designed to support the creation and execution of smart contracts and decentralized applications (dApps). It utilizes a high-throughput, low-latency network to process transactions efficiently. Our platform also features advanced scalability solutions like sharding and layer-2 protocols, ensuring that it can handle thousands of transactions per second.",
            },
            {
              question: "What are the features?",
              answer:
                "To get started with developing on ZeusChain, you can access our comprehensive SDKs, APIs, and developer tools available on our developer portal. We also provide extensive documentation and tutorials to help you build and deploy your dApps. Join our active developer community for support and collaboration.",
            },
            {
              question: "What about integrations?",
              answer:
                "ZeusChain offers several benefits for businesses, including enhanced security, high scalability, and interoperability with other blockchains. Our tailored enterprise solutions can improve efficiency in various industries such as supply chain management, finance, and healthcare. Additionally, our eco-friendly consensus algorithm ensures minimal energy consumption, aligning with sustainability goals.",
            },
            {
              question: "Is support available?",
              answer:
                "ZeusChain employs a robust security framework that includes advanced cryptographic techniques and regular smart contract audits. Our consensus mechanism is designed to be resistant to attacks, and we continuously monitor the network for any vulnerabilities. Additionally, our secure multi-currency wallet, ZeusWallet, provides advanced security features to protect user assets.",
            },
          ].map((item, index) => (
            <div key={index} className="border-b">
              <div
                className="flex cursor-pointer justify-between gap-2 py-4  hover:text-yellow-500 active:text-yellow-600"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold transition duration-100 md:text-lg">
                  {item.question}
                </span>
                <span
                  className={`text-yellow-500 ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {openQuestion === index && (
                <p className="mb-4 text-gray-500">{item.answer}</p>
              )}
            </div>
          ))}
          {/* question - end */}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
