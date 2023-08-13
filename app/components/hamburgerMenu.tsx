"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./styles/hamburgerMenu.css";
import { GrClose } from "react-icons/gr";
import React from "react";
import Link from "next/link";
import { Ysabeau_Infant } from "next/font/google";

const ysabeau_infant = Ysabeau_Infant({
  weight: ["300"],
  subsets: ["latin"],
});

function HamburgerMenu() {
  const [menuIsActive, setMenuActive] = useState(false);
  return (
    <>
      <AiOutlineMenu
        className="lg:hidden"
        size={27}
        onClick={() => {
          setMenuActive(!menuIsActive);
        }}
      />
      <div className={`menu ${menuIsActive ? "menu-active" : "menu-closed"}`}>
        <GrClose
          onClick={() => {
            setMenuActive(!menuIsActive);
          }}
          size={30}
        />
        <ul className="lg:w-1/3 lg:flex hidden justify-between items-center">
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Latest
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Tees
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Hoodies
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Pants
          </Link>
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Custom
          </Link>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
