// src/Data/catalogueProducts.ts

export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  availability: boolean;
  images: string[];
  category: string;
  rating: number;
  reviewsCount: number;
}

export const products: Product[] = [
  {
    slug: "wireless-headphones-pro",
    name: "Wireless Headphones Pro",
    description:
      "Experience superior sound quality with these premium wireless headphones, equipped with noise-canceling features and long-lasting battery life.",
    price: 329.0,
    discountPrice: 279.0, // Discounted price
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.png"],
    category: "Headphones",
    rating: 4.5,
    reviewsCount: 1470,
  },
  {
    slug: "smartwatch-x1",
    name: "Smartwatch X1",
    description:
      "A sleek and stylish smartwatch with a variety of fitness tracking features and a high-definition touchscreen display.",
    price: 199.0,
    discountPrice: 169.0, // Discounted price
    availability: false,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Watches",
    rating: 4.0,
    reviewsCount: 1123,
  },
  {
    slug: "4k-ultra-hd-tv",
    name: "4K Ultra HD TV",
    description:
      "Enjoy cinematic viewing in your living room with this stunning 4K Ultra HD television with vibrant colors and crystal-clear resolution.",
    price: 799.0,
    discountPrice: 649.0, // Discounted price
    availability: false,
    images: ["/catalogue/10.png", "/catalogue/11.png", "/catalogue/12.png"],
    category: "Television",
    rating: 4.7,
    reviewsCount: 2543,
  },
  {
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    description:
      "Take your music anywhere with this portable, waterproof Bluetooth speaker that delivers clear sound and deep bass.",
    price: 79.0,
    discountPrice: 59.0, // Discounted price
    availability: true,
    images: ["/catalogue/7.png", "/catalogue/8.png", "/catalogue/9.png"],
    category: "Speakers",
    rating: 4.2,
    reviewsCount: 803,
  },
 
  {
    slug: "wireless-headphones-pro",
    name: "Wireless Headphones Pro",
    description:
      "Experience superior sound quality with these premium wireless headphones, equipped with noise-canceling features and long-lasting battery life.",
    price: 329.0,
    discountPrice: 279.0, // Discounted price
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.jpg"],
    category: "Headphones",
    rating: 4.5,
    reviewsCount: 1470,
  },
  {
    slug: "smartwatch-x1",
    name: "Smartwatch X1",
    description:
      "A sleek and stylish smartwatch with a variety of fitness tracking features and a high-definition touchscreen display.",
    price: 199.0,
    discountPrice: 169.0, // Discounted price
    availability: true,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Watches",
    rating: 4.0,
    reviewsCount: 1123,
  },
  {
    slug: "4k-ultra-hd-tv",
    name: "4K Ultra HD TV",
    description:
      "Enjoy cinematic viewing in your living room with this stunning 4K Ultra HD television with vibrant colors and crystal-clear resolution.",
    price: 799.0,
    discountPrice: 649.0, // Discounted price
    availability: true,
    images: ["/catalogue/10.png", "/catalogue/11.png", "/catalogue/12.png"],
    category: "Television",
    rating: 4.7,
    reviewsCount: 2543,
  },
  {
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    description:
      "Take your music anywhere with this portable, waterproof Bluetooth speaker that delivers clear sound and deep bass.",
    price: 79.0,
    discountPrice: 59.0, // Discounted price
    availability: true,
    images: ["/catalogue/7.png", "/catalogue/8.png", "/catalogue/9.png"],
    category: "Speakers",
    rating: 4.2,
    reviewsCount: 803,
  },
 
  {
    slug: "wireless-headphones-pro",
    name: "Wireless Headphones Pro",
    description:
      "Experience superior sound quality with these premium wireless headphones, equipped with noise-canceling features and long-lasting battery life.",
    price: 329.0,
    discountPrice: 279.0, // Discounted price
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.jpg"],
    category: "Headphones",
    rating: 4.5,
    reviewsCount: 1470,
  },
  {
    slug: "smartwatch-x1",
    name: "Smartwatch X1",
    description:
      "A sleek and stylish smartwatch with a variety of fitness tracking features and a high-definition touchscreen display.",
    price: 199.0,
    discountPrice: 169.0, // Discounted price
    availability: true,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Watches",
    rating: 4.0,
    reviewsCount: 1123,
  },
  {
    slug: "4k-ultra-hd-tv",
    name: "4K Ultra HD TV",
    description:
      "Enjoy cinematic viewing in your living room with this stunning 4K Ultra HD television with vibrant colors and crystal-clear resolution.",
    price: 799.0,
    discountPrice: 649.0, // Discounted price
    availability: true,
    images: ["/catalogue/10.png", "/catalogue/11.png", "/catalogue/12.png"],
    category: "Television",
    rating: 4.7,
    reviewsCount: 2543,
  },
  {
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    description:
      "Take your music anywhere with this portable, waterproof Bluetooth speaker that delivers clear sound and deep bass.",
    price: 79.0,
    discountPrice: 59.0, // Discounted price
    availability: true,
    images: ["/catalogue/7.png", "/catalogue/8.png", "/catalogue/9.png"],
    category: "Speakers",
    rating: 4.2,
    reviewsCount: 803,
  },
 
  {
    slug: "wireless-headphones-pro",
    name: "Wireless Headphones Pro",
    description:
      "Experience superior sound quality with these premium wireless headphones, equipped with noise-canceling features and long-lasting battery life.",
    price: 329.0,
    discountPrice: 279.0, // Discounted price
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.jpg"],
    category: "Headphones",
    rating: 4.5,
    reviewsCount: 1470,
  },
  {
    slug: "smartwatch-x1",
    name: "Smartwatch X1",
    description:
      "A sleek and stylish smartwatch with a variety of fitness tracking features and a high-definition touchscreen display.",
    price: 199.0,
    discountPrice: 169.0, // Discounted price
    availability: true,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Watches",
    rating: 4.0,
    reviewsCount: 1123,
  },
  {
    slug: "4k-ultra-hd-tv",
    name: "4K Ultra HD TV",
    description:
      "Enjoy cinematic viewing in your living room with this stunning 4K Ultra HD television with vibrant colors and crystal-clear resolution.",
    price: 799.0,
    discountPrice: 649.0, // Discounted price
    availability: true,
    images: ["/catalogue/10.png", "/catalogue/11.png", "/catalogue/12.png"],
    category: "Television",
    rating: 4.7,
    reviewsCount: 2543,
  },
  {
    slug: "portable-bluetooth-speaker",
    name: "Portable Bluetooth Speaker",
    description:
      "Take your music anywhere with this portable, waterproof Bluetooth speaker that delivers clear sound and deep bass.",
    price: 79.0,
    discountPrice: 59.0, // Discounted price
    availability: true,
    images: ["/catalogue/7.png", "/catalogue/8.png", "/catalogue/9.png"],
    category: "Speakers",
    rating: 4.2,
    reviewsCount: 803,
  },
 
];
