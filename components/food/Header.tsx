import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-black">
        <div className="flex items-center gap-2 text-[18px] font-medium tracking-[-0.02em]">
          <Icon name="pin" className="h-5 w-5" />
          <span>Canada</span>
          <Icon name="chevron-down" className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
          <Image
            src="https://source.unsplash.com/QePKR_mL9oo/120x120"
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
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 transition active:scale-95"
        >
          <Icon name="menu" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
