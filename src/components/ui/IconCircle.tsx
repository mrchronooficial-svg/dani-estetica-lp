import { LucideIcon } from "lucide-react";

const colorVariants = {
  primary: "bg-primary/15 text-primary",
  accent: "bg-accent/15 text-accent",
  cta: "bg-cta/15 text-cta",
} as const;

const sizeVariants = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
} as const;

const iconSizes = {
  sm: 14,
  md: 18,
  lg: 22,
} as const;

interface IconCircleProps {
  icon: LucideIcon;
  variant?: keyof typeof colorVariants;
  size?: keyof typeof sizeVariants;
  className?: string;
}

export default function IconCircle({
  icon: Icon,
  variant = "primary",
  size = "md",
  className = "",
}: IconCircleProps) {
  return (
    <div
      className={`${sizeVariants[size]} ${colorVariants[variant]} rounded-full flex items-center justify-center shrink-0 ${className}`}
    >
      <Icon size={iconSizes[size]} strokeWidth={2.5} />
    </div>
  );
}
