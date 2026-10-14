"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rue_des_princesses_favoris";

export function getWishlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleWishlist(gownId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const current = getWishlist();
    const exists = current.includes(gownId);
    const updated = exists
      ? current.filter((id) => id !== gownId)
      : [...current, gownId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent("wishlist-updated", { detail: updated }));
    return !exists;
  } catch {
    return false;
  }
}

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setWishlist(getWishlist());
    setIsLoaded(true);

    const handleUpdate = (e: Event) => {
      const custom = e as CustomEvent<string[]>;
      if (custom.detail) {
        setWishlist(custom.detail);
      } else {
        setWishlist(getWishlist());
      }
    };

    window.addEventListener("wishlist-updated", handleUpdate);
    return () => window.removeEventListener("wishlist-updated", handleUpdate);
  }, []);

  const toggle = (id: string) => {
    return toggleWishlist(id);
  };

  const has = (id: string) => wishlist.includes(id);

  return { wishlist, count: wishlist.length, toggle, has, isLoaded };
}
