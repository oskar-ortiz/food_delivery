import { Icon } from "@/components/ui/Icon";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mt-5 flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-md">
      <div className="flex items-center">
        <Icon name="search" className="h-8 w-8 text-[#a9a9a9]" />
      </div>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search your food"
        className="ml-2 flex-1 bg-transparent text-[15px] font-medium tracking-[-0.02em] text-[#6f6f6f] outline-none placeholder:text-gray-400"
      />
      <button
        type="button"
        aria-label="Open filters"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 transition active:scale-95"
      >
        <Icon name="sliders" className="h-[21px] w-[21px] text-white" />
      </button>
    </div>
  );
}
