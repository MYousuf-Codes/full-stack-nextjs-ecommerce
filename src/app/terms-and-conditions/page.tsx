// pages/legal/terms-and-conditions.tsx
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>
      <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>
          Welcome to FASHION. These terms and conditions outline the rules and regulations for the use of our website. By accessing or using our services, you agree to comply with these terms.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">User Obligations</h2>
        <p>
          You must be at least 18 years old to use our services. By using our platform, you agree to provide accurate information and abide by our rules and policies.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
        <p>
          [Your Store Name] is not liable for any damages or loss arising from the use or inability to use our website, products, or services.
        </p>
      </section>

      <section className="text-lg text-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
        <p>
          These Terms & Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction].
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
