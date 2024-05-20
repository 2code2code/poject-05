import Image from "next/image";
import "./bg.css";

const Intro: React.FC = () => {
  return (
    <section className="w-screen h-screen relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-cover py-16 shadow-lg md:py-20 xl:py-48 ">
      {/* image - start */}
      <Image
        width="1920"
        height="1000"
        src="https://res.cloudinary.com/dma4fosaj/video/upload/c_scale,w_1920,h_1000/e_loop/q_30/fl_animated,fl_awebp/earth.webp"
        alt="Description of my image"
        unoptimized
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* image - end */}

      {/* overlay - start */}
      <div className="absolute inset-0  mix-blend-multiply"></div>
      {/* overlay - end */}

      {/* text start */}

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
          Very proud to introduce
        </p>
        <h1 className="mb-8 text-center text-4xl font-bold  sm:text-5xl md:mb-12 md:text-6xl">
          Empowering Decentralized Innovation
        </h1>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            className="group relative inline-block focus:outline-none focus:ring"
            href="#"
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest group-active:text-opacity-75">
              Buy Now
            </span>
          </a>

          {/* Hover */}
        </div>
      </div>
      {/* text end */}
    </section>
  );
};

export default Intro;
