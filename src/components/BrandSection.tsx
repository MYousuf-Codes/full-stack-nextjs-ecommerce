import React from 'react';
import Image from 'next/image';

const BrandSection = () => {
  const brands = [
    { name: 'H&M', src: '/H&M.png' },
    { name: 'Obey', src: '/obey.png' },
    { name: 'Shopify', src: '/shopify.png' },
    { name: 'Lacoste', src: '/lacoste.png' },
    { name: 'Levis', src: '/levis.png' },
    { name: 'Amazon', src: '/amazon.png' },
  ];

  return (
    <section className="flex flex-wrap justify-center items-center py-8 bg-yellow-200">
      {brands.map((brand, index) => (
        <div key={index} className="flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32 m-2 sm:m-4 transition-transform duration-300 hover:scale-105">
          <Image src={brand.src} alt={brand.name} width={100} height={50} className="w-full h-auto object-contain" />
        </div>
      ))}
    </section>
  );
};

export default BrandSection;
