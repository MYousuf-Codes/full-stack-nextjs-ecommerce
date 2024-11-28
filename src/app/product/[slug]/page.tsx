"use client";

import React, { useState } from "react";
import { products } from "@/Data/catalogueProducts";
import { notFound } from "next/navigation";
import { useCartContext } from "@/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { addToCart } = useCartContext();
  const router = useRouter();

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product!.images.length) % product!.images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product!.images.length);
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      slug: product!.slug,
      image: product!.images[0],
    });
    setAlertMessage(`${product!.name} has been added to your cart!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  
  const handleBuyNow = () => {
    router.push(
      `/checkout?product=${encodeURIComponent(JSON.stringify(product))}`
    );
  };
  

  return (
    <div className="container mt-24 min-h-screen mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Image Carousel */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-sm">
            <Image
              src={product!.images[currentImageIndex]}
              alt={`${product!.name} Image ${currentImageIndex + 1}`}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product!.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentImageIndex === index ? "bg-gray-800" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold">{product!.name}</h1>
          <p className="mt-4 text-gray-600">{product!.description}</p>
          <p className="mt-6 text-lg md:text-xl font-bold text-gray-900">
            ${product!.discountPrice || product!.price.toFixed(2)}{" "}
            {product!.discountPrice && (
              <span className="line-through text-gray-500">
                ${product!.price.toFixed(2)}
              </span>
            )}
          </p>
          <p
            className={`mt-4 ${
              product!.availability ? "text-green-500" : "text-red-500"
            } font-medium`}
          >
            {product!.availability ? "In Stock" : "Out of Stock"}
          </p>
          <div className="flex items-center mt-4 flex-wrap space-x-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg"
            >
              +
            </button>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg"
            >
              Add to Cart
            </button>
          </div>
          <button
            onClick={handleBuyNow}
            className="mt-4 lg:px-24 w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Custom Alert */}
      {showAlert && (
        <Link href="/cart">
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-green-600 transition transform hover:scale-105 text-white px-4 py-2 rounded-lg shadow-lg">
              {alertMessage}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
