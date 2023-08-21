"use client";
import { BsSearch, BsBag } from "react-icons/bs";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import { useEffect, useState } from "react";
import { Prata } from "next/font/google";
import StackMenu from "./stackMenu";
import { LuMenu } from "react-icons/lu";

const tajawal = Source_Serif_4({
  weight: ["300"],
  subsets: ["latin"],
});

const prata = Prata({
  weight: ["400"],
  subsets: ["latin"],
});

function Navbar({ isHome }: any) {
  useEffect(() => {
    const nav_bar = document.querySelector("#avant-navbar");
    let scrollPos = window.scrollY;

    window.addEventListener("scroll", () => {
      if (isHome) {
        if (scrollPos < window.scrollY && scrollPos > 0) {
          nav_bar?.classList.add("opacity-0");
        } else {
          nav_bar?.classList.remove("opacity-0");
        }
        if (scrollPos > window.scrollY && scrollPos > 200) {
          nav_bar?.classList.add("bg-white");
          nav_bar?.classList.add("text-black");
          nav_bar?.classList.remove("text-white");
          nav_bar?.classList.remove("bg-transparent");
        } else {
          nav_bar?.classList.remove("bg-white");
          nav_bar?.classList.remove("text-black");
          nav_bar?.classList.add("text-white");
          nav_bar?.classList.add("bg-transparent");
        }

        scrollPos = window.scrollY;
      } else {
        nav_bar?.classList.add("bg-white");
        nav_bar?.classList.add("text-black");
        nav_bar?.classList.remove("text-white");
      }
    });
  }, [isHome]);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (menuIsOpen) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }
  }, [menuIsOpen]);

  return (
    <div>
      <nav
        id="avant-navbar"
        className="w-screen flex items-center text-white lg:hover:text-black lg:hover:bg-white fixed z-50 lg:py-5 py-4 transition-all duration-300 ease-in-out bg-transparent"
      >
        <StackMenu isOpen={menuIsOpen} closeMenu={setMenuIsOpen}></StackMenu>
        <div className="w-1/3 justify-start z-50 flex items-center gap-3 lg:gap-5 lg:ml-10 ml-3">
          <div
            className="flex items-center gap-2"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <LuMenu size={28} />
            <h3 className={`${tajawal.className} hidden lg:block`}>Menu</h3>
          </div>
        </div>
        <div className="flex w-1/3  justify-center items-center">
          <Link href="/">
            <h1 className={`${prata.className} text-3xl`}>AVANT</h1>
          </Link>
        </div>
        <div className="w-1/3 justify-end z-50 flex items-center gap-4 lg:gap-6 lg:mr-10 mr-3">
          <div className="flex items-center gap-2">
            <BsSearch size={23} />
            <h3 className={`${tajawal.className} hidden lg:block`}>Search</h3>
          </div>
          <div className="flex items-center gap-2">
            <BsBag size={23} />
            <h3 className={`${tajawal.className} hidden lg:block`}>Bag</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
