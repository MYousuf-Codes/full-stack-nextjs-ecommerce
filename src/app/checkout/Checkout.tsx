"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useCartContext } from "@/CartContext";
import { useSearchParams } from "next/navigation";

const CheckOutContent: React.FC = () => {
  const { cart = [] } = useCartContext() || {};
  const searchParams = useSearchParams();

  const [checkoutItems, setCheckoutItems] = useState(cart);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shippingAddress: "",
    billingAddress: "",
    paymentMethod: "cashOnDelivery",
    payoneerEmail: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      try {
        setCheckoutItems([JSON.parse(product)]);
      } catch {
        setErrorMessage("Invalid product data in the URL.");
      }
    } else {
      setCheckoutItems(cart);
    }
  }, [searchParams, cart]);

  const totalAmount = checkoutItems.reduce(
    (total, item) =>
      total + (item.discountPrice || item.price || 0) * (item.quantity || 1),
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.shippingAddress) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Order placed successfully!");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen max-w-4xl mt-24 mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-700 text-center">
          Checkout
        </h1>
        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shippingAddress" className="block text-gray-600">
            Shipping Address
          </label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                shippingAddress: e.target.value,
              }))
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Add more fields as needed */}
        {/* Error Message */}
        {errorMessage && (
          <div className="mt-4 text-red-500 text-sm">{errorMessage}</div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full mt-8 p-3 ${
            isLoading ? "bg-gray-300" : "bg-blue-500"
          } text-white font-semibold rounded-md`}
        >
          {isLoading ? "Processing..." : `Place Order $${totalAmount.toFixed(2)}`}
        </button>
      </div>
    </form>
  );
};

const CheckOut: React.FC = () => (
  <Suspense fallback={<div>Loading checkout...</div>}>
    <CheckOutContent />
  </Suspense>
);

export default CheckOut;
