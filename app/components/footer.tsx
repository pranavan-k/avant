import React from "react";
import { Prata } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  weight: ["300"],
  subsets: ["latin"],
});

const prata = Prata({
  weight: ["400"],
  subsets: ["latin"],
});

function Footer() {
  return (
    <div className="w-screen flex justify-around lg:flex-row flex-col mt-36 h-80">
      <div>
        <h3 className={`footer-header ${prata.className}`}>Help</h3>
        <p className={`${sourceSerif.className}`}>FAQ</p>
      </div>
      <div>
        <h3 className={`footer-header ${prata.className}`}>Follow</h3>
        <p className={`${sourceSerif.className}`}>Instagram</p>
      </div>
      <div>
        <h3 className={`footer-header ${prata.className}`}>About</h3>
        <p className={`${sourceSerif.className}`}>Our vision</p>
      </div>
      <div>
        <h3 className={`footer-header ${prata.className}`}>Contact</h3>
        <p className={`${sourceSerif.className}`}>placehold@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
