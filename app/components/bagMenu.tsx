import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

type bagMenuProps = {
  isOpen: boolean;
  closeCart: (cartOpen: boolean) => void;
};

function bagMenu({ isOpen, closeCart }: bagMenuProps) {
  const [bagCards, setBagCart] = useState([]);

  return (
    <main
      className={`w-screen h-screen absolute top-0 z-[9999] flex justify-end bg-zinc-800/[.50] ${
        isOpen ? "visible" : "collapse"
      }`}
    >
      <div
        className={`lg:w-2/5 w-screen h-screen bg-white absolute text-black transition-all duration-300 z-[500] ease-in-out ${
          isOpen ? "cart-open" : "cart-closed"
        }`}
      >
        <RxCross2
          size={35}
          className="m-4"
          onClick={() => closeCart(!isOpen)}
        />
        {bagCards?.map((card: any) => {
          return (
            <div key={card._id} className="">
              <h1>{card.name}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default bagMenu;
