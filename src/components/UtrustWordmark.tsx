interface Props {
  variant?: "dark" | "white" | "terracotta" | "emerald";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function UtrustWordmark({
  variant = "dark",
  className = "",
  size = "md",
}: Props) {
  const colorClass =
    variant === "white"
      ? "text-white"
      : variant === "terracotta"
      ? "text-[#d46f24]"
      : variant === "emerald"
      ? "text-emerald-700"
      : "text-slate-950";

  const sizeClass =
    size === "sm"
      ? "text-xl"
      : size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "xl"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-2xl";

  return (
    <span
      className={`font-brand font-bold tracking-normal inline-block select-none ${colorClass} ${sizeClass} ${className}`}
    >
      Utrust
    </span>
  );
}
