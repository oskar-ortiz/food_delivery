import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[6px] text-[18px] font-semibold tracking-[-0.03em] text-black">
          <Icon name="pin" className="h-5 w-5" />
          <span>Canada</span>
          <Icon name="chevron-down" className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-white shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&crop=faces"
            alt="Profile avatar"
            width={40}
            height={40}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/65 shadow-[0_14px_30px_rgba(104,54,48,0.12)] backdrop-blur-sm transition active:scale-95"
        >
          <Icon name="menu" className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}
