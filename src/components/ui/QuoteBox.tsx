import { ReactNode } from "react";

const variants = {
  primary: "border-l-primary bg-primary/5",
  accent: "border-l-accent bg-accent/5",
  cta: "border-l-cta bg-cta/5",
} as const;

interface QuoteBoxProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export default function QuoteBox({
  children,
  variant = "primary",
  className = "",
}: QuoteBoxProps) {
  return (
    <blockquote
      className={`border-l-4 ${variants[variant]} rounded-r-xl pl-4 pr-4 py-4 ${className}`}
    >
      {children}
    </blockquote>
  );
}
