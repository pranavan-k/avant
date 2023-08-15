import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import home_splash from "../public/images/cropped-home-splash.png";
import { Source_Serif_4 } from "next/font/google";
import { Tajawal } from "next/font/google";

const ysabeau_infant = Tajawal({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description:
    "WaveCo Streetwear is an independent streetwear company created in 2023. Shop streetwear tees, hoodies, pants, and even design custom clothing",
};

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex lg:flex-row flex-col w-screen z-50">
          <div className="lg:w-1/2 lg:p-9 w-screen">
            <Image
              className="lg:w-full h-auto"
              src={home_splash}
              alt="WaveCO homepage image"
              sizes="100vw"
            />
          </div>
          <div className="lg:w-1/2 w-screen h-screen flex lg:p-16 p-5 lg:items-start lg:gap-8 items-center lg:text-left text-center flex-col lg:justify-center">
            <h1
              className={`${source_serif.className} lg:text-6xl text-5xl lg:m-0 my-3`}
            >
              Shop The Latest Streetwear
            </h1>
            <p className={`${ysabeau_infant.className} text-lg lg:pr-28`}>
              Shop from our latest collection: The Summer Collection. We&apos;ve got oversized streetwear, graphic tees, hoodies, and pants. Wear clothing from our of vareity signature designs that are perfect for the summer weather
            </p>
            <Link
              href="/"
              className="w-40 h-10 lg:hover:text-white lg:text-slate-900 text-white lg:border-2 mt-9 transition-all duration-75 ease-linear lg:border-slate-900 items-center flex justify-center rounded-full bg-slate-900 lg:bg-white hover:lg:bg-slate-900"
            >
              Shop Latest
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-screen skew-y-[-3deg] bg-zinc-800 py-44">
          <div className="flex lg:flex-row flex-col w-screen skew-y-[3deg] z-[-1]">
            
            </div>
        </div>
      </main>
    </div>
  );
}
