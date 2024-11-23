export interface ProductImage {
  src: string;
  width: number;
  height: number;
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
      { src: "/catalogue/1.png", width: 200, height: 300 },
      { src: "/catalogue/2.png", width: 200, height: 300 },
      { src: "/catalogue/3.png", width: 200, height: 300 },
    ],
    category: "Mens",
    rating: 4.5,
    reviewsCount: 1470,
  },
  {
    slug: "womens-stitched-dress-x1",
    name: "Women's Stitched Dress",
    description: "Beautifully stitched dresses designed for comfort and style.",
    price: 199.0,
    discountPrice: 169.0,
    availability: false,
    images: [
      { src: "/catalogue/4.png", width: 200, height: 300 },
      { src: "/catalogue/5.png", width: 200, height: 300 },
      { src: "/catalogue/6.png", width: 200, height: 300 },
    ],
    category: "Womens",
    rating: 4.2,
    reviewsCount: 1123,
  },
  {
    slug: "kids-casual-t-shirt",
    name: "Kids' Casual T-Shirt",
    description: "Bright and colorful T-shirts perfect for daily wear.",
    price: 99.0,
    discountPrice: 79.0,
    availability: true,
    images: [
      { src: "/catalogue/7.png", width: 200, height: 300 },
      { src: "/catalogue/8.png", width: 200, height: 300 },
      { src: "/catalogue/9.png", width: 200, height: 300 },
    ],
    category: "Kids",
    rating: 4.7,
    reviewsCount: 920,
  },
  {
    slug: "indoor-decor-vase",
    name: "Indoor Decor Vase",
    description: "Stylish vases to enhance your indoor spaces.",
    price: 159.0,
    discountPrice: 139.0,
    availability: true,
    images: [
      { src: "/catalogue/10.png", width: 200, height: 300 },
      { src: "/catalogue/11.png", width: 200, height: 300 },
      { src: "/catalogue/12.png", width: 200, height: 300 },
    ],
    category: "Indoor",
    rating: 4.3,
    reviewsCount: 670,
  },
  {
    slug: "outdoor-camping-tent",
    name: "Outdoor Camping Tent",
    description: "Durable and spacious tents for all your outdoor adventures.",
    price: 499.0,
    discountPrice: 459.0,
    availability: true,
    images: [
      { src: "/catalogue/13.png", width: 200, height: 300 },
      { src: "/catalogue/14.png", width: 200, height: 300 },
      { src: "/catalogue/15.png", width: 200, height: 300 },
    ],
    category: "Outdoor",
    rating: 4.6,
    reviewsCount: 820,
  },
  {
    slug: "sports-running-shoes",
    name: "Sports Running Shoes",
    description: "High-performance running shoes for athletes.",
    price: 299.0,
    discountPrice: 249.0,
    availability: true,
    images: [
      { src: "/catalogue/16.png", width: 200, height: 300 },
      { src: "/catalogue/17.png", width: 200, height: 300 },
      { src: "/catalogue/18.png", width: 200, height: 300 },
    ],
    category: "Sports",
    rating: 4.8,
    reviewsCount: 1234,
  },
 ];
