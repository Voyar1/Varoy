"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-6 sticky top-0 left-0 z-10 transition-all ease-in-out z-50 ${
        scrolled ? "backdrop-blur bg-black bg-opacity-5" : ""
      }`}
    >
      <div className="flex justify-between container lg:max-w-[1200px]">
        <span className="font-bold text-2xl">VAROY</span>
        <div className="flex items-center gap-6 ">
          <ul className="flex gap-6 font-bold ">
            <li>Oferta</li>
            <li>Blog</li>
          </ul>
          <button className="font-bold">Napisz do mnie</button>
          <button>
            <span>pl</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
