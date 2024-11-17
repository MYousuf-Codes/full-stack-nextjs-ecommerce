import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppPromo: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10 bg-yellow-50">
      <div className="text-center md:text-left md:ml-24">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          DOWNLOAD APP & <br /> GET THE VOUCHER!
        </h2>
        <p className="mt-4 text-gray-700">
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <Link href="/playstore">
            <Image 
              src="/download.png" 
              alt="Google Play Store" 
              width={250} 
              height={125} 
              className="md:w-300 md:h-150" // Responsive width for larger screens
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center sm:ml-5 sm:mr-10 sm:m-  items-center mt-6 md:mt-0 md:w-full">
        <Image 
          src="/App.png" 
          alt="App Promotion" 
          width={700} 
          height={1200} 
          className="rounded-lg md:w-[800px] md:h-[450px] lg:w-[900px] lg:h-[500px] mx-auto" // Increased size for medium and larger screens
        />
      </div>
    </section>
  );
};

export default AppPromo;
