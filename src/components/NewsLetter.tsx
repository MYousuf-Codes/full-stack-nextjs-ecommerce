"use client";
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <main>
      <div className="bg-yellow-500 py-10 px-4 md:px-10 h-auto text-center">
        <h2 className="text-white font-extrabold text-2xl md:text-4xl mt-10 md:mt-16 mb-2">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h2>
        <p className="text-white text-sm md:text-base mb-5">
          Type your email down below and be part of the young wild generation
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add your email here"
            className="px-4 py-3 text-gray-700 rounded-md border-none focus:ring-2 focus:ring-yellow-700 w-full md:w-1/2 lg:w-1/3"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 md:py-4 rounded-md font-bold hover:bg-gray-800 transition duration-300 mt-2 md:mt-0 md:ml-[-4px] lg:ml-[-8px]"
          >
            SEND
          </button>
        </form>
      </div>
    </main>
  );
};

export default Newsletter;
