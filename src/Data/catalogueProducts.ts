export interface ProductImage {
  src: string;
  width: number;
  height: number;
  alt?: string; // Optional alt text for better accessibility
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  availability: boolean;
  images: ProductImage[];
  category: string;
  rating: number;
  reviewsCount: number;
  tags?: string[]; // New optional field for additional classification
}

export const products: Product[] = [
  {
    slug: "mens-formal-shirt-pro",
    name: "Men's Formal Shirt Pro",
    description: "Elegant formal shirts crafted for office wear and formal gatherings.",
    price: 329.0,
    discountPrice: 279.0,
    availability: true,
    images: [
      { src: "/catalogue/1.png", width: 200, height: 300, alt: "Men's Formal Shirt Pro - Front View" },
      { src: "/catalogue/2.png", width: 200, height: 300, alt: "Men's Formal Shirt Pro - Side View" },
      { src: "/catalogue/3.png", width: 200, height: 300, alt: "Men's Formal Shirt Pro - Back View" },
    ],
    category: "Mens",
    rating: 4.5,
    reviewsCount: 1470,
    tags: ["formal", "office wear", "menswear"],
  },
  {
    slug: "womens-stitched-dress-x1",
    name: "Women's Stitched Dress",
    description: "Beautifully stitched dresses designed for comfort and style.",
    price: 199.0,
    discountPrice: 169.0,
    availability: false,
    images: [
      { src: "/catalogue/4.png", width: 200, height: 300, alt: "Women's Stitched Dress - Front View" },
      { src: "/catalogue/5.png", width: 200, height: 300, alt: "Women's Stitched Dress - Side View" },
      { src: "/catalogue/6.png", width: 200, height: 300, alt: "Women's Stitched Dress - Back View" },
    ],
    category: "Womens",
    rating: 4.2,
    reviewsCount: 1123,
    tags: ["dresses", "womenswear", "stitched"],
  },
  {
    slug: "kids-casual-t-shirt",
    name: "Kids' Casual T-Shirt",
    description: "Bright and colorful T-shirts perfect for daily wear.",
    price: 99.0,
    discountPrice: 79.0,
    availability: true,
    images: [
      { src: "/catalogue/7.png", width: 200, height: 300, alt: "Kids' Casual T-Shirt - Front View" },
      { src: "/catalogue/8.png", width: 200, height: 300, alt: "Kids' Casual T-Shirt - Side View" },
      { src: "/catalogue/9.png", width: 200, height: 300, alt: "Kids' Casual T-Shirt - Back View" },
    ],
    category: "Kids",
    rating: 4.7,
    reviewsCount: 920,
    tags: ["kids", "t-shirt", "casual wear"],
  },
  {
    slug: "indoor-decor-vase",
    name: "Indoor Decor Vase",
    description: "Stylish vases to enhance your indoor spaces.",
    price: 159.0,
    discountPrice: 139.0,
    availability: true,
    images: [
      { src: "/catalogue/10.png", width: 200, height: 300, alt: "Indoor Decor Vase - Ceramic Finish" },
      { src: "/catalogue/11.png", width: 200, height: 300, alt: "Indoor Decor Vase - Modern Design" },
      { src: "/catalogue/12.png", width: 200, height: 300, alt: "Indoor Decor Vase - Stylish Look" },
    ],
    category: "Indoor",
    rating: 4.3,
    reviewsCount: 670,
    tags: ["vase", "decor", "indoor"],
  },
  {
    slug: "outdoor-camping-tent",
    name: "Outdoor Camping Tent",
    description: "Durable and spacious tents for all your outdoor adventures.",
    price: 499.0,
    discountPrice: 459.0,
    availability: true,
    images: [
      { src: "/catalogue/13.png", width: 200, height: 300, alt: "Outdoor Camping Tent - Full View" },
      { src: "/catalogue/14.png", width: 200, height: 300, alt: "Outdoor Camping Tent - Packed View" },
      { src: "/catalogue/15.png", width: 200, height: 300, alt: "Outdoor Camping Tent - Setup View" },
    ],
    category: "Outdoor",
    rating: 4.6,
    reviewsCount: 820,
    tags: ["camping", "tent", "outdoor gear"],
  },
  {
    slug: "sports-running-shoes",
    name: "Sports Running Shoes",
    description: "High-performance running shoes for athletes.",
    price: 299.0,
    discountPrice: 249.0,
    availability: true,
    images: [
      { src: "/catalogue/16.png", width: 200, height: 300, alt: "Sports Running Shoes - Black Edition" },
      { src: "/catalogue/17.png", width: 200, height: 300, alt: "Sports Running Shoes - Blue Edition" },
      { src: "/catalogue/18.png", width: 200, height: 300, alt: "Sports Running Shoes - White Edition" },
    ],
    category: "Sports",
    rating: 4.8,
    reviewsCount: 1234,
    tags: ["sportswear", "shoes", "running"],
  },
];
