import Achievement from "@/components/Achievement/Achievement";
import { Logo } from "@/components/icons";
import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="text-center">
      <h1 className={title()}>About Us</h1>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl mb-4">
          Welcome to <b className="font-bold text-yellow-300">Zeus Chain!</b>
        </h2>
        <Logo className="mb-4" />
        <Divider />
        <p className="text-justify text-lg mt-4 mb-4 w-1/3 sm:w-2/3 md:w-2/3 lg:w-5/6">
          ZeusChain was founded in 2021 by a group of blockchain enthusiasts and
          industry veterans who recognized the limitations of existing
          blockchain platforms. The founders, led by CEO Dr. Athena Pallas,
          aimed to create a blockchain that could overcome these limitations and
          provide a robust foundation for the future of decentralized
          applications.
        </p>
        <Divider />
      </div>
      <div className="flex flex-col items-center px-1 pt-10">
        <Image
          width="500"
          height="500"
          src="https://images.unsplash.com/photo-1698681908648-962c6048ec3e?auto=format&q=75&fit=crop&w=550&h=550"
          alt="Key Performance"
          className="m-1 p-5 "
        />
      </div>
      <Divider />
      <h1 className={title()}>Company Culture</h1>
      <p className="p-5">
        At ZeusChain, we believe that our people are our greatest asset. Our
        company culture is built on the following core values:
      </p>
      <div className="text-lg mt-4 mb-4 text-center ">
        <h2 className="font-bold text-center p-5">Innovation</h2>
        <p>
          We encourage creativity and out-of-the-box thinking. Our team is
          constantly exploring new ideas and technologies to push the boundaries
          of what is possible in the blockchain space.
        </p>
        <h2 className="font-bold text-center p-5">Collaboration</h2>
        <p>
          We foster a collaborative environment where team members work together
          to solve complex problems. We believe that diverse perspectives lead
          to better solutions.
        </p>
        <h2 className="font-bold text-center p-5">Transparency</h2>
        <p>
          We value open communication and transparency. Our team members are
          encouraged to share their thoughts and feedback, and we maintain an
          open-door policy at all levels of the organization.
        </p>
        <h2 className="font-bold text-center p-5">Integrity</h2>
        <p>
          We uphold the highest standards of integrity and ethical behavior. We
          are committed to building a trustworthy and reliable blockchain
          platform.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Achievement />
      </div>
    </div>
  );
}
