"use client";
import React, { useState } from "react";
import { BsSearch, BsBagDash } from "react-icons/bs";
import "./styles/bagMenu.css";
import { GrClose } from "react-icons/gr";

function BagMenu() {
  const [bagMenuActive, setMenuActive] = useState(false);
  return (
    <>
      <BsBagDash size={25} onClick={() => setMenuActive(!bagMenuActive)} />
      <>
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
          <GrClose onClick={() => setMenuActive(!bagMenuActive)} size={30} />
        </div>
      </>
    </>
  );
}

export default BagMenu;
