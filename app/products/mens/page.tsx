import React from "react";
import type { Metadata } from "next";
import MensDisplay from "@/app/components/mensDisplay";
import Image from "next/image";
import MensSplash from "@/public/images/mensPageImage.png";
import Navbar from "@/app/components/navbar";
import MensSplashAlt from "@/public/images/mensPageAlt.png";
import PoloPreivew from "@/public/images/polo_preview.png";
import { Prata } from "next/font/google";

const source_serif = Prata({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shop Clothing Mens - Avant",
  description:
    "Choose from the vareity of timeless clasics that we have curated for you. Shop polos, buiness shirts, t-shirts and more. These Avant essentials are the perfect blend of sophistication and comfortability making them the best fir for any occasion",
};

function Mens() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <Image
          src={MensSplash}
          alt="tees page image - streetwear model"
          sizes="100vw"
          className="lg:w-full brightness-75 lg:block hidden"
        />
        <Image
          src={MensSplashAlt}
          alt="tees page image - streetwear model"
          sizes="100vw"
          className="lg:w-full brightness-75 lg:hidden block"
        />
      </div>
      <div className={`w-screen lg:mt-20 lg:ml-8 mb-10 hidden`}>
        <h1 className={`text-3xl ${source_serif.className}`}>
          Mens: Shop by category
        </h1>
        <div className="grid lg:auto-cols-[19%] auto-cols-[90vw] grid-flow-col overflow-x-auto snap-x snap-mandatory gap-3 mt-12">
          <div className="snap-center carrousel-item flex flex-col items-center justify-end relative">
            <Image
              src={PoloPreivew}
              alt="polo category preview image"
              sizes="100vw"
              className="lg:w-full"
            />
            <h1
              className={`w-40 h-10 flex justify-center items-center mb-8 absolute text-white border-white border-2 transition-all duration-75 ease-linear z-50 lg:hover:bg-white hover:text-slate-900`}
            >
              POLOS
            </h1>
          </div>
          <div className="snap-center carrousel-item">
            <Image
              src={PoloPreivew}
              alt="polo category preview image"
              sizes="100vw"
              className="lg:w-full"
            />
          </div>
          <div className="snap-center carrousel-item">
            <Image
              src={PoloPreivew}
              alt="polo category preview image"
              sizes="100vw"
              className="lg:w-full"
            />
          </div>
          <div className="snap-center carrousel-item">
            <Image
              src={PoloPreivew}
              alt="polo category preview image"
              sizes="100vw"
              className="lg:w-full"
            />
          </div>
          <div className="snap-center carrousel-item">
            <Image
              src={PoloPreivew}
              alt="polo category preview image"
              sizes="100vw"
              className="lg:w-full"
            />
          </div>
          <div className="snap-center carrousel-item">
            <Image
              src={PoloPreivew}
              alt="polo category preview image"
              sizes="100vw"
              className="lg:w-full"
            />
          </div>
        </div>
      </div>
      <h1
        className={`text-3xl mt-20 lg:ml-8 ml-2 mb-4 ${source_serif.className}`}
      >
        Mens Clothing
      </h1>
      <MensDisplay />
    </main>
  );
}

export default Mens;
