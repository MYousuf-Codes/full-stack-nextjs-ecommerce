"use client";

import { useState } from "react";
import { useCartContext } from "@/CartContext"; // Adjust the path if necessary
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const { cart, removeFromCart } = useCartContext(); // Assuming removeFromCart is a function in the context
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const totalSubtotal = cart?.reduce((total, item) => {
        const priceToUse = item.discountPrice ? item.discountPrice : item.price;
        return total + priceToUse * item.quantity;
    }, 0);

    const handleRemoveItem = (slug: string, productName: string) => {
        removeFromCart(slug); // Use slug to remove the product
        setPopupMessage(`${productName} has been removed from the cart.`);
        setTimeout(() => setPopupMessage(null), 3000); // Hide the pop-up after 3 seconds
    };

    if (!cart || cart.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center text-center min-h-screen py-16">
                <h2 className="text-xl font-semibold text-gray-700">Your cart is currently empty.</h2>
                <p className="text-gray-500 mt-4">Start shopping and add products to your cart!</p>
                <Link href="/catalogue">
                    <button className="mt-6 px-6 py-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-800">
                        Browse Products
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            {/* Pop-up Message */}
            {popupMessage && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                    {popupMessage}
                </div>
            )}

            <ul>
                {cart.map((item, index) => {
                    const priceToUse = item.discountPrice ? item.discountPrice : item.price;
                    const subtotal = priceToUse * item.quantity;

                    return (
                        <main key={index}>
                            <li className="border-b hover:border-zinc-200 py-4 flex items-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={200}
                                    height={300}
                                    objectFit="cover"
                                    className="overflow-hidden object-cover"
                                />
                                <div className="ml-4 flex flex-col">
                                    <h2 className="text-xl">{item.name}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${priceToUse}</p>
                                    <p>Total: ${(subtotal).toFixed(2)}</p>
                                    <button
                                        onClick={() => handleRemoveItem(item.slug, item.name)}
                                        className="mt-2 px-4 py-2 text-white bg-red-600 hover:bg-red-800 rounded-lg"
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </li>
                        </main>
                    );
                })}
            </ul>

            {/* Displaying the overall Subtotal */}
            <div className="mt-8 flex justify-between items-center">
                <button
                    className="px-6 py-3 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-800"
                >
                    Sub Total: ${totalSubtotal.toFixed(2)}
                </button>

                <Link href="/check-out">
                    <button
                        className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-800"
                    >
                        Check Out
                    </button>
                </Link>
            </div>
        </div>
    );
}



