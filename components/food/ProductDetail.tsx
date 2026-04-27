"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import type { Product, ProductSize } from "@/types/product";
import { Icon } from "@/components/ui/Icon";
import { ReferenceArt } from "@/components/ui/ReferenceArt";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [size, setSize] = useState<ProductSize>(product.defaultSize);
  const [quantity, setQuantity] = useState(1);
  const { addItem, cartCount } = useCart();

  return (
    <section className="app-gradient relative min-h-screen overflow-hidden px-6 pb-6 pt-9 md:min-h-[844px]">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Back to home"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/70 shadow-[0_14px_30px_rgba(104,54,48,0.12)] transition active:scale-95"
        >
          <Icon name="arrow-left" className="h-7 w-7" />
        </Link>
        <h1 className="text-[24px] font-bold tracking-[-0.03em] text-black">Details</h1>
        <button
          type="button"
          aria-label="Favorite item"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/70 shadow-[0_14px_30px_rgba(104,54,48,0.12)] transition active:scale-95"
        >
          <Icon name="heart-fill" className="h-6 w-6 text-[#302626]" />
        </button>
      </header>

      <div className="relative mt-8">
        <div className="relative z-10 max-w-[188px]">
          <h2 className="text-soft-shadow text-[32px] font-semibold leading-[1.05] tracking-[-0.045em] text-black">
            {product.detailHeading}
          </h2>
          <div className="mt-[10px] flex items-center gap-2 text-[#8d8d8d]">
            <Icon name="star" className="h-[14px] w-[14px] fill-[#f15a50] text-[#f15a50]" />
            <span className="text-[14px] font-semibold">
              {product.rating.toFixed(1)} ({product.reviewCount} review)
            </span>
          </div>

          <dl className="mt-[22px] space-y-[28px]">
            <div>
              <dt className="text-[19px] font-semibold text-[#818181]">Price</dt>
              <dd className="mt-[2px] text-[24px] font-bold tracking-[-0.03em] text-black">
                ${product.price.toFixed(2)}
              </dd>
            </div>
            <div>
              <dt className="text-[19px] font-semibold text-[#818181]">Calories</dt>
              <dd className="mt-[2px] text-[24px] font-bold tracking-[-0.03em] text-black">{product.calories}</dd>
            </div>
            <div>
              <dt className="text-[19px] font-semibold text-[#818181]">Diameter</dt>
              <dd className="mt-[2px] text-[24px] font-bold tracking-[-0.03em] text-black">{product.diameter}</dd>
            </div>
          </dl>
        </div>

        <ReferenceArt
          src={product.detailImage}
          alt={product.name}
          className={product.detailContainerClassName}
          imageClassName={product.detailImageClassName}
          rounded={product.detailRoundedClassName ?? "rounded-[34px]"}
          sizes="360px"
          priority
        />
      </div>

      <div className="mt-[10px] flex max-w-[122px] items-center justify-between">
        <button
          type="button"
          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-white transition active:scale-95"
        >
          <Icon name="minus" className="h-5 w-5" />
        </button>
        <span className="text-[31px] font-semibold tracking-[-0.04em] text-black">
          {String(quantity).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => setQuantity((value) => value + 1)}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-white transition active:scale-95"
        >
          <Icon name="plus" className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-[20px] font-semibold text-[#818181]">Size</h3>
        <div className="mt-[18px] flex gap-3">
          {product.sizes.map((option) => {
            const isActive = option === size;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                className={`h-[38px] min-w-[108px] rounded-full px-6 text-[18px] font-bold tracking-[-0.03em] transition active:scale-[0.98] ${
                  isActive ? "bg-[#f48a82] text-black" : "bg-[#eee6e6] text-black"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-[18px] leading-[1.16] tracking-[-0.03em] text-black">
        {product.description}
        <button type="button" className="font-bold">
          more_
        </button>
      </p>

      <button
        type="button"
        onClick={() => addItem(product, size, quantity)}
        className="shadow-button mt-8 w-full rounded-[28px] bg-primary px-6 py-[18px] text-[22px] font-bold tracking-[-0.02em] text-white transition active:scale-[0.99]"
      >
        Add to Cart
      </button>

      <div className="mt-3 text-center text-[13px] font-medium text-[#7d7d7d]">{cartCount} item(s) in cart</div>

      <div className="mx-auto mt-5 h-[5px] w-[156px] rounded-full bg-black/45" />
    </section>
  );
}
