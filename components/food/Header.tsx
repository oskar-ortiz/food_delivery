import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1610871921824-3d5867e992dd?w=160&h=160&fit=crop&q=85"
          alt="Profile avatar"
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-1 items-center justify-center gap-1.5 text-black">
        <Icon name="pin" className="h-5 w-5" />
        <span className="text-[18px] font-semibold tracking-[-0.02em]">Canada</span>
        <Icon name="chevron-down" className="h-5 w-5" />
      </div>

      <button
        type="button"
        aria-label="Open menu"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm transition active:scale-95"
      >
        <Icon name="menu" className="h-6 w-6" />
      </button>
    </header>
  );
}
