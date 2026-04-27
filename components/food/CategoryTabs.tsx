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
    <div className="scrollbar-hidden mt-10 overflow-x-auto pl-6">
      <div className="flex min-w-max gap-5 pr-6">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const icon = categoryIcons[category];

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`relative flex h-[54px] min-w-[172px] items-center rounded-full pl-[11px] pr-7 shadow-[0_8px_18px_rgba(65,34,32,0.06)] transition active:scale-[0.98] ${
                isActive ? "bg-[#f1b0ab]" : "bg-[#beb4b4]"
              }`}
            >
              <span className="absolute left-[6px] top-1/2 h-[42px] w-[42px] -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-[#efb1ab]/50 bg-white">
                <Image src={icon.src} alt={category} fill sizes="42px" className={icon.imageClassName} />
              </span>
              <span className="pl-[66px] text-[18px] font-bold tracking-[-0.03em] text-white">{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
