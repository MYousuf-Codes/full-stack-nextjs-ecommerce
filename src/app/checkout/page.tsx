"use client";

import React, { useState, useEffect } from "react";
import { useCartContext } from "@/CartContext"; // Ensure this context is implemented
import { useSearchParams } from "next/navigation";

const CheckOut: React.FC = () => {
  const { cart } = useCartContext();
  const searchParams = useSearchParams();

  const [checkoutItems, setCheckoutItems] = useState(cart || []);
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

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setCheckoutItems([JSON.parse(product)]);
    } else {
      setCheckoutItems(cart);
    }
  }, [searchParams, cart]);

  useEffect(() => {
    if (useShippingAsBilling) {
      setFormData((prev) => ({
        ...prev,
        billingAddress: prev.shippingAddress,
        paymentMethod: "cashOnDelivery",
      }));
    }
  }, [useShippingAsBilling]);

  const totalAmount = checkoutItems.reduce(
    (total, item) =>
      total + (item.discountPrice || item.price) * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "paymentMethod") {
      // Reset payment-specific fields when the method changes
      setFormData((prev) => ({
        ...prev,
        payoneerEmail: "",
        cardNumber: "",
        cvc: "",
        expiryDate: "",
        securityCode: "",
      }));

      // Check if the user selected Payoneer or Credit Card while using shipping address as billing
      if (value === "Payoneer" || value === "creditCard") {
        if (useShippingAsBilling) {
          setErrorMessage(
            `To pay through ${value}, you need to uncheck "Use Shipping Address as Billing Address."`
          );
        } else {
          setErrorMessage("");
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
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
              />
            </div>

            {/* Shipping Address */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Shipping Address
              </label>
              <input
                type="text"
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your shipping address"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your city"
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your postal code"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your country"
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

          {!useShippingAsBilling && (
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Billing Address
              </label>
              <input
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your billing address"
              />
            </div>
          )}

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
                />
              </div>
            )}

            <label className="block">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === "creditCard"}
                onChange={handleChange}
                className="mr-2"
              />
              Credit Card
            </label>
            {formData.paymentMethod === "creditCard" && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your card number"
                />
              </div>
            )}

            <label className="block">
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === "cashOnDelivery"}
                onChange={handleChange}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-4 text-red-500 text-sm">{errorMessage}</div>
          )}

          <div className="mt-6 flex justify-between items-center">
            <span className="font-semibold text-xl text-gray-700">
              Total: ${totalAmount.toFixed(2)}
            </span>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none"
            >
              {isLoading ? "Processing..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CheckOut;
