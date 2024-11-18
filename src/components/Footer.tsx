import React from 'react';
import Image from 'next/image';

type SocialIconProps = {
  src: string;
  alt: string;
  href: string;
};

const socialIcons: SocialIconProps[] = [
  { src: '/home/facebook.png', alt: 'Facebook', href: 'https://www.facebook.com/MuhammadYousafMarfaniMYM' },
  { src: '/home/insta.png', alt: 'Instagram', href: 'https://instagram.com/myousuf_575' },
  { src: '/home/x.png', alt: 'Twitter', href: 'https://www.instagram.com/m_yousuf575/' },
  { src: '/home/linkedin.png', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/MYousuf-Codes' },
];

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => (
  <a href={href} className="bg-yellow-500 p-2 rounded-xl hover:bg-white transition duration-300">
    <Image src={src} alt={alt} width={20} height={20} />
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-10 px-4 md:px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 mt-10 md:mt-20 mb-10 md:mb-20 gap-6 md:gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-2">FASHION</h3>
          <p className="text-gray-400 text-sm md:text-base">Complete your style with awesome clothes from us.</p>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
        {/* Other Footer Sections */}
        {['Company', 'Quick Link', 'Legal'].map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg md:text-xl mb-2">{section}</h3>
            <ul className="text-gray-400 text-sm md:text-base">
              {['About', 'Contact us', 'Support', 'Careers'].map((item, i) => (
                <li key={i} className="hover:text-yellow-500 cursor-pointer mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright and Developer Credit */}
      <div className="text-center mt-6 text-sm md:text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Developed with 🖤 by <a href="https://www.linkedin.com/in/MYousuf-Codes" className="text-yellow-500 hover:underline">Muhammad Yousuf</a></p>
      </div>
    </footer>
  );
};

export default Footer;
