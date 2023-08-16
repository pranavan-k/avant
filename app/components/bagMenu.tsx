"use client";
import React, { useState } from "react";
import { BsSearch, BsBagDash } from "react-icons/bs";
import "./styles/bagMenu.css";
import { GrClose } from "react-icons/gr";
import { Fragment } from "react";

function BagMenu() {
  const [bagMenuActive, setMenuActive] = useState(false);
  return (
    <>
      <div
        className="flex gap-2 items-center font-light cursor-pointer"
        onClick={() => setMenuActive(!bagMenuActive)}
      >
        <BsBagDash size={25}></BsBagDash>
        <h3 className="hidden lg:block">Cart</h3>
      </div>
      <div className="visible">
        <div
          onClick={() => setMenuActive(!bagMenuActive)}
          className={`lg:w-screen lg:h-screen absolute top-0 lg:block hidden ${
            bagMenuActive ? "overlay-active" : "overlay-closed"
          }`}
        ></div>
        <div
          className={`flex absolute bg-white lg:w-2/5 w-full h-screen top-0 p-3 ${
            bagMenuActive ? "panel-active" : "panel-closed"
          }`}
        >
          <GrClose
            className="cursor-pointer"
            onClick={() => setMenuActive(!bagMenuActive)}
            size={30}
          />
        </div>
      </div>
    </>
  );
}

export default BagMenu;
