"use client"
import React, { useState, useEffect } from 'react';

interface ComingSoonProps {
  imageSrc: string; // Add image source as a prop
}

const ComingSoon: React.FC<ComingSoonProps> = ({ imageSrc }) => {
  // Timer logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime(); // Set your target date

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md opacity-70"
        style={{ backgroundImage: `url(${imageSrc})` }} // Use imageSrc as the background image
      ></div>

      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-6xl font-bold text-gradient mb-6">Coming Soon</h1>
        <p className="text-xl mb-8">Our website is under development. Stay tuned for exciting updates!</p>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-8 text-3xl font-semibold mb-8">
          <div className="flex flex-col items-center">
            <span className="block text-5xl">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block text-5xl">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block text-5xl">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="block text-5xl">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-white hover:text-gray-400 transition-colors">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
