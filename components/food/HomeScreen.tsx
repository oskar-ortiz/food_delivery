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
    <section className="app-gradient relative min-h-screen overflow-hidden pb-[112px] md:min-h-[844px]">
      <div className="px-6 pt-8">
        <Header />

        <h1 className="text-soft-shadow mt-[54px] max-w-[332px] text-[35px] font-extrabold leading-[1.13] tracking-[-0.045em] text-black">
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

      <div className="px-6 pt-[38px]">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold tracking-[-0.03em] text-black">Popular Food</h2>
          <button type="button" className="text-[15px] font-medium text-black">
            See all
          </button>
        </div>

        <div className="scrollbar-hidden mt-8 flex gap-4 overflow-x-auto pb-6">
          {filteredProducts.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </section>
  );
}
