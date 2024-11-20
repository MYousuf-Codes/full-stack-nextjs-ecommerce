// pages/legal/shipping-policy.tsx
import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Shipping Policy</h1>
      <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>
          We strive to deliver your orders as quickly and safely as possible. Please review our shipping policy to understand the process and timeframes.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Shipping Methods</h2>
        <p>
          We offer various shipping options, including standard and expedited shipping. The available methods will be presented during checkout.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Shipping Timeframes</h2>
        <p>
          Shipping times vary depending on your location and the shipping method selected. Typically, orders are processed within 1-2 business days, and delivery takes 3-7 business days.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Shipping Costs</h2>
        <p>
          Shipping costs are calculated based on the weight and size of your order, as well as the destination. The final cost will be shown at checkout.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">International Shipping</h2>
        <p>
          We offer international shipping to select countries. Please note that international orders may be subject to additional customs duties or taxes.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
