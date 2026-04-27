"use client";

import { useState } from "react";
import type { Product, ProductSize } from "@/types/product";

const STORAGE_KEY = "food-delivery-cart";

type CartItem = {
  id: string;
  size: ProductSize;
  quantity: number;
};

function getInitialCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => getInitialCart());

  const persist = (nextItems: CartItem[]) => {
    setItems(nextItems);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
  };

  const addItem = (product: Product, size: ProductSize, quantity = 1) => {
    const existing = items.find((item) => item.id === product.id && item.size === size);

    if (existing) {
      persist(
        items.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
      return;
    }

    persist([...items, { id: product.id, size, quantity }]);
  };

  return {
    addItem,
    cartCount: items.reduce((total, item) => total + item.quantity, 0),
    items,
  };
}
