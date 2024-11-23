"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductImage } from "./Data/catalogueProducts";

type CartItem = {
  slug: string;
  name: string;
  image: ProductImage; // Include ProductImage if it's relevant
  price: number;
  discountPrice: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (slug: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Parse the stored cart and set it to state
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    }
  }, [cart]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => [...prev, product]); // Add the new product to the cart
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter(item => item.slug !== slug)); // Remove item by slug
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
