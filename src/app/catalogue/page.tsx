"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiShoppingCart } from "react-icons/fi"; // Cart Icon
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { products } from "@/Data/catalogueProducts"; // Import the product data

const categories = ["Mens", "Womens", "Kids", "Indoor", "Outdoor", "Sports"];
const priceRanges = [
    { label: "$10 - $100", min: 10, max: 100 },
    { label: "$100 - $1k", min: 100, max: 1000 },
    { label: "$1k - $2k", min: 1000, max: 2000 },
    { label: "$3k - $5k", min: 3000, max: 5000 },
    { label: "$5k - $10k", min: 5000, max: 10000 },
    { label: "$10k - $20k", min: 10000, max: 20000 },
    { label: "$20k - $40k", min: 20000, max: 40000 },
];

const Catalogue: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState<{ min: number; max: number }[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    const handlePriceRangeChange = (range: { min: number; max: number }) => {
        setSelectedPriceRanges((prev) =>
            prev.some((r) => r.min === range.min && r.max === range.max)
                ? prev.filter((r) => r.min !== range.min || r.max !== range.max)
                : [...prev, range]
        );
    };

    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const priceMatch =
            selectedPriceRanges.length === 0 ||
            selectedPriceRanges.some((range) => product.price >= range.min && product.price <= range.max);
        return categoryMatch && priceMatch;
    });

    // Locking scrolling when filters are open
    React.useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isFilterOpen]);

    return (
        <div className="container mt-20 mx-auto p-4">
            <h1 className="text-3xl font-bold mb-3 text-center">Catalogue</h1>
            <div className="flex justify-center my-3 lg:hidden">
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center px-4 py-2 bg-gray-200 text-lg font-medium text-gray-800 rounded-md shadow hover:bg-gray-300 transition"
                >
                    {isFilterOpen ? (
                        <>
                            <FiX className="mr-2" />
                            Close Filters
                        </>
                    ) : (
                        <>
                            <HiAdjustmentsHorizontal className="mr-2" />
                            Filters
                        </>
                    )}
                </button>
            </div>

            {/* Sidebar and Products Flex Wrapper */}
            <div className="flex flex-col lg:flex-row lg:gap-4">
                {/* Sidebar */}
                <aside

                    className={`${isFilterOpen ? "translate-x-0" : "-translate-x-full"} 
                        fixed lg:static lg:translate-x-0 top-0 left-0 w-64 lg:w-1/4 h-full lg:h-auto bg-white lg:bg-transparent 
                        border-r lg:border-none shadow-lg lg:shadow-none p-3 flex flex-col justify-start transition-transform duration-500 z-50`}
                >
                    <div className="flex justify-between mt-16 items-center mb-3 lg:hidden">
                        <h2 className="text-xl font-bold">Filters</h2>
                        <button
                            onClick={() => setIsFilterOpen(false)}
                            className="text-gray-800 p-2 rounded hover:bg-gray-200 transition"
                        >
                            <FiX className="text-2xl" />
                        </button>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3">Categories</h2>
                    {categories.map((category) => (
                        <div key={category} className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className="mr-2"
                                />
                                {category}
                            </label>
                        </div>
                    ))}

                    <h2 className="text-2xl font-semibold mb-3 mt-6">Price Range</h2>
                    {priceRanges.map((range) => (
                        <div key={range.label} className="mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedPriceRanges.some((r) => r.min === range.min && r.max === range.max)}
                                    onChange={() => handlePriceRangeChange(range)}
                                    className="mr-2"
                                />
                                {range.label}
                            </label>
                        </div>
                    ))}
                </aside>

                {/* Products Grid */}
                <div className={`flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 transition-all duration-500 ${isFilterOpen ? 'opacity-50' : ''}`}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Link key={product.slug} href={`/product/${product.slug}`}>
                                <div className="border rounded-2xl hover:rounded-t-none cursor-pointer shadow-md hover:shadow-xl transition-shadow min-h-[300px] flex flex-col justify-between">
                                    <div className="relative w-full z-0 h-0 pb-[100%] overflow-hidden mb-3 group">
                                        <Image
                                            src={product.images[0]}
                                            width={550}
                                            height={450}
                                            alt={product.name}
                                            objectFit="cover"
                                            className="object-cover transition transform hover:scale-110 duration-700 hover:border-none rounded-lg rounded-b-none absolute inset-0 w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-grow p-3">
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500 text-xl">
                                                {"★".repeat(Math.floor(product.rating))}
                                                {"☆".repeat(5 - Math.floor(product.rating))}
                                            </span>
                                            <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center p-3 mt-1">
                                        {product.discountPrice ? (
                                            <div>
                                                <p className="text-xl font-bold text-gray-900">
                                                    ${product.discountPrice.toFixed(2)}
                                                </p>
                                                <p className="text-md line-through text-gray-500">
                                                    ${product.price.toFixed(2)}
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-lg font-bold text-gray-900">
                                                ${product.price.toFixed(2)}
                                            </p>
                                        )}
                                        <FiShoppingCart className="text-2xl text-gray-700 hover:text-yellow-400 hover:font-bold cursor-pointer" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-center h-screen mt-56 col-span-full text-xl font-semibold text-gray-500">
                            No products match the selected filters.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
