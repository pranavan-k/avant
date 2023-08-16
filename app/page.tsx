import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import home_splash from "@/public/images/avant-home-splash2.png";
import home_splash_mobile from "@/public/images/home-page-mobile.png";
import { Source_Serif_4 } from "next/font/google";
import { Tajawal } from "next/font/google";
import AvantColgne from "@/public/images/avant-cologne.png";

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
    <div className="overflow-hidden">
      <main>
        <div className="flex lg:flex-row justify-center flex-col w-full z-50">
          <div className="w-screen justify-center flex items-center">
            <Image
              className="w-full hidden lg:block brightness-[.80]"
              src={home_splash}
              alt="WaveCO homepage image"
              sizes="100vw"
            />
            <Image
              className="w-full lg:hidden block brightness-[.80]"
              src={home_splash_mobile}
              alt="WaveCO homepage image"
              sizes="100vw"
            />
          </div>
          <div className="lg:absolute w-screen h-screen flex lg:p-16 p-5 lg:items-center lg:gap-8 items-center lg:text-left text-center flex-col justify-end">
            <h1
              className={`${source_serif.className} lg:text-6xl text-5xl lg:m-0 my-3 lg:text-white`}
            >
              Fall Collection
            </h1>

            <Link
              href="/"
              className="w-40 h-10 lg:text-white lg:border-white border-slate-900 border-2 mt-3 transition-all duration-75 ease-linear items-center flex justify-center rounded-full lg:hover:bg-white lg:hover:text-slate-900 text-slate-900"
            >
              Shop Featured
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-1/2 w-full">
            <div
              className={`lg:w-1/2 flex w-full absolute text-black justify-center ${source_serif.className}`}
            >
              Shop Cologne
            </div>
            <Image
              src={AvantColgne}
              sizes="100vw"
              alt="avant essence cologne image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
