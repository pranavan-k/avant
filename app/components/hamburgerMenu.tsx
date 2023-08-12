"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./styles/hamburgerMenu.css";
import { GrClose } from "react-icons/gr";
import React from "react";
import Link from "next/link";

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
        <ul className="nav-items">
          <li>Latest</li>
          <Link
            href="/products/tees"
            onClick={() => {
              setMenuActive(!menuIsActive);
            }}
          >
            <li>Tees</li>
          </Link>
          <li>Hoodies</li>
          <li>Pants</li>
          <li>Custom</li>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
