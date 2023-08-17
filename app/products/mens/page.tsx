import React from "react";
import type { Metadata } from "next";
import TeesDisplay from "@/app/components/mensDisplay";
import Image from "next/image";
import MensSplash from "@/public/images/mensPageImage.png";
import Navbar from "@/app/components/navbar";
import MensSplashAlt from "@/public/images/mensPageAlt.png";

export const metadata: Metadata = {
  title: "Shop Clothing Mens - Avant",
};

function Mens() {
  return (
    <main>
      <Navbar isHome={true}></Navbar>
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
      <div className="flex flex-col justify-center">
        <h1>Mens: Shop by category</h1>
      </div>
      <div className="w-screen grid lg:auto-cols-[23%] auto-cols-[100%] grid-flow-col overflow-x-auto snap-x snap-mandatory">
        <div className="snap-start h-80 carrousel-item">1</div>
        <div className="snap-start h-80 carrousel-item">2</div>
        <div className="snap-start h-80 carrousel-item">3</div>
        <div className="snap-start h-80 carrousel-item">4</div>
        <div className="snap-start h-80 carrousel-item">5</div>
      </div>
    </main>
  );
}

export default Mens;
