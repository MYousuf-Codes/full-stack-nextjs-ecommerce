import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  name: string;
  image: string;
  link: string;
}

const products: Product[] = [
  { name: 'Hoodies & Sweatshirt   →', image: '/home/Arrival1.png', link: '/' },
  { name: 'Coats & Parkas   →', image: '/home/Arrival2.png', link: '/' },
  { name: 'Tees & T-Shirt   →', image: '/home/Arrival3.png', link: '/' },
];

const NewArrivals: React.FC = () => {
  return (
    <section className="p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center sm:text-left">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link href={product.link} key={index}>
              <div className="transition transform hover:scale-105 text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={350}
                  height={420}
                  className="rounded-lg w-full object-cover"
                />
                <p className="mt-4 text-lg font-semibold">{product.name}</p>
                <span className="text-gray-500 text-sm">Explore Now!</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
