"use client";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";
import BagMenu from "./bagMenu";
import { Tajawal } from "next/font/google";
import Logo from "@/public/images/avant-text.png";
import Logo_White from "@/public/images/avant-text-white.png";
import { useEffect } from "react";
import { Prata } from "next/font/google";

const ysabeau_infant = Tajawal({
  weight: ["300"],
  subsets: ["latin"],
});

const prata = Prata({
  weight: ["400"],
  subsets: ["latin"],
});

/*
 <Image
            className="lg:w-32 w-24 hidden lg:block"
            src={Logo_White}
            alt="waveco logo"
            sizes="100%"
          />
*/

function Navbar({ isHome }: any) {
  useEffect(() => {
    const nav_bar = document.querySelector(".avant-navbar");
    let scrollPos = window.scrollY;

    window.addEventListener("scroll", () => {
      if (isHome) {
        if (scrollPos < window.scrollY && scrollPos > 0) {
          nav_bar?.classList.add("collapse");
        } else {
          nav_bar?.classList.remove("collapse");
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
  }, []);

  return (
    <div className="w-screen flex justify-center transition-all duration-300 ease-in-out">
      <nav className="avant-navbar w-screen lg:h-20 flex items-center text-white lg:hover:text-black lg:hover:bg-white fixed z-50 lg:py-6 py-4 transition-all duration-300 ease-in-out bg-transparent">
        <div className="flex w-1/2 lg:w-1/3 justify-start items-center lg:ml-10 ml-3">
          <Link href="/">
            <h1 className={`${prata.className} text-3xl`}>AVANT</h1>
          </Link>
        </div>
        <ul className="lg:w-1/3 lg:flex hidden justify-between items-center">
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Featured
          </Link>
          <Link
            href="/products/mens"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Mens
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Womens
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Gifts
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Accesories
          </Link>
        </ul>
        <div className="lg:w-1/3 w-1/2 justify-end z-50 flex items-center gap-3 lg:gap-5 lg:mr-10 mr-3">
          <BsSearch size={25} />
          <HamburgerMenu />
          <BagMenu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
