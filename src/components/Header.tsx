"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when the pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/50 backdrop-blur-lg shadow-md">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-screen-xl">
        {/* Logo */}
        <Link href="/">
          <Image src="/home/Logo.png" alt="Logo" width={140} height={70} className="ml-4 lg:ml-16" />
        </Link>

        {/* Large Screen Navigation */}
        <nav className="hidden lg:flex items-center ml-auto space-x-4">
          <ul className="flex items-center space-x-6">
            {["catalogue", "fashion", "favourites", "lifestyle"].map((menu) => (
              <li key={menu}>
                <Link
                  href={`/${menu}`}
                  className={`font-semibold py-2 px-4 rounded-md transition duration-300 
                  ${
                    pathname === `/${menu}`
                      ? "border-2 border-transparent bg-blue-500 text-white"
                      : "hover:border-2 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  {menu.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger for Small Screens */}
        <button
          className="lg:hidden block text-black focus:outline-none ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        {/* Cart Icon */}
        <Link href="/cart" className="relative lg:block ml-4">
          <HiShoppingCart size={30} />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-30">
          <ul className="flex flex-col items-center space-y-4 p-6">
            {["catalogue", "fashion", "favourites", "lifestyle"].map((menu) => (
              <li key={menu}>
                <Link
                  href={`/${menu}`}
                  className="font-semibold py-2 px-4 rounded-md transition duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {menu.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
