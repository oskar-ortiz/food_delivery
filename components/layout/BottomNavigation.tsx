import { Icon } from "@/components/ui/Icon";

const items = [
  { key: "home", icon: "home", active: true },
  { key: "heart", icon: "heart", active: false },
  { key: "trash", icon: "trash", active: false },
  { key: "bell", icon: "bell", active: false },
] as const;

export function BottomNavigation() {
  return (
    <nav className="absolute bottom-0 left-0 right-0 border-t border-[#efe7e6] bg-[#f8f0ef]/97 px-8 pb-8 pt-3 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            aria-label={item.key}
            className={`flex h-[54px] w-[54px] items-center justify-center rounded-full transition active:scale-95 ${
              item.active ? "bg-primary text-white" : "text-[#2f2b2b]"
            }`}
          >
            <Icon name={item.icon} className="h-[25px] w-[25px]" />
          </button>
        ))}
      </div>
    </nav>
  );
}
