import FAQSection from "@/components/FAQ/faq";
import Features from "@/components/Features/Features";
import HomePage from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Intro />
      <HomePage />
      <Features />
      <Testimonials />
      <FAQSection />
    </section>
  );
}
