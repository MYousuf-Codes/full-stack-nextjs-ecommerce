"use client";
import React, { useState, useEffect } from "react";
import { useCartContext } from "@/CartContext"; // Adjust path if needed
import { useSearchParams } from "next/navigation";

const CheckOut: React.FC = () => {
  const { cart } = useCartContext(); // Context for cart items
  const searchParams = useSearchParams(); // For "Buy Now" product details
  const [checkoutItems, setCheckoutItems] = useState(cart || []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  // Update checkout items based on query parameters or cart
  useEffect(() => {
    const productId = searchParams.get("slug");
    if (productId) {
      const product = cart.find((item) => item.slug === productId);
      if (product) {
        setCheckoutItems([product]);
      } else {
        console.warn("Product not found in the cart.");
      }
    } else {
      setCheckoutItems(cart);
    }
  }, [searchParams, cart]);

  // Calculate total order amount
  const totalAmount = checkoutItems.reduce(
    (total, item) => total + (item.discountPrice || item.price) * item.quantity,
    0
  );

  // Handle input changes for form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle order submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit order logic here
    alert("Order placed successfully!");
  };

  return (
    <main className="min-h-screen mt-6 bg-gray-100 py-10 px-5 sm:px-20">
      <h1 className="text-3xl font-semibold mb-6 text-center">Checkout</h1>

      <div className="bg-white shadow-lg rounded-lg p-8">
        {checkoutItems.length > 0 ? (
          <form onSubmit={handleSubmit}>
            {/* Shipping Information */}
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Shipping Address"
                required
                className="w-full p-3 border rounded-lg"
              />
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <label className="text-lg font-semibold">Payment Method</label>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <label htmlFor="creditCard">Credit Card</label>
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold">Order Summary</h3>
              <div className="space-y-4">
                {checkoutItems.map((item) => (
                  <div key={item.slug} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>
                      ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white text-lg rounded-lg mt-8"
            >
              Place Order
            </button>
          </form>
        ) : (
          <p className="text-lg">Your cart is empty.</p>
        )}
      </div>
    </main>
  );
};

export default CheckOut;
