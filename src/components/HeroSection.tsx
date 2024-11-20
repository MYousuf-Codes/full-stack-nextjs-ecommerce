import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 pb-4 mb-12 lg:px-16 rounded-2xl bg-gray-100 ">

      <div className="max-w-md text-center lg:text-left">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="block bg-white text-black font-sans mt-6 sm:mt-10">{`LET'S`}</span>
          EXPLORE <br />
          <span className="block bg-yellow-200 font-sans">UNIQUE</span> CLOTHES.
        </h1>

        <p className="mt-5 font-arial font-semibold text-lg sm:text-xl lg:text-2xl">
          Live for influential and innovative fashion!
        </p>

        <Link href="/catalogue">
          <button className="mt-5 mb-10 py-2 px-4 bg-black text-white rounded-lg transition duration-300 hover:bg-gray-800">
            Shop Now
          </button>
        </Link>
      
      </div>
      <div className="mt-6 lg:mt-0 lg:mr-10 w-full sm:w-3/4 md:w-2/3 lg:w-96">
        <Image 
          src="/home/hero.png" 
          width={400} 
          height={300} 
          alt="Hero Image"
          className="w-full h-auto object-cover" 
        />
      </div>

    </section>
  );
};

export default HeroSection;
