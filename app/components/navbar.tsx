import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";
import BagMenu from "./bagMenu";
import { Tajawal } from "next/font/google";

const ysabeau_infant = Tajawal({
  weight: ["400"],
  subsets: ["latin"],
});

function Navbar() {
  return (
    <nav className="w-screen flex items-center bg-white fixed top-0 z-50 py-2">
      <div className="flex w-1/2 lg:w-1/3 justify-center items-center">
        <Link href="/">
          <Image
            className="h-auto w-auto"
            src="/waveco_logo.png"
            alt="waveco logo"
            width={120}
            height={50}
          />
        </Link>
      </div>
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
      <div className="lg:w-1/3 w-1/2 flex lg:justify-center items-center gap-3 lg:gap-5 justify-end mr-7">
        <BsSearch size={25} />
        <HamburgerMenu />
        <BagMenu />
      </div>
    </nav>
  );
}

export default Navbar;
