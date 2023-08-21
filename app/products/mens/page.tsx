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
