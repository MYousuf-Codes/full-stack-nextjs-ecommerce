import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type SocialIconProps = {
  src: string;
  alt: string;
  href: string;
};

const socialIcons: SocialIconProps[] = [
  { src: '/home/linkedin.png', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/MYousuf-Codes' },
  { src: '/home/facebook.png', alt: 'Facebook', href: 'https://www.facebook.com/MuhammadYousafMarfaniMYM' },
  { src: '/home/insta.png', alt: 'Instagram', href: 'https://instagram.com/myousuf_575' },
  { src: '/home/x.png', alt: 'X', href: 'https://www.x.com/m_yousuf575/' },
];

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => (
  <Link href={href} className="bg-yellow-500 p-2 rounded-xl hover:bg-white transition duration-300" target='_blank'>
    <Image src={src} alt={alt} width={20} height={20} />
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-2"><Link href={"/"}>FASHION</Link></h3>
          <p className="text-gray-400 text-sm md:text-base">Complete your style with awesome clothes from us.</p>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>

        {/* Company Links Section */}
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-2">Company</h3>
          <ul className="text-gray-400 text-sm md:text-base">
            <li><Link href="https://mytech-blog.vercel.app/about" target='_blank' className="hover:text-yellow-500 cursor-pointer mb-1">About Us</Link></li>
            <li><Link href="https://mytech-blog.vercel.app/contact" target='_blank' className="hover:text-yellow-500 cursor-pointer mb-1">Contact Us</Link></li>
            <li><Link href="/" className="hover:text-yellow-500 cursor-pointer mb-1">Careers</Link></li>
            <li><Link href="https://mytech-blog.vercel.app/blog" target='_blank' className="hover:text-yellow-500 cursor-pointer mb-1">Blog</Link></li>
          </ul>
        </div>

        {/* Quick Links  */}
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm md:text-base">
            <li><Link href="/catalogue" className="hover:text-yellow-500 cursor-pointer mb-1">Catalogue</Link></li>
            <li><Link href="/cart" className="hover:text-yellow-500 cursor-pointer mb-1">Cart</Link></li>
            <li><Link href="/" className="hover:text-yellow-500 cursor-pointer mb-1">Wishlist</Link></li>
            <li><Link href="/checkout" className="hover:text-yellow-500 cursor-pointer mb-1">Checkout</Link></li>
          </ul>
        </div>

        {/* Legal Links  */}
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-2">Legal</h3>
          <ul className="text-gray-400 text-sm md:text-base">
            <li><Link href="/terms-and-conditions" className='hover:text-yellow-500 cursor-pointer mb-1'>Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className='hover:text-yellow-500 cursor-pointer mb-1'>Privacy Policy</Link></li>
            <li><Link href="/refund-policy" className='hover:text-yellow-500 cursor-pointer mb-1'>Refund Policy</Link></li>
            <li><Link href="/shipping-policy" className='hover:text-yellow-500 cursor-pointer mb-1'>Shipping Policy</Link></li>

          </ul>
        </div>
      </div>

      {/* Copyright and Developer  */}
      <div className="text-center mt-6 text-sm md:text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Developed with ❤ by <Link href="https://www.linkedin.com/in/MYousuf-Codes" className="text-yellow-500 hover:underline">Muhammad Yousuf</Link></p>
      </div>
    </footer>

  );
};

export default Footer;
