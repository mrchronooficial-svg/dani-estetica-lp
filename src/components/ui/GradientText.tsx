import { ReactNode } from "react";

const variants = {
  primary: "from-primary to-accent",
  accent: "from-accent to-cta",
  cta: "from-cta to-accent",
} as const;

interface GradientTextProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export default function GradientText({
  children,
  variant = "primary",
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r ${variants[variant]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
