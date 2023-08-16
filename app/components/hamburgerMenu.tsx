"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./styles/hamburgerMenu.css";
import { GrClose } from "react-icons/gr";
import React from "react";
import Link from "next/link";
import { Tajawal } from "next/font/google";
import { Fragment } from "react";

const ysabeau_infant = Tajawal({
  weight: ["400"],
  subsets: ["latin"],
});

function HamburgerMenu() {
  const [menuIsActive, setMenuActive] = useState(false);
  return (
    <Fragment>
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
        <ul className="lg:hidden flex-col flex items-center gap-6 mt-5">
          <Link
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Featured
          </Link>
          <a href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Mens
          </a>
          <a
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Womens
          </a>
          <a
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Gifts
          </a>
          <a
            href="/products/tees"
            className={`${ysabeau_infant.className} hover:border-b-2 border-black transition-all ease-linear duration-75 text-xl`}
          >
            Accesories
          </a>
        </ul>
      </div>
    </Fragment>
  );
}

export default HamburgerMenu;
