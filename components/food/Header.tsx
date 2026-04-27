import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-[50px]">
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-[3px] border-white/80 shadow-[0_12px_24px_rgba(104,54,48,0.12)]">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile avatar"
            width={60}
            height={60}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="flex items-center gap-[6px] text-[18px] font-semibold tracking-[-0.03em] text-black">
          <Icon name="pin" className="h-5 w-5" />
          <span>Canada</span>
          <Icon name="chevron-down" className="h-5 w-5" />
        </div>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/65 shadow-[0_14px_30px_rgba(104,54,48,0.12)] backdrop-blur-sm transition active:scale-95"
      >
        <Icon name="menu" className="h-7 w-7" />
      </button>
    </header>
  );
}
