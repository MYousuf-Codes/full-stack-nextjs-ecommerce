// CartContext.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductImage } from "@/Data/catalogueProducts";

type CartItem = {
  slug: string;
  name: string;
  image: ProductImage;
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
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existingProductIndex = prev.findIndex(
        (item) => item.slug === product.slug
      );
      if (existingProductIndex > -1) {
        // Update quantity if product already exists in cart
        const updatedCart = [...prev];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return updatedCart;
      } else {
        // Add new product to the cart
        return [...prev, product];
      }
    });
  };

  const removeFromCart = (slug: string) => {
    setCart((prev) => prev.filter((item) => item.slug !== slug));
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
