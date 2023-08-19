"useclient";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { Source_Serif_4 } from "next/font/google";

type menuProps = {
  isOpen: boolean;
  closeMenu: (menuOpen: boolean) => void;
};

const source_serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300"],
});

function StackMenu({ isOpen, closeMenu }: menuProps) {
  return (
    <div
      className={`absolute w-screen bg-zinc-800/[.40] h-screen top-0 ${
        isOpen ? "visible" : "collapse"
      }`}
    >
      <div
        className={`lg:w-2/5 w-screen h-screen bg-white absolute transition-all duration-300 z-[500] ease-in-out ${
          isOpen ? "menu-open" : "menu-closed"
        }`}
      >
        <RxCross2
          size={35}
          className="m-4"
          onClick={() => closeMenu(!isOpen)}
        />
        <div className="flex flex-col lg:gap-5 gap-2 m-8">
          <Link
            className={`${source_serif.className} nav-item w-min`}
            href="/products/mens"
          >
            Featured
          </Link>
          <Link
            className={`${source_serif.className} nav-item w-min`}
            href="/products/mens"
          >
            Mens
          </Link>
          <Link
            className={`${source_serif.className} nav-item w-min`}
            href="/products/mens"
          >
            Womens
          </Link>
          <Link
            className={`${source_serif.className} nav-item w-min`}
            href="/products/mens"
          >
            Gifts
          </Link>
          <Link
            className={`${source_serif.className} nav-item w-min`}
            href="/products/mens"
          >
            Accesories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StackMenu;
