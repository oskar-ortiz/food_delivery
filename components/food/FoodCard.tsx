"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/types/product";
import { Icon } from "@/components/ui/Icon";
import { ReferenceArt } from "@/components/ui/ReferenceArt";

type FoodCardProps = {
  product: Product;
};

export function FoodCard({ product }: FoodCardProps) {
  const { addItem } = useCart();

  return (
    <article className="shadow-card relative w-[226px] shrink-0 rounded-[26px] bg-[#fff0ef] px-[14px] pb-5 pt-4">
      <button
        type="button"
        onClick={() => addItem(product, product.defaultSize)}
        aria-label={`Add ${product.name} to cart`}
        className="shadow-button absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition active:scale-95"
      >
        <Icon name="plus" className="h-5 w-5" />
      </button>

      <Link href={`/product/${product.id}`} className="block">
        <ReferenceArt
          src={product.image}
          alt={product.name}
          className="mx-auto h-[168px] w-[172px]"
          imageClassName={product.cardImageClassName}
          rounded="rounded-[20px]"
          sizes="172px"
        />

        <h3 className="mt-4 line-clamp-1 text-[17px] font-semibold tracking-[-0.035em] text-black">
          {product.cardTitle}
        </h3>

        <div className="mt-[10px] flex items-center gap-[3px] text-[#f35d52]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon key={`${product.id}-star-${index}`} name="star" className="h-[15px] w-[15px] fill-current" />
          ))}
        </div>

        <div className="mt-2 flex items-center gap-[10px] text-[13px] font-semibold tracking-[-0.02em] text-black">
          <span>{product.distance}</span>
          <span className="text-[#f0685d]">•</span>
          <span>{product.time}</span>
        </div>

        <div className="mt-3 text-[17px] font-bold tracking-[-0.02em] text-primary">
          ${product.price.toFixed(2)}
        </div>
      </Link>
    </article>
  );
}
