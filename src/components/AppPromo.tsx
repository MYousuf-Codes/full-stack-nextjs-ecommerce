import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppPromo: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-6 md:py-10 bg-yellow-50">
      <div className="text-center md:text-left md:ml-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          DOWNLOAD APP & <br /> GET THE VOUCHER!
        </h2>
        <p className="mt-4 text-gray-700">
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <Link href="/">
            <Image 
              src="/home/download.png" 
              alt="Google Play Store" 
              width={250} 
              height={125} 
              className="w-3/4 sm:w-48 md:w-60 lg:w-72" // Responsive width for images
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 md:mt-0 md:w-full">
        <Image 
          src="/home/App.png" 
          alt="App Promotion" 
          width={700} 
          height={1200} 
          className="rounded-lg w-full sm:w-3/4 md:w-[800px] md:h-[450px] lg:w-[900px] lg:h-[500px] mx-auto" // Ensures image is responsive and scales
        />
      </div>
    </section>
  );
};

export default AppPromo;
