import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";
import BagMenu from "./bagMenu";

function Navbar() {
  return (
    <nav className="w-screen flex items-center bg-white fixed top-0 z-50">
      <div className="flex w-1/2 lg:w-1/3 justify-center items-center">
        <Link href="/">
          <Image
          className="h-auto w-auto"
            src="/waveco_logo.png"
            alt="waveco logo"
            width={140}
            height={60}
          />
        </Link>
      </div>
      <ul className="lg:w-1/3 lg:flex hidden justify-between items-center">
        <Link href="/products/tees">
          <li className="hover:text-lg transition-all ease-linear duration-75 nav-item-font">
            Latest
          </li>
        </Link>
        <Link href="/products/tees">
          <li className="hover:text-lg transition-all ease-linear duration-75 nav-item-font">
            Tees
          </li>
        </Link>
        <Link href="/products/tees">
          <li className="hover:text-lg transition-all ease-linear duration-75 nav-item-font">
            Hoodies
          </li>
        </Link>
        <Link href="/products/tees">
          <li className="hover:text-lg transition-all ease-linear duration-75 nav-item-font">
            Pants
          </li>
        </Link>
        <Link href="/products/tees">
          <li className="hover:text-lg transition-all ease-linear duration-75 nav-item-font">
            Custom
          </li>
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
