"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

type FoodCardProps = {
  product: Product;
};

export function FoodCard({ product }: FoodCardProps) {
  const { addItem } = useCart();

  return (
    <article className="relative w-[160px] shrink-0 rounded-2xl bg-white/70 p-3 shadow-md">
      <button
        type="button"
        onClick={() => addItem(product, product.defaultSize)}
        aria-label={`Add ${product.name} to cart`}
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white transition active:scale-95"
      >
        <Icon name="plus" className="h-4 w-4" />
      </button>

      <Link href={`/product/${product.id}`} className="block">
        <div className="relative h-[120px] w-full overflow-hidden rounded-xl">
          <Image src={product.image} alt={product.name} fill sizes="160px" className="object-cover" />
        </div>

        <h3 className="mt-2 line-clamp-1 text-[17px] font-semibold tracking-[-0.02em] text-black">
          {product.cardTitle}
        </h3>

        <div className="mt-[10px] flex items-center gap-[3px] text-[#f35d52]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon key={`${product.id}-star-${index}`} name="star" className="h-[15px] w-[15px] fill-current" />
          ))}
        </div>

        <div className="mt-2 flex items-center gap-[10px] text-xs font-medium tracking-[-0.01em] text-gray-600">
          <span className="text-black">{product.distance}</span>
          <span className="text-[#f0685d]">•</span>
          <span>{product.time}</span>
        </div>

        <div className="mt-2 text-[16px] font-bold tracking-[-0.02em] text-red-500">
          ${product.price.toFixed(2)}
        </div>
      </Link>
    </article>
  );
}
