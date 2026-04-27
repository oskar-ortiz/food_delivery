"use client";

import { useMemo, useState } from "react";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { CategoryTabs } from "@/components/food/CategoryTabs";
import { FoodCard } from "@/components/food/FoodCard";
import { Header } from "@/components/food/Header";
import { SearchBar } from "@/components/food/SearchBar";
import { productCategories, products } from "@/lib/products";

export function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<(typeof productCategories)[number]>("Biryani");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="relative mx-auto min-h-screen max-w-[390px] overflow-hidden bg-gradient-to-b from-[#e7c2b8] to-[#f5e6e1] px-5 pb-6 pt-6">
      <div>
        <Header />

        <h1 className="mt-6 max-w-[332px] text-3xl font-extrabold leading-tight text-black drop-shadow-md">
          Ready to order your
          <br />
          favourite food ?
        </h1>

        <SearchBar value={search} onChange={setSearch} />
      </div>

      <CategoryTabs
        categories={productCategories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold tracking-[-0.03em] text-black">Popular Food</h2>
          <button type="button" className="text-sm font-medium text-black">
            See all
          </button>
        </div>

        <div className="scrollbar-hidden mt-5 flex gap-4 overflow-x-auto pb-24">
          {filteredProducts.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </section>
  );
}
