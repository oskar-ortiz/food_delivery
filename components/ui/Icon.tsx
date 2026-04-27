type IconName =
  | "arrow-left"
  | "bell"
  | "chevron-down"
  | "chevron-right"
  | "heart"
  | "heart-fill"
  | "home"
  | "menu"
  | "minus"
  | "pin"
  | "plus"
  | "search"
  | "sliders"
  | "star"
  | "trash";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const commonProps = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "arrow-left":
      return (
        <svg {...commonProps}>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      );
    case "bell":
      return (
        <svg {...commonProps}>
          <path d="M15 18H9" />
          <path d="M18 16V11a6 6 0 1 0-12 0v5l-2 2h16z" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...commonProps}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...commonProps}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "heart":
      return (
        <svg {...commonProps}>
          <path d="m12 20-1.35-1.23C5.4 14 2 10.92 2 7.15 2 4.08 4.42 2 7.3 2c1.64 0 3.2.8 4.2 2.06A5.4 5.4 0 0 1 15.7 2C18.58 2 21 4.08 21 7.15c0 3.77-3.4 6.85-8.65 11.62z" />
        </svg>
      );
    case "heart-fill":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.05 6.05 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...commonProps}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "minus":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
        </svg>
      );
    case "pin":
      return (
        <svg {...commonProps}>
          <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "plus":
      return (
        <svg {...commonProps}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "sliders":
      return (
        <svg {...commonProps}>
          <path d="M4 7h16" />
          <path d="M4 17h16" />
          <path d="M9 7a2 2 0 1 0 0 .01" />
          <path d="M15 17a2 2 0 1 0 0 .01" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="m12 3.6 2.73 5.54 6.12.89-4.42 4.31 1.04 6.09L12 17.56l-5.47 2.87 1.04-6.09L3.15 10l6.12-.89z" />
        </svg>
      );
    case "trash":
      return (
        <svg {...commonProps}>
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M7 6v14h10V6" />
          <path d="M10 10v6" />
          <path d="M14 10v6" />
        </svg>
      );
    default:
      return null;
  }
}
