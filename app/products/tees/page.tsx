import React from "react";
import type { Metadata } from "next";
import TeesDisplay from "@/app/components/teesDisplay";
import Image from "next/image";
import TeesSplash from "@/public/images/tees-splash-image.png"

export const metadata : Metadata = {
  title: "Shop Tees: Streetwear and graphic tees by WaveCO"
}

function Tees() {
  return (
    <main>
      <div className="flex justify-center">
        <Image src={TeesSplash} alt="tees page image - streetwear model" sizes="90vw" className="lg:w-2/5"/>
        <div className="flex flex-col justify-center">
          <h1>Shop Graphic Tees</h1>
          <p>Streetwear and graphic tees that suit every occasion</p>
        </div>
      </div>
      <TeesDisplay />
    </main>
  );
}

export default Tees;
