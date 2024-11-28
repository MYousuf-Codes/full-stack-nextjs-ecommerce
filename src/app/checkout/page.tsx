"use client";

import React, { useState, useEffect } from "react";
import { useCartContext } from "@/CartContext";
import { useSearchParams } from "next/navigation";

const CheckOut: React.FC = () => {
  const { cart = [] } = useCartContext() || {};
  const searchParams = useSearchParams();

  const [checkoutItems, setCheckoutItems] = useState(cart);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    shippingAddress: "",
    billingAddress: "",
    paymentMethod: "cashOnDelivery",
    payoneerEmail: "",
    cardNumber: "",
    cvc: "",
    expiryDate: "",
    securityCode: "",
  });
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle search params for direct product checkout
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

  // Sync billing address with shipping if the checkbox is checked
  useEffect(() => {
    if (useShippingAsBilling) {
      setFormData((prev) => ({
        ...prev,
        billingAddress: prev.shippingAddress,
        paymentMethod: "cashOnDelivery",
      }));
    }
  }, [useShippingAsBilling]);

  // Calculate total amount
  const totalAmount = checkoutItems.reduce(
    (total, item) =>
      total + (item.discountPrice || item.price || 0) * (item.quantity || 1),
    0
  );

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "paymentMethod") {
      setFormData((prev) => ({
        ...prev,
        payoneerEmail: "",
        cardNumber: "",
        cvc: "",
        expiryDate: "",
        securityCode: "",
      }));

      if (value === "Payoneer" || value === "creditCard") {
        setErrorMessage(
          useShippingAsBilling
            ? `Uncheck "Use Shipping Address as Billing Address" for ${value} payment.`
            : ""
        );
      }
    }
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.shippingAddress ||
      (!useShippingAsBilling && !formData.billingAddress)
    ) {
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
    <main className="min-h-screen mt-16 bg-gray-100 py-8 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-700 text-center">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Shipping Information */}
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Shipping Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Billing Address */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={useShippingAsBilling}
              onChange={() => setUseShippingAsBilling((prev) => !prev)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <label className="text-gray-600">
              Use shipping address as billing address
            </label>
          </div>

          {/* Payment Method */}
          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-700">
            Payment Method
          </h2>
          <div className="space-y-4">
            <label className="block">
              <input
                type="radio"
                name="paymentMethod"
                value="Payoneer"
                checked={formData.paymentMethod === "Payoneer"}
                onChange={handleChange}
                className="mr-2"
              />
              Payoneer
            </label>
            {formData.paymentMethod === "Payoneer" && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">
                  Payoneer Email
                </label>
                <input
                  type="email"
                  name="payoneerEmail"
                  value={formData.payoneerEmail}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Payoneer email"
                  required
                />
              </div>
            )}
          </div>

          {/* Error Messages */}
          {errorMessage && (
            <div className="mt-4 text-red-500 text-sm">{errorMessage}</div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-8 p-3 ${
              isLoading ? "bg-gray-300" : "bg-blue-500"
            } text-white font-semibold rounded-md`}
          >
            {isLoading ? "Processing..." : `Place Order $${totalAmount.toFixed(2)}`}
          </button>
        </form>
      </div>
    </main>
  );
};

export default CheckOut;
