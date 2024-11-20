// pages/legal/refund-policy.tsx
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Refund Policy</h1>
      <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>
          Our goal is to provide you with high-quality products. If you're not satisfied with your purchase, please review our refund policy to understand the process.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Eligibility for Refund</h2>
        <p>
          You can request a refund within 30 days of receiving your order, provided the item is unused, in its original condition, and in the original packaging.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Refund Process</h2>
        <p>
          To initiate a refund, please contact our customer service with your order number. Once we confirm the eligibility, we will process the refund to your original payment method.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Non-Refundable Items</h2>
        <p>
          Some items, such as clearance or personalized products, are non-refundable. Please check the product details before purchasing.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
