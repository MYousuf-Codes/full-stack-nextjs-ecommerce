import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SaleBanner = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-br from-yellow-200 to-yellow-400 p-6 sm:p-8 lg:p-10">
      <Image 
        src="/PayDay.png" 
        alt="Sale Banner" 
        width={400} 
        height={350} 
        className="shadow-lg border-none shadow-gray-500/50 mb-6 lg:mb-0 lg:mr-10" 
      />
      <div className="text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-white p-2 lg:mr-36">
          PAYDAY
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          SALE NOW
        </p>
        <p className="mt-5 sm:mt-6 text-black font-semibold">
          Spend minimal $100 get 30% off <br />
          voucher code for your next purchase
        </p>
        <br />
        <p className="text-black font-extrabold">
          1 June - 10 June 2021
        </p>
        <p className="text-black font-semibold">
          *Terms & Conditions apply
        </p>
        <Link href="/sale">
          <button className="mt-6 px-5 py-3 bg-black text-white rounded font-semibold hover:bg-gray-900 transition duration-300">
            SHOP NOW
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SaleBanner;
