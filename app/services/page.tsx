import Descrip from "@/components/Description/Description";
import Features from "@/components/Features/Features";
import CustomerReviews from "@/components/Review/Review";
import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";

export default function Services() {
  return (
    <div>
      <div className="flex flex-col items-center px-1 pt-10">
        <h1 className={title()}>Services</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <Divider />
        <Descrip />
        <Divider />
        <Features />
        <Divider />
        <CustomerReviews />
      </div>
    </div>
  );
}
