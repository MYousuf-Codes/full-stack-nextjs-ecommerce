"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX, HiSearch, HiShoppingCart } from 'react-icons/hi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here (e.g., redirect to a search results page)
    alert(`Search for: ${searchQuery}`);
  };

  return (
    <header className="flex items-center justify-between p-5 bg-background/50 backdrop-blur-lg bg-white">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={140} height={70} className="ml-4 lg:ml-16" />
      </Link>

      {/* Hamburger for small devices */}
      <button
        className="lg:hidden block text-black focus:outline-none mr-4"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="relative hidden lg:block">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </form>

      

      {/* Navigation for large devices */}
      <nav className="hidden lg:flex items-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/catalogue" className="font-semibold">
              CATALOGUE
            </Link>
          </li>
          <li>
            <Link href="/fashion" className="font-semibold">
              FASHION
            </Link>
          </li>
          <li>
            <Link href="/favourites" className="font-semibold">
              FAVORITES
            </Link>
          </li>
          <li>
            <Link href="/lifestyle" className="font-semibold">
              LIFESTYLE
            </Link>
          </li>
        </ul>
      </nav>

      {/* Cart Icon */}
      <Link href="/cart" className="lg:block ml-6">
        <HiShoppingCart size={30} />
      </Link>

      {/* Dropdown Menu for small devices */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-20 right-0 left-0 bg-white p-6 shadow-lg">
          <ul className="flex flex-col space-y-4 items-center">
            <li>
              <Link href="/catalogue" className="font-semibold" onClick={toggleMenu}>
                CATALOGUE
              </Link>
            </li>
            <li>
              <Link href="/fashion" className="font-semibold" onClick={toggleMenu}>
                FASHION
              </Link>
            </li>
            <li>
              <Link href="/favourites" className="font-semibold" onClick={toggleMenu}>
                FAVORITES
              </Link>
            </li>
            <li>
              <Link href="/lifestyle" className="font-semibold" onClick={toggleMenu}>
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
