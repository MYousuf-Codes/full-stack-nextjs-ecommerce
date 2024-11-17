"use client"
import React, { useState } from 'react';
import { products } from '@/Data/catalogueProducts';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Carousel */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <img
              src={product.images[currentImageIndex]}
              alt={`${product.name} Image ${currentImageIndex + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
            {/* Navigation buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              &#8249;
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              &#8250;
            </button>
            {/* Pagination dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <p className="mt-6 text-2xl font-bold text-gray-900">
            ${product.discountPrice || product.price.toFixed(2)}{' '}
            {product.discountPrice && (
              <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
            )}
          </p>
          <p
            className={`mt-4 ${
              product.availability ? 'text-green-500' : 'text-red-500'
            } font-medium`}
          >
            {product.availability ? 'In Stock' : 'Out of Stock'}
          </p>
          <div className="flex items-center mt-4">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`${
                    index < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviewsCount} reviews)</span>
          </div>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
