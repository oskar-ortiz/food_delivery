import Image from "next/image";
import { categoryIcons } from "@/lib/products";

type CategoryTabsProps<TCategory extends keyof typeof categoryIcons> = {
  categories: readonly TCategory[];
  activeCategory: TCategory;
  onSelect: (category: TCategory) => void;
};

export function CategoryTabs<TCategory extends keyof typeof categoryIcons>({
  categories,
  activeCategory,
  onSelect,
}: CategoryTabsProps<TCategory>) {
  return (
    <div className="scrollbar-hidden mt-5 overflow-x-auto px-5">
      <div className="flex min-w-max gap-3 pr-5">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const icon = categoryIcons[category];

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`relative flex h-12 min-w-[170px] items-center rounded-full pl-[11px] pr-6 shadow-[0_8px_18px_rgba(65,34,32,0.06)] transition active:scale-[0.98] ${
                isActive ? "bg-[#f3a9a0]" : "bg-gray-200"
              }`}
            >
              <span className="absolute left-[6px] top-1/2 h-9 w-9 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white bg-white">
                <Image src={icon.src} alt={category} fill sizes="42px" className={icon.imageClassName} />
              </span>
              <span className={`pl-[54px] text-[18px] font-bold tracking-[-0.03em] ${isActive ? "text-white" : "text-gray-600"}`}>
                {category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
