import { Icon } from "@/components/ui/Icon";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mt-[34px] flex h-[60px] items-center rounded-[22px] bg-white pl-[14px] pr-[5px] shadow-[0_12px_22px_rgba(110,70,65,0.16)]">
      <Icon name="search" className="h-[31px] w-[31px] text-[#a9a9a9]" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search your food"
        className="ml-[9px] flex-1 bg-transparent text-[15px] font-medium tracking-[-0.02em] text-[#6f6f6f] outline-none placeholder:text-[#b5b5b5]"
      />
      <button
        type="button"
        aria-label="Open filters"
        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f06d63] transition active:scale-95"
      >
        <Icon name="sliders" className="h-[21px] w-[21px] text-white" />
      </button>
    </div>
  );
}
