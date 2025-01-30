"use client";
import { useCart } from "@/contexts/cart-context";
import { ShoppingCart } from "lucide-react";

export interface AddToCartButtonProps {
  productId: number;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProductToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold uppercase text-white"
    >
      <ShoppingCart className="mr-2 h-6 w-6" />
      Add to cart
    </button>
  );
}
