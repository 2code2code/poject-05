import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      title: "ZeusChain Network",
      description:
        "The main blockchain network supporting smart contracts and dApps.",
      iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
    {
      title: "ZeusToken (ZTK)",
      description:
        "Native cryptocurrency used for transaction fees, staking, and governance.",
      iconPath:
        "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
      title: "ZeusWallet",
      description:
        "Secure, multi-currency wallet for managing ZTK and other supported assets.",
      iconPath:
        "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    },
    {
      title: "ZeusBridge",
      description:
        "Interoperability protocol for cross-chain transactions and asset transfers.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "ZeusDeFi",
      description:
        "Suite of decentralized finance (DeFi) products including lending, borrowing, and yield farming.",
      iconPath:
        "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      title: "ZeusNFT",
      description: "Best NFT platform in the town.",
      iconPath:
        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    },
  ];

  return (
    <div className="bg-background py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h1 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
            Our competitive advantage
          </h1>
          <p className="mx-auto max-w-screen-md text-center  md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="yellow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={feature.iconPath}
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                {feature.title}
              </h3>
              <p className="mb-2 text-center text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
