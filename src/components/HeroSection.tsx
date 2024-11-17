import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-16 mb-24 rounded-2xl bg-gray-100 p-6">
      <div className="max-w-md text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="block bg-white text-black font-sans mt-10">LET&apos;S</span> 
          EXPLORE <br />
          <span className="block bg-yellow-200 font-sans">UNIQUE</span> CLOTHES.
        </h1>
        <p className="mt-5 font-arial font-semibold text-lg md:text-xl">
          Live for influential and innovative fashion!
        </p>
        <Link href={"/catalogue"}>
        <button className="mt-5 mb-10 py-2 px-4 bg-black text-white rounded-lg transition duration-300 hover:bg-gray-800">
          Shop Now
        </button>
        </Link>
      </div>
      <Image 
        src="/hero.png" 
        width={400} 
        height={300} 
        alt="Hero Image" 
        className="mt-6 lg:mt-0 lg:mr-10 w-3/4 sm:w-1/2 md:w-3/5 lg:w-96 h-auto" 
      />
    </section>
  );
};

export default HeroSection;
