import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="container lg:max-w-[1200px] flex justify-between py-6 sticky top-0 left-0 z-10">
      <span className="font-bold text-2xl">VAROY</span>
      <div className="flex items-center gap-6 ">
        <ul className="flex gap-6 font-bold ">
          <li>Oferta</li>
          <li>Blog</li>
        </ul>
        <button className="font-bold">Napisz do mnie</button>
        <button>
          <span>pl</span>
          <Image />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
