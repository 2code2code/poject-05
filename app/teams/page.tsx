import { title } from "@/components/primitives";
import RandomUsers from "@/components/randomuser";
import Image from "next/image";

export default function Teams() {
  return (
    <div>
      <div className="flex flex-col items-center px-1 pt-10">
        <Image
          width="500"
          height="500"
          src="/team.svg"
          alt="Key Perfomance"
          className="m-1 p-5"
        />
      </div>
      <h1 className={title()}>Teams</h1>
      <div className="pt-8">
        <RandomUsers />
      </div>
    </div>
  );
}
