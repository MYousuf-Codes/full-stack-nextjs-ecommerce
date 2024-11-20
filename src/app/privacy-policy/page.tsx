// pages/legal/privacy-policy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>
          FASHION values your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you use our website and services.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <p>
          We collect personal information such as your name, email address, billing and shipping address, and payment information when you place an order or sign up for our services.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
        <p>
          Your data is used to process orders, provide customer support, and improve our services. We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal data. However, no method of data transmission or storage is 100% secure.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. You can also opt-out of marketing communications at any time.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
