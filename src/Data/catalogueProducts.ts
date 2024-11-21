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
    slug: "mens-formal-shirt-pro",
    name: "Men's Formal Shirt Pro",
    description: "Elegant formal shirts crafted for office wear and formal gatherings.",
    price: 329.0,
    discountPrice: 279.0,
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.png"],
    category: "Mens",
    rating: 4.5,
    reviewsCount: 1470,
  },
  {
    slug: "womens-stiched-dress-x1",
    name: "Women's Stitched Dress",
    description: "Beautifully stitched dresses designed for comfort and style.",
    price: 199.0,
    discountPrice: 169.0,
    availability: false,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Womens",
    rating: 4.0,
    reviewsCount: 1123,
  },
  {
    slug: "kids-casual-outfit",
    name: "Kids' Casual Outfit",
    description: "Trendy and durable outfits for kids' everyday adventures.",
    price: 149.0,
    discountPrice: 129.0,
    availability: true,
    images: ["/catalogue/7.png", "/catalogue/8.png", "/catalogue/9.png"],
    category: "Kids",
    rating: 4.3,
    reviewsCount: 803,
  },
  {
    slug: "indoor-loungewear",
    name: "Indoor Loungewear",
    description: "Soft and cozy loungewear for your indoor relaxation.",
    price: 79.0,
    discountPrice: 59.0,
    availability: true,
    images: ["/catalogue/10.png", "/catalogue/11.png", "/catalogue/12.png"],
    category: "Indoor",
    rating: 4.2,
    reviewsCount: 1256,
  },
  {
    slug: "outdoor-jacket",
    name: "Outdoor Jacket",
    description: "Stay protected from the elements with this versatile windbreaker jacket.",
    price: 329.0,
    discountPrice: 279.0,
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.jpg"],
    category: "Outdoor",
    rating: 4.7,
    reviewsCount: 980,
  },
  {
    slug: "sports-running-shoes",
    name: "Sports Running Shoes",
    description: "High-performance running shoes built for durability and speed.",
    price: 199.0,
    discountPrice: 169.0,
    availability: true,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Sports",
    rating: 4.6,
    reviewsCount: 1403,
  },
  {
    slug: "sports-team-kit",
    name: "Sports Team Kit",
    description: "Customizable team kits perfect for any sports team or event.",
    price: 249.0,
    discountPrice: 219.0,
    availability: false,
    images: ["/catalogue/7.png", "/catalogue/8.png", "/catalogue/9.png"],
    category: "Sports",
    rating: 4.5,
    reviewsCount: 1020,
  },
  {
    slug: "kids-festive-dress",
    name: "Kids' Festive Dress",
    description: "Adorable festive wear for kids' special occasions.",
    price: 129.0,
    discountPrice: 109.0,
    availability: true,
    images: ["/catalogue/10.png", "/catalogue/11.png", "/catalogue/12.png"],
    category: "Kids",
    rating: 4.4,
    reviewsCount: 723,
  },
  {
    slug: "womens-stiched-fabric",
    name: "Women's Stitched Fabric",
    description: "Premium-quality fabric for a personalized tailoring experience.",
    price: 299.0,
    discountPrice: 249.0,
    availability: true,
    images: ["/catalogue/1.png", "/catalogue/2.png", "/catalogue/3.jpg"],
    category: "Womens",
    rating: 4.3,
    reviewsCount: 1100,
  },
  {
    slug: "mens-casual-tshirt",
    name: "Men's Casual T-Shirt",
    description: "Comfortable and stylish t-shirts for casual outings.",
    price: 99.0,
    discountPrice: 79.0,
    availability: true,
    images: ["/catalogue/4.png", "/catalogue/5.png", "/catalogue/6.png"],
    category: "Mens",
    rating: 4.5,
    reviewsCount: 1320,
  },
];
