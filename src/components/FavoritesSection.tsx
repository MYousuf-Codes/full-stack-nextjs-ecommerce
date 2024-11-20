import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Favorite = {
  title: string;
  img: string;
  href: string;
};

const favorites: Favorite[] = [
  { title: 'Trending on Instagram', img: '/home/young2.png', href: '/' },
  { title: 'All Under $40', img: '/home/young1.png', href: '/' },
];

const FavoritesSection: React.FC = () => {
  return (
    <section className="p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-screen-lg mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center sm:text-left">{`Young’s Favourite`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {favorites.map(({ title, img, href }, index) => (
            <Link key={index} href={href}>
              <div className="transition transform hover:scale-105 text-center">
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={480}
                  className="rounded-lg w-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="text-gray-500 text-sm">Explore Now</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesSection;
