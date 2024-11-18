"use client"
import React, { createContext, useContext, useState } from "react";

type CartItem = {
  slug: string;
  name: string;
  image: string;
  price: number;
  discountPrice: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (slug: string) => void; // Add removeFromCart here
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter(item => item.slug !== slug)); // Remove item based on slug
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
