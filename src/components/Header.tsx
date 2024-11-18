"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX, HiShoppingCart } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartUpdated, setIsCartUpdated] = useState(false); // Red dot indicator for the cart
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-5 bg-background/50 backdrop-blur-lg bg-white">
      <Link href="/">
        <Image src="/home/Logo.png" alt="Logo" width={140} height={70} className="ml-4 lg:ml-16" />
      </Link>

      {/* Navigation for large devices */}
      <nav className="hidden lg:flex items-center ml-auto space-x-4">
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/catalogue"
              className={`font-semibold py-2 px-4 rounded-md transition duration-300 
                ${pathname === '/catalogue' ? 'border-2 border-transparent bg-blue-500 text-white' : 'hover:border-2 hover:border-blue-500 hover:bg-blue-50'}`}
            >
              CATALOGUE
            </Link>
          </li>
          <li>
            <Link
              href="/fashion"
              className={`font-semibold py-2 px-4 rounded-md transition duration-300 
                ${pathname === '/fashion' ? 'border-2 border-transparent bg-blue-500 text-white' : 'hover:border-2 hover:border-blue-500 hover:bg-blue-50'}`}
            >
              FASHION
            </Link>
          </li>
          <li>
            <Link
              href="/favourites"
              className={`font-semibold py-2 px-4 rounded-md transition duration-300 
                ${pathname === '/favourites' ? 'border-2 border-transparent bg-blue-500 text-white' : 'hover:border-2 hover:border-blue-500 hover:bg-blue-50'}`}
            >
              FAVORITES
            </Link>
          </li>
          <li>
            <Link
              href="/lifestyle"
              className={`font-semibold py-2 px-4 rounded-md transition duration-300 
                ${pathname === '/lifestyle' ? 'border-2 border-transparent bg-blue-500 text-white' : 'hover:border-2 hover:border-blue-500 hover:bg-blue-50'}`}
            >
              LIFESTYLE
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger for small devices */}
      <button
        className="lg:hidden block text-black focus:outline-none ml-auto"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

      {/* Cart Icon with Red Dot */}
      <Link href="/cart" className="relative lg:block ml-4">
        <HiShoppingCart size={30} />
        {isCartUpdated && (
          <div className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full"></div>
        )}
      </Link>

      {/* Dropdown Menu for small devices */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-20 right-0 left-0 bg-white p-6 shadow-lg">
          <ul className="flex flex-col space-y-4 items-center">
            <li>
              <Link
                href="/catalogue"
                className="font-semibold py-2 px-4 rounded-md transition duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-50"
                onClick={toggleMenu}
              >
                CATALOGUE
              </Link>
            </li>
            <li>
              <Link
                href="/fashion"
                className="font-semibold py-2 px-4 rounded-md transition duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-50"
                onClick={toggleMenu}
              >
                FASHION
              </Link>
            </li>
            <li>
              <Link
                href="/favourites"
                className="font-semibold py-2 px-4 rounded-md transition duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-50"
                onClick={toggleMenu}
              >
                FAVORITES
              </Link>
            </li>
            <li>
              <Link
                href="/lifestyle"
                className="font-semibold py-2 px-4 rounded-md transition duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-50"
                onClick={toggleMenu}
              >
                LIFESTYLE
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
