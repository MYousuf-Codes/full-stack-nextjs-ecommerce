"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const CheckOut: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'creditCard', // Default payment method
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here (e.g., send data to an API)
    alert('Order placed successfully!');
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-5 sm:px-20">
      <h1 className="text-3xl font-semibold mb-6 text-center">Checkout</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8">
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
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              required
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Payment Information */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Information</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === 'creditCard'}
                onChange={handleChange}
              />
              <label htmlFor="creditCard">Credit Card</label>

              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            {formData.paymentMethod === 'creditCard' && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
              </div>
            )}
            {formData.paymentMethod === 'paypal' && (
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  You will be redirected to PayPal to complete the payment.
                </p>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* You can loop over cart items here and display them */}
            <div className="flex justify-between">
              <span>Product 1</span>
              <span>$50.00</span>
            </div>
            <div className="flex justify-between">
              <span>Product 2</span>
              <span>$30.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$80.00</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full p-3 bg-blue-600 text-white rounded-lg"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Disclaimer */}
      <div className="mt-10 text-center text-sm text-gray-600">
        <p>
          Disclaimer: This is a project for educational purposes only. No actual product will be delivered, as this is not a real e-commerce website.
        </p>
      </div>
    </main>
  );
};

export default CheckOut;
